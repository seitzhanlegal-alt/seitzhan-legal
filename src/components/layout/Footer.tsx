"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { a11yLabels } from "@/lib/seo";
import { siteNavLabels } from "@/lib/site-nav";
import { SERVICE_SLUGS, serviceShortTitles } from "@/lib/services";
import { LANG_QUERY, buildPageUrl, homeSection } from "@/lib/site";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_PHONE_DIGITS } from "@/lib/whatsapp";

const ids = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "practice-areas", key: "practice" as const },
  { id: "faq", key: "faq" as const },
  { id: "contact", key: "contact" as const },
];

export function Footer() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const a11y = a11yLabels[lang];
  const nav = siteNavLabels[lang];
  const wa = buildWhatsAppUrl(t.waPrefill);

  const sectionHref = (id: string) =>
    pathname === "/" ? `#${id}` : homeSection(id);

  return (
    <footer className="border-t border-white/10 bg-[#050f1c] py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold text-white">
            {t.brand.firmName}
          </p>
          <p className="mt-2 text-sm text-white/70">{t.brand.lawyerTitle}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#e6c77c]">
            {t.footer.quickLinks}
          </p>
          <nav aria-label={a11y.footerNav}>
            <ul className="mt-4 space-y-2 text-sm">
              {ids.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-white/75 transition hover:text-white"
                    href={sectionHref(item.id)}
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="text-white/75 transition hover:text-white"
                  href={sectionHref("reviews")}
                >
                  {nav.reviews}
                </a>
              </li>
              <li>
                <Link
                  className="text-white/75 transition hover:text-white"
                  href={buildPageUrl("/services", LANG_QUERY[lang])}
                >
                  {nav.allServices}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/75 transition hover:text-white"
                  href={buildPageUrl("/blog", LANG_QUERY[lang])}
                >
                  {nav.blog}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#e6c77c]">
            {nav.servicePages}
          </p>
          <ul className="mt-4 max-h-48 space-y-2 overflow-y-auto text-sm">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  className="text-white/75 transition hover:text-white"
                  href={buildPageUrl(`/services/${slug}`, LANG_QUERY[lang])}
                >
                  {serviceShortTitles[slug][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#e6c77c]">
            {t.footer.contacts}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a className="hover:text-white" href={`tel:+${WHATSAPP_PHONE_DIGITS}`}>
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${t.office.email}`}>
                {t.office.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 font-semibold text-[#25D366] hover:text-[#4fe384]"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {t.brand.firmName}. {t.footer.rights}
        </p>
        <p className="mt-2">{t.footer.privacy}</p>
      </div>
    </footer>
  );
}
