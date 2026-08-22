"use client";

import { useState } from "react";
import { TOTAL_TESTS } from "@/lib/tests";
import { IconArrowRight, IconSearch } from "./Icons";

/**
 * The first thing a patient wants is to know whether their test is done here.
 * Until now that answer was several screens down. This puts the question in
 * the first viewport and hands the query to the catalogue, so the hero does
 * the page's actual job instead of only announcing it.
 */
export function QuickFind() {
  const [q, setQ] = useState("");

  const go = (value: string) => {
    const target = document.getElementById("tests");
    window.dispatchEvent(new CustomEvent("find-test", { detail: value }));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form
      className="quickfind"
      onSubmit={(e) => {
        e.preventDefault();
        go(q);
      }}
      role="search"
    >
      {/* The button must sit OUTSIDE the label: a click inside a label is
          forwarded to the labelled control, which swallowed the submit. */}
      <div className="quickfind__field">
        <IconSearch size={19} className="quickfind__icon" />
        <label className="sr-only" htmlFor="quickfind-input">
          Search the {TOTAL_TESTS} tests
        </label>
        <input
          id="quickfind-input"
          className="quickfind__input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Find your test — CBC, thyroid, KFT…"
          autoComplete="off"
          spellCheck={false}
        />
        <button className="quickfind__go" type="submit">
          <span className="spec">Find</span>
          <IconArrowRight size={15} />
        </button>
      </div>

      <p className="spec quickfind__hint">
        Or jump to{" "}
        {["Thyroid", "Dengue", "HbA1c"].map((t) => (
          <button
            key={t}
            type="button"
            className="quickfind__chip"
            onClick={() => {
              setQ(t);
              go(t);
            }}
          >
            {t}
          </button>
        ))}
      </p>
    </form>
  );
}
