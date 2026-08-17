"use client";

import { useEffect, useRef, useState } from "react";
import { CUSTODY, SITE } from "@/lib/site";
import { TOTAL_TESTS } from "@/lib/tests";
import { Reveal, RevealImage, RevealLines } from "./Motion";
import { IconArrowRight } from "./Icons";

/**
 * The sample's chain of custody from Old Hospital Road to the Icchapur
 * laboratory.
 *
 * Laid out as a staggered twelve-column grid where the two columns overlap,
 * so the stages interleave down the page rather than sitting in tidy rows.
 * Each photograph wipes open as it arrives and drifts against its frame.
 *
 * Every stage is a real step in handling a sample. No live tracking is
 * claimed and no distance or duration is invented — the readout counts
 * stages, which is a fact, not telemetry.
 */
export function Custody({ images = [] }: { images?: string[] }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const current = CUSTODY[active];
  const last = CUSTODY.length - 1;

  return (
    <section
      className="sec custody on-ink"
      id="custody"
      aria-label="Chain of custody"
    >
      <div className="wrap">
        {/* Running readout, in the manner of a field slate. */}
        <Reveal as="div" variant="none" className="slate spec">
          <span className="slate__l">
            Stage {current.stage} / {CUSTODY.length}
          </span>
          <span className="slate__c">({current.label})</span>
          <span className="slate__r">{current.where}</span>
        </Reveal>

        <div className="custody__head">
          <RevealLines
            as="h2"
            className="display d-xl"
            lines={["From Old Hospital Road", "to our own lab."]}
            emphasis={1}
          />
          {/* The stages are right here, so this points at the thing a reader
              actually wants next: the list of what we collect. */}
          <a className="chip-link spec" href="#tests">
            See all {TOTAL_TESTS} tests
            <IconArrowRight size={14} />
          </a>
        </div>

        <ol className="stages">
          {CUSTODY.map((c, i) => (
            <li
              key={c.stage}
              data-index={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`stage${i % 2 ? " stage--offset" : ""}${
                i === active ? " is-active" : ""
              }`}
            >
              {images.includes(c.image) ? (
                <RevealImage
                  src={c.image}
                  className={i === last ? "shot--wide" : ""}
                  priority={i === 0}
                />
              ) : (
                <div className="shot shot--empty" aria-hidden>
                  <span>{c.stage}</span>
                </div>
              )}

              {/* Sits in the columns the photograph does not use, so the
                  space beside each stage carries the explanation rather than
                  sitting empty. */}
              {/* `none` so the container itself does not move — the stagger
                  lives on its children, which rise one after another. */}
              <Reveal as="div" variant="none" className="stage__info">
                <span className="spec stage__n">Stage {c.stage}</span>
                <h3 className="display stage__name">{c.label}</h3>
                <p className="stage__desc">{c.detail}</p>
                <p className="spec stage__spec">{c.where}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="spec custody__foot">
          {SITE.centre.street} &rarr; {SITE.mainLab.street}
        </p>
      </div>

      {/* Waypoint rail, pinned to the edge of the section. */}
      <div
        className="waypoints"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={CUSTODY.length}
        aria-valuenow={active + 1}
        aria-label="Custody stage"
      >
        {CUSTODY.map((c, i) => (
          <span
            key={c.stage}
            className={`waypoint${i <= active ? " is-passed" : ""}${
              i === active ? " is-active" : ""
            }`}
          >
            <span className="waypoint__mark" />
            <span className="spec waypoint__n">{c.stage}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
