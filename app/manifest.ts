import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Web app manifest. This is what Android uses when a patient chooses
 * "Add to Home screen" — without it the shortcut gets a screenshot thumbnail
 * instead of the mark, and opens in a browser chrome rather than standalone.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.brandFull} — ${SITE.surface}`,
    short_name: SITE.brand,
    description: `Sample collection at ${SITE.centre.street}, ${SITE.centre.town}. Open ${SITE.hours.display}, ${SITE.hours.daysShort.toLowerCase()}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#07120a",
    theme_color: "#07120a",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
