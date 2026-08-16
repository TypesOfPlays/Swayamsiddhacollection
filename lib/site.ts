/**
 * Every confirmed fact about the collection centre lives here.
 * Nothing on the page invents a fact that is not in this file.
 */

/**
 * The public address of this site. Used for the sitemap, and for turning the
 * social-preview image path into an absolute URL.
 *
 * If the domain ever changes, change it here AND in `public/CNAME`.
 */
export const SITE_URL = "https://swayamsiddhadiagnostics.info";

export const SITE = {
  brand: "Swayamsiddha",
  brandFull: "Swayamsiddha Diagnostics",
  surface: "Collection Centre",

  centre: {
    label: "Collection Centre",
    street: "Old Hospital Road",
    town: "Kendrapara",
    state: "Odisha",
    addressLines: ["Old Hospital Road", "Kendrapara, Odisha"],
  },

  mainLab: {
    label: "Main Laboratory",
    street: "Icchapur",
    town: "Kendrapara",
    state: "Odisha",
    addressLines: ["Icchapur", "Kendrapara, Odisha"],
    website: "https://swayamsiddhadiagnostics.in",
    websiteLabel: "swayamsiddhadiagnostics.in",
  },

  phone: {
    display: "78478 89009",
    display91: "+91 78478 89009",
    href: "tel:+917847889009",
  },

  whatsapp: {
    number: "917847889009",
    href: "https://wa.me/917847889009",
  },

  email: {
    address: "swayamsiddha999@yahoo.com",
    href: "mailto:swayamsiddha999@yahoo.com",
  },

  /**
   * Confirmed: 6:00 AM – 9:00 PM, every day including Sunday.
   * Shown in 12-hour form everywhere a patient reads it. The 24-hour values
   * exist only for the search-engine listing, where schema.org requires them.
   */
  hours: {
    openHour: 6,
    closeHour: 21,
    display: "6:00 AM – 9:00 PM",
    compact: "6 AM – 9 PM",
    schemaOpens: "06:00",
    schemaCloses: "21:00",
    days: "All 7 days, including Sunday",
    daysShort: "All 7 days",
    hoursPerDay: 15,
  },

  /** Fasting-sample window — the practical reason the centre opens at 6. */
  fasting: {
    window: "6:00 – 9:00 AM",
    note: "Fasting tests are best given early. Come 8–12 hours after your last meal; water is allowed.",
  },
} as const;

/** Services confirmed available at THIS centre. */
export const SERVICES = [
  {
    key: "collection",
    name: "Sample collection",
    spec: "ALL 73 TESTS · DRAWN HERE",
    body:
      "Blood, urine, stool and fluid samples are drawn at Old Hospital Road and carried to our own laboratory at Icchapur for testing.",
  },
  {
    key: "home",
    name: "Home collection",
    spec: "WE COME TO YOU · CALL TO ARRANGE",
    body:
      "Our staff travels to the patient. Useful for elderly patients, post-operative patients, and anyone who cannot travel to the centre.",
  },
  {
    key: "group",
    name: "Group & corporate testing",
    spec: "SCHOOLS · OFFICES · ORGANISATIONS",
    body:
      "Health check-ups arranged for a whole workforce, school or organisation. Call to discuss the panel and the schedule.",
  },
] as const;

/** Confirmed NOT available here. Stated plainly — never hidden. */
export const NOT_HERE = [
  {
    name: "Digital X-ray",
    where: "Main laboratory, Icchapur",
  },
  {
    name: "ECG",
    where: "Main laboratory, Icchapur",
  },
] as const;

/** The patient's four moves, in order. */
export const RITUAL = [
  {
    key: "FIND",
    index: "01",
    title: ["Find your", "test."],
    body:
      "Your doctor wrote it in shorthand — KFT, LFT, TSH, HbA1c. Search that exact shorthand below and see straight away whether it is done here.",
    spec: "73 TESTS · 10 GROUPS · SEARCHABLE",
  },
  {
    key: "COME",
    index: "02",
    title: ["Come in, or", "call us out."],
    body:
      "Walk in to Old Hospital Road any day of the week, or ask us to come to your home. Fasting tests are best given in the first hours after opening.",
    spec: "6 AM – 9 PM · ALL 7 DAYS",
  },
  {
    key: "GIVE",
    index: "03",
    title: ["Give the", "sample."],
    body:
      "The sample is drawn, labelled and sealed here. Nothing is tested at this address — this is a collection centre, and we say so plainly.",
    spec: "DRAWN AND SEALED AT OLD HOSPITAL ROAD",
  },
  {
    key: "LAB",
    index: "04",
    title: ["Tested at", "our own lab."],
    body:
      "It goes to Swayamsiddha's own laboratory at Icchapur — not to an unrelated lab. Same company, same pathology, both ends of the journey.",
    spec: "SWAYAMSIDDHA DIAGNOSTICS · ICCHAPUR",
  },
] as const;

/**
 * Custody waypoints for the scroll-driven journey readout.
 *
 * `image` points at `public/custody/`. Drop a photo in with the matching
 * filename and it appears automatically — see `public/custody/README.txt`.
 * Until a file exists the step shows a designed empty frame instead, so the
 * page is never broken by a missing image.
 */
export const CUSTODY = [
  {
    stage: "01",
    label: "DRAWN",
    where: "Old Hospital Road",
    note: "Sample taken at the collection centre",
    image: "/custody/01-drawn.webp",
  },
  {
    stage: "02",
    label: "LABELLED",
    where: "Old Hospital Road",
    note: "Patient details written on the tube",
    image: "/custody/02-labelled.webp",
  },
  {
    stage: "03",
    label: "SEALED",
    where: "Old Hospital Road",
    note: "Packed for transport",
    image: "/custody/03-sealed.webp",
  },
  {
    stage: "04",
    label: "IN TRANSIT",
    where: "Kendrapara",
    note: "Carried to the main laboratory",
    image: "/custody/04-in-transit.webp",
  },
  {
    stage: "05",
    label: "RECEIVED",
    where: "Icchapur",
    note: "Logged in at Swayamsiddha Diagnostics",
    image: "/custody/05-received.webp",
  },
  {
    stage: "06",
    label: "TESTED",
    where: "Icchapur",
    note: "Run on the laboratory's own analysers",
    image: "/custody/06-tested.webp",
  },
] as const;
