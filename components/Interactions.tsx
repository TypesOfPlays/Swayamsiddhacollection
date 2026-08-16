"use client";

import { useEffect } from "react";

/**
 * Desktop-only pointer behaviour: buttons and chips lean toward the pointer
 * as it approaches, and settle back when it leaves.
 *
 * Gated on a real fine pointer, so it never runs on the phones most of this
 * centre's patients arrive on — no wasted listeners on a low-end device.
 */
export function Interactions() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>(".btn, .chip")
    );
    if (!magnets.length) return;

    let raf = 0;
    let mx = 0;
    let my = 0;

    const apply = () => {
      raf = 0;
      for (const el of magnets) {
        const r = el.getBoundingClientRect();
        // Skip anything off-screen; there are 11 chips alone.
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const range = Math.max(r.width, r.height) * 0.85 + 40;
        const dist = Math.hypot(dx, dy);
        if (dist < range) {
          const pull = (1 - dist / range) * 0.3;
          el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
          el.classList.add("is-magnet");
        } else if (el.classList.contains("is-magnet")) {
          el.style.transform = "";
          el.classList.remove("is-magnet");
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      magnets.forEach((el) => {
        el.style.transform = "";
        el.classList.remove("is-magnet");
      });
    };
  }, []);

  return null;
}
