import type { StaticImageData } from "next/image";
import { wixPosts } from "./wix.generated";

/*
 * Blog registry. To add a post:
 *   1. Write the body in src/content/posts/<slug>.mdx (markdown; no title — it comes from here).
 *   2. Add an entry to `own` below. Optional hero: put it in src/assets/images/posts/<slug>/ and import it.
 * The index, the post route, and the sitemap all read from this list.
 *
 * Posts from the old Wix blog live in wix.generated.ts, written by
 * scripts/wix-import/blog.mjs. Re-run the importer to pick up posts Kevin
 * publishes on Wix before launch.
 */
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  image?: { src: StaticImageData; alt: string };
};

const own: PostMeta[] = [];

export const posts = [...own, ...wixPosts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const POSTS_PER_PAGE = 12;
export const pageCount = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

/** Posts for a 1-based index page. */
export function postsOnPage(page: number) {
  return posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Newer and older neighbours, for links at the end of a post. */
export function adjacentPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  return { newer: i > 0 ? posts[i - 1] : undefined, older: i >= 0 ? posts[i + 1] : undefined };
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
