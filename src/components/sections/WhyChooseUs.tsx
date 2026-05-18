"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-us"
      className="border-y border-slate-200/80 bg-[#0a1628] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">{t.why.subtitle}</p>
        </header>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-[#c9a24d]/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[#c9a24d]"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
