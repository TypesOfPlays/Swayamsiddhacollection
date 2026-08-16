"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/** Current time at the centre (IST, UTC+5:30) regardless of the visitor's timezone. */
function istNow() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  return new Date(utcMs + 5.5 * 60 * 60_000);
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type State = {
  open: boolean;
  clock: string;
  detail: string;
};

/** 17:05 → "5:05 PM". The whole page speaks 12-hour time. */
function to12h(h: number, m: number) {
  const suffix = h < 12 ? "AM" : "PM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${pad(m)} ${suffix}`;
}

function compute(): State {
  const ist = istNow();
  const h = ist.getHours();
  const m = ist.getMinutes();
  const open = h >= SITE.hours.openHour && h < SITE.hours.closeHour;
  const clock = `${to12h(h, m)} IST`;

  let detail: string;
  if (open) {
    const left = SITE.hours.closeHour - h - (m > 0 ? 1 : 0);
    detail =
      left >= 1 ? `Closes at 9:00 PM · ${left}h left` : "Closes at 9:00 PM";
  } else if (h < SITE.hours.openHour) {
    detail = `Opens at 6:00 AM · in ${SITE.hours.openHour - h}h`;
  } else {
    detail = "Opens at 6:00 AM tomorrow";
  }

  return { open, clock, detail };
}

export function OpenNow({ tone = "ink" }: { tone?: "ink" | "bone" | "green" }) {
  // Server renders the static hours line; the live state appears on mount so
  // the markup never mismatches.
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(compute());
    const id = setInterval(() => setState(compute()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    return (
      <p className={`spec open-now open-now--${tone}`}>
        <span className="open-now__dot open-now__dot--idle" />
        {SITE.hours.display} · {SITE.hours.daysShort.toUpperCase()}
      </p>
    );
  }

  return (
    <p
      className={`spec open-now open-now--${tone}`}
      aria-live="polite"
      suppressHydrationWarning
    >
      <span
        className={`open-now__dot ${
          state.open ? "open-now__dot--on" : "open-now__dot--off"
        }`}
      />
      <strong className="open-now__label">
        {state.open ? "Open now" : "Closed now"}
      </strong>
      <span className="open-now__sep" aria-hidden>
        ·
      </span>
      <span>{state.detail}</span>
      {/* Separator lives inside the clock so hiding the clock in narrow
          columns never leaves a dangling middot. */}
      <span className="open-now__clock">
        <span className="open-now__sep" aria-hidden>
          ·
        </span>
        {state.clock}
      </span>
    </p>
  );
}
