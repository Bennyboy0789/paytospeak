import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";

export { PostVideo } from "@/components/PostVideo";

/** Image inside a blog post. Imported posts often have no alt text; those are treated as decorative. */
export function PostImage({ src, alt, caption }: { src: StaticImageData; alt: string; caption?: string }) {
  return (
    <figure className="mt-8">
      <Image src={src} alt={alt} placeholder="blur" sizes="(min-width: 768px) 48rem, 100vw" className="h-auto w-full rounded-2xl border border-border" />
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

/** Call-to-action button from the original post. */
export function PostButton({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <p className="mt-8">
      <ButtonLink href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
      </ButtonLink>
    </p>
  );
}
