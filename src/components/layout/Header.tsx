"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { a11yLabels } from "@/lib/seo";
import { homeSection } from "@/lib/site";

const sectionIds = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "practice-areas", key: "practice" as const },
  { id: "faq", key: "faq" as const },
  { id: "contact", key: "contact" as const },
];

export function Header() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const a11y = a11yLabels[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionHref = (id: string) =>
    pathname === "/" ? `#${id}` : homeSection(id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClass =
    "rounded-md px-2 py-1 text-xs font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white lg:text-sm";

  const shell = scrolled
    ? "border-b border-white/10 bg-[#071426]/95 shadow-lg backdrop-blur-md"
    : "border-b border-transparent bg-[#071426]/90 backdrop-blur";

  return (
    <header
      className={`relative sticky top-0 z-50 transition-all duration-300 ${shell}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:gap-3 lg:px-8">
        <SiteLogo onNavigate={() => setOpen(false)} />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label={a11y.primaryNav}
        >
          {sectionIds.map((item) => (
            <a key={item.id} href={sectionHref(item.id)} className={navLinkClass}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher compact />
          <WhatsAppButton
            variant="primary"
            className="hidden px-3 py-1.5 text-xs shadow-black/20 sm:inline-flex"
          >
            {t.nav.contactWhatsApp}
          </WhatsAppButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? a11y.closeMenu : a11y.openMenu}</span>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 z-40 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} border-t border-white/10 bg-[#071426]/98 shadow-lg transition-all duration-200`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label={a11y.primaryNav}
        >
          {sectionIds.map((item) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </a>
          ))}
          <WhatsAppButton variant="outline" className="mt-2 w-full">
            {t.nav.contactWhatsApp}
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}

function IconMenu() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
