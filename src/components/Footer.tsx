import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { applyHref, nav, site } from "@/lib/site";

const footerLinks = [...nav, { label: "Contact", href: applyHref }];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-16 lg:py-20">
      <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="inline-block">
            <Logo variant="stacked" className="h-24 w-auto" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {site.name} is the coaching practice of{" "}
            <a href={site.parent.url} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary">
              {site.parent.name}
            </a>
            .
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-foreground/80 hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Follow Kevin</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-foreground/80 hover:text-foreground" rel="noopener" target="_blank">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a href={site.parent.url} className="text-foreground/80 hover:text-foreground">
                kevincsnyder.com
              </a>
            </li>
          </ul>
          {/* TODO(kc): confirm contact email and phone for the coaching brand (see docs/CONTENT.md). */}
        </div>
      </Container>

      <Container className="mt-14">
        <p className="border-t border-border pt-8 text-xs text-muted-foreground">
          &copy; <CopyrightYear /> {site.parent.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

// Cached so the prerender can read the clock; resolves to the build year.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
