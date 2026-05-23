import type { Lang } from "@/lib/translations";

export type BlogArticleStatus = "coming_soon" | "draft";

export type BlogArticle = {
  slug: string;
  status: BlogArticleStatus;
  titles: Record<Lang, string>;
  excerpts: Record<Lang, string>;
};

/** Future SEO articles — content to be written before publishing */
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "how-to-choose-lawyer-almaty",
    status: "coming_soon",
    titles: {
      ru: "Как выбрать юриста в Алматы",
      kz: "Алматыда юристты қалай таңдау керек",
      en: "How to choose a lawyer in Almaty",
    },
    excerpts: {
      ru: "Практические критерии выбора юриста: опыт, специализация, прозрачность и этика.",
      kz: "Юрист таңдаудың нақты критерийлері: тәжірибе, мамандану, ашықтық.",
      en: "Practical criteria: experience, specialization, transparency, and ethics.",
    },
  },
  {
    slug: "when-legal-consultation-needed",
    status: "coming_soon",
    titles: {
      ru: "Когда нужна юридическая консультация",
      kz: "Заңгерлік кеңес қашан қажет",
      en: "When you need a legal consultation",
    },
    excerpts: {
      ru: "Ситуации, в которых ранняя консультация снижает риски и экономит время.",
      kz: "Ерте кеңес қауіпті азайтатын жағдайлар.",
      en: "Situations where early advice reduces risk and saves time.",
    },
  },
  {
    slug: "prepare-for-court",
    status: "coming_soon",
    titles: {
      ru: "Как правильно подготовиться к суду",
      kz: "Сотқа дұрыс дайындалу",
      en: "How to prepare for court properly",
    },
    excerpts: {
      ru: "Документы, позиция по делу и тактика взаимодействия с судом.",
      kz: "Құжаттар, іс позициясы және сотпен жұмыс тактикасы.",
      en: "Documents, case position, and working with the court.",
    },
  },
  {
    slug: "documents-for-consultation",
    status: "coming_soon",
    titles: {
      ru: "Какие документы нужны для юридической консультации",
      kz: "Заңгерлік кеңес үшін қандай құжаттар керек",
      en: "Documents needed for a legal consultation",
    },
    excerpts: {
      ru: "Базовый перечень документов в зависимости от типа вопроса.",
      kz: "Сұрақ түріне байланысты құжаттар тізімі.",
      en: "A baseline document list by type of legal issue.",
    },
  },
  {
    slug: "contract-drafting-guide",
    status: "coming_soon",
    titles: {
      ru: "Как составить договор правильно",
      kz: "Шартты дұрыс жасау",
      en: "How to draft a contract correctly",
    },
    excerpts: {
      ru: "Ключевые условия, риски и проверка перед подписанием.",
      kz: "Негізгі шарттар, тәуекелдер және қол қою алдындағы тексеру.",
      en: "Key terms, risks, and pre-signing review.",
    },
  },
  {
    slug: "debt-dispute-steps",
    status: "coming_soon",
    titles: {
      ru: "Что делать при долговом споре",
      kz: "Қарыз дауында не істеу керек",
      en: "What to do in a debt dispute",
    },
    excerpts: {
      ru: "Претензионный порядок, доказательства и судебное взыскание.",
      kz: "Даунама тәртіп, дәлелдер және соттық өндіріп алу.",
      en: "Pre-trial steps, evidence, and court recovery.",
    },
  },
];

export const blogPageCopy: Record<
  Lang,
  {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    h1: string;
    intro: string;
    comingSoon: string;
    draftNote: string;
    backHome: string;
  }
> = {
  ru: {
    metaTitle: "Юридические статьи и полезные материалы | Алматы",
    metaDescription:
      "Полезные материалы о юридических вопросах в Алматы: консультации, суд, договоры и защита прав.",
    metaKeywords:
      "юридические статьи Алматы, адвокат блог, правовые материалы Казахстан",
    h1: "Статьи и материалы",
    intro:
      "Раздел готовится для публикации экспертных материалов по правовым вопросам. Ниже — темы будущих статей.",
    comingSoon: "Скоро",
    draftNote: "Материал в подготовке — не является финальной юридической консультацией.",
    backHome: "На главную",
  },
  kz: {
    metaTitle: "Заңгерлік мақалалар | Алматы",
    metaDescription:
      "Алматыдағы заңгерлік сұрақтар бойынша пайдалы материалдар: кеңес, сот, шарттар.",
    metaKeywords:
      "заңгерлік мақалалар Алматы, адвокат блог, құқықтық материалдар",
    h1: "Мақалалар",
    intro:
      "Бөлім заңгерлік сұрақтар бойынша сарапшылық материалдарға дайындалуда.",
    comingSoon: "Жақында",
    draftNote: "Материал дайындалуда — соңғы заңгерлік кеңес емес.",
    backHome: "Басты бетке",
  },
  en: {
    metaTitle: "Legal articles and guides | Almaty",
    metaDescription:
      "Useful materials on legal topics in Almaty: consultations, court, contracts, and rights protection.",
    metaKeywords:
      "legal articles Almaty, lawyer blog Kazakhstan, legal guides",
    h1: "Articles & guides",
    intro:
      "This section is being prepared for expert materials on legal topics. Below are planned article topics.",
    comingSoon: "Coming soon",
    draftNote: "Material in preparation — not final legal advice.",
    backHome: "Back to home",
  },
};
