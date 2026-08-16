import { SITE } from "@/lib/site";
import { TOTAL_TESTS, TOTAL_GROUPS } from "@/lib/tests";
import { Mandala } from "./Mandala";
import { OpenNow } from "./OpenNow";
import { IconArrowDown, IconPhone, IconWhatsApp } from "./Icons";

export function Hero() {
  return (
    <section className="hero on-ink" id="top">
      <div className="hero__field" aria-hidden>
        <Mandala className="hero__mandala" />
      </div>

      <div className="hero__inner wrap">
        <h1 className="display d-hero hero__title">
          Give your
          <br />
          sample on
          <br />
          <span className="hero__title-em">Old Hospital</span>
          <br />
          Road.
        </h1>

        {/* The time range is kept unbreakable so a narrow screen never splits
            it across two lines as "6 AM –" / "9 PM". */}
        <p className="spec spec-green hero__spec">
          {TOTAL_TESTS} tests · {TOTAL_GROUPS} groups ·{" "}
          <span className="nowrap">{SITE.hours.compact}</span> ·{" "}
          <span className="nowrap">{SITE.hours.daysShort}</span>
        </p>

        <p className="body-lg hero__body">
          Swayamsiddha&rsquo;s collection centre in Kendrapara town. Your sample
          is drawn here and tested at our own laboratory at Icchapur &mdash; not
          handed to an outside lab.
        </p>

        <OpenNow />

        <div className="btn-row hero__actions">
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

        <a className="hero__scroll spec" href="#ritual">
          <IconArrowDown size={15} />
          How it works
        </a>
      </div>
    </section>
  );
}
