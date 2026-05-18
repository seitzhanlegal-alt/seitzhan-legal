"use client";

import { ReviewCard } from "@/components/ui/ReviewCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { PUBLISHED_REVIEWS, reviewsSectionCopy } from "@/lib/reviews";

export function Reviews() {
  const { lang } = useLanguage();
  const copy = reviewsSectionCopy[lang];
  const reviews = PUBLISHED_REVIEWS;

  return (
    <section id="reviews" className="border-t border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">{copy.subtitle}</p>
        </header>

        {reviews.length > 0 ? (
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard
                  review={review}
                  ratingLabel={copy.ratingLabel}
                  serviceLabel={copy.serviceLabel}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-[#fbfbfc] p-8 text-center">
            <p className="text-base leading-relaxed text-slate-700">{copy.placeholder}</p>
            <p className="mt-3 text-sm text-slate-500">{copy.emptyNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
