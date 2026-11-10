"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
const links = [
  ["Work", "/work/"],
  ["Services", "/services/"],
  ["Systems", "/systems/"],
  ["About", "/about/"],
];
export function SiteNavigation() {
  const path = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/" className="wordmark">
          YAGYA CHAUHAN<span className="wordmark-dot">.</span>
        </Link>
        <div className="nav-links" onMouseLeave={() => setHovered(null)}>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onMouseEnter={() => setHovered(href)}
              onFocus={() => setHovered(href)}
              onBlur={() => setHovered(null)}
              aria-current={
                path === href ||
                path === href.slice(0, -1) ||
                path.startsWith(href)
                  ? "page"
                  : undefined
              }
            >
              {hovered === href && (
                <motion.span
                  className="nav-hover-plane"
                  layoutId={reduced ? undefined : "navigation-plane"}
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 32,
                    duration: reduced ? 0 : undefined,
                  }}
                  aria-hidden="true"
                />
              )}
              {label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="mobile-contact"
            aria-current={path.startsWith("/contact") ? "page" : undefined}
          >
            Contact ↗
          </Link>
        </div>
        <Link className="nav-cta" href="/contact/">
          Discuss a project <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
