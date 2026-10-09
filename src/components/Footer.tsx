import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { applyHref, nav, site } from "@/lib/site";

const footerLinks = [...nav, { label: "Contact", href: applyHref }];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink pt-20 lg:pt-28">
      <Container className="relative grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="inline-block transition-opacity duration-300 hover:opacity-80">
            <Logo variant="stacked" className="h-24 w-auto" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {site.name} is the coaching practice of{" "}
            <a href={site.parent.url} className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary">
              {site.parent.name}
            </a>
            .
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Explore</h2>
          <ul className="mt-6 space-y-3">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-draw text-foreground/80 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Follow Kevin</h2>
          <ul className="mt-6 space-y-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw text-foreground/80 transition-colors hover:text-foreground" rel="noopener" target="_blank">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a href={site.parent.url} className="link-draw text-foreground/80 transition-colors hover:text-foreground">
                kevincsnyder.com
              </a>
            </li>
          </ul>
          {/* TODO(kc): confirm contact email and phone for the coaching brand (see docs/CONTENT.md). */}
        </div>
      </Container>

      <Container className="relative mt-16">
        <p className="border-t border-border pt-8 text-xs text-muted-foreground">
          &copy; <CopyrightYear /> {site.parent.name}. All rights reserved.
        </p>
      </Container>

      {/* Oversized wordmark, cut off by the bottom edge. Masked from the logo file so it stays the real mark. */}
      <div
        aria-hidden="true"
        className="reveal mx-auto mt-10 aspect-[931.65/134] w-[108%] max-w-none -translate-x-[4%] translate-y-[22%] bg-gradient-to-b from-white/[0.09] to-transparent [mask:url(/logo-paidtospeak.svg)_center/contain_no-repeat]"
      />
    </footer>
  );
}

// Cached so the prerender can read the clock; resolves to the build year.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
