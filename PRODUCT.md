# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + React + TypeScript, chosen by the user in the init interview. Single marketing landing page; no CMS, no backend, no auth. Styling is plain CSS with custom properties rather than a utility framework: the type system needs precise control (Anton at 96px on 0.82 leading, tracked monospace at 12px/+0.2em), and both client-pinned reference sites are built the same way, with semantic section classes over a token layer. Deployable to any Node or static host.

## Users

Primary users are patients and their family members in Kendrapara town, Odisha, who are holding a doctor's prescription and need pathology tests done nearby. They arrive on a phone, often on a slow connection, usually within a day or two of the prescription being written, and frequently in the early morning while fasting for a blood sugar or lipid test. Many are older patients or caregivers acting on behalf of a parent. A meaningful secondary audience is local employers, schools, and organisations arranging group or corporate health check-ups, and referring doctors and clinics in the Old Hospital Road area who direct patients to a nearby collection point.

## Product Purpose

Swayamsiddha Diagnostics is a diagnostic centre whose main laboratory is at Icchapur, Kendrapara. This product is the landing page for its **collection centre** at Old Hospital Road, Kendrapara — a satellite location where samples are drawn and then transported to the Icchapur laboratory for testing. The page exists so that a patient searching for a nearby lab can, within seconds: confirm the test they need is available, see how to get there and when it is open, and start contact by phone or WhatsApp. Success is a phone call, a WhatsApp enquiry, a home-collection request, or a walk-in.

## Positioning

A named laboratory's own collection point rather than an independent third-party booth: samples are drawn on Old Hospital Road but processed at Swayamsiddha's own Icchapur laboratory, under the same pathologist and the same quality control, so a patient gets a town-centre location without handing their sample to an unrelated lab. The centre is open 6:00 AM to 9:00 PM every day including Sunday, which covers both the early-morning fasting window and after-work hours.

## Operating Context

- The patient's journey begins with a paper prescription from a doctor, often listing tests in shorthand or abbreviations (KFT, LFT, TSH, HbA1c, CBC). They need to match those abbreviations against what the centre offers.
- Fasting tests (FBS, Lipid Profile, PPBS) drive early-morning visits; the 6:00 AM opening is a practical response to that.
- WhatsApp is the dominant messaging channel; patients commonly photograph a prescription and send it rather than typing test names.
- Reports are produced at the Icchapur laboratory and returned to the patient; digital delivery via WhatsApp is common practice for this kind of centre but was **not confirmed** in the interview and must not be claimed as a fact.
- Group and corporate health check-ups are arranged by phone with an organisation contact, not self-served online.

## Capabilities and Constraints

**Confirmed available at the collection centre**
- Sample collection only. Samples are drawn here and tested at the Icchapur main laboratory. No testing equipment operates at this location.
- Home sample collection: staff travel to the patient's location to draw samples.
- Group and corporate testing arrangements.
- The full pathology test menu of the main laboratory — 73 tests across 10 groups — is orderable here:
  - **Blood counts & haematology (10):** CBC (5 Part), Haemoglobin, ESR, DLC / TLC / Hb% / ESR, Differential Count (DC), Absolute Eosinophil Count (AEC), Total Platelet Count, ABO Group & Rh Type (Blood Group), BT / CT, Sickling
  - **Diabetes & sugar (5):** FBS, PPBS, RBS, PGBS, HbA1c (Gly)
  - **Heart & lipids (5):** Lipid Profile, S. Cholesterol (S. Cho), S. Triglycerides (S. TG), Troponin-I (Kit), Troponin-T (Kit)
  - **Thyroid & hormones (12):** Thyroid Profile – I (T3, T4, TSH), TSH, T3, T4, FT3 (Free Triiodothyronine), FT4 (Free Thyroxine), Beta hCG, FSH (Follicle Stimulating Hormone), Prolactin (PRL), Estradiol (E2), Progesterone (P4), Calcitonin (Thyrocalcitonin)
  - **Liver function (8):** LFT, SGOT (AST), SGPT (ALT), Bilirubin Total + Direct + Indirect, Alkaline Phosphatase (ALP), Albumin, Total Protein, Amylase
  - **Kidney & electrolytes (9):** KFT, RFT, Urea / Creatinine, BUN (Blood Urea Nitrogen), S. Uric Acid, Na+ K+ Cl, Calcium, Magnesium, S. Phosphorus
  - **Fever & infection (12):** Dengue (Kit), Mal Card (Kit), Scrub Typhus, Widal Test (Slide Test), CRP (Quantitative), ASO (Quantitative), HIV (Kit), HBsAg (Kit), HCV (Kit), VDRL (Kit), Toxo (Kit), TORCH Panel – 8 (IgG & IgM)
  - **Urine, stool & fluids (5):** Urine R/M, Urine C/S, Urine β-hCG (Kit), Stool R/M, Seminal Fluid
  - **Clotting & inflammation (4):** PT / INR, APTT, RA Factor (Quantitative), Ferritin
  - **Tumour markers (3):** CA 15-3 (Breast Cancer Marker), CA 19-9 (Pancreatic Cancer Marker), CA 125 (Ovarian Cancer Marker)

