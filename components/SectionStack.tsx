"use client";

import { useEffect } from "react";

/**
 * Section stacking: each section holds while the next rides up and covers it.
 *
 * The offset has to be measured, not guessed. A section pinned at `top: 0`
 * that is taller than the viewport would freeze with its lower half below the
 * fold and unreachable — on this page that would bury most of the 73-test
 * catalogue. So each section sticks at `min(0, viewportHeight - sectionHeight)`:
 * a short section pins at the top, and a tall one scrolls all the way through
 * first and only pins once its LAST screen is showing. Either way the next
 * section slides over a held one, and nothing is ever trapped.
 *
 * Applied inline because the value is per-section and measured; the sections
 * each carry their own `position: relative` in CSS, which an element-level
 * rule could not override anyway.
 */
export function SectionStack() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const main = document.querySelector("main");
    if (!main) return;

    const sections = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > section, :scope > footer")
    ).filter(
      // The four-moves track runs its own pin; stacking it too would fight it.
      (s) => !s.classList.contains("ritual")
    );

    const clear = () => {
      for (const s of sections) {
        s.style.position = "";
        s.style.top = "";
        s.style.zIndex = "";
      }
      document.documentElement.classList.remove("has-stack");
    };

    const apply = () => {
      if (reduced.matches) return clear();
      const vh = window.innerHeight;
      sections.forEach((s, i) => {
        const h = s.offsetHeight;
        s.style.position = "sticky";
        s.style.top = `${Math.min(0, vh - h)}px`;
        // Later sections must paint over earlier ones for the cover to read.
        s.style.zIndex = String(i + 1);
      });
      document.documentElement.classList.add("has-stack");
    };

    apply();

    // Heights change with fonts, images and breakpoints.
    let t = 0;
    const debounced = () => {
      window.clearTimeout(t);
      t = window.setTimeout(apply, 150);
    };
    window.addEventListener("resize", debounced);
    reduced.addEventListener("change", apply);
    const ro = new ResizeObserver(debounced);
    sections.forEach((s) => ro.observe(s));
    document.fonts?.ready.then(apply);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", debounced);
      reduced.removeEventListener("change", apply);
      ro.disconnect();
      clear();
    };
  }, []);

  return null;
}
