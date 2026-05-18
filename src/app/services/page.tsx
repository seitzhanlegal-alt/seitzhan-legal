import type { Metadata } from "next";
import { ServicesIndexView } from "@/components/services/ServicesIndexView";
import { createPageMetadata } from "@/lib/metadata";
import { servicesIndexCopy } from "@/lib/services/index-page";

const ru = servicesIndexCopy.ru;

export const metadata: Metadata = createPageMetadata({
  title: ru.metaTitle,
  description: ru.metaDescription,
  keywords: ru.metaKeywords,
  path: "/services",
  lang: "ru",
});

export default function ServicesIndexPage() {
  return <ServicesIndexView />;
}
