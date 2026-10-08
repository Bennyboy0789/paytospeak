import type { Pillar } from "@/content/coaching";

/** The four coaching pillars. `grid` for teasers, `rows` for the coaching page. */
export function Pillars({ items, layout = "grid" }: { items: readonly Pillar[]; layout?: "grid" | "rows" }) {
  if (layout === "rows") {
    return (
      <ol className="border-t border-border">
        {items.map((p, i) => (
          <li key={p.title} className="grid gap-4 border-b border-border py-10 md:grid-cols-[8rem_1fr_1.4fr] md:items-baseline md:gap-10 lg:py-12">
            <span aria-hidden="true" className="font-display text-5xl font-black tracking-tight text-accent lg:text-6xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-3xl font-black tracking-tight lg:text-4xl">{p.title}</h3>
            <p className="text-lg leading-relaxed text-foreground/80">{p.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((p, i) => (
        <li key={p.title} className="bg-card p-7 lg:p-10">
          <span aria-hidden="true" className="font-display text-sm font-black tracking-widest text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-2xl font-black tracking-tight lg:text-3xl">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-foreground/80">{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
