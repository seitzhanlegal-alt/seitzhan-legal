import type { Metadata } from "next";
import { BlogPageView } from "@/components/blog/BlogPageView";
import { createPageMetadata } from "@/lib/metadata";
import { blogPageCopy } from "@/lib/blog";

const ru = blogPageCopy.ru;

export const metadata: Metadata = createPageMetadata({
  title: ru.metaTitle,
  description: ru.metaDescription,
  keywords: ru.metaKeywords,
  path: "/blog",
  lang: "ru",
});

export default function BlogPage() {
  return <BlogPageView />;
}
