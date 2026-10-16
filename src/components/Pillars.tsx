import type { Pillar } from "@/content/coaching";

/** The four coaching pillars. `grid` for teasers, `rows` for the coaching page. */
export function Pillars({ items, layout = "grid" }: { items: readonly Pillar[]; layout?: "grid" | "rows" }) {
  if (layout === "rows") {
    return (
      <ol className="border-t border-border">
        {items.map((p, i) => (
          <li
            key={p.title}
            data-spotlight
            className="reveal spotlight group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-3 border-b border-border py-8 transition-colors duration-500 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[9rem_1fr_1.4fr] lg:gap-10 lg:px-6 lg:py-10"
          >
            <span aria-hidden="true" className="numeral font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-3xl font-black tracking-tight transition-transform duration-700 ease-out-expo group-hover:translate-x-2 lg:text-5xl">
              {p.title}
            </h3>
            <p className="col-start-2 text-lg leading-relaxed text-pretty text-foreground/80 lg:col-start-auto">{p.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:gap-5">
      {items.map((p, i) => (
        <li
          key={p.title}
          data-spotlight
          className="glow-card spotlight group flex flex-col rounded-3xl sm:min-h-64 border border-border bg-[radial-gradient(90%_70%_at_100%_0%,rgb(0_168_230/0.07),transparent_60%)] bg-background/60 p-8 hover:-translate-y-1 lg:min-h-72 lg:p-10"
        >
          <div className="flex items-start justify-between">
            <span aria-hidden="true" className="numeral font-display text-6xl font-black leading-none tracking-tight lg:text-7xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 -translate-x-2 translate-y-2 text-accent opacity-0 transition duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 12L12 4M5 4h7v7" />
            </svg>
          </div>
          <h3 className="mt-auto pt-8 font-display text-3xl font-black tracking-tight lg:text-4xl">{p.title}</h3>
          <p className="mt-3 max-w-md leading-relaxed text-pretty text-foreground/75">{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
