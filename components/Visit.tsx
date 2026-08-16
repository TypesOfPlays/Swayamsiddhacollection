import { SITE } from "@/lib/site";
import { OpenNow } from "./OpenNow";
import { IconArrowRight, IconClock, IconPin } from "./Icons";
import { RevealLines } from "./Motion";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Swayamsiddha Diagnostics, Old Hospital Road, Kendrapara, Odisha");

export function Visit() {
  return (
    <section className="sec on-bone visit" id="visit">
      <div className="wrap">
        <div className="visit__head">
          <RevealLines
            as="h2"
            className="display d-xl"
            lines={["Old Hospital Road,", "Kendrapara."]}
          />
          <p className="spec spec-bone visit__head-spec">
            {SITE.hours.display} · {SITE.hours.daysShort} · including Sunday
          </p>
        </div>

        <div className="visit__grid">
          {/* Address */}
          <div className="visit__block">
            <h3 className="visit__label">
              <IconPin size={17} />
              Where
            </h3>
            <address className="visit__address">
              <strong>
                {SITE.brandFull}
                <br />
                {SITE.surface}
              </strong>
              {SITE.centre.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </address>
            <a
              className="visit__link"
              href={MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
              <IconArrowRight size={15} />
            </a>

            <p className="visit__note">
              The main laboratory, where every sample is tested, is at{" "}
              {SITE.mainLab.street}, Kendrapara.
            </p>
            <a
              className="visit__link"
              href={SITE.mainLab.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.mainLab.websiteLabel}
              <IconArrowRight size={15} />
            </a>
          </div>

          {/* Hours */}
          <div className="visit__block">
            <h3 className="visit__label">
              <IconClock size={17} />
              When
            </h3>
            <OpenNow tone="bone" />
            <ul className="hours">
              {DAYS.map((d) => (
                <li className="hours__row" key={d}>
                  <span className="hours__day">{d}</span>
                  <span className="hours__time spec">
                    {SITE.hours.display}
                  </span>
                </li>
              ))}
            </ul>
            <p className="spec spec-bone hours__foot">
              {SITE.hours.hoursPerDay} hours a day · 7 days a week · no weekly
              off
            </p>
          </div>

          {/* Fasting */}
          <div className="visit__block visit__block--alert">
            <h3 className="visit__label visit__label--alert">
              Before a fasting test
            </h3>
            <p className="visit__fasting-window spec">
              Best time · {SITE.fasting.window}
            </p>
            <p className="visit__note visit__note--first">
              {SITE.fasting.note}
            </p>
            <p className="visit__note">
              Fasting applies to FBS, PPBS, Lipid Profile and a few others. If
              you are unsure, call before you come &mdash; it saves a second
              trip.
            </p>
            <a className="visit__link" href={SITE.phone.href}>
              Call {SITE.phone.display}
              <IconArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
