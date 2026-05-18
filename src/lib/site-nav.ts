import type { Lang } from "@/lib/translations";

export const siteNavLabels: Record<
  Lang,
  {
    blog: string;
    allServices: string;
    reviews: string;
    servicePages: string;
  }
> = {
  ru: {
    blog: "Статьи",
    allServices: "Все услуги",
    reviews: "Отзывы",
    servicePages: "Юридические услуги",
  },
  kz: {
    blog: "Мақалалар",
    allServices: "Барлық қызметтер",
    reviews: "Пікірлер",
    servicePages: "Заңгерлік қызметтер",
  },
  en: {
    blog: "Articles",
    allServices: "All services",
    reviews: "Reviews",
    servicePages: "Legal services",
  },
};
