import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Yagya Chauhan — Builder & Founder",
  description:
    "17-year-old builder from Mumbai. Founder of QuantumReach. Building at the intersection of AI automation, web systems, local AI, and startup execution.",
  keywords: [
    "Yagya Chauhan",
    "QuantumReach",
    "AI automation",
    "web development",
    "Mumbai",
    "builder",
    "founder",
  ],
  authors: [{ name: "Yagya Chauhan" }],
  metadataBase: new URL("https://yagyachauhan.me"),
  openGraph: {
    title: "Yagya Chauhan — Builder & Founder",
    description:
      "17-year-old builder from Mumbai. Founder of QuantumReach. Building at the intersection of AI automation, web systems, local AI, and startup execution.",
    url: "https://yagyachauhan.me",
    siteName: "Yagya Chauhan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yagya Chauhan — Builder & Founder",
    description:
      "17-year-old builder from Mumbai. Founder of QuantumReach. Building at the intersection of AI automation, web systems, local AI, and startup execution.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-[#e8e8e8]">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
