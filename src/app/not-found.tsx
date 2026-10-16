import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { StageLights } from "@/components/StageLights";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// Old Wix links redirect (src/lib/redirects.ts); anything they miss lands here.
const links = [
  { label: "Coaching", href: "/coaching", note: "Every way to work with Kevin, side by side." },
  { label: "The blog", href: "/blog", note: "Years of Kevin’s articles on the speaking business." },
  { label: "Free resources", href: "/resources", note: "Worksheets and checklists, no sign-up." },
];

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="relative -mt-18 overflow-hidden pt-18">
      <StageLights preset="hero" />
      <Container className="relative py-24 lg:py-36">
        <Eyebrow>404</Eyebrow>
        <Heading as="h1" id="not-found-title" size="page" headline={{ lead: "This page", highlight: "isn’t on the program." }} className="mt-7 max-w-4xl" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-foreground/80">
          The link may be from the old site, or the page may have moved. Here’s where most people are headed.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/coaching">See the coaching program</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Go to the home page
          </ButtonLink>
        </div>
        <ul className="mt-20 grid border-t border-border sm:grid-cols-3 sm:gap-x-10">
          {links.map((l) => (
            <li key={l.href} className="border-b border-border">
              <ButtonLink href={l.href} variant="tertiary" className="mt-6 text-lg">
                {l.label}
              </ButtonLink>
              <p className="mt-2 pb-6 text-sm leading-relaxed text-muted-foreground">{l.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
