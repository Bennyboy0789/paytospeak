import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on the speaking business from Dr. Kevin C. Snyder, CSP.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
