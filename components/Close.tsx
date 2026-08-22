import { SITE } from "@/lib/site";
import { TOTAL_TESTS } from "@/lib/tests";
import { Mandala } from "./Mandala";
import { OpenNow } from "./OpenNow";
import { RevealLines } from "./Motion";
import { MAP_HREF } from "./Visit";
import { IconPhone, IconWhatsApp } from "./Icons";

export function Close() {
  return (
    <>
      <section className="sec close on-ink">
        <div className="wrap close__inner">
          <RevealLines
            as="h2"
            className="display d-hero close__title"
            lines={["Bring the", "prescription.", "We’ll do the rest."]}
            emphasis={2}
          />

          <p className="spec spec-green close__spec">
            <span className="nowrap">{TOTAL_TESTS} tests</span> ·{" "}
            <span className="nowrap">{SITE.hours.compact}</span> ·{" "}
            <span className="nowrap">{SITE.hours.daysShort}</span>
          </p>

          <OpenNow />

          <div className="btn-row close__actions">
            <a className="btn btn-primary" href={SITE.phone.href}>
              <IconPhone size={16} />
              Call {SITE.phone.display}
            </a>
            <a
              className="btn btn-wa"
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={16} />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <footer className="footer on-bone">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <Mandala size={56} className="footer__logo" />
            <div>
              <p className="footer__name">{SITE.brandFull}</p>
              <p className="spec spec-bone footer__sub">
                {SITE.surface} · {SITE.centre.street}
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
              <a className="footer__link" href={MAP_HREF} target="_blank" rel="noopener noreferrer">
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
        </div>

        <div className="wrap footer__base">
          <p className="spec spec-bone">
            &copy; {new Date().getFullYear()} {SITE.brandFull}
          </p>
          <p className="spec spec-bone footer__disclaimer">
            Samples collected at {SITE.centre.street} are tested at{" "}
            {SITE.mainLab.street}. Digital X-ray and ECG are available at the
            main laboratory only.
          </p>
        </div>
      </footer>
    </>
  );
}
