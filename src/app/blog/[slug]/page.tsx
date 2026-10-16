import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Children, type CSSProperties, isValidElement, type ReactNode } from "react";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Newsletter } from "@/components/Newsletter";
import { Eyebrow } from "@/components/Section";
import portrait from "@/assets/images/stage/portrait-vest.jpg";
import { formatDate, getPost, posts, relatedPosts } from "@/content/posts";
import { pastOfferPosts } from "@/content/posts/past-offers";
import { components } from "@/mdx-components";
import { stats } from "@/content/shared";
import { applyHref, site } from "@/lib/site";

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
  const related = relatedPosts(slug);

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
        <Link
          href="/blog"
          className="group enter -my-2 inline-flex items-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true" className="transition-transform duration-500 ease-out-expo group-hover:-translate-x-1">
            &larr;
          </span>{" "}
          All posts
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
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              placeholder="blur"
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>
        )}
        {/* About 68 characters a line for long reads; the title and hero image keep the full width. */}
        <div className="mt-6 max-w-[42rem]">
          {pastOfferPosts.has(slug) && (
            // DRAFT(kc): new copy, logged in docs/CONTENT.md.
            <p role="note" className="mt-8 rounded-2xl border border-border bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              Kevin wrote this on {formatDate(post.date)}. Programs, prices and guarantees may have changed since.{" "}
              <Link href="/coaching" className="font-semibold text-primary underline underline-offset-4 hover:text-foreground">
                See current coaching options
              </Link>
              .
            </p>
          )}
          <Body components={{ wrapper: WithSignup }} />
        </div>
        <aside aria-labelledby="author-title" className="reveal border-beam mt-20 rounded-3xl bg-card p-7 sm:p-10">
          <div className="flex items-center gap-5">
            <Image src={portrait} alt="" placeholder="blur" sizes="4.5rem" className="size-18 shrink-0 rounded-full object-cover object-[50%_25%]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Written by</p>
              <p id="author-title" className="mt-1 font-display text-2xl font-black tracking-[-0.01em]">
                {site.parent.name}
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-foreground/80">
            {stats[0].value} years speaking professionally, in front of {stats[1].value} audiences. Kevin now coaches aspiring and emerging speakers on the
            business behind the talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/coaching">See the coaching program</ButtonLink>
            <ButtonLink href={applyHref} variant="secondary">
              Apply for coaching
            </ButtonLink>
          </div>
        </aside>

        {related.length > 0 && (
          <nav aria-labelledby="related-title" className="mt-20">
            <h2 id="related-title" className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Keep reading
            </h2>
            <ul className="mt-6 border-t border-border">
              {related.map((p) => (
                <li key={p.slug} className="border-b border-border">
                  <Link href={`/blog/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                    <span>
                      <time dateTime={p.date} className="text-sm text-muted-foreground">
                        {formatDate(p.date)}
                      </time>
                      <span className="mt-1 block font-display text-xl font-black tracking-[-0.01em] text-balance transition-colors group-hover:text-primary">
                        {p.title}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-primary transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/blog" variant="tertiary" className="mt-6">
              All posts
            </ButtonLink>
          </nav>
        )}
      </div>
    </article>
  );
}

// Long posts get the speaker-tips sign-up about 60% of the way through, where readers still are;
// short ones get it at the end. Never straight after a heading.
const SIGNUP_MIN_BLOCKS = 10;
const headings = new Set<unknown>([components.h2, components.h3]);

function WithSignup({ children }: { children?: ReactNode }) {
  const parts = Children.toArray(children);
  const blocks = parts.filter(isValidElement);
  const signup = <Newsletter key="signup" source="blog-post" variant="inline" />;
  if (blocks.length < SIGNUP_MIN_BLOCKS) return <>{[...parts, signup]}</>;
  let at = Math.round(blocks.length * 0.6);
  while (at < blocks.length && headings.has(blocks[at - 1].type)) at++;
  const after = blocks[at - 1];
  return <>{parts.flatMap((part): ReactNode[] => (part === after ? [part, signup] : [part]))}</>;
}
