---
name: Swayamsiddha Collection Centre
description: A green-black and bone custody ledger — architectural caps, measured mono, one reserved red.
colors:
  ink: "#07120a"
  ink-2: "#0c1a10"
  ink-3: "#122417"
  bone: "#e9e7dc"
  bone-2: "#ddd9cb"
  bone-3: "#d1ccbb"
  green: "#15691c"
  green-bright: "#35a93b"
  green-deep: "#0a3a10"
  green-ink: "#06240a"
  alert: "#a82a20"
  alert-bright: "#ef5a4a"
  on-ink: "#e9e7dc"
  on-ink-dim: "rgba(233, 231, 220, 0.72)"
  on-ink-faint: "rgba(233, 231, 220, 0.6)"
  on-bone: "#141a15"
  on-bone-dim: "rgba(20, 26, 21, 0.74)"
  on-bone-faint: "rgba(20, 26, 21, 0.66)"
  rule-ink: "rgba(233, 231, 220, 0.18)"
  rule-bone: "rgba(20, 26, 21, 0.18)"
  green-lift: "#48c44e"
  on-green: "#ffffff"
  on-green-dim: "rgba(255, 255, 255, 0.84)"
  on-green-body: "rgba(255, 255, 255, 0.82)"
  rule-green: "rgba(255, 255, 255, 0.28)"
  border-green: "rgba(255, 255, 255, 0.45)"
  wash-green: "rgba(255, 255, 255, 0.1)"
  stack-shadow: "rgba(0, 0, 0, 0.65)"
typography:
  display-hero:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.25rem, 11.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.025em"
  display-xl:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 7.5vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  display-md:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.5rem, 3.6vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  display-sm:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  spec:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.2em"
    fontFeature: "tabular-nums"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.2em"
  mark:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  micro:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.22em"
  brand-sm:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  sm: "2px"
  md: "3px"
  pill: "99px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4rem"
  s9: "6rem"
  s10: "8rem"
  gutter: "clamp(1.25rem, 5vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.green-bright}"
    textColor: "{colors.green-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "#48c44e"
  button-primary-on-bone:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
  button-primary-on-bone-hover:
    backgroundColor: "{colors.green-deep}"
  button-primary-on-green:
    backgroundColor: "#ffffff"
    textColor: "{colors.green-deep}"
  button-wa:
    backgroundColor: "transparent"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
    height: "3.25rem"
  button-wa-hover:
    textColor: "{colors.green-bright}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.on-bone-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 0.9rem"
    height: "2.5rem"
  chip-selected:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  input-search:
    backgroundColor: "{colors.bone-2}"
    textColor: "{colors.on-bone}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "1.125rem 1.125rem"
  test-row:
    backgroundColor: "transparent"
    textColor: "{colors.on-bone}"
    padding: "0.9rem 0.5rem 0.9rem 0"
    height: "3.25rem"
  test-row-picked:
    textColor: "{colors.green}"
---

# Design System: Swayamsiddha Collection Centre

## Overview

**Creative North Star: "The Custody Ledger"**

The surface behaves like a handling record kept by the people who do the handling, not like a brochure printed about them. Every screen is a ground — a full-bleed green-black or a full-bleed bone — carrying ruled rows, architectural caps, and monospaced measurements that mean something. Nothing floats. There are no cards and no panels lifted off the page; separation within a section is done with hairline rules and with one tonal step of the ground itself. The single exception is between sections: each one casts upward onto the section it slides over as the page stacks, which is elevation used structurally rather than decoratively. The result is dense but never busy, because the density is all information and the hierarchy is carried by type scale rather than by boxes.

The palette is not a neutral grey system with a green accent bolted on. The dark ground is a green-black sampled from the client's own mark, so the brand hue owns the whole surface rather than sitting on top of it. The light ground is bone, a warm off-white chosen for daylight legibility. The two alternate section by section, and which content sits on which is a rule, not a rhythm choice — practical content lives on bone.

The type does the theatre. Anton caps at up to 6rem with crushed 0.82 leading give the page its architecture; Archivo carries every readable sentence; Martian Mono, tracked wide at 0.2em, carries the numbers. The mono is the system's signature and its strictest rule: it never announces a heading, it always answers one.

