import { SITE } from "@/lib/site";
import { TOTAL_TESTS } from "@/lib/tests";
import { OpenNow } from "./OpenNow";
import { RevealLines } from "./Motion";
import { IconPhone, IconWhatsApp } from "./Icons";

export function Close() {
  return (
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
  );
}
