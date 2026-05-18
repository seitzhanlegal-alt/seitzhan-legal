"use client";

import { useEffect, useMemo } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  buildAlternateLanguagesForPath,
  defaultOgImage,
  seoExtras,
} from "@/lib/seo";
import { HREFLANG_BY_LANG, LANG_QUERY, SITE_AUTHOR, buildPageUrl } from "@/lib/site";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

type SeoHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
};

export function SeoHead({
  title,
  description,
  keywords,
  canonicalPath = "/",
}: SeoHeadProps = {}) {
  const { lang, t } = useLanguage();
  const extras = seoExtras[lang];

  const pageTitle = title ?? t.meta.title;
  const pageDescription = description ?? t.meta.description;
  const pageKeywords = keywords ?? extras.keywords;
  const canonical = buildPageUrl(canonicalPath, LANG_QUERY[lang]);
  const alternates = useMemo(
    () => buildAlternateLanguagesForPath(canonicalPath),
    [canonicalPath],
  );

  useEffect(() => {
    document.title = pageTitle;

    upsertMeta("name", "description", pageDescription);
    upsertMeta("name", "keywords", pageKeywords);
    upsertMeta("name", "author", SITE_AUTHOR);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", t.brand.firmName);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:locale", extras.ogLocale);
    upsertMeta("property", "og:image", defaultOgImage);
    upsertMeta("property", "og:image:alt", t.brand.firmName);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", defaultOgImage);

    upsertLink("canonical", canonical);

    Object.entries(alternates).forEach(([hreflang, href]) => {
      upsertLink("alternate", href, hreflang);
    });
  }, [
    lang,
    t,
    extras,
    canonical,
    alternates,
    pageTitle,
    pageDescription,
    pageKeywords,
  ]);

  useEffect(() => {
    document.documentElement.lang = HREFLANG_BY_LANG[lang];
  }, [lang]);

  return null;
}
