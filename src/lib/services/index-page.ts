import type { Lang } from "@/lib/translations";

export const servicesIndexCopy: Record<
  Lang,
  {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    h1: string;
    intro: string;
    backHome: string;
  }
> = {
  ru: {
    metaTitle: "Юридические услуги в Алматы | Полный перечень",
    metaDescription:
      "Юридические услуги адвоката в Алматы: консультации, договоры, суд, семейное право, бизнес и взыскание долгов.",
    metaKeywords:
      "юридические услуги Алматы, адвокат услуги, юрист Алматы перечень",
    h1: "Юридические услуги",
    intro:
      "Выберите направление, чтобы узнать подробности, этапы работы и подготовить документы к консультации.",
    backHome: "На главную",
  },
  kz: {
    metaTitle: "Алматыдағы заңгерлік қызметтер",
    metaDescription: "Алматыдағы адвокат қызметтерінің толық тізімі.",
    metaKeywords: "заңгерлік қызметтер Алматы",
    h1: "Заңгерлік қызметтер",
    intro: "Бағытты таңдап, қызмет туралы толық ақпаратты оқыңыз.",
    backHome: "Басты бетке",
  },
  en: {
    metaTitle: "Legal services in Almaty | Full list",
    metaDescription:
      "Legal services in Almaty: consultations, contracts, court, family, business, and debt recovery.",
    metaKeywords: "legal services Almaty, lawyer services list",
    h1: "Legal services",
    intro: "Select a practice area to learn about the process and required documents.",
    backHome: "Back to home",
  },
};
