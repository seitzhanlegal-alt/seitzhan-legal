import type { Review } from "@/lib/reviews";

type ReviewCardProps = {
  review: Review;
  ratingLabel: string;
  serviceLabel: string;
};

export function ReviewCard({ review, ratingLabel, serviceLabel }: ReviewCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold text-[#0a1628]">{review.name}</p>
        <time className="text-xs text-slate-500" dateTime={review.date}>
          {review.date}
        </time>
      </div>
      <p className="mt-2 text-xs font-medium text-[#c9a24d]">
        {serviceLabel}: {review.serviceType}
      </p>
      <p className="mt-1 text-xs text-slate-500" aria-label={`${ratingLabel}: ${review.rating} / 5`}>
        {"★".repeat(review.rating)}
        <span className="sr-only">
          {ratingLabel} {review.rating} / 5
        </span>
      </p>
      <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
        {review.text}
      </blockquote>
    </article>
  );
}
