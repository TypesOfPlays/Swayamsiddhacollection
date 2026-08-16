"use client";

import { useMemo, useState } from "react";
import {
  ALL_TESTS,
  TEST_GROUPS,
  TOTAL_GROUPS,
  TOTAL_TESTS,
  type FlatTest,
} from "@/lib/tests";
import { SITE } from "@/lib/site";
import { IconClose, IconSearch, IconWhatsApp } from "./Icons";
import { RevealLines } from "./Motion";

/** "CA 125" and "ca125" and "Ca-125" must all match each other. */
const compact = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Things this centre does not do. Searching for them gets an honest answer. */
const ELSEWHERE = [
  { match: ["xray", "x", "digitalxray", "radiology", "chest"], name: "Digital X-ray" },
  { match: ["ecg", "ekg", "electrocardiogram", "heartgraph"], name: "ECG" },
];

export function Catalogue() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string | null>(null);
  const [picked, setPicked] = useState<string[]>([]);

  const q = query.trim().toLowerCase();
  const qc = compact(query);

  const elsewhereHit = useMemo(() => {
    if (qc.length < 2) return null;
    return (
      ELSEWHERE.find((e) => e.match.some((m) => m.startsWith(qc) || qc.startsWith(m))) ??
      null
    );
  }, [qc]);

  const results = useMemo(() => {
    let list: FlatTest[] = ALL_TESTS;
    if (group) list = list.filter((t) => t.groupKey === group);
    if (q) {
      list = list.filter(
        (t) => t.haystack.includes(q) || compact(t.haystack).includes(qc)
      );
    }
    return list;
  }, [q, qc, group]);

  const grouped = useMemo(() => {
    return TEST_GROUPS.map((g) => ({
      group: g,
      items: results.filter((t) => t.groupKey === g.key),
    })).filter((s) => s.items.length > 0);
  }, [results]);

  const toggle = (name: string) =>
    setPicked((p) =>
      p.includes(name) ? p.filter((n) => n !== name) : [...p, name]
    );

  const waHref = useMemo(() => {
    const lines = picked.map((n, i) => `${i + 1}. ${n}`).join("\n");
    const text = `Namaste. I would like to book these tests at the ${SITE.centre.street} collection centre:\n\n${lines}\n\nPlease tell me the cost and when I should come.`;
    return `${SITE.whatsapp.href}?text=${encodeURIComponent(text)}`;
  }, [picked]);

  const filtering = Boolean(q || group);

  return (
    <section className="sec on-bone catalogue" id="tests">
      <div className="wrap">
        <div className="catalogue__head">
          <RevealLines
            as="h2"
            className="display d-xl"
            lines={["Every test", "we collect."]}
            emphasis={1}
          />
          <p className="spec spec-bone catalogue__head-spec">
            {TOTAL_TESTS} tests · {TOTAL_GROUPS} groups · all collected here,
            all tested at Icchapur
          </p>
          <p className="body catalogue__lede">
            Search the shorthand your doctor wrote &mdash; <em>KFT</em>,{" "}
            <em>HbA1c</em>, <em>TSH</em> &mdash; or the thing you are worried
            about, like <em>fever</em> or <em>sugar</em>. Tick what you need and
            send the list to us on WhatsApp.
          </p>
        </div>

        {/* Search */}
        <div className="finder">
          <div className="finder__field">
            <IconSearch size={20} className="finder__icon" />
            <input
              type="search"
              className="finder__input"
              placeholder="Search a test — CBC, thyroid, dengue, KFT…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search tests"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                type="button"
                className="finder__clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <IconClose size={16} />
              </button>
            )}
          </div>

          <div className="chips" role="group" aria-label="Filter by group">
            <button
              type="button"
              className={`chip ${group === null ? "is-on" : ""}`}
              onClick={() => setGroup(null)}
              aria-pressed={group === null}
            >
              All {TOTAL_TESTS}
            </button>
            {TEST_GROUPS.map((g) => (
              <button
                key={g.key}
                type="button"
                className={`chip ${group === g.key ? "is-on" : ""}`}
                onClick={() => setGroup(group === g.key ? null : g.key)}
                aria-pressed={group === g.key}
              >
                {g.short} <span className="chip__n">{g.tests.length}</span>
              </button>
            ))}
          </div>

          <p className="spec spec-bone finder__count" aria-live="polite">
            {filtering
              ? `${results.length} of ${TOTAL_TESTS} tests`
              : `Showing all ${TOTAL_TESTS} tests`}
            {picked.length > 0 && ` · ${picked.length} selected`}
          </p>
        </div>

        {/* Honest answer when someone searches for what we do not have here */}
        {elsewhereHit && (
          <p className="elsewhere" role="status">
            <strong className="elsewhere__name">{elsewhereHit.name}</strong> is
            not done at this collection centre. It is available at our main
            laboratory at {SITE.mainLab.street}, Kendrapara.
          </p>
        )}

        {/* Results */}
        {grouped.length > 0 ? (
          <div className="results">
            {grouped.map(({ group: g, items }) => (
              <section className="results__group" key={g.key}>
                <h3 className="results__group-name">{g.name}</h3>
                <p className="spec spec-bone results__group-spec">
                  {items.length}
                  {items.length !== g.tests.length && ` of ${g.tests.length}`}{" "}
                  {items.length === 1 ? "test" : "tests"}
                </p>
                <ul className="results__list">
                  {items.map((t) => {
                    const on = picked.includes(t.name);
                    return (
                      <li key={t.name}>
                        <button
                          type="button"
                          className={`test ${on ? "is-picked" : ""}`}
                          onClick={() => toggle(t.name)}
                          aria-pressed={on}
                        >
                          <span className="test__box" aria-hidden>
                            <svg viewBox="0 0 16 16" width="12" height="12">
                              <path
                                d="M2.5 8.5 6 12l7.5-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="test__name">{t.name}</span>
                        </button>
                      </li>
                    );
                  })}
                  {/* Fillers keep the last row complete so the ruled grid
                      never ends in a ragged half-drawn line. 12 is the LCM of
                      the 2/3/4 column counts; they are hidden at 1 column. */}
                  {Array.from(
                    { length: (12 - (items.length % 12)) % 12 },
                    (_, i) => (
                      <li className="test-filler" key={`f${i}`} aria-hidden />
                    )
                  )}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <div className="empty">
            <p className="display d-md empty__title">No test by that name.</p>
            <p className="body empty__body">
              We may still know it under a different name. Send a photo of your
              prescription on WhatsApp and we will tell you straight away
              whether we collect it.
            </p>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp size={16} />
                Send the prescription
              </a>
              <button
                type="button"
                className="btn btn-wa"
                onClick={() => {
                  setQuery("");
                  setGroup(null);
                }}
              >
                Show all {TOTAL_TESTS} tests
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Selection tray */}
      {picked.length > 0 && (
        <div className="tray" role="region" aria-label="Selected tests">
          <div className="tray__inner wrap">
            <div className="tray__meta">
              <p className="spec tray__count">
                {picked.length} {picked.length === 1 ? "test" : "tests"} selected
              </p>
              <p className="tray__names">{picked.join(" · ")}</p>
            </div>
            <div className="tray__actions">
              <button
                type="button"
                className="tray__clear spec"
                onClick={() => setPicked([])}
              >
                Clear
              </button>
              <a
                className="btn btn-primary"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp size={16} />
                Send list
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
