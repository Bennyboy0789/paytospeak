import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Eyebrow } from "@/components/Section";
import { adjacentPosts, formatDate, getPost, posts } from "@/content/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/posts/${slug}.mdx`);
  const { newer, older } = adjacentPosts(slug);

  return (
    <article aria-labelledby="post-title">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Person", name: "Kevin C. Snyder", honorificPrefix: "Dr.", url: site.parent.url },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <div aria-hidden="true" className="read-progress" />
      <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <Link href="/blog" className="group enter inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <span aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:-translate-x-1">&larr;</span> All posts
        </Link>
        <div className="enter mt-10" style={{ "--d": "120ms" } as CSSProperties}>
          <Eyebrow>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </Eyebrow>
          <h1 id="post-title" className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-balance lg:text-6xl">
            {post.title}
          </h1>
        </div>
        {post.image && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image src={post.image.src} alt={post.image.alt} fill placeholder="blur" priority sizes="(min-width: 768px) 48rem, 100vw" className="object-cover" />
          </div>
        )}
        <div className="mt-6">
          <Body />
        </div>
        {(newer || older) && (
          <nav aria-label="More posts" className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
            {older && (
              <Link href={`/blog/${older.slug}`} className="group rounded-2xl border border-border p-6 transition-colors hover:border-accent/60">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">&larr; Older</span>
                <span className="mt-2 block font-display text-lg font-bold tracking-tight text-balance group-hover:text-primary">{older.title}</span>
              </Link>
            )}
            {newer && (
              <Link href={`/blog/${newer.slug}`} className="group rounded-2xl border border-border p-6 text-right transition-colors hover:border-accent/60 sm:col-start-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Newer &rarr;</span>
                <span className="mt-2 block font-display text-lg font-bold tracking-tight text-balance group-hover:text-primary">{newer.title}</span>
              </Link>
            )}
          </nav>
        )}
        <footer className="reveal border-beam mt-20 rounded-3xl bg-card p-8 lg:p-12">
          <p className="font-display text-2xl font-black tracking-tight">Want Kevin in your corner?</p>
          <p className="mt-2 text-foreground/80">Coaching for aspiring and emerging speakers.</p>
          <ButtonLink href="/coaching" variant="tertiary" className="mt-5">
            See the coaching program
          </ButtonLink>
        </footer>
      </div>
    </article>
  );
}
