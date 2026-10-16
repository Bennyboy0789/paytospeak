import { Heading } from "@/components/Heading";
import { Eyebrow } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { home } from "@/content/home";

const { newsletter } = home;

/**
 * Kevin's speaker-tips sign-up. `panel` is the full card (home, blog index, /resources);
 * `inline` is the short version that sits inside a blog post.
 * `source` says where the form is, for MailChimp tags and analytics.
 */
export function Newsletter({ source, variant = "panel", titleId }: { source: string; variant?: "panel" | "inline"; titleId?: string }) {
  if (variant === "inline") {
    return (
      <aside aria-label="Speaker tips by email" className="my-12 rounded-3xl border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{newsletter.eyebrow}</p>
        <p className="mt-3 font-display text-2xl font-black tracking-[-0.01em] text-balance">
          {newsletter.headline.lead} <span className="text-primary">{newsletter.headline.highlight}</span>
        </p>
        <p className="mt-2 leading-relaxed text-pretty text-foreground/80">{newsletter.body}</p>
        <div className="mt-6">
          <SubscribeForm list="newsletter" submitLabel="Subscribe" source={source} />
        </div>
      </aside>
    );
  }
  return (
    <div className="reveal border-beam rounded-[2rem] bg-card p-8 sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
        <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div>
        <Eyebrow>{newsletter.eyebrow}</Eyebrow>
        <Heading id={titleId} size="small" headline={newsletter.headline} className="mt-6" />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">{newsletter.body}</p>
      </div>
      <div className="mt-10 lg:mt-0">
        <SubscribeForm list="newsletter" submitLabel="Subscribe" source={source} />
      </div>
    </div>
  );
}
