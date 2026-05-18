"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  type Lang,
  translations,
  type TranslationTree,
} from "@/lib/translations";
import { LANG_QUERY } from "@/lib/site";

const QUERY_TO_LANG: Record<string, Lang> = {
  ru: "ru",
  kk: "kz",
  kz: "kz",
  en: "en",
};

function langFromSearch(search: string): Lang | null {
  const param = new URLSearchParams(search).get("lang");
  if (!param) return null;
  return QUERY_TO_LANG[param.toLowerCase()] ?? null;
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationTree;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [urlReady, setUrlReady] = useState(false);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang, setLang],
  );

  useEffect(() => {
    const fromUrl = langFromSearch(window.location.search);
    if (fromUrl) {
      // Sync ?lang= from URL after hydration (SSR uses DEFAULT_LANG).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(fromUrl);
    }
    setUrlReady(true);
  }, []);

  useEffect(() => {
    if (!urlReady) return;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", LANG_QUERY[lang]);
    window.history.replaceState(null, "", url.toString());
  }, [lang, urlReady]);

  useEffect(() => {
    const htmlLang: Record<Lang, string> = { ru: "ru", en: "en", kz: "kk" };
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
