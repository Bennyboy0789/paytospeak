import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PointerFX } from "@/components/PointerFX";
import { site } from "@/lib/site";
import "./globals.css";

// Marketing site: every route must prerender fully. A page that reads cookies,
// headers, or uncached data fails the build instead of silently going dynamic.
export const ensureStatic = "navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.plainName} — Speaker coaching with Dr. Kevin C. Snyder`,
    template: `%s | ${site.plainName}`,
  },
  description: site.description,
  applicationName: site.plainName,
  authors: [{ name: site.parent.name, url: site.parent.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.plainName,
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#010407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <div aria-hidden="true" className="grain" />
        <PointerFX />
        <Analytics />
      </body>
    </html>
  );
}
