"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { MAP_HREF } from "./Visit";
import { Mandala } from "./Mandala";

/**
 * The footer sits UNDER the page, not after it.
 *
 * It is fixed to the bottom of the viewport at a lower layer, and `main`
 * carries a bottom padding the height of it. Scrolling to the end slides the
 * page away like a door and uncovers a footer that was there the whole time,
 * rather than one that arrives. Its contents drift up and settle as the
 * reveal completes, so the uncovering has depth instead of being a flat wipe.
 *
 * Height is measured and published as a custom property, because the padding
 * that reserves its space has to match it exactly or the page ends on a gap.
 */
export function SiteFooter() {
  const el = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foot = el.current;
    const box = inner.current;
    if (!foot || !box) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const publishHeight = () => {
      document.documentElement.style.setProperty(
        "--footer-h",
        `${foot.offsetHeight}px`
      );
    };

    const frame = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const h = foot.offsetHeight || 1;
      // 0 while the page still covers it, 1 once it is fully uncovered.
      const revealed = Math.min(1, Math.max(0, (window.scrollY - (max - h)) / h));
      box.style.setProperty("--reveal", revealed.toFixed(3));
    };

    const onScroll = () => {
      if (reduced.matches) return;
      if (!raf) raf = requestAnimationFrame(frame);
    };

    publishHeight();
    frame();

    const ro = new ResizeObserver(() => {
      publishHeight();
      frame();
    });
    ro.observe(foot);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", publishHeight);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", publishHeight);
      document.documentElement.style.removeProperty("--footer-h");
    };
  }, []);

  return (
    <footer className="footer on-bone" ref={el}>
      <div className="footer__inner wrap" ref={inner}>
        <div className="footer__brand">
          <Mandala size={52} className="footer__logo" />
          <div>
            <p className="footer__name">{SITE.brandFull}</p>
            <p className="spec spec-bone footer__sub">
              {SITE.surface} &middot; {SITE.centre.street}
            </p>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <p className="spec spec-bone footer__col-head">This centre</p>
            <p>{SITE.centre.street}</p>
            <p>
              {SITE.centre.town}, {SITE.centre.state}
            </p>
            <a
              className="footer__link"
              href={MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>

          <div className="footer__col">
            <p className="spec spec-bone footer__col-head">Main laboratory</p>
            <p>{SITE.mainLab.street}</p>
            <p>
              {SITE.mainLab.town}, {SITE.mainLab.state}
            </p>
            <a
              className="footer__link"
              href={SITE.mainLab.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.mainLab.websiteLabel}
            </a>
          </div>

          <div className="footer__col">
            <p className="spec spec-bone footer__col-head">Contact</p>
            <a className="footer__link" href={SITE.phone.href}>
              {SITE.phone.display91}
            </a>
            <a
              className="footer__link"
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="footer__link" href={SITE.email.href}>
              {SITE.email.address}
            </a>
          </div>
        </div>

        <div className="footer__base">
          <p className="spec spec-bone">
            &copy; {new Date().getFullYear()} {SITE.brandFull}
          </p>
          <p className="spec spec-bone footer__disclaimer">
            Samples collected at {SITE.centre.street} are tested at{" "}
            {SITE.mainLab.street}. Digital X-ray and ECG are available at the
            main laboratory only.
          </p>
        </div>
      </div>
    </footer>
  );
}
