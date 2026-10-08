import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { formatDate, posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on the speaking business from Dr. Kevin C. Snyder, CSP.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <section aria-labelledby="blog-title">
      <Container className="py-16 lg:py-28">
        <Eyebrow>The blog</Eyebrow>
        <Heading as="h1" id="blog-title" size="page" headline={{ lead: "Notes on the", highlight: "speaking business." }} className="mt-6 max-w-4xl" />

        <ol className="mt-16 border-t border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group relative grid gap-6 border-b border-border py-10 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10">
                <time dateTime={post.date} className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-black tracking-tight text-balance transition-colors group-hover:text-primary lg:text-3xl">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground/75">{post.description}</p>
                </div>
                {post.image && (
                  <Image src={post.image.src} alt={post.image.alt} placeholder="blur" sizes="12rem" className="hidden aspect-[4/3] w-48 rounded-xl object-cover md:block" />
                )}
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
