"use client";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#050f1c] via-[#0a1f3a] to-[#071426] text-white"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#c9a24d]/10 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-[#1e3a5f]/40 blur-3xl sm:h-72 sm:w-72"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-2xl flex-1 animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e6c77c]">
            {t.brand.firmName}
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#c9a24d] px-6 py-3 text-sm font-semibold text-[#071426] shadow-lg shadow-black/25 transition hover:bg-[#ddb86a] hover:shadow-xl active:scale-[0.99]"
              aria-label={t.hero.ctaConsult}
            >
              {t.hero.ctaConsult}
            </a>
            <WhatsAppButton
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              {t.hero.ctaWhatsApp}
            </WhatsAppButton>
          </div>
        </div>

        <aside className="relative flex-1 animate-fade-up-delayed">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:ring-[#c9a24d]/40">
                <dt className="text-white/60">{t.about.cards.experience.title}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-[#e6c77c]">
                  5+
                </dd>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:ring-[#c9a24d]/40">
                <dt className="text-white/60">{t.about.cards.consultations.title}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-[#e6c77c]">
                  300+
                </dd>
              </div>
              <div className="col-span-2 rounded-xl border border-[#c9a24d]/30 bg-[#c9a24d]/10 p-4">
                <p className="text-sm leading-relaxed text-white/85">
                  {t.why.subtitle}
                </p>
                <a
                  href="#about"
                  className="mt-3 inline-flex text-sm font-semibold text-[#e6c77c] underline-offset-4 hover:underline"
                >
                  {t.nav.about}
                </a>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
