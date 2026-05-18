"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const cardKeys = [
  "experience",
  "consultations",
  "confidential",
  "approach",
] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="border-t border-slate-200/80 bg-[#f7f8fa] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.about.lead}
          </p>
        </header>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardKeys.map((key) => {
            const card = t.about.cards[key];
            return (
              <li
                key={key}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c9a24d]/40 hover:shadow-lg"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#c9a24d] transition-all group-hover:w-14" />
                <h3 className="text-lg font-semibold text-[#0a1628]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
