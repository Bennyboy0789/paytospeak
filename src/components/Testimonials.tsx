import { Heading } from "@/components/Heading";
import { VideoFacade } from "@/components/VideoFacade";
import { Eyebrow, Section } from "@/components/Section";
import { clientStories, plannerQuotes } from "@/content/testimonials";

/** A coaching client in her own words, then what event planners say about Kevin on stage. */
export function Testimonials() {
  return (
    <Section labelledBy="testimonials-title">
      <div className="reveal max-w-3xl">
        <Eyebrow>Results</Eyebrow>
        <Heading id="testimonials-title" headline={{ lead: "From coaching", highlight: "to speaking career momentum." }} className="mt-5" />
      </div>

      {clientStories.map((story) => (
        <figure key={story.name} className="reveal mt-12 grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <VideoFacade src={story.video.src} poster={story.video.poster} title={story.video.title} />
          <figcaption>
            <p className="font-display text-3xl font-black tracking-tight lg:text-4xl">{story.name}</p>
            <ul className="mt-4 space-y-2">
              {story.credentials.map((c) => (
                <li key={c} className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      ))}

      <h3 className="reveal mt-20 text-xs font-semibold uppercase tracking-[0.22em] text-accent lg:mt-28">What event planners say about Kevin</h3>
      <ul className="reveal-stagger mt-6 grid gap-5 md:grid-cols-2">
        {plannerQuotes.map((q) => (
          <li key={q.name}>
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 lg:p-9">
              <blockquote className="flex-1 text-lg leading-relaxed text-pretty text-foreground/85">
                <p>&ldquo;{q.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{q.name}</span>
                <span className="block text-sm text-muted-foreground">{q.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
