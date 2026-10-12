import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { wixRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Thumbnails for click-to-load YouTube embeds in blog posts.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async redirects() {
    return wixRedirects;
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// Blog posts are .mdx files imported from src/content/posts (not routed directly).
const withMDX = createMDX({});

export default withMDX(nextConfig);