**Key Characteristics:**
- Full-bleed grounds, alternating green-black and bone, section by section
- Architectural condensed caps with crushed leading (0.82–0.84)
- Monospaced data lines set below headings, never above them
- Hairline rules and tonal steps instead of cards; the only shadow is the cast between stacked sections
- Exactly one red, spent only on warnings and absences
- Three contrast tiers on each ground, all readable in daylight

## Colors

A two-ground palette in one hue family — green-black and warm bone — with a single brand green working across both and one reserved red.

### Primary
- **Signal Green** (`green-bright`, #35a93b): the voice of the system on dark grounds. Primary buttons, the emphasized clause in a headline, the active custody marker and rail fill, the scroll-cue hover, selection highlight, caret and focus ring. Bright enough to survive the green-black without glowing.
- **Deep Brand Green** (`green`, #15691c): the same voice translated for bone. Primary buttons, links, selected chips, ticked tests, the footer mark, and the bone-ground focus ring. Never used on ink — it disappears there.
- **Forest Depth** (`green-deep`, #0a3a10) and **Green Black Ink** (`green-ink`, #06240a): the pressed and text-on-green ends of the ramp. `green-deep` is the hover for a green-on-bone button and the scrollbar thumb; `green-ink` is the text colour that sits on Signal Green.

### Secondary
- **Alarm Red** (`alert`, #a82a20): the one red on bone. It carries the fasting rule, the strike through a test not done at this centre, and the label of what is unavailable. Its bright sibling **Alarm Red Bright** (`alert-bright`, #ef5a4a) is its only dark-ground form — the CLOSED status dot and the destructive-hover on ink.

### Neutral
- **Green Black** (`ink`, #07120a): the primary dark ground — hero, custody, close, the selection tray, the mobile action bar, and the browser theme colour.
- **Green Black Raised** (`ink-2`, #0c1a10) and **Green Black Surface** (`ink-3`, #122417): the only two steps of dark layering. `ink-2` grounds the second dark section so consecutive dark sections separate without a border; `ink-3` fills an inactive custody marker.
- **Bone** (`bone`, #e9e7dc): the light ground, and the text colour on every dark ground. One value doing both jobs is what makes the page feel like one material printed two ways.
- **Bone Recessed** (`bone-2`, #ddd9cb) and **Bone Deep** (`bone-3`, #d1ccbb): inset surfaces on the light ground — the search field, the empty state.
- **Ink Text** (`on-bone`, #141a15): the reading colour on bone; a green-tinted near-black, never pure black.
- **Hairline** (`rule-ink` / `rule-bone`, 18% of the ground's text colour): every divider in the system. It reads as a ruled edge, never as a card border.

### On the green ground

The drenched section is the one place the system uses pure white, because neither bone nor any tint of the brand green holds up against a field of `green` at page scale. These are literal values rather than tokens — they exist only inside `.on-green` and are meaningless anywhere else.

- **White** (`#ffffff`): heading and primary-button fill on green; the button's label reverts to `green-deep`.
- **White 84% / 82%**: the spec line and body copy on green. Per the Saturated-Ground Rule these are tinted high, never faded.
- **White 45%**: the outline-button border on green. **White 28%**: the hairline rule between services. **White 10%**: the outline-button hover wash.

### Interaction values

- **Signal Green Lifted** (`#48c44e`): the hover state of a primary button on a dark ground — one step brighter than Signal Green, paired with a 2px lift. It is the only hover colour in the system that is not already a named token; on bone the same button hovers to `green-deep` instead.

### Named Rules

**The Practical-Content-On-Bone Rule.** Anything the patient must actually read and act on — the test catalogue, hours, address, fasting rules, what is not available here — sits on a bone ground. Dark grounds carry the opening, the custody narrative, and the close. This is an accessibility decision, not an aesthetic one: the page is read outdoors in bright daylight, often by older eyes on low-cost phones.

**The One Red Rule.** Exactly one red exists in this system and it is spent only on a genuine warning or a genuine absence — the fasting window, and what this centre does not do. It is never decorative, never a chart colour, never a hover flourish on anything that is not destructive.

**The Three-Tier Rule.** Each ground has exactly three text tiers (`on-*`, `on-*-dim`, `on-*-faint`) and all three clear 4.5:1. "Faint" means quiet in the hierarchy, never hard to read. There is no fourth, dimmer tier: if something is too unimportant for the faint tier, it is too unimportant to ship. The search placeholder — the entry point to finding a test — is held at the dim tier and composites to 6.2:1.

**The Saturated-Ground Rule.** On the green ground, secondary text is tinted white at high opacity (0.82–0.9), never faded toward the background. On a saturated surface, dropping opacity costs contrast far faster than it reads as hierarchy.

## Typography

**Display Font:** Anton (400 only, with Arial Narrow fallback)
**Body Font:** Archivo (with system-ui)
**Label/Mono Font:** Martian Mono (with ui-monospace)

**Character:** A condensed poster face set at architectural scale against a plain, hard-working grotesque and a wide-tracked monospace. The pairing reads as signage plus paperwork: the display announces, the mono measures, and the body explains in between.

### Hierarchy
- **Display Hero** (400, clamp 3.25–6rem, 0.82 line-height, -0.025em): the opening statement and the closing statement only. Set as hard-broken lines of 3–4 words, capped around 15ch.
- **Display XL** (400, clamp 2.5–4.75rem, 0.84): section titles.
- **Display LG** (400, clamp 2–3.5rem, 0.84): sub-section headings and the live custody stage label.
- **Display MD** (400, clamp 1.5–2.25rem, 0.84): custody step labels, the empty-state title, the unavailable-service names, and the service names on green.
- **Display SM** (400, clamp 1.25–1.625rem, 1.0): the smallest display step, used only for the ten catalogue group headings, where a full Display MD would overpower a list it is merely indexing.
- **Spec** (400, 0.75rem, 0.2em tracking, uppercase, tabular numerals): the data line. Hours, counts, stage codes, distances, group tallies. Set 12px rather than the reference's 11px because tracked caps lose legibility fastest at small sizes and this audience reads outdoors.
- **Body** (400, 1.0625rem, 1.62, max 66ch): every explanatory sentence.
- **Body LG** (400, clamp 1.0625–1.375rem, 1.5, max 54ch): the single lede paragraph under a hero.
- **Label** (500, 0.6875rem, 0.2em, uppercase, mono): button text and chips.

Four minor steps complete the ramp. They are deliberate, not drift, and nothing else may be invented between them:

- **Mark** (0.8125rem, 0.14em, mono, tabular): the custody rail's stage numbers and the fasting-window line — a spec line that must sit tighter than the standard 0.75rem/0.2em without dropping to the micro step.
- **Body SM** (0.9375rem): dense supporting prose in a narrow column — the visit notes, the hours rows, footer columns, and inline links.
- **Micro** (0.625rem, mono): the two places a label sits under something else and must not compete — the lockup's "Collection Centre" and the mobile action-bar captions.
- **Brand SM** (1.125rem, display): the footer wordmark, the one display use below Display MD.

All display type is uppercase with `text-wrap: balance`. Body type is never uppercase and never tracked.

**The Overlap Rule.** The halo and the tight leading are applied together, from the first painted frame — never one before the other. Anything that switches on later produces a visible window where the lines collide without a knockout, which reads as a rendering fault rather than a design. Headings run at 0.76 leading — 0.80 in the hero, which stacks four lines — so the caps genuinely cross instead of merely touching. Every line is haloed in its ground colour, and because later lines paint over earlier ones the crossing reads as one line sitting in front of another. The halo is what makes that leading legible, so the two travel together: never tighten the leading without it, and never drop the halo while it is tight.

### Named Rules

**The Spec-Below Rule.** The monospaced spec line always sits *below* the heading it qualifies, and always carries a real measurement — a count, a time range, a stage code, a route. It is never an eyebrow or a kicker above a heading, and never a decorative category word. If there is no measurement to state, there is no spec line.

**The Sequence-Only Numbering Rule.** Section numbers appear only where the order is itself the information: the four ordered patient moves and the six custody stages. No other section is numbered, because numbering a section that can be read in any order is decoration pretending to be structure.

**The Hard-Break Rule.** Display headings are broken by hand at meaningful phrase boundaries and constrained by a `ch` max-width (14–22ch), so the crushed leading reads as a stacked block rather than as ragged wrapping. Unbreakable data — a time range, a day range — is wrapped in a no-wrap span so a narrow screen never splits `06:00–21:00` across two lines.

## Layout

A single centred column, max 82rem, with a fluid gutter (`clamp(1.25rem, 5vw, 5rem)`). Sections are full-bleed grounds; only the inner wrapper is constrained, so the colour always runs edge to edge and the content never does.

Vertical rhythm is fluid: sections pad `clamp(4.5rem, 11vw, 9rem)` block-wise, and internal steps come off a 4px scale (`0.25rem` through `8rem`, ten steps). Within a section the recurring interval is 1rem between a heading and its spec line, 1.5rem between blocks, 2–3rem before a list.

Lists are ruled, not gapped. The catalogue, the four moves, the services, the hours, the visit blocks and the not-here list all use `gap: 0` with a 1px hairline on each row, so the page reads as a continuous ledger rather than a stack of separated items.

**Responsive.** Breakpoints are content-driven rather than device-named: 560px (catalogue goes to 2 columns; services stack; the header's call button drops), 700px (the fixed action bar appears and the body gains its height as bottom padding; the tray lifts above it; visit blocks lose their side padding), 720–800px (the four-moves index goes horizontal; the not-here grid stacks), 900px (nav links drop; the catalogue goes to 3 columns; the custody rail flips from vertical with labels to horizontal dots-only), 1200px (catalogue reaches 4 columns).

**The Explicit-Column Rule.** The catalogue grid declares 1/2/3/4 columns explicitly and never uses `auto-fill`. The column count must be knowable in JavaScript, because each group is padded with hidden filler cells to the next multiple of 12 — the LCM of 2, 3 and 4 — so the ruled rows never end ragged at any breakpoint. A future edit that swaps this for `auto-fill` silently breaks the ruling.

## Elevation & Depth

One real shadow exists, and it points upward: each stacked section casts onto the one it is covering (`0 -28px 56px -28px`). That cast is what makes the section stack read as depth rather than as a change of colour. Every other shadow in the system is a zero-offset state ring, not elevation.

This system has no elevation. Nothing is lifted, nothing casts a shadow, and there are no cards. Depth is conveyed three ways: by tonal steps within a ground (`ink` → `ink-2` → `ink-3`, `bone` → `bone-2` → `bone-3`), by 1px hairline rules at 18% opacity, and by scale — a 6rem headline against a 12px spec line does more spatial work than any shadow would.

The only `box-shadow` values in the build are concentric rings at zero offset and zero blur, used as state indicators rather than as depth: a 4px halo around the live status dot (pulsing to 7px), and a 6px halo around the active custody marker. They are rings, not shadows.

One surface uses a backdrop blur: the fixed mobile action bar sits on `rgba(7, 18, 10, 0.94)` with a 14px blur and a hairline top border, so content scrolling under it stays legible without a hard band.

### Named Rules

**The No-Lift Rule.** Surfaces never leave the page. If an element needs to separate from its neighbours, it gets a hairline, a tonal step, or a size change — in that order. Offset drop shadows are not part of this world.

## Shapes

Corners are effectively square. The system uses three radii and no others: a 2px near-square on buttons, the tick box and the focus ring; a 3px on the two inset surfaces (search field, empty state); and a full pill (99px) reserved for genuinely round or capsule things — filter chips, status dots, custody markers, and the rail.

Borders are always 1px and always the hairline token, except where a border carries meaning: the 3px custody rail, the 3px strike through an unavailable test, and the 1px `--alert` left border on the not-available notice. The mark itself is the one organic form in an otherwise rectilinear system.

**The Ruled-Not-Boxed Rule.** A list gets a top rule and a rule under each row. It does not get a border on four sides. Enclosure is reserved for the two surfaces the patient types into or reads as a dead end.

## Components

### Buttons
- **Shape:** near-square (2px radius), 3.25rem minimum height, 1rem × 1.5rem padding, mono label at 0.6875rem / 0.2em uppercase with a 16px inline icon.
- **Primary:** Signal Green fill with green-black text on dark grounds; deep brand green with white on bone; white with deep green on the green ground. The variant is chosen by the ground class it sits inside, not by a prop.
- **Secondary (WhatsApp):** transparent with a hairline border, inheriting the ground's text colour. On hover the border and text both go green.
- **Hover / Focus:** a 2px lift (`translateY(-2px)`) plus a colour shift, over 0.35s on the standard ease. Focus is the global 2px Signal Green outline at 3px offset — switched to the deeper green inside a bone ground.
- **Buttons never carry a shadow and never change size on hover.**

### Chips
- **Style:** pill outline, hairline border, mono uppercase at 0.6875rem, dim text, with a tabular count at 60% opacity trailing the name.
- **State:** selected fills with deep brand green and white text; hover moves border and text to green. Minimum height 2.5rem for thumb targets.

### Inputs
- **Style:** recessed bone surface (`bone-2`) with a hairline border and 3px radius, a 20px search glyph in the faint tier, and a 1.125rem vertical padding that puts the field near 3.5rem tall.
- **Focus:** the whole field responds — border goes deep green and the fill lightens — via `:focus-within`, so the affordance is the field, not the caret.
- **Clear affordance:** a round icon button in the dim tier that goes red on hover, the one non-warning use of the red and only because clearing is destructive.

### Navigation
- Inline links in the dim tier with a green hover, no underline, no active-state marker (single page). Below 900px the links drop entirely and below 560px the header's call button drops too — navigation is replaced by the fixed action bar, not squeezed into a menu.

### Catalogue Row
A full-width ruled button: hairline underline, 3.25rem minimum height, a 20px square tick box at 2px radius with a transparent check that becomes white on a green fill when picked. Hover shifts the text green and slides the row 4px right. The row is the entire hit target.

### Custody Rail (signature)
The page's one authored motion moment. A 3px rail with six markers, driven by a single unitless custom property: the fill is a `scaleY` (or `scaleX` below 900px) transform from a top/left origin, so the fill lands exactly on the active marker and no layout property animates. Passed markers fill green; the active marker scales to 1.35 and gains a 6px halo. Inactive scroll steps hold at 0.58 opacity — the floor at which body text still passes contrast, because every stage is real information.

### Status Indicator
An 8px dot plus a text label: Signal Green with a slow 3s halo pulse when open, Alarm Red static when closed. It appears on three sections and its own colour is the only place green and red are ever adjacent.

## Do's and Don'ts

### Do:
- **Do** put every piece of practical content on a bone ground and reserve the green-black for the opening, the custody narrative, and the close.
- **Do** set the mono spec line below its heading, carrying a real measurement.
- **Do** separate with a hairline rule at 18% opacity and a tonal step of the ground, not with a card.
- **Do** let the ground class choose a component's colours — write `.on-bone .btn-primary`, not a new button variant.
- **Do** animate transform and opacity only, over `cubic-bezier(0.16, 1, 0.3, 1)`, at 0.25–0.35s for state and 0.5–0.7s for scroll-driven change.
- **Do** keep all three text tiers above 4.5:1 on their own ground and check any new tier against daylight, not against a dark room.
- **Do** declare explicit column counts on the catalogue grid and keep the multiple-of-12 filler padding.
- **Do** tint the mark with `currentColor` through the CSS mask so one asset serves every context; regenerate `public/logo-mark.png` from `logo.jpg` by the procedure in README.md.

### Don't:
- **Don't** set a mono line above a heading as an eyebrow or kicker, and don't set one that carries no measurement.
- **Don't** number a section whose order is not itself the information.
- **Don't** spend the red on anything but a genuine warning or a genuine absence.
- **Don't** add a fourth, dimmer text tier, and don't drop opacity below 0.58 on anything carrying words.
- **Don't** lift a surface with an offset shadow or wrap a list in a four-sided border.
- **Don't** transition a layout property (height, width, margin, top) — these were deliberately removed; scale and translate instead.
- **Don't** introduce a second icon family, a glyph or emoji icon, or a raster logo where the mask will do. Icons are one authored set: 24px box, 1.6 stroke, round caps.
- **Don't** replace the catalogue's explicit columns with `auto-fill` — it silently breaks the ruled-row padding.
