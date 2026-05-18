import type { Metadata } from "next";
import { buildAlternateLanguagesForPath } from "@/lib/seo";
import { defaultOgImage } from "@/lib/seo";
import { SITE_AUTHOR, buildPageUrl, LANG_QUERY } from "@/lib/site";
import type { Lang } from "@/lib/translations";
import { translations } from "@/lib/translations";

type PageMetaInput = {
  title: string;
  description: string;
  keywords: string;
  path: string;
  lang?: Lang;
};

export function createPageMetadata({
  title,
  description,
  keywords,
  path,
  lang = "ru",
}: PageMetaInput): Metadata {
  const canonical = buildPageUrl(path, LANG_QUERY[lang]);
  const firm = translations[lang].brand.firmName;

  return {
    title,
    description,
    keywords: keywords.split(",").map((k) => k.trim()),
    authors: [{ name: SITE_AUTHOR }],
    alternates: {
      canonical,
      languages: buildAlternateLanguagesForPath(path),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: firm,
      images: [{ url: defaultOgImage, alt: firm }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
