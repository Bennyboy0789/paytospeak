import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";
import { Newsletter } from "@/components/Newsletter";
import { formatDate, pageCount, type PostMeta, posts, postsOnPage } from "@/content/posts";

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

        {/* Date above the title at every size; the thumbnail sits to the right, small on phones.
            The speaker-tips sign-up sits after the first few posts, where readers still are. */}
        <ol className="enter mt-16 border-t border-border lg:mt-20" style={{ "--d": "500ms" } as CSSProperties}>
          {list.slice(0, SIGNUP_AFTER).map((post, i) => (
            <PostRow key={post.slug} post={post} eager={i < 2} />
          ))}
        </ol>
        {list.length > SIGNUP_AFTER && (
          <>
            <Newsletter source="blog" variant="inline" />
            <ol start={SIGNUP_AFTER + 1} className="border-t border-border">
              {list.slice(SIGNUP_AFTER).map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </ol>
          </>
        )}

        {pageCount > 1 && <Pagination page={page} />}
      </Container>
    </section>
  );
}

const SIGNUP_AFTER = 4;

function PostRow({ post, eager = false }: { post: PostMeta; eager?: boolean }) {
  return (
    <li>
      <article
        data-spotlight
        className="spotlight group relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5 border-b border-border py-8 sm:gap-8 md:px-6 lg:items-center lg:gap-12 lg:py-12"
      >
        <div className="max-w-2xl">
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <h2 className="mt-2 font-display text-xl font-black tracking-[-0.01em] text-balance transition duration-700 ease-out-expo group-hover:translate-x-2 group-hover:text-primary sm:text-2xl lg:text-3xl">
            <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
              {post.title}
            </Link>
          </h2>
          {post.description && <p className="mt-3 line-clamp-3 leading-relaxed text-pretty text-foreground/75">{post.description}</p>}
        </div>
        {post.image && (
          <div className="zoom-on-hover overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 14rem, (min-width: 640px) 11rem, 5.5rem"
              loading={eager ? "eager" : "lazy"}
              className="aspect-square w-22 object-cover sm:aspect-[4/3] sm:w-44 lg:w-56"
            />
          </div>
        )}
      </article>
    </li>
  );
}

function Pagination({ page }: { page: number }) {
  // First, last, and two either side of the current page; gaps become an ellipsis.
  const shown = [...new Set([1, page - 2, page - 1, page, page + 1, page + 2, pageCount])].filter((n) => n >= 1 && n <= pageCount).sort((a, b) => a - b);
  const link = "grid min-w-11 place-items-center rounded-full px-3 py-2.5 text-sm font-semibold transition-colors";
  const step = "link-draw inline-block py-2.5 text-sm font-semibold text-primary";
  return (
    <nav aria-label="Blog pages" className="mt-16 flex items-center justify-between gap-6">
      {page > 1 ? (
        <Link href={pageHref(page - 1)} className={step}>
          &larr; Newer<span className="hidden sm:inline"> posts</span>
        </Link>
      ) : (
        <span />
      )}
      {/* Phones get "Page 2 of 23"; the numbered pages need more room. */}
      <p className="text-sm text-muted-foreground sm:hidden">
        Page {page} of {pageCount}
      </p>
      <ol className="hidden flex-wrap items-center gap-1 sm:flex">
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
        <Link href={pageHref(page + 1)} className={step}>
          Older<span className="hidden sm:inline"> posts</span> &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
