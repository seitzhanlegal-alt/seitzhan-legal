"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getServicePage, type ServiceSlug } from "@/lib/services";
import { defaultOgImage } from "@/lib/seo";
import { LANG_QUERY, SITE_URL, buildPageUrl } from "@/lib/site";
import { WHATSAPP_PHONE_DIGITS } from "@/lib/whatsapp";

type ServiceJsonLdProps = {
  slug: ServiceSlug;
};

export function ServiceJsonLd({ slug }: ServiceJsonLdProps) {
  const { lang, t } = useLanguage();
  const page = getServicePage(slug, lang);

  const json = useMemo(() => {
    const url = buildPageUrl(`/services/${slug}`, LANG_QUERY[lang]);
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.meta.description,
      url,
      image: defaultOgImage,
      provider: {
        "@type": "LegalService",
        name: t.brand.firmName,
        telephone: `+${WHATSAPP_PHONE_DIGITS}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Almaty",
          addressCountry: "KZ",
          streetAddress: t.office.address,
        },
        areaServed: [
          { "@type": "City", name: "Almaty" },
          { "@type": "Country", name: "Kazakhstan" },
        ],
      },
      areaServed: { "@type": "City", name: "Almaty" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#contact`,
      },
    };
  }, [slug, lang, page, t]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
