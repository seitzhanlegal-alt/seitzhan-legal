"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">{t.faq.subtitle}</p>
        </header>

        <div className="mt-10 space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-[#fbfbfc] p-1 transition open:border-[#c9a24d]/40 open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-4 text-left text-sm font-semibold text-[#0a1628] marker:hidden sm:text-base [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm font-semibold sm:text-base">{item.question}</h3>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#c9a24d] transition group-open:rotate-45 group-open:border-[#c9a24d]/50"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
