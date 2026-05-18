import type { Lang } from "@/lib/translations";

export const servicePageUi: Record<
  Lang,
  {
    includes: string;
    whenNeeded: string;
    process: string;
    documents: string;
    faq: string;
    related: string;
    backHome: string;
    allServices: string;
    contactLink: string;
    ctaWhatsApp: string;
    readMore: string;
  }
> = {
  ru: {
    includes: "Что входит в услугу",
    whenNeeded: "Когда обратиться",
    process: "Как проходит консультация",
    documents: "Какие документы подготовить",
    faq: "Частые вопросы",
    related: "Другие услуги",
    backHome: "На главную",
    allServices: "Все юридические услуги",
    contactLink: "Контакты и запись",
    ctaWhatsApp: "Написать в WhatsApp",
    readMore: "Подробнее об услуге",
  },
  kz: {
    includes: "Қызметке не кіреді",
    whenNeeded: "Қашан жүгіну керек",
    process: "Кеңес қалай өтеді",
    documents: "Қандай құжаттарды дайындау керек",
    faq: "Жиі қойылатын сұрақтар",
    related: "Басқа қызметтер",
    backHome: "Басты бетке",
    allServices: "Барлық заңгерлік қызметтер",
    contactLink: "Байланыс және жазылу",
    ctaWhatsApp: "WhatsApp жазу",
    readMore: "Қызмет туралы толығырақ",
  },
  en: {
    includes: "What the service includes",
    whenNeeded: "When to contact us",
    process: "How the consultation works",
    documents: "Documents to prepare",
    faq: "Common questions",
    related: "Other services",
    backHome: "Back to home",
    allServices: "All legal services",
    contactLink: "Contact & appointment",
    ctaWhatsApp: "Message on WhatsApp",
    readMore: "Learn more",
  },
};
