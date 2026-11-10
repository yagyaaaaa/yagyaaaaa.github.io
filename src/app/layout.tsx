import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SiteNavigation } from "@/components/site-navigation";
import { PageMotion } from "@/components/scroll-experience";
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-heading",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://yagyachauhan.me"),
  title: {
    default: "Yagya Chauhan — Founder & Systems Architect",
    template: "%s | Yagya Chauhan",
  },
  description:
    "AI receptionists, business automation, and web platforms. Yagya Chauhan builds the complete system—from the interface to the infrastructure. Founder of QuantumReach, Mumbai.",
  openGraph: {
    type: "website",
    siteName: "Yagya Chauhan",
    locale: "en_IN",
    images: [{ url: "/share.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/share.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNavigation />
        <PageMotion />
        {children}
        <footer className="container footer">
          <Link href="/" className="wordmark">
            YAGYA CHAUHAN<span className="wordmark-dot">.</span>
          </Link>
          <p>Independent thinking. Complete systems.</p>
          <Link href="/contact/">Let’s talk ↗</Link>
          <span className="mono muted">© {new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}