**Explicitly NOT available at this collection centre**
- Digital X-ray — available only at the Icchapur main laboratory.
- ECG — available only at the Icchapur main laboratory.
- The page must state this honestly and redirect those patients to the main centre rather than omitting or blurring it.

**Undecided / not established — must not be fabricated**
- Test prices, package pricing, and any discount claims.
- Report turnaround times.
- NABL / ISO / any accreditation status.
- Pathologist and staff names, qualifications, and photographs.
- Years in operation, patient volume counts, and any testimonial or review content.
- Whether reports are delivered digitally, and by which channel.
- Exact street-level map coordinates for the Old Hospital Road premises.

## Brand Commitments

- **Name:** Swayamsiddha Diagnostics. This page is for its **Collection Centre, Old Hospital Road, Kendrapara**; the main laboratory is at Icchapur, Kendrapara. The distinction between the two must stay unambiguous everywhere on the page.
- **Logo:** `logo.jpg` in the project root — a radial mandala of pointed petals in a single deep green on white, with a small crown at the centre. It is the binding source of the colour theme: deep green as the identity colour, white as the ground.
- **Existing web presence:** the main laboratory already has its own page at `swayamsiddhadiagnostics.in`. This new page is a sibling for the collection centre and should link out to the main lab site rather than duplicate or replace it.
- **Contact facts (confirmed):** phone `+91 78478 89009`; WhatsApp `https://wa.me/917847889009`; email `swayamsiddha999@yahoo.com`.
- **Hours (confirmed):** 6:00 AM – 9:00 PM, every day including Sunday.

## Evidence on Hand

- `logo.jpg` — the brand logo, in project root. The only supplied brand asset.
- The complete 73-test menu, supplied by the client and reproduced verbatim above.
- Confirmed contact details, address, and opening hours listed above.
- **Absent:** photographs of the premises, staff, or equipment; any accreditation certificate; any patient testimonial, rating, or review; any price list; any report sample. None of these may be invented, and no placeholder image may imply a real photograph of this centre.

## Product Principles

1. **Answer the prescription first.** A patient arrives holding a list of abbreviations. Finding whether "HbA1c" or "KFT" is available must take seconds, not scrolling.
2. **Be honest about what is not here.** X-ray and ECG are absent from this location; saying so plainly and pointing to Icchapur builds more trust than hiding it and disappointing a patient who travelled.
3. **Claim nothing that was not confirmed.** No prices, no turnaround promises, no accreditation badges, no invented reviews or staff credentials.
4. **Contact must always be one tap away.** Phone, WhatsApp, home collection, and directions are the entire point of the page; they never leave reach on a phone.
5. **Built for a slow phone at 6 AM.** Weight, contrast, and tap-target size are treated as medical-access requirements, not preferences.

## Accessibility & Inclusion

The audience skews older and includes caregivers reading in bright outdoor daylight on low-cost phones. Body text must stay large and high-contrast, tap targets generous, and the page fully operable and readable without relying on colour alone. Test names must be searchable by the abbreviation a doctor actually writes.
