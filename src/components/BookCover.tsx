import Image from "next/image";
import { book } from "@/content/book";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";

/**
 * Paid to $peak 2.0 cover. Renders the real cover once `cover` is set in
 * src/content/book.ts; until then, a typographic placeholder in the brand system.
 */
export function BookCover({ className = "", priority }: { className?: string; priority?: boolean }) {
  const frame = `@container relative aspect-[2/3] w-full overflow-hidden rounded-r-lg rounded-l-sm shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.06)] ${className}`;

  if (book.cover) {
    return (
      <div className={frame}>
        <Image src={book.cover} alt={`Cover of ${book.plainTitle} by ${site.parent.name}`} fill sizes="(min-width: 1024px) 28rem, 70vw" priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div className={`${frame} flex flex-col bg-[radial-gradient(120%_80%_at_50%_0%,var(--color-secondary)_0%,var(--color-background)_70%)] p-[9%]`} role="img" aria-label={`${book.plainTitle} — cover coming soon`}>
      {/* Spine shading */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r from-white/10 to-transparent" />
      <div aria-hidden="true" className="flex flex-1 flex-col">
        <Logo variant="stacked" className="h-auto w-full" />
        <p className="mt-[6%] font-display text-[34cqw] font-black leading-none tracking-tight text-accent">2.0</p>
        <p className="mt-auto text-[3.6cqw] font-semibold uppercase tracking-widest text-foreground/70">{site.parent.name}</p>
      </div>
    </div>
  );
}
