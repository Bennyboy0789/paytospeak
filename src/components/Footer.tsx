import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { programs } from "@/content/programs";
import { applyHref, nav, site } from "@/lib/site";

const footerLinks = [...nav, { label: "Contact", href: applyHref }];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pt-20 pb-10 lg:pt-28 lg:pb-12">
      {/* Phones: two short columns (Explore, Follow), then Programs in two columns, so the footer stays short. */}
      <Container className="relative grid grid-cols-2 gap-x-8 gap-y-12 md:gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div className="col-span-2 max-w-xs md:col-span-1">
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
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="link-draw text-foreground/80 transition-colors hover:text-foreground">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.tel}`} className="link-draw text-foreground/80 transition-colors hover:text-foreground">
                {site.contact.phone}
              </a>
            </li>
          </ul>
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

        <nav aria-label="Programs" className="order-last col-span-2 md:order-none md:col-span-1">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Programs</h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 md:block md:space-y-3">
            {programs.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="link-draw text-foreground/80 transition-colors hover:text-foreground">
                  {p.name}
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
        </div>
      </Container>

      <Container className="relative mt-16">
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
