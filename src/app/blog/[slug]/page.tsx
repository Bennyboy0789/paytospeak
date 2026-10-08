import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Placeholder } from "@/components/Placeholder";
import { Container, Eyebrow } from "@/components/Section";
import { formatDate, getPost, posts } from "@/content/posts";
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
    robots: post.placeholder ? { index: false } : undefined,
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/posts/${slug}.mdx`);

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
      <Container className="max-w-3xl py-16 lg:py-24">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          <span aria-hidden="true">&larr;</span> All posts
        </Link>
        <div className="mt-10">
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
        {post.placeholder && (
          <div className="mt-10">
            <Placeholder title="Seed post — not real content" />
          </div>
        )}
        <div className="mt-6">
          <Body />
        </div>
        <footer className="mt-16 rounded-2xl border border-border bg-card p-7 lg:p-10">
          <p className="font-display text-2xl font-black tracking-tight">Want Kevin in your corner?</p>
          <p className="mt-2 text-foreground/80">Coaching for aspiring and emerging speakers.</p>
          <ButtonLink href="/coaching" variant="tertiary" className="mt-5">
            See the coaching program
          </ButtonLink>
        </footer>
      </Container>
    </article>
  );
}
