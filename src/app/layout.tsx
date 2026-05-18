import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { buildAlternateLanguages, defaultOgImage, seoExtras } from "@/lib/seo";
import { SITE_AUTHOR, SITE_URL, pageUrl } from "@/lib/site";
import { translations } from "@/lib/translations";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ru = translations.ru;
const ruSeo = seoExtras.ru;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: ru.meta.title,
    template: `%s | ${ru.brand.firmName}`,
  },
  description: ru.meta.description,
  keywords: ruSeo.keywords.split(", ").map((k) => k.trim()),
  authors: [{ name: SITE_AUTHOR }],
  creator: SITE_AUTHOR,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: pageUrl("ru"),
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    type: "website",
    locale: ruSeo.ogLocale,
    url: pageUrl("ru"),
    siteName: ru.brand.firmName,
    title: ru.meta.title,
    description: ru.meta.description,
    images: [
      {
        url: defaultOgImage,
        alt: ru.brand.firmName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ru.meta.title,
    description: ru.meta.description,
    images: [defaultOgImage],
  },
  category: "legal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#f7f8fa] font-sans text-[#0a1628]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
