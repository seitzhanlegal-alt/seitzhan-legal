"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function PracticeAreas() {
  const { t } = useLanguage();

  return (
    <section id="practice-areas" className="bg-[#f7f8fa] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {t.practice.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            {t.practice.subtitle}
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.practice.items.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a24d] to-[#e6c77c]" />
              <h3 className="pt-2 text-lg font-semibold text-[#0a1628]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
