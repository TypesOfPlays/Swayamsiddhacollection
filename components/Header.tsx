import { SITE } from "@/lib/site";
import { Mandala } from "./Mandala";
import { IconArrowRight, IconPhone } from "./Icons";

export function Header() {
  return (
    <header className="site-head wrap">
      <a className="lockup" href="#top" aria-label={`${SITE.brandFull}, ${SITE.surface}`}>
        <Mandala size={40} className="lockup__mark" />
        <span className="lockup__text">
          <span className="lockup__name">{SITE.brand}</span>
          <span className="spec lockup__sub">Collection Centre</span>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        <a className="spec site-nav__link" href="#tests">
          Tests
        </a>
        <a className="spec site-nav__link" href="#visit">
          Visit
        </a>
        <a
          className="spec site-nav__link site-nav__link--out"
          href={SITE.mainLab.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Main lab
          <IconArrowRight size={13} />
        </a>
        <a className="btn btn-primary site-nav__call" href={SITE.phone.href}>
          <IconPhone size={16} />
          {SITE.phone.display}
        </a>
      </nav>
    </header>
  );
}
