"use client";

import { useEffect, useRef, useState } from "react";
import { CUSTODY, SITE } from "@/lib/site";
import { Parallax, RevealLines } from "./Motion";

/**
 * The page's one authored motion moment: the sample's chain of custody from
 * Old Hospital Road to the Icchapur laboratory, advanced by scroll.
 *
 * Every stage is a real step in handling a sample. No live tracking is
 * claimed and no distance or duration is invented — the readout counts
 * stages, which is a fact, not telemetry.
 */
export function Custody({ images = [] }: { images?: string[] }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[];
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
  // Unitless fraction: the rail scales rather than animating its box.
  // It runs node-to-node, so the fill lands exactly on the active marker.
  const progress = active / last;

  return (
    <section className="sec custody on-ink" id="custody" aria-label="Chain of custody">
      <div className="wrap custody__grid">
        <div className="custody__panel">
          <div className="custody__panel-inner">
            <RevealLines
              as="h2"
              className="display d-lg custody__heading"
              lines={["From Old Hospital Road", "to our own lab."]}
            />

            <div className="custody__readout" aria-live="polite">
              <p className="spec custody__stage-spec">
                Stage {current.stage} / {CUSTODY.length}
              </p>
              <p className="display d-lg custody__stage-label">
                {current.label}
              </p>
              <p className="spec spec-green custody__stage-where">
                {current.where}
              </p>
            </div>

            <div
              className="custody__rail"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={CUSTODY.length}
              aria-valuenow={active + 1}
              aria-label="Custody stage"
            >
              {/* One variable drives the fill: scaleY on the vertical rail,
                  scaleX on the horizontal one below 900px. */}
              <span className="custody__rail-line">
                <span
                  className="custody__rail-fill"
                  style={{ "--p": progress } as React.CSSProperties}
                />
              </span>

              {CUSTODY.map((c, i) => (
                <span
                  key={c.stage}
                  className={`custody__mark ${i <= active ? "is-passed" : ""} ${
                    i === active ? "is-active" : ""
                  }`}
                  style={
                    { "--pos": `${(i / last) * 100}%` } as React.CSSProperties
                  }
                >
                  <span className="custody__mark-dot" />
                  {/* Numbered, not named: the stage names live in the
                      scrolling column, and repeating them here put the same
                      six words in one viewport twice. */}
                  <span className="spec custody__mark-label">{c.stage}</span>
                </span>
              ))}
            </div>

            <p className="spec custody__foot">
              {SITE.centre.street} &rarr; {SITE.mainLab.street}
            </p>
          </div>
        </div>

        <ol className="custody__steps">
          {CUSTODY.map((c, i) => (
            <li
              key={c.stage}
              data-index={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`custody__step ${i === active ? "is-active" : ""}`}
            >
              {/* Photo of this stage. Decorative by design: the note beside it
                  already states what is happening, so a description here would
                  only be read out twice. Stages whose photo has not been
                  supplied render a designed empty frame and make no request. */}
              <figure
                className={`custody__figure${
                  images.includes(c.image) ? "" : " is-empty"
                }`}
              >
                {images.includes(c.image) && (
                  <Parallax depth={0.16} className="custody__figure-px">
                    <img src={c.image} alt="" loading="lazy" decoding="async" />
                  </Parallax>
                )}
                <span className="custody__figure-empty" aria-hidden>
                  {c.stage}
                </span>
              </figure>

              <p className="spec custody__step-num">{c.stage}</p>
              <h3 className="display d-md custody__step-label">{c.label}</h3>
              <p className="body custody__step-note">{c.note}</p>
              <p className="spec spec-ink custody__step-where">{c.where}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
