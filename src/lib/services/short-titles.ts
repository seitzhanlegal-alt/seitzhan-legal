import type { Lang } from "@/lib/translations";
import type { ServiceSlug } from "./types";

export const serviceShortTitles: Record<ServiceSlug, Record<Lang, string>> = {
  "lawyer-almaty": {
    ru: "Адвокат в Алматы",
    kz: "Алматыдағы адвокат",
    en: "Lawyer in Almaty",
  },
  "legal-consultation-almaty": {
    ru: "Юридическая консультация",
    kz: "Заңгерлік кеңес",
    en: "Legal consultation",
  },
  "contract-drafting": {
    ru: "Составление договоров",
    kz: "Шарттар дайындау",
    en: "Contract drafting",
  },
  "court-representation": {
    ru: "Представительство в суде",
    kz: "Сотта өкілдік",
    en: "Court representation",
  },
  "family-lawyer": {
    ru: "Семейный адвокат",
    kz: "Отбасылық адвокат",
    en: "Family lawyer",
  },
  "business-legal-support": {
    ru: "Юрист для бизнеса",
    kz: "Бизнес үшін заңгер",
    en: "Business legal support",
  },
  "debt-recovery": {
    ru: "Взыскание долгов",
    kz: "Қарызды өндіріп алу",
    en: "Debt recovery",
  },
  "civil-law": {
    ru: "Гражданские дела",
    kz: "Азаматтық істер",
    en: "Civil law cases",
  },
};
