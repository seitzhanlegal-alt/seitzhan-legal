import type { Lang } from "@/lib/translations";

export const SERVICE_SLUGS = [
  "lawyer-almaty",
  "legal-consultation-almaty",
  "contract-drafting",
  "court-representation",
  "family-lawyer",
  "business-legal-support",
  "debt-recovery",
  "civil-law",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServicePageContent = {
  meta: { title: string; description: string; keywords: string };
  h1: string;
  intro: string;
  includes: string[];
  whenNeeded: string[];
  processSteps: string[];
  documents: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: ServiceSlug[];
};

export type ServiceCatalog = Record<ServiceSlug, Record<Lang, ServicePageContent>>;
