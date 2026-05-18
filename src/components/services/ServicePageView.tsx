"use client";

import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SeoHead } from "@/components/seo/SeoHead";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  getServicePage,
  servicePageUi,
  serviceShortTitles,
  type ServiceSlug,
} from "@/lib/services";
import { LANG_QUERY, buildPageUrl, homeSection } from "@/lib/site";

type ServicePageViewProps = {
  slug: ServiceSlug;
};

export function ServicePageView({ slug }: ServicePageViewProps) {
  const { lang } = useLanguage();
  const page = getServicePage(slug, lang);
  const ui = servicePageUi[lang];
  const path = `/services/${slug}`;

  return (
    <PageShell>
      <SeoHead
        title={page.meta.title}
        description={page.meta.description}
        keywords={page.meta.keywords}
        canonicalPath={path}
      />
      <ServiceJsonLd slug={slug} />

      <article className="bg-[#f7f8fa] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-slate-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0a1628] hover:underline">
                  {ui.backHome}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-[#0a1628] hover:underline">
                  {ui.allServices}
                </Link>
              </li>
            </ol>
          </nav>

          <header>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
              {page.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton variant="primary">{ui.ctaWhatsApp}</WhatsAppButton>
              <Link
                href={homeSection("contact")}
                className="inline-flex items-center justify-center rounded-md border border-[#0a1628]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:border-[#c9a24d]/50 hover:shadow-sm"
              >
                {ui.contactLink}
              </Link>
            </div>
          </header>

          <ServiceBlock title={ui.includes} items={page.includes} />
          <ServiceBlock title={ui.whenNeeded} items={page.whenNeeded} />
          <ServiceBlock title={ui.process} items={page.processSteps} ordered />
          <ServiceBlock title={ui.documents} items={page.documents} />

          <section className="mt-12" aria-labelledby="service-faq">
            <h2 id="service-faq" className="font-display text-2xl font-semibold text-[#0a1628]">
              {ui.faq}
            </h2>
            <div className="mt-6 space-y-3">
              {page.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-slate-200 bg-white p-1"
                >
                  <summary className="cursor-pointer list-none rounded-lg px-4 py-3 text-sm font-semibold text-[#0a1628] marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {page.relatedSlugs.length > 0 ? (
            <section className="mt-12" aria-labelledby="related-services">
              <h2
                id="related-services"
                className="font-display text-2xl font-semibold text-[#0a1628]"
              >
                {ui.related}
              </h2>
              <ul className="mt-4 space-y-2">
                {page.relatedSlugs.map((related) => (
                  <li key={related}>
                    <Link
                      href={buildPageUrl(`/services/${related}`, LANG_QUERY[lang])}
                      className="text-sm font-medium text-[#0a1628] underline-offset-2 hover:text-[#c9a24d] hover:underline"
                    >
                      {serviceShortTitles[related][lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
    </PageShell>
  );
}

function ServiceBlock({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-[#0a1628]">{title}</h2>
      <List
        className={`mt-4 space-y-2 text-sm leading-relaxed text-slate-600 ${ordered ? "list-decimal pl-5" : "list-disc pl-5"}`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </section>
  );
}
