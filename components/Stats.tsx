import { SITE } from "@/lib/site";
import { TOTAL_GROUPS, TOTAL_TESTS } from "@/lib/tests";
import { Counter, Reveal, RevealLines } from "./Motion";

/**
 * The four numbers this centre can state as fact. Set as an editorial band
 * with uneven columns rather than four matching tiles — every figure here is
 * verifiable from PRODUCT.md, and none of them is a claim about quality.
 */
const FIGURES = [
  { n: TOTAL_TESTS, suffix: "", label: "Tests collected", note: "Every one tested at Icchapur" },
  { n: TOTAL_GROUPS, suffix: "", label: "Test groups", note: "Blood, sugar, thyroid, liver, kidney…" },
  { n: SITE.hours.hoursPerDay, suffix: "h", label: "Open each day", note: "6:00 AM to 9:00 PM" },
  { n: 7, suffix: "", label: "Days a week", note: "Sunday included, no weekly off" },
];

export function Stats() {
  return (
    <section className="sec stats on-ink" aria-label="At a glance">
      <div className="wrap">
        <RevealLines
          as="h2"
          className="display d-lg stats__head"
          lines={["What this centre", "can state as fact."]}
          emphasis={1}
        />

        <ul className="stats__list">
          {FIGURES.map((f, i) => (
            <Reveal as="li" className="stat" key={f.label} delay={i * 90}>
              <p className="stat__n display">
                <Counter to={f.n} suffix={f.suffix} />
              </p>
              <p className="stat__label">{f.label}</p>
              <p className="spec stat__note">{f.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
