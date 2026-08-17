import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      // Date only. A full timestamp with milliseconds is valid ISO 8601 but
      // unusual in a sitemap, and plain YYYY-MM-DD is what the spec shows.
      lastModified: new Date().toISOString().slice(0, 10),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
