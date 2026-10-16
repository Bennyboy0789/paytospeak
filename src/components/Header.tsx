import Link from "next/link";
import { HeaderCta } from "@/components/HeaderCta";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { NavLinks } from "@/components/NavLinks";
import { Container } from "@/components/Section";

// Solid by default; .header-shell turns it transparent at the top of the page and
// back to glass as you scroll, where scroll-driven animations are supported.
// data-autohide: ScrollFX slides it away while scrolling down and back on the way up.
export function Header() {
  return (
    <header data-autohide style={{ viewTransitionName: "site-header" }} className="header-shell sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 py-2 transition-opacity duration-300 hover:opacity-80">
          <Logo priority className="h-6 w-auto sm:h-7 lg:h-8" />
        </Link>

        {/* Centred on the page from lg, not between the logo and the button. */}
        <nav aria-label="Main" className="hidden md:block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <HeaderCta />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
