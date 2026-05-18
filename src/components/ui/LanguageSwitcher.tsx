"use client";

import type { Lang } from "@/lib/translations";
import { useLanguage } from "@/components/providers/LanguageProvider";

const langAria: Record<Lang, string> = {
  ru: "Выбор языка",
  kz: "Тілді таңдау",
  en: "Language selection",
};

const options: { code: Lang; label: string }[] = [
  { code: "kz", label: "KZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-md border border-white/15 bg-[#0c1a2e]/80 shadow-sm backdrop-blur ${compact ? "p-px" : "p-0.5"}`}
      role="group"
      aria-label={langAria[lang]}
    >
      {options.map((opt, index) => {
        const active = lang === opt.code;
        return (
          <span key={opt.code} className="flex items-center">
            {index > 0 ? (
              <span
                className={`select-none text-white/25 ${compact ? "px-0.5 text-[10px]" : "px-1 text-xs"}`}
              >
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLang(opt.code)}
              className={`rounded font-semibold tracking-wide transition-all duration-200 ${
                compact
                  ? "min-w-[1.75rem] px-1.5 py-0.5 text-[10px]"
                  : "min-w-[2.25rem] px-2 py-1 text-xs"
              } ${
                active
                  ? "bg-[#c9a24d] text-[#0a1628] shadow-sm"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
              aria-pressed={active}
              aria-label={opt.label}
            >
              {opt.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
