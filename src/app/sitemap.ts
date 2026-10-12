import type { MetadataRoute } from "next";
import { pageCount, posts } from "@/content/posts";
import { programs } from "@/content/programs";
import { site } from "@/lib/site";

const routes = ["/", "/coaching", "/book", "/about", "/blog", "/apply"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({ url: `${site.url}${route === "/" ? "" : route}` })),
    ...programs.map((p) => ({ url: `${site.url}${p.href}` })),
    ...Array.from({ length: pageCount - 1 }, (_, i) => ({ url: `${site.url}/blog/page/${i + 2}` })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
