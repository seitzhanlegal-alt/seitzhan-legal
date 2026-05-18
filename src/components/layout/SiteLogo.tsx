"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { a11yLabels } from "@/lib/seo";
import { LOGO_PATH } from "@/lib/site";

type SiteLogoProps = {
  onNavigate?: () => void;
};

export function SiteLogo({ onNavigate }: SiteLogoProps) {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const [logoAvailable, setLogoAvailable] = useState(true);
  const a11y = a11yLabels[lang];
  const href = pathname === "/" ? "#home" : "/";

  return (
    <Link
      href={href}
      className="group flex shrink-0 items-center gap-2 leading-tight"
      onClick={onNavigate}
    >
      {logoAvailable ? (
        <span className="flex h-9 w-auto items-center overflow-visible md:h-10 lg:h-11">
          <Image
            src={LOGO_PATH}
            alt={`${a11y.logoAlt} — ${t.brand.firmName}`}
            width={100}
            height={40}
            className="h-full w-auto origin-left scale-100 object-contain md:scale-100"
            priority
            sizes="(max-width: 768px) 120px, 140px"
            onError={() => setLogoAvailable(false)}
          />
        </span>
      ) : null}
      {!logoAvailable ? (
        <span className="flex flex-col">
          <span className="font-display text-base font-semibold tracking-tight text-white transition-colors group-hover:text-[#e6c77c] sm:text-lg">
            {t.brand.firmName}
          </span>
          <span className="hidden text-[10px] leading-snug text-white/60 sm:block">
            {t.brand.lawyerTitle}
          </span>
        </span>
      ) : (
        <span className="hidden min-w-0 flex-col sm:flex">
          <span className="text-[10px] leading-snug text-white/60">
            {t.brand.lawyerTitle}
          </span>
        </span>
      )}
    </Link>
  );
}
