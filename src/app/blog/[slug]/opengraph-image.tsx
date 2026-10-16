import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/content/posts";
import { ogCard, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return ogCard({ eyebrow: formatDate(post.date), headline: { lead: post.title }, photo: "stage/portrait-vest.jpg", focusX: 0.5 });
}
