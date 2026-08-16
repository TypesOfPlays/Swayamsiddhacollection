# Swayamsiddha Diagnostics — Collection Centre landing page

Landing page for the **Collection Centre, Old Hospital Road, Kendrapara**.
The main laboratory at Icchapur has its own site at
[swayamsiddhadiagnostics.in](https://swayamsiddhadiagnostics.in); this page is
its sibling, not a replacement.

---

## Run it

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

To produce the production build:

```bash
npm run build
```

> Do not run `npm run build` while `npm run dev` is running — they share the
> `.next` folder and the build will clobber the dev server's chunks. Stop the
> dev server first.

## Deploy

`npm run build` writes a plain folder of HTML, CSS, JS and images to **`out/`**.
There is no server — any static host can serve it.

### GitHub Pages (the configured path) → swayamsiddhadiagnostics.info

Everything is already wired. One-time setup:

**1. Push the repository to GitHub.**

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

```bash
git push -u origin main
```

**2. Turn Pages on.** In the repo: **Settings → Pages → Build and deployment
→ Source → GitHub Actions.** Do not pick "Deploy from a branch."

That is it for the code. `.github/workflows/deploy.yml` builds and publishes on
every push to `main`, and `public/CNAME` tells Pages the domain.

**3. Point the domain.** At whoever you bought `swayamsiddhadiagnostics.info`
from, open the DNS settings and add these records.

Four `A` records, all with host `@`:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Four `AAAA` records, also host `@` (these are for IPv6; add them if your
registrar supports it):

| Type | Host | Value |
|---|---|---|
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

And one `CNAME` so the `www.` version works too:

| Type | Host | Value |
|---|---|---|
| CNAME | www | YOUR-USERNAME.github.io |

**4. Wait, then switch HTTPS on.** DNS can take anywhere from a few minutes to
a few hours. Once **Settings → Pages** stops warning about the domain, tick
**Enforce HTTPS**. GitHub issues the certificate for free.

### If you would rather use Vercel or Netlify

The same `out/` folder works on both, and neither needs the workflow file.

- **Vercel** — import the repo; it detects Next.js on its own.
- **Netlify** — build command `npm run build`, publish directory `out`.

Set the custom domain in their dashboard instead of DNS-to-GitHub, and delete
`public/CNAME` so it does not fight their settings.

> Changing the domain later means editing **two** places: `public/CNAME` and
> `SITE_URL` in `lib/site.ts`.

---

## Where to change things

Almost everything a non-developer would want to edit lives in **two files**.

### `lib/site.ts` — every confirmed fact

Phone, WhatsApp, email, both addresses, opening hours, the fasting note, the
three services, the "not available here" list, and the six chain-of-custody
stages. Change a phone number here and it updates everywhere on the page,
including the tap-to-call links and the search-engine listing data.

### `lib/tests.ts` — the 73 tests

Ten groups, each with its test names exactly as supplied. Each test can carry
`aliases` — these never appear on screen; they only make search work the way a
patient actually types. For example `HbA1c (Gly)` carries the aliases
`hba1c`, `a1c`, `glycated haemoglobin` and `3 month sugar`, so any of those
find it.

To add a test, add it to the right group's `tests` array. The counts on the
page, the filter chips, and the search all update themselves — nothing else
needs touching.

---

## Things you should replace or supply

| Item | Where | Why |
|---|---|---|
| **Vector logo** | `components/Mandala.tsx` | The mark is currently redrawn as SVG so it can sit crisply on the dark green backgrounds (the supplied `logo.jpg` has a white background and cannot). If you have the original `.ai` / `.svg` / `.eps`, send it and it should replace the paths in this file. `logo.jpg` itself is used in the footer. |
| **Exact map location** | `components/Visit.tsx`, `MAP_HREF` | Currently a Google Maps *search* for the address, which works but is not pin-accurate. Drop a pin on the exact premises, copy the link, and paste it here. |
| **Photographs** | — | There are none on the page, deliberately. A real photo of the reception and of the collection room would strengthen it considerably. |

## Things deliberately **not** on the page

These were never confirmed, so nothing about them was invented. Tell me any of
them and they can be added properly:

- Test prices or package pricing
- Report turnaround times
- NABL / ISO or any accreditation
- Pathologist and staff names or qualifications
- Years in operation, patient numbers
- Patient reviews or testimonials
- Whether reports are delivered on WhatsApp or email

The page also states plainly that **Digital X-ray and ECG are not available at
this centre** and points those patients to Icchapur. Searching "x-ray" or "ecg"
in the test finder returns that answer directly. This is intentional — a patient
who travels for an X-ray and is turned away is a worse outcome than one who
reads it here first.

---

## What the page does

- **Live open/closed state** — computed from Indian Standard Time against the
  6:00–21:00 hours, so it is correct regardless of the visitor's device
  timezone. Updates every 30 seconds.
- **Test finder** — searches all 73 tests by name, by the shorthand a doctor
  writes, and by symptom words like "fever" or "sugar". `ca125`, `CA 125` and
  `ca-125` all match each other.
- **Tick and send** — a patient ticks the tests from their prescription and the
  page assembles them into a pre-written WhatsApp message.
- **Chain of custody** — a scroll-driven readout of the six real handling stages
  between Old Hospital Road and the Icchapur laboratory. It counts stages, not
  live tracking; no telemetry is claimed.
- **Sticky action bar on phones** — call, WhatsApp, tests and map always within
  reach.
- **Search-engine listing data** — `MedicalClinic` structured data with the
  address, phone and opening hours, so the centre can appear correctly in local
  search results.

---

## Design notes

Built to two reference sites the client chose: `cinemabooking.aura.build` and
`massif.aura.build`. From them: alternating dark/light section grounds, heavy
condensed uppercase display type with tight leading, tracked monospace data
lines, numbered sequences, and one scroll-driven signature motion.

- **Display type** — Anton
- **Body** — Archivo
- **Data lines** — Martian Mono
- **Green** — sampled from the logo

All practical content — the test catalogue, hours, address, fasting rules —
sits on the light backgrounds. The audience reads this outdoors, in daylight,
often early in the morning and often with older eyes, so contrast there was
treated as a requirement rather than a preference. The dark grounds carry the
opening, the custody section and the close.

Exactly one red exists in the whole design. It is spent only on the fasting
warning and on what is not available at this centre, and never for decoration.
