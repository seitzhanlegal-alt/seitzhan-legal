import type { Lang } from "@/lib/translations";

const DEFAULT_DEV_URL = "http://localhost:3000";

/** Public site URL — optional until domain is purchased */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_DEV_URL
);

export const SITE_AUTHOR = "Сейтжан Ерқожа";

export const LOGO_PATH = "/logotype.jpg";

export const OG_IMAGE_PATH = "/og-image.jpg";

/** BCP 47 / hreflang codes for each app language */
export const HREFLANG_BY_LANG = {
  ru: "ru",
  kz: "kk",
  en: "en",
} as const;

/** `?lang=` query values (kk for Kazakh) */
export const LANG_QUERY: Record<Lang, string> = {
  ru: "ru",
  kz: "kk",
  en: "en",
};

export function buildPageUrl(path = "/", langQuery?: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(normalized, SITE_URL);
  if (langQuery) url.searchParams.set("lang", langQuery);
  return url.toString();
}

/** Homepage URL with optional language */
export function pageUrl(langQuery?: string): string {
  return buildPageUrl("/", langQuery);
}

export function homeSection(hash: string): string {
  const id = hash.replace(/^#/, "");
  return `/#${id}`;
}
