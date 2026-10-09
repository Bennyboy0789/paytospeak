import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { NavLinks } from "@/components/NavLinks";
import { Container } from "@/components/Section";
import { applyHref } from "@/lib/site";

// Solid by default; .header-shell turns it transparent at the top of the page and
// back to glass as you scroll, where scroll-driven animations are supported.
export function Header() {
  return (
    <header style={{ viewTransitionName: "site-header" }} className="header-shell sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Logo priority className="h-7 w-auto lg:h-8" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
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
