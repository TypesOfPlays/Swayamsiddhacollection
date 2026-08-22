"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ *
 * Shared observer. One instance for the whole page rather than one per
 * component — with this much revealing, per-component observers add up.
 * ------------------------------------------------------------------ */

let io: IntersectionObserver | null = null;
const seen = new WeakSet<Element>();

function observer() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          const el = e.target;
          el.classList.add("is-in");
          // The rise needs its box clipped; the finished headline must not be,
          // or Anton loses the tops and bottoms of its caps and the lines
          // stop overlapping. Un-clip once the stagger has played out.
          window.setTimeout(() => el.classList.add("is-done"), 1500);
          io?.unobserve(el);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );
  return io;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in", "is-done");
      return;
    }
    observer().observe(el);
    return () => io?.unobserve(el);
  }, []);
  return ref;
}

/* ------------------------------------------------------------------ *
 * Reveal — a block that rises into place.
 * Content is visible by default in CSS; the class only adds the motion,
 * so a failed script never hides anything.
 * ------------------------------------------------------------------ */

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  variant?: "up" | "fade" | "rule" | "scale" | "none";
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  as = "div",
  variant = "up",
  delay = 0,
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `rv rv--${variant} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}

/* ------------------------------------------------------------------ *
 * RevealLines — a display headline that arrives word by word.
 * Each line is its own overflow-clipped row, so words rise from behind
 * their own baseline rather than floating in from nowhere.
 * ------------------------------------------------------------------ */

export function RevealLines({
  lines,
  className = "",
  as = "h2",
  emphasis,
}: {
  lines: string[];
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  /** Index of the line painted in the accent colour. */
  emphasis?: number;
}) {
  const ref = useReveal<HTMLElement>();
  let n = 0;

  return createElement(
    as,
    { ref, className: `rvl ${className}`.trim() },
    lines.map((line, li) => (
      <span
        className={`rvl__line${emphasis === li ? " rvl__line--em" : ""}`}
        key={li}
      >
        {line.split(" ").map((word, wi) => (
          <span className="rvl__word" key={wi}>
            <span
              className="rvl__inner"
              style={{ transitionDelay: `${n++ * 55}ms` }}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    ))
  );
}

/* ------------------------------------------------------------------ *
 * Vertical drift — one shared rAF loop drives every registered element.
 * Elements are only written to when their value actually changes.
 * ------------------------------------------------------------------ */

type PItem = { el: HTMLElement; depth: number; last: number };
const items: PItem[] = [];
let raf = 0;

function loop() {
  const vh = window.innerHeight;
  for (const it of items) {
    const r = it.el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) continue;
    // -1..1 across the viewport, 0 at centre.
    const p = (r.top + r.height / 2 - vh / 2) / vh;
    const y = Math.round(p * it.depth * -100) / 100;
    if (y !== it.last) {
      it.last = y;
      it.el.style.setProperty("--py", `${y}px`);
    }
  }
  raf = requestAnimationFrame(loop);
}

function register(el: HTMLElement, depth: number) {
  const it: PItem = { el, depth, last: NaN };
  items.push(it);
  if (!raf) raf = requestAnimationFrame(loop);
  return () => {
    const i = items.indexOf(it);
    if (i > -1) items.splice(i, 1);
    if (!items.length && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

/** Widest rung the custody photographs ship at. */
const FULL_W = 1400;

/* ------------------------------------------------------------------ *
 * RevealImage — a framed photograph that wipes open as it arrives, with
 * the picture inside drifting against the frame.
 *
 * The frame clips with `clip-path: inset(100% 0 0)` and opens to
 * `inset(0 0 0)`; the image is taller than its frame so it can travel
 * without ever exposing an edge. Two separate motions on two separate
 * elements — the wipe belongs to the frame, the drift to the picture.
 * ------------------------------------------------------------------ */

export function RevealImage({
  src,
  alt = "",
  depth = 0.14,
  className = "",
  priority = false,
  widths,
  sizes = "(max-width: 900px) 90vw, 47vw",
}: {
  src: string;
  alt?: string;
  depth?: number;
  className?: string;
  priority?: boolean;
  /** Extra rungs available beside the full-size file, e.g. [700, 1000]. */
  widths?: { w: number; src: string }[];
  sizes?: string;
}) {
  const frame = useReveal<HTMLDivElement>();
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = img.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return register(el, depth);
  }, [depth]);

  // The observed element must NOT be the clipped one. A `clip-path` that hides
  // an element also zeroes its intersection rectangle, so IntersectionObserver
  // reports it as off-screen forever and the reveal can never fire. The outer
  // frame carries the layout and is watched; the inner box does the clipping.
  return (
    <div className={`shot-frame ${className}`.trim()} ref={frame}>
      <div className="shot">
        <img
          ref={img}
          src={src}
          srcSet={
            widths?.length
              ? [
                  ...widths.map((v) => v.src + " " + v.w + "w"),
                  src + " " + FULL_W + "w",
                ].join(", ")
              : undefined
          }
          sizes={widths?.length ? sizes : undefined}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Counter — counts up once, when it first enters view.
 * ------------------------------------------------------------------ */

export function Counter({
  to,
  suffix = "",
  duration = 1100,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        let r = 0;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setN(Math.round((1 - Math.pow(1 - t, 3)) * to));
          if (t < 1) r = requestAnimationFrame(tick);
        };
        r = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(r);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="counter">
      {n}
      {suffix}
    </span>
  );
}
