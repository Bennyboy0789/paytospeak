import Image from "next/image";
import { book } from "@/content/book";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";

/**
 * Paid to $peak 2.0 cover, shown as a 3D book that turns toward the cursor.
 * Renders the real cover once `cover` is set in src/content/book.ts; until then,
 * a typographic placeholder in the brand system.
 */
export function BookCover({ className = "", priority }: { className?: string; priority?: boolean }) {
  const frame =
    "@container relative aspect-[2/3] w-full overflow-hidden rounded-r-lg rounded-l-sm shadow-[0_50px_100px_-30px_rgb(0_0_0/0.95),0_0_0_1px_rgb(255_255_255/0.06)]";

  const face = book.cover ? (
    <div className={frame}>
      <Image src={book.cover} alt={`Cover of ${book.plainTitle} by ${site.parent.name}`} fill sizes="(min-width: 1024px) 28rem, 70vw" priority={priority} className="object-cover" />
      <Sheen />
    </div>
  ) : (
    <div className={`${frame} flex flex-col bg-[radial-gradient(120%_80%_at_50%_0%,var(--color-secondary)_0%,var(--color-background)_70%)] p-[9%]`} role="img" aria-label={`${book.plainTitle} — cover coming soon`}>
      <div aria-hidden="true" className="flex flex-1 flex-col">
        <Logo variant="stacked" className="h-auto w-full" />
        <p className="mt-[6%] font-display text-[34cqw] font-black leading-none tracking-tight text-accent">2.0</p>
        <p className="mt-auto text-[3.6cqw] font-semibold uppercase tracking-widest text-foreground/70">{site.parent.name}</p>
      </div>
      <Sheen />
    </div>
  );

  return (
    <div data-tilt className={`book-stage group relative isolate ${className}`}>
      <div aria-hidden="true" className="absolute inset-[10%] -z-10 rounded-full bg-accent/25 opacity-60 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
      <div className="float">
        <div className="book-3d relative">
          {face}
          <div aria-hidden="true" className="book-pages" />
        </div>
      </div>
    </div>
  );
}

/** Spine crease and a glossy highlight. */
function Sheen() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/50 via-white/10 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgb(255_255_255/0.12)_45%,transparent_60%)]"
      />
    </>
  );
}
