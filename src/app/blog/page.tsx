import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { formatDate, posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on the speaking business from Dr. Kevin C. Snyder, CSP.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <section aria-labelledby="blog-title" className="relative -mt-18 overflow-hidden pt-18">
      <StageLights className="h-[36rem]" />
      <Container className="relative py-20 lg:py-36">
        <div className="enter">
          <Eyebrow>The blog</Eyebrow>
        </div>
        <Heading as="h1" id="blog-title" size="page" headline={{ lead: "Notes on the", highlight: "speaking business." }} animate className="mt-7 max-w-5xl" />

        <ol className="enter mt-20 border-t border-border" style={{ "--d": "500ms" } as CSSProperties}>
          {posts.map((post) => (
            <li key={post.slug}>
              <article data-spotlight className="spotlight group relative grid gap-6 border-b border-border py-10 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-10 md:px-6 lg:py-14">
                <time dateTime={post.date} className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-black tracking-tight text-balance transition duration-700 ease-out-expo group-hover:translate-x-2 group-hover:text-primary lg:text-4xl">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground/75">{post.description}</p>
                </div>
                {post.image && (
                  <div className="zoom-on-hover hidden overflow-hidden rounded-2xl md:block">
                    <Image src={post.image.src} alt={post.image.alt} placeholder="blur" sizes="14rem" className="aspect-[4/3] w-56 object-cover" />
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
