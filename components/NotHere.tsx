import { NOT_HERE, SITE } from "@/lib/site";
import { IconArrowRight } from "./Icons";
import { RevealLines } from "./Motion";

/**
 * Said plainly, near the catalogue, before anyone travels for it.
 * This is the only place besides the fasting note where the reserved red is spent.
 */
export function NotHere() {
  return (
    <section className="sec on-bone nothere" aria-labelledby="nothere-title">
      <div className="wrap nothere__grid">
        <div>
          <RevealLines
            as="h2"
            className="display d-lg"
            lines={["Two things we", "don’t do here."]}
          />
          <p className="body nothere__body">
            This is a collection centre, so it has no imaging room. If your
            prescription includes either of these, go to our main laboratory at{" "}
            {SITE.mainLab.street} instead &mdash; or call us first and we will
            tell you what you can get done here on the same visit.
          </p>
          <div className="btn-row nothere__actions">
            <a
              className="btn btn-primary"
              href={SITE.mainLab.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Main laboratory
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        <ul className="nothere__list">
          {NOT_HERE.map((item) => (
            <li className="nothere__item" key={item.name}>
              <span className="nothere__name">{item.name}</span>
              <span className="spec nothere__where">{item.where}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
