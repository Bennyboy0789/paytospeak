// Permanent redirects from the old Wix site, so links and search rankings carry
// over when paidtospeak.biz moves off Wix. Imported by next.config.ts, so keep
// this file free of "@/" imports. Full mapping: docs/WIX-MIGRATION.md.
import pageRedirects from "./wix-page-redirects.json" with { type: "json" };
import postRedirects from "./wix-post-redirects.json" with { type: "json" };

type Redirect = { source: string; destination: string; permanent: true };

const blogRoutes: Omit<Redirect, "permanent">[] = [
  // Wix blog URL shapes. Imported posts keep their slug unless it had to change
  // (those are listed explicitly in wix-post-redirects.json, which wins below).
  { source: "/post/:slug", destination: "/blog/:slug" },
  { source: "/blog/hashtags/:tag", destination: "/blog" },
  { source: "/blog/categories/:category", destination: "/blog" },
  { source: "/blog/tags/:tag", destination: "/blog" },
];

export const wixRedirects: Redirect[] = [
  ...postRedirects.filter((r) => r.source !== r.destination.replace("/blog/", "/single-post/")),
  { source: "/single-post/:slug", destination: "/blog/:slug" },
  ...blogRoutes,
  ...pageRedirects,
].map((r) => ({ ...r, permanent: true }));
