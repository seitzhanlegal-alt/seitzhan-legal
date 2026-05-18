import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";
import { LANG_QUERY, buildPageUrl } from "@/lib/site";

const LANG_ENTRIES = [
  { query: LANG_QUERY.ru, hreflang: "ru" },
  { query: LANG_QUERY.kz, hreflang: "kk" },
  { query: LANG_QUERY.en, hreflang: "en" },
] as const;

function alternatesForPath(path: string): Record<string, string> {
  const languages = Object.fromEntries(
    LANG_ENTRIES.map(({ query, hreflang }) => [hreflang, buildPageUrl(path, query)]),
  );
  languages["x-default"] = buildPageUrl(path, LANG_QUERY.ru);
  return languages;
}

function entry(
  path: string,
  priority: number,
  changeFrequency: "weekly" | "monthly" = "weekly",
): MetadataRoute.Sitemap[number] {
  return {
    url: buildPageUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages: alternatesForPath(path) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const items: MetadataRoute.Sitemap = [
    entry("/", 1),
    entry("/services", 0.9),
    entry("/blog", 0.7, "monthly"),
    ...SERVICE_SLUGS.flatMap((slug) => {
      const path = `/services/${slug}`;
      return [
        entry(path, 0.85),
        ...LANG_ENTRIES.map(({ query }) => ({
          url: buildPageUrl(path, query),
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        })),
      ];
    }),
    ...LANG_ENTRIES.map(({ query }) => ({
      url: buildPageUrl("/", query),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];

  return items;
}
