import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { site } from "@/lib/site";

const routes = ["/", "/coaching", "/book", "/about", "/blog", "/apply"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({ url: `${site.url}${route === "/" ? "" : route}` })),
    ...posts.filter((p) => !p.placeholder).map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
