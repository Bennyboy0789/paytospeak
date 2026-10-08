import type { StaticImageData } from "next/image";

/*
 * Blog registry. To add a post:
 *   1. Write the body in src/content/posts/<slug>.mdx (markdown; no title — it comes from here).
 *   2. Add an entry below. Optional thumbnail: put it in src/assets/images/posts/ and import it.
 * The index, the post route, and the sitemap all read from this list.
 */
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  image?: { src: StaticImageData; alt: string };
  /** Seed content — remove when Kevin's real posts arrive. */
  placeholder?: boolean;
};

const all: PostMeta[] = [
  {
    slug: "placeholder",
    title: "Placeholder post — replace with Kevin’s first article",
    description: "Seed post so the blog template can be reviewed. Kevin has five written posts from the previous site waiting to come over.",
    date: "2026-10-08",
    placeholder: true,
  },
];

export const posts = [...all].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
