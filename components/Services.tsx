import { SERVICES, SITE } from "@/lib/site";
import { IconGroup, IconHome, IconPhone, IconTube, IconWhatsApp } from "./Icons";
import { RevealLines } from "./Motion";

const ICONS = {
  collection: IconTube,
  home: IconHome,
  group: IconGroup,
} as const;

/**
 * The one drenched section on the page. Green owns the whole field here
 * because this is where the offer widens past "come to us".
 */
export function Services() {
  return (
    <section className="sec on-green services" id="services">
      <div className="wrap">
        <div className="services__head">
          <RevealLines
            as="h2"
            className="display d-xl"
            lines={["Can’t come in?", "We come to you."]}
            emphasis={1}
          />
          <p className="body-lg services__lede">
            Three ways to give a sample. All of them end at the same laboratory
            at {SITE.mainLab.street}.
          </p>
        </div>

        <ul className="services__list">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.key as keyof typeof ICONS];
            return (
              <li className="service" key={s.key}>
                <Icon size={26} className="service__icon" />
                <div className="service__text">
                  <h3 className="service__name">{s.name}</h3>
                  <p className="service__body">{s.body}</p>
                  <p className="spec service__spec">{s.spec}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="btn-row services__actions">
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
            Arrange on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
