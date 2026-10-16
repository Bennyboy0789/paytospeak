import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { PostButton, PostImage, PostVideo } from "@/components/PostMedia";
import { YouTube } from "@/components/YouTube";

// Blog post typography. Kept here instead of a typography plugin so posts use
// exactly the brand scale from docs/BRAND.md.
export const components: MDXComponents = {
  h2: (props) => <h2 className="mt-14 font-display text-3xl font-black tracking-tight text-balance" {...props} />,
  h3: (props) => <h3 className="mt-12 font-display text-2xl font-black tracking-[-0.01em] text-balance" {...props} />,
  p: (props) => <p className="mt-5 text-lg leading-relaxed text-pretty text-foreground/85" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-accent" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-accent" {...props} />,
  // The quote's paragraphs come through the `p` above, so the quote styles them directly.
  blockquote: (props) => (
    <blockquote
      className="mt-10 border-l-2 border-accent pl-6 [&>p]:mt-3 [&>p]:font-display [&>p]:text-xl [&>p]:font-bold [&>p]:leading-snug [&>p]:text-foreground [&>p:first-child]:mt-0 lg:[&>p]:text-2xl"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="text-primary underline underline-offset-4 hover:text-foreground" {...props} />
    ) : (
      <a href={href} className="text-primary underline underline-offset-4 hover:text-foreground" {...props} />
    ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  hr: () => <hr className="my-12 border-border" />,
  em: (props) => <em className="italic" {...props} />,
  // Embeds used by posts imported from Wix (scripts/wix-import).
  PostImage,
  PostVideo,
  PostButton,
  YouTube,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
