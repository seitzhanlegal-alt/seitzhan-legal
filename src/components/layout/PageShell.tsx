"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { a11yLabels } from "@/lib/seo";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const { lang } = useLanguage();
  const a11y = a11yLabels[lang];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0a1628] focus:shadow-lg"
      >
        {a11y.skipToContent}
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
