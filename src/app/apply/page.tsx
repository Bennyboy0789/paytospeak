import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";
import { Heading } from "@/components/Heading";
import { Container, Eyebrow } from "@/components/Section";
import { apply } from "@/content/apply";
import { credentials, stats } from "@/content/shared";

export const metadata: Metadata = {
  title: apply.meta.title,
  description: apply.meta.description,
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <section aria-labelledby="apply-title">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{apply.hero.eyebrow}</Eyebrow>
          <Heading as="h1" id="apply-title" size="page" headline={apply.hero.headline} className="mt-6" />
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">{apply.hero.sub}</p>
          <ul className="mt-10 space-y-2 border-t border-border pt-8 text-sm text-muted-foreground">
            <li>CSP &middot; AS &middot; {credentials.rarity}</li>
            <li>{stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-7 lg:p-10">
          <ApplyForm />
        </div>
      </Container>
    </section>
  );
}
