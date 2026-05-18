"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { defaultOgImage } from "@/lib/seo";
import { PUBLISHED_REVIEWS } from "@/lib/reviews";
import { LANG_QUERY, SITE_URL, pageUrl } from "@/lib/site";
import { WHATSAPP_PHONE_DIGITS, buildWhatsAppUrl } from "@/lib/whatsapp";

export function JsonLd() {
  const { lang, t } = useLanguage();

  const json = useMemo(() => {
    const tel = `+${WHATSAPP_PHONE_DIGITS}`;
    const waUrl = buildWhatsAppUrl(t.waPrefill);
    const page = pageUrl(LANG_QUERY[lang]);

    const services = t.services.items.map((item) => ({
      "@type": "Service",
      name: item.title,
      description: item.description,
      areaServed: {
        "@type": "City",
        name: "Almaty",
      },
      provider: {
        "@type": "LegalService",
        name: t.brand.firmName,
      },
    }));

    const localBusiness: Record<string, unknown> = {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: t.brand.firmName,
      description: t.meta.description,
      url: page,
      image: defaultOgImage,
      telephone: tel,
      email: t.office.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: t.office.address,
        addressLocality: "Almaty",
        addressRegion: "Almaty",
        addressCountry: "KZ",
      },
      areaServed: [
        { "@type": "City", name: "Almaty" },
        { "@type": "Country", name: "Kazakhstan" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: tel,
        contactType: "customer service",
        availableLanguage: ["Russian", "Kazakh", "English"],
        areaServed: "KZ",
      },
      sameAs: [
        "https://www.linkedin.com/",
        "https://www.instagram.com/",
        "https://www.facebook.com/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t.services.title,
        itemListElement: services,
      },
    };

    if (PUBLISHED_REVIEWS.length > 0) {
      const avg =
        PUBLISHED_REVIEWS.reduce((sum, r) => sum + r.rating, 0) /
        PUBLISHED_REVIEWS.length;
      localBusiness.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: avg.toFixed(1),
        reviewCount: PUBLISHED_REVIEWS.length,
        bestRating: 5,
      };
    }

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#lawyer`,
          name: t.brand.lawyerTitle.split(",")[0]?.trim() || t.brand.lawyerTitle,
          jobTitle: t.contact.lawyerName,
          worksFor: { "@id": `${SITE_URL}/#business` },
          url: page,
          telephone: tel,
          sameAs: [
            "https://www.linkedin.com/",
            "https://www.instagram.com/",
            "https://www.facebook.com/",
          ],
        },
        localBusiness,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: t.brand.firmName,
          description: t.meta.description,
          inLanguage: ["ru", "kk", "en"],
          publisher: { "@id": `${SITE_URL}/#business` },
        },
        {
          "@type": "WebPage",
          "@id": `${page}#webpage`,
          url: page,
          name: t.meta.title,
          description: t.meta.description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#business` },
        },
        {
          "@type": "ContactPoint",
          contactType: "WhatsApp",
          telephone: tel,
          url: waUrl,
          availableLanguage: ["Russian", "Kazakh", "English"],
        },
      ],
    };
  }, [lang, t]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
