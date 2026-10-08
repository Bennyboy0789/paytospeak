import { ButtonLink } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Section";
import { applyHref } from "@/lib/site";

// Hero only for now — remaining home sections land with the page build.
export default function Home() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative py-24 lg:py-40">
        <Eyebrow>Speaker coaching</Eyebrow>
        {/* TODO(kc): confirm hero headline direction — alternative: "Build a speaking career, not just a great talk." */}
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          You have a message. <span className="text-primary">Let&rsquo;s get it booked.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
          Kevin Snyder has spent 20 years on stage — 1,500+ audiences, a million people. He now coaches aspiring
          and emerging speakers on the system behind it.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href={applyHref}>Apply for coaching</ButtonLink>
          <ButtonLink href="/coaching" variant="secondary">
            See how it works
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
