"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { a11yLabels } from "@/lib/seo";
import { siteNavLabels } from "@/lib/site-nav";
import { SERVICE_SLUGS, serviceShortTitles } from "@/lib/services";
import { LANG_QUERY, buildPageUrl, homeSection } from "@/lib/site";
import {
  buildWhatsAppUrl,
  WHATSAPP_DISPLAY,
  WHATSAPP_PHONE_DIGITS,
} from "@/lib/whatsapp";

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
    <footer className="border-t border-white/10 bg-[#050f1c] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.85fr_1.1fr_0.9fr] lg:px-8">
        <div className="space-y-6">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide text-white">
              {t.brand.firmName}
            </p>

            <p className="mt-3 text-sm text-white/70">{t.brand.lawyerTitle}</p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e6c77c]">
              Социальные сети
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/seitzhan_legal?igsh=MXZrOGczdjA0MnhpcQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/75 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@seitzhan_legal?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/75 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
              >
                <span className="text-sm font-bold tracking-tight">TT</span>
              </a>

              
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e6c77c]">
            {t.footer.quickLinks}
          </p>

          <nav aria-label={a11y.footerNav}>
            <ul className="mt-5 space-y-3 text-sm">
              {ids.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-white/70 transition hover:text-[#e6c77c]"
                    href={sectionHref(item.id)}
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}

              <li>
                <a
                  className="text-white/70 transition hover:text-[#e6c77c]"
                  href={sectionHref("reviews")}
                >
                  {nav.reviews}
                </a>
              </li>

              <li>
                <Link
                  className="text-white/70 transition hover:text-[#e6c77c]"
                  href={buildPageUrl("/services", LANG_QUERY[lang])}
                >
                  {nav.allServices}
                </Link>
              </li>

              <li>
                <Link
                  className="text-white/70 transition hover:text-[#e6c77c]"
                  href={buildPageUrl("/blog", LANG_QUERY[lang])}
                >
                  {nav.blog}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e6c77c]">
            {nav.servicePages}
          </p>

          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  className="text-white/70 transition hover:text-[#e6c77c]"
                  href={buildPageUrl(`/services/${slug}`, LANG_QUERY[lang])}
                >
                  {serviceShortTitles[slug][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e6c77c]">
            {t.footer.contacts}
          </p>

          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li>
              <a
                className="transition hover:text-[#e6c77c]"
                href={`tel:+${WHATSAPP_PHONE_DIGITS}`}
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>

            <li>
              <a
                className="break-all transition hover:text-[#e6c77c]"
                href={`mailto:${t.office.email}`}
              >
                {t.office.email}
              </a>
            </li>

            <li>
              <a
                className="inline-flex items-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 font-semibold text-[#25D366] transition hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-[#4fe384]"
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/45 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {t.brand.firmName}. {t.footer.rights}
          </p>
          <p>{t.footer.privacy}</p>
        </div>
      </div>
    </footer>
  );
}