import { Heading } from "@/components/Heading";
import { Eyebrow, Section } from "@/components/Section";
import { YouTube } from "@/components/YouTube";
import { testimonials } from "@/content/testimonials";

/** Coaching clients in their own words. Renders nothing until src/content/testimonials.ts has entries. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section labelledBy="testimonials-title">
      <div className="reveal max-w-3xl">
        <Eyebrow>From Kevin’s clients</Eyebrow>
        <Heading id="testimonials-title" headline={{ lead: "Speakers who", highlight: "did the work." }} className="mt-5" />
      </div>
      <ul className="reveal-stagger mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 lg:p-10">
            {t.result && <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{t.result}</p>}
            {t.youtubeId ? <YouTube id={t.youtubeId} title={`${t.name} on coaching with Kevin`} /> : null}
            <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-pretty text-foreground/85">
              <p>&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
            <p className="mt-6 font-semibold">
              {t.name}
              {t.role && <span className="block text-sm font-normal text-muted-foreground">{t.role}</span>}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
