"use client";

import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SeoHead } from "@/components/seo/SeoHead";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BLOG_ARTICLES, blogPageCopy } from "@/lib/blog";

export function BlogPageView() {
  const { lang } = useLanguage();
  const copy = blogPageCopy[lang];

  return (
    <PageShell>
      <SeoHead
        title={copy.metaTitle}
        description={copy.metaDescription}
        keywords={copy.metaKeywords}
        canonicalPath="/blog"
      />
      <section className="bg-[#f7f8fa] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
              {copy.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {copy.intro}
            </p>
            <p className="mt-2 text-sm text-slate-500">{copy.draftNote}</p>
            <Link
              href="/"
              className="mt-6 inline-flex text-sm font-semibold text-[#c9a24d] underline-offset-4 hover:underline"
            >
              {copy.backHome}
            </Link>
          </header>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {BLOG_ARTICLES.map((article) => (
              <li
                key={article.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-block rounded-full bg-[#c9a24d]/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#8a6d2b]">
                  {copy.comingSoon}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-[#0a1628]">
                  {article.titles[lang]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {article.excerpts[lang]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
