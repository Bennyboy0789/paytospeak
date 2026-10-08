import type { ReactNode } from "react";

/**
 * A visible TODO(kc) block for content waiting on Kevin. Deliberately loud so it
 * can't be mistaken for finished copy on staging. Search the repo for
 * "<Placeholder" before launch — none should remain.
 */
export function Placeholder({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div role="note" className="rounded-2xl border-2 border-dashed border-accent/60 bg-accent/5 p-6 lg:p-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">TODO(kc)</p>
      <p className="mt-3 font-display text-xl font-bold tracking-tight">{title}</p>
      {children && <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}
