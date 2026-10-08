import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { Container } from "@/components/Section";
import { applyHref, nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Logo priority className="h-7 w-auto lg:h-8" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ButtonLink href={applyHref} size="sm">
              Apply
            </ButtonLink>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
