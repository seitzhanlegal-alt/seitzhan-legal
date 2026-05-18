import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/services/ServicePageView";
import { createPageMetadata } from "@/lib/metadata";
import { getServicePage, isServiceSlug, SERVICE_SLUGS } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const page = getServicePage(slug, "ru");
  return createPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    path: `/services/${slug}`,
    lang: "ru",
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  return <ServicePageView slug={slug} />;
}
