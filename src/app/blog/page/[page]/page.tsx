import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BlogIndex } from "@/components/BlogIndex";
import { pageCount } from "@/content/posts";

export function generateStaticParams() {
  return Array.from({ length: pageCount - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog, page ${page}`,
    description: "Notes on the speaking business from Dr. Kevin C. Snyder, CSP.",
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPageN({ params }: PageProps<"/blog/page/[page]">) {
  const n = Number((await params).page);
  if (n === 1) permanentRedirect("/blog");
  if (!Number.isInteger(n) || n < 1 || n > pageCount) notFound();
  return <BlogIndex page={n} />;
}
