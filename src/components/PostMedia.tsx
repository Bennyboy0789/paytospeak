import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";

/** Image inside a blog post. Imported posts often have no alt text; those are treated as decorative. */
export function PostImage({ src, alt, caption }: { src: StaticImageData; alt: string; caption?: string }) {
  return (
    <figure className="mt-8">
      <Image src={src} alt={alt} placeholder="blur" sizes="(min-width: 768px) 48rem, 100vw" className="h-auto w-full rounded-2xl border border-border" />
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

/**
 * Video file that was uploaded to Wix. TODO(kc): these play from Wix's servers and
 * stop working when the Wix account closes; re-host them (YouTube) before then.
 * See docs/WIX-MIGRATION.md.
 */
export function PostVideo({ src }: { src: string }) {
  return (
    <video src={src} controls preload="none" playsInline className="mt-8 aspect-video w-full rounded-2xl border border-border bg-card">
      <a href={src}>Download the video</a>
    </video>
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
