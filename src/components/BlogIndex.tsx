import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { formatDate, pageCount, posts, postsOnPage } from "@/content/posts";

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

/** One page of the blog index. Page 1 is /blog, the rest are /blog/page/<n>. */
export function BlogIndex({ page }: { page: number }) {
  const list = postsOnPage(page);
  return (
    <section aria-labelledby="blog-title" className="relative -mt-18 overflow-hidden pt-18">
      <StageLights className="h-[36rem]" />
      <Container className="relative py-20 lg:py-36">
        <div className="enter flex flex-wrap items-center justify-between gap-4">
          <Eyebrow>The blog</Eyebrow>
          <p className="text-sm text-muted-foreground">
            {posts.length} posts{page > 1 && ` · Page ${page} of ${pageCount}`}
          </p>
        </div>
        <Heading as="h1" id="blog-title" size="page" headline={{ lead: "Notes on the", highlight: "speaking business." }} animate className="mt-7 max-w-5xl" />

        <ol className="enter mt-20 border-t border-border" style={{ "--d": "500ms" } as CSSProperties}>
          {list.map((post, i) => (
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
                  {post.description && <p className="mt-3 leading-relaxed text-foreground/75">{post.description}</p>}
                </div>
                {post.image && (
                  <div className="zoom-on-hover hidden overflow-hidden rounded-2xl md:block">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      placeholder="blur"
                      sizes="14rem"
                      loading={i < 2 ? "eager" : "lazy"}
                      className="aspect-[4/3] w-56 object-cover"
                    />
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>

        {pageCount > 1 && <Pagination page={page} />}
      </Container>
    </section>
  );
}

function Pagination({ page }: { page: number }) {
  // First, last, and two either side of the current page; gaps become an ellipsis.
  const shown = [...new Set([1, page - 2, page - 1, page, page + 1, page + 2, pageCount])].filter((n) => n >= 1 && n <= pageCount).sort((a, b) => a - b);
  const link = "grid min-w-11 place-items-center rounded-full px-3 py-2.5 text-sm font-semibold transition-colors";
  return (
    <nav aria-label="Blog pages" className="mt-16 flex flex-wrap items-center justify-between gap-6">
      {page > 1 ? (
        <Link href={pageHref(page - 1)} className="link-draw text-sm font-semibold text-primary">
          &larr; Newer posts
        </Link>
      ) : (
        <span />
      )}
      <ol className="flex flex-wrap items-center gap-1">
        {shown.map((n, i) => (
          <li key={n} className="flex items-center gap-1">
            {i > 0 && n - shown[i - 1] > 1 && <span className="px-1 text-muted-foreground">&hellip;</span>}
            {n === page ? (
              <span aria-current="page" className={`${link} bg-accent text-accent-foreground`}>
                {n}
              </span>
            ) : (
              <Link href={pageHref(n)} className={`${link} text-muted-foreground hover:bg-secondary hover:text-foreground`}>
                {n}
              </Link>
            )}
          </li>
        ))}
      </ol>
      {page < pageCount ? (
        <Link href={pageHref(page + 1)} className="link-draw text-sm font-semibold text-primary">
          Older posts &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
