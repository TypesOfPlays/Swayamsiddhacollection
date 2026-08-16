"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { TOTAL_TESTS } from "@/lib/tests";

const WORDMARK = "SWAYAMSIDDHA".split("");

/** Panels finish splitting at 2450ms. */
const DONE_AT = 2500;
const COUNT_FROM = 1300;
const COUNT_FOR = 600;

/**
 * The opening sequence.
 *
 * The petal ring sweeps in around the circle, the crown lands in the middle,
 * then the name, the address and the test count — and the screen splits apart.
 *
 * The petals and crown are separate mask layers cut from the real logo
 * (`public/logo-petals.png`, `public/logo-crown.png`), so the ring can arrive
 * on its own without redrawing the mark.
 *
 * A deliberate tap or key press skips it; reduced-motion collapses it to
 * nothing.
 */
export function Boot() {
  const [phase, setPhase] = useState<"run" | "out" | "gone">("run");
  const [count, setCount] = useState(0);
  const skipped = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setCount(TOTAL_TESTS);
      setPhase("gone");
      return;
    }

    let toOut = window.setTimeout(() => setPhase("out"), DONE_AT - 600);
    let toGone = window.setTimeout(() => setPhase("gone"), DONE_AT);

    const skip = () => {
      if (skipped.current) return;
      skipped.current = true;
      window.clearTimeout(toOut);
      window.clearTimeout(toGone);
      setCount(TOTAL_TESTS);
      setPhase("out");
      toGone = window.setTimeout(() => setPhase("gone"), 600);
    };

    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);

    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.clearTimeout(toOut);
      window.clearTimeout(toGone);
    };
  }, []);

  useEffect(() => {
    if (skipped.current) return;
    let raf = 0;
    const start = performance.now() + COUNT_FROM;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / COUNT_FOR));
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * TOTAL_TESTS));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase === "gone") {
      document.documentElement.classList.remove("is-booting");
    } else {
      document.documentElement.classList.add("is-booting");
    }
    return () => document.documentElement.classList.remove("is-booting");
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`boot${phase === "out" ? " is-out" : ""}`}
      role="status"
      aria-label="Loading Swayamsiddha Diagnostics"
    >
      <span className="boot__panel boot__panel--top" aria-hidden />
      <span className="boot__panel boot__panel--bottom" aria-hidden />

      <div className="boot__stage">
        <span className="boot__mark" aria-hidden>
          <span className="boot__petals" />
          <span className="boot__crown" />
        </span>

        <h1 className="boot__name" aria-label={SITE.brand}>
          {WORDMARK.map((ch, i) => (
            <span
              key={i}
              className="boot__letter"
              style={{ animationDelay: `${900 + i * 38}ms` }}
              aria-hidden
            >
              {ch}
            </span>
          ))}
        </h1>

        <p className="spec boot__sub">
          Collection Centre &middot; {SITE.centre.street}
        </p>

        <p className="boot__count spec" aria-hidden>
          <span className="boot__count-n">{count}</span> tests collected here
        </p>
      </div>
    </div>
  );
}
