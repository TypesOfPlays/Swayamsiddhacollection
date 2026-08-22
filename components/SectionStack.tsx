"use client";

import { useEffect } from "react";

/**
 * Section stacking: each section holds while the next rides up and covers it,
 * and the held one recedes out of focus as it goes under.
 *
 * THE PIN
 * The offset has to be measured, not guessed. A section pinned at `top: 0`
 * that is taller than the viewport would freeze with its lower half below the
 * fold and unreachable — on this page that would bury most of the 73-test
 * catalogue. So each section sticks at `min(0, viewportHeight - sectionHeight)`:
 * a short section pins at the top, a tall one scrolls all the way through and
 * pins only once its last screen is showing. Nothing is ever trapped.
 *
 * THE FOCUS PULL
 * Sticky alone is a hard cut — the section simply stops. What sells the cover
 * as depth is the held section dimming and blurring as the next slides over
 * it, plus a little extra blur while the scroll is actually moving. Filter
 * only: scaling the held section would inset its edges and show strips of the
 * page behind it.
 */
export function SectionStack() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const main = document.querySelector("main");
    if (!main) return;

    const sections = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > section, :scope > footer")
    ).filter((s) => !s.classList.contains("ritual"));

    /**
     * Blurring a full-viewport element repaints a large layer every frame.
     * On a low-core, low-memory phone — which is most of this centre's
     * traffic — that is the difference between smooth and stuttering, so
     * those devices keep the dim and skip the blur.
     */
    const nav = navigator as Navigator & { deviceMemory?: number };
    const canBlur =
      (nav.hardwareConcurrency ?? 4) > 4 && (nav.deviceMemory ?? 4) > 4;

    const MAX_COVER_BLUR = canBlur ? 5 : 0;
    const MAX_SPEED_BLUR = canBlur ? 2.5 : 0;
    const MAX_DIM = 0.4;

    const clear = () => {
      for (const s of sections) {
        s.style.position = "";
        s.style.top = "";
        s.style.zIndex = "";
        s.style.filter = "";
        s.style.willChange = "";
      }
      document.documentElement.classList.remove("has-stack");
    };

    const measure = () => {
      const vh = window.innerHeight;
      sections.forEach((s, i) => {
        s.style.position = "sticky";
        s.style.top = `${Math.min(0, vh - s.offsetHeight)}px`;
        s.style.zIndex = String(i + 1);
      });
      document.documentElement.classList.add("has-stack");
    };

    let raf = 0;
    let lastY = window.scrollY;
    let speed = 0;
    let idle = 0;
    const applied = new WeakMap<HTMLElement, string>();

    const frame = () => {
      const y = window.scrollY;
      const dy = Math.abs(y - lastY);
      lastY = y;
      // Ease the speed term so the smear fades instead of snapping off.
      speed += (Math.min(dy, 120) - speed) * 0.25;

      const vh = window.innerHeight;
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        const next = sections[i + 1];
        const r = s.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;

        // How far the next section has ridden over this one, 0..1.
        let cover = 0;
        if (next) {
          const nr = next.getBoundingClientRect();
          cover = Math.min(1, Math.max(0, (vh - nr.top) / vh));
        }

        const blur =
          cover > 0.001
            ? Math.min(
                MAX_COVER_BLUR + MAX_SPEED_BLUR,
                cover * MAX_COVER_BLUR + (speed / 120) * MAX_SPEED_BLUR * cover
              )
            : 0;
        const dim = 1 - cover * MAX_DIM;

        const next_ =
          cover < 0.001
            ? ""
            : `brightness(${dim.toFixed(3)}) blur(${blur.toFixed(2)}px)`;

        if (applied.get(s) !== next_) {
          applied.set(s, next_);
          s.style.filter = next_;
          s.style.willChange = next_ ? "filter" : "";
        }
      }

      // Stop the loop once the page has been still for a moment.
      idle = dy < 0.5 ? idle + 1 : 0;
      if (idle > 30) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      idle = 0;
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const apply = () => {
      if (reduced.matches) return clear();
      measure();
      kick();
    };

    apply();

    let t = 0;
    const debounced = () => {
      window.clearTimeout(t);
      t = window.setTimeout(apply, 150);
    };
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", debounced);
    reduced.addEventListener("change", apply);
    const ro = new ResizeObserver(debounced);
    sections.forEach((s) => ro.observe(s));
    document.fonts?.ready.then(apply);

    return () => {
      window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", debounced);
      reduced.removeEventListener("change", apply);
      ro.disconnect();
      clear();
    };
  }, []);

  return null;
}
