"use client";

import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SeoHead } from "@/components/seo/SeoHead";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { servicesIndexCopy } from "@/lib/services/index-page";
import {
  SERVICE_SLUGS,
  serviceShortTitles,
} from "@/lib/services";
import { LANG_QUERY, buildPageUrl } from "@/lib/site";

export function ServicesIndexView() {
  const { lang } = useLanguage();
  const copy = servicesIndexCopy[lang];

  return (
    <PageShell>
      <SeoHead
        title={copy.metaTitle}
        description={copy.metaDescription}
        keywords={copy.metaKeywords}
        canonicalPath="/services"
      />
      <section className="bg-[#f7f8fa] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
              {copy.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {copy.intro}
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex text-sm font-semibold text-[#c9a24d] underline-offset-4 hover:underline"
            >
              {copy.backHome}
            </Link>
          </header>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={buildPageUrl(`/services/${slug}`, LANG_QUERY[lang])}
                  className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#c9a24d]/40 hover:shadow-md"
                >
                  <h2 className="text-lg font-semibold text-[#0a1628]">
                    {serviceShortTitles[slug][lang]}
                  </h2>
                  <span className="mt-2 inline-block text-sm font-medium text-[#c9a24d]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
