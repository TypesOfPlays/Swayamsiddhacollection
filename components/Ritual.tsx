import { RITUAL } from "@/lib/site";
import { Reveal, RevealLines } from "./Motion";

/**
 * The patient's four moves.
 *
 * Deliberately a plain row rather than a pinned horizontal track. The pin
 * held the page for roughly two and a half screens of scrolling to show four
 * short cards — it read as the page being stuck, and it was the single
 * longest stretch on the site. The order is still the information; the
 * numbers carry it without holding anyone hostage.
 */
export function Ritual() {
  return (
    <section className="sec ritual on-ink-2" id="ritual">
      <div className="wrap">
        <div className="ritual__head">
          <RevealLines
            as="h2"
            className="display d-xl"
            lines={["Four moves,", "start to report."]}
            emphasis={1}
          />
          <p className="spec spec-green ritual__head-spec">
            01 &ndash; 04 &middot; in order
          </p>
        </div>

        <ol className="ritual__row">
          {RITUAL.map((step, i) => (
            <Reveal as="li" className="move" key={step.key} delay={i * 90}>
              <p className="spec move__n">{step.index}</p>
              <h3 className="display move__title">
                {step.title[0]}
                <br />
                {step.title[1]}
              </h3>
              <p className="move__body">{step.body}</p>
              <p className="spec move__spec">{step.spec}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
