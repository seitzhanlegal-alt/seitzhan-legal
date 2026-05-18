import type { Lang } from "@/lib/translations";

export type Review = {
  id: string;
  /** Client name or initials — use only with consent */
  name: string;
  text: string;
  serviceType: string;
  rating: number;
  date: string;
};

/** Add real reviews here after client consent. Do not use fabricated testimonials. */
export const PUBLISHED_REVIEWS: Review[] = [];

export const reviewsSectionCopy: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    placeholder: string;
    emptyNote: string;
    ratingLabel: string;
    serviceLabel: string;
  }
> = {
  ru: {
    title: "Отзывы клиентов",
    subtitle: "Мнения клиентов, с которыми мы работали по конкретным делам.",
    placeholder:
      "Здесь будут размещены реальные отзывы клиентов после публикации с их согласия.",
    emptyNote:
      "Раздел подготовлен для будущих отзывов. Фиктивные отзывы не публикуются.",
    ratingLabel: "Оценка",
    serviceLabel: "Услуга",
  },
  kz: {
    title: "Клиенттердің пікірлері",
    subtitle: "Нақты істер бойынша бірге жұмыс істеген клиенттердің пікірлері.",
    placeholder:
      "Мұнда клиенттердің нақты пікірлері олардың келісімімен жарияланады.",
    emptyNote:
      "Бөлім болашақ пікірлерге дайындалған. Жалған пікірлер жарияланбайды.",
    ratingLabel: "Баға",
    serviceLabel: "Қызмет",
  },
  en: {
    title: "Client Reviews",
    subtitle: "Feedback from clients we have assisted on specific matters.",
    placeholder: "Real client reviews will be published here with their consent.",
    emptyNote:
      "This section is prepared for future reviews. Fabricated testimonials are not published.",
    ratingLabel: "Rating",
    serviceLabel: "Service",
  },
};
