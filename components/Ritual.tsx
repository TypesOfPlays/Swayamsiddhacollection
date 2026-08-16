"use client";

import { useEffect, useRef, useState } from "react";
import { RITUAL } from "@/lib/site";
import { RevealLines } from "./Motion";

/**
 * The patient's four moves.
 *
 * On desktop the section pins and the four moves travel sideways as you
 * scroll — the order is the information, so moving through them literally
 * beats stacking them. Below 900px, and under reduced-motion, it falls back
 * to an ordinary vertical list: nothing is trapped behind the effect.
 */
export function Ritual() {
  const secRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let raf = 0;
    let active = false;

    const measure = () => {
      const sec = secRef.current;
      const track = trackRef.current;
      if (!sec || !track) return;
      const travel = Math.max(0, track.scrollWidth - window.innerWidth);
      // Scroll distance is stretched well past the horizontal travel so the
      // four moves drift by at a readable pace. At 1:1 the whole sequence is
      // over in barely half a screen of scrolling and reads as a glitch.
      sec.style.setProperty("--travel", `${travel}px`);
      sec.style.height = `${travel * 2.1 + window.innerHeight}px`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const sec = secRef.current;
        const track = trackRef.current;
        if (!sec || !track) return;
        const r = sec.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
        setProgress(p);
        const travel = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.transform = `translate3d(${-p * travel}px, 0, 0)`;
      });
    };

    const enable = () => {
      if (active) return;
      active = true;
      // The class goes on imperatively FIRST. Waiting for React to paint it
      // means measuring a track that is still laid out vertically, which
      // reports no horizontal travel and collapses the pin to nothing.
      secRef.current?.classList.add("is-pinned");
      setPinned(true);
      measure();
      onScroll();
      // Re-measure once webfonts land, since Anton changes the track width.
      document.fonts?.ready.then(() => {
        measure();
        onScroll();
      });
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", measure);
    };

    const disable = () => {
      if (!active) return;
      active = false;
      secRef.current?.classList.remove("is-pinned");
      setPinned(false);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      const sec = secRef.current;
      const track = trackRef.current;
      if (sec) sec.style.height = "";
      if (track) track.style.transform = "";
    };

    const decide = () => (mq.matches && !reduced.matches ? enable() : disable());
    decide();
    mq.addEventListener("change", decide);
    reduced.addEventListener("change", decide);

    return () => {
      disable();
      mq.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const current = Math.min(
    RITUAL.length - 1,
    Math.floor(progress * RITUAL.length + 0.0001)
  );

  return (
    <section
      className={`ritual on-ink-2${pinned ? " is-pinned" : ""}`}
      id="ritual"
      ref={secRef}
    >
      <div className="ritual__vp">
        <div className="wrap ritual__head-wrap">
          <RevealLines
            as="h2"
            className="display d-xl ritual__head"
            lines={["Four moves,", "start to report."]}
            emphasis={1}
          />
          <p className="spec spec-green ritual__head-spec">
            {pinned ? (
              <>
                Move {String(current + 1).padStart(2, "0")} of{" "}
                {String(RITUAL.length).padStart(2, "0")} &middot; keep scrolling
              </>
            ) : (
              <>01 &ndash; 04 &middot; in order</>
            )}
          </p>
          {pinned && (
            <span className="ritual__bar" aria-hidden>
              <span
                className="ritual__bar-fill"
                style={{ transform: `scaleX(${progress})` }}
              />
            </span>
          )}
        </div>

        <ol className="ritual__track" ref={trackRef}>
          {RITUAL.map((step, i) => (
            <li
              className={`ritual__item${i === current ? " is-current" : ""}`}
              key={step.key}
            >
              <div className="ritual__index">
                <span className="spec ritual__num">{step.index}</span>
                <span className="spec ritual__key">{step.key}</span>
              </div>
              <div className="ritual__body">
                <h3 className="display d-lg">
                  {step.title[0]}
                  <br />
                  {step.title[1]}
                </h3>
                <p className="body ritual__text">{step.body}</p>
                <p className="spec spec-ink ritual__spec">{step.spec}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
