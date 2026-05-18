"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ServiceSlug } from "@/lib/services";
import { servicePageUi, serviceShortTitles } from "@/lib/services";
import { LANG_QUERY, buildPageUrl } from "@/lib/site";

/** Maps homepage service cards to dedicated SEO pages (order matches translations) */
const HOME_SERVICE_SLUGS: ServiceSlug[] = [
  "legal-consultation-almaty",
  "contract-drafting",
  "business-legal-support",
  "civil-law",
  "family-lawyer",
  "court-representation",
];

export function Services() {
  const { t, lang } = useLanguage();
  const ui = servicePageUi[lang];

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            {t.services.subtitle}
          </p>
          <Link
            href={buildPageUrl("/services", LANG_QUERY[lang])}
            className="mt-4 inline-flex text-sm font-semibold text-[#c9a24d] underline-offset-4 hover:underline"
          >
            {ui.allServices} →
          </Link>
        </header>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const slug = HOME_SERVICE_SLUGS[index];
            return (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-[#fbfbfc] p-6 transition duration-300 hover:border-[#0a1628]/15 hover:bg-white hover:shadow-md"
              >
                <span className="font-display text-sm font-semibold text-[#c9a24d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#0a1628]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {slug ? (
                  <Link
                    href={buildPageUrl(`/services/${slug}`, LANG_QUERY[lang])}
                    className="mt-4 text-sm font-semibold text-[#0a1628] underline-offset-2 hover:text-[#c9a24d] hover:underline"
                  >
                    {ui.readMore}: {serviceShortTitles[slug][lang]}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
