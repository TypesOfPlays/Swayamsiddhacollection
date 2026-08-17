import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Martian_Mono } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/site";
import { TOTAL_TESTS, TOTAL_GROUPS } from "@/lib/tests";
import "./globals.css";
import "./sections.css";
import "./motion.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: `${SITE.brandFull} — Collection Centre, Old Hospital Road, Kendrapara`,
  description: `Give your sample at Old Hospital Road, Kendrapara. ${TOTAL_TESTS} pathology tests across ${TOTAL_GROUPS} groups, tested at Swayamsiddha's own laboratory at Icchapur. Open ${SITE.hours.display}, all 7 days. Home collection available. Call ${SITE.phone.display91}.`,
  keywords: [
    "pathology lab Kendrapara",
    "blood test Kendrapara",
    "diagnostic centre Kendrapara",
    "Old Hospital Road Kendrapara",
    "Swayamsiddha Diagnostics",
    "sample collection centre",
    "home blood collection Kendrapara",
  ],
  openGraph: {
    title: `${SITE.brandFull} — Collection Centre, Kendrapara`,
    description: `${TOTAL_TESTS} tests. Sample given on Old Hospital Road, tested at our own lab at Icchapur. Open ${SITE.hours.display}, all 7 days.`,
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },

  /**
   * Browser tab, search-result and home-screen icons.
   *
   * Google only accepts a favicon that is square at a multiple of 48px, which
   * is why the 48/96/144/192 set exists rather than a single odd size — an
   * off-spec icon is skipped and the generic globe is shown instead. The
   * classic /favicon.ico is kept because crawlers and browsers still request
   * it by convention, whatever the markup says.
   *
   * All are generated from the logo mask; see README.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07120a",
  width: "device-width",
  initialScale: 1,
};

/**
 * Direction contract. Emitted into the markup so it survives the production
 * build and can be audited at finish. Do not delete.
 */
const DIRECTION_CONTRACT = `<!--
IMPECCABLE DIRECTION CONTRACT

THESIS: This page is the sample's chain of custody, not a lab brochure. It refuses
the category default of a hero booking widget over three trust tiles, because the
one thing this centre can prove that a third-party booth cannot is that the sample
never leaves Swayamsiddha's own hands.

OWN-WORLD: Green-black and bone grounds alternating section by section; Anton caps
at architectural scale with crushed 0.82 leading; Martian Mono spec lines at 11px
and +0.2em tracking set BELOW headings carrying real measurements, never as eyebrows;
exactly one reserved red, spent only on fasting rules and on what is not available here.

STORY: A fasting patient at 6am confirms the shorthand their doctor wrote is done
here, understands the sample goes to Swayamsiddha's own Icchapur lab, and calls or
sends WhatsApp without scrolling back.

FIRST VIEWPORT: Full-bleed green-black, the mandala mark large and dim behind;
four lines of Anton at 6rem; a live OPEN NOW / CLOSED state computed from the
visitor's clock; call and WhatsApp side by side; the spec line 6 AM - 9 PM - ALL 7 DAYS.
All patient-facing times are 12-hour; 24-hour survives only in the schema.org listing.

FORM: Client-pinned references (cinemabooking.aura.build, massif.aura.build); a
pinned decision beats the roll; seed key 9493b8ee, direction round 2 superseded.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: `${SITE.brandFull} — ${SITE.surface}`,
  parentOrganization: {
    "@type": "MedicalOrganization",
    name: SITE.brandFull,
    url: SITE.mainLab.website,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.centre.street,
    addressLocality: SITE.centre.town,
    addressRegion: SITE.centre.state,
    addressCountry: "IN",
  },
  telephone: SITE.phone.display91,
  email: SITE.email.address,
  url: SITE_URL,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: SITE.hours.schemaOpens,
    closes: SITE.hours.schemaCloses,
  },
  availableService: {
    "@type": "MedicalTest",
    name: `${TOTAL_TESTS} pathology tests across ${TOTAL_GROUPS} groups`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
        />
        {children}
      </body>
    </html>
  );
}
