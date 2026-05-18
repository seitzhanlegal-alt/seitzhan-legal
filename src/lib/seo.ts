import type { Lang } from "@/lib/translations";
import { LANG_QUERY, OG_IMAGE_PATH, SITE_URL, buildPageUrl } from "@/lib/site";

export type SeoExtras = {
  keywords: string;
  ogLocale: string;
};

/** SEO-only strings — visible page copy stays in translations.ts */
export const seoExtras: Record<Lang, SeoExtras> = {
  ru: {
    keywords:
      "юридические услуги Алматы, адвокат Алматы, юридическая консультация Алматы, защита в суде, составление договоров, юридическая помощь Казахстан",
    ogLocale: "ru_RU",
  },
  kz: {
    keywords:
      "Алматы заңгерлік қызметтер, адвокат кеңесі, заңгерлік кеңес Алматы, сотта қорғау, шарттар дайындау, Қазақстан заңгер",
    ogLocale: "kk_KZ",
  },
  en: {
    keywords:
      "legal services in Almaty, lawyer in Kazakhstan, legal consultation Almaty, court representation, contract drafting, attorney Almaty",
    ogLocale: "en_US",
  },
};

export const a11yLabels: Record<
  Lang,
  {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    footerNav: string;
    logoAlt: string;
  }
> = {
  ru: {
    skipToContent: "Перейти к основному содержанию",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    primaryNav: "Основная навигация",
    footerNav: "Навигация в подвале",
    logoAlt: "Логотип",
  },
  kz: {
    skipToContent: "Негізгі мазмұнға өту",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    primaryNav: "Негізгі навигация",
    footerNav: "Төменгі навигация",
    logoAlt: "Логотип",
  },
  en: {
    skipToContent: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary navigation",
    footerNav: "Footer navigation",
    logoAlt: "Logo",
  },
};

export function buildAlternateLanguagesForPath(
  path = "/",
): Record<string, string> {
  return {
    ru: buildPageUrl(path, LANG_QUERY.ru),
    kk: buildPageUrl(path, LANG_QUERY.kz),
    en: buildPageUrl(path, LANG_QUERY.en),
    "x-default": buildPageUrl(path, LANG_QUERY.ru),
  };
}

export function buildAlternateLanguages(): Record<string, string> {
  return buildAlternateLanguagesForPath("/");
}

export function absoluteAsset(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultOgImage = absoluteAsset(OG_IMAGE_PATH);
