import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add each route here as its page ships.
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route}` }));
}
