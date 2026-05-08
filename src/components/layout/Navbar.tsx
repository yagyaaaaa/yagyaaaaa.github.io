"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold font-mono text-sm hover:text-[#6366f1] transition-colors"
        >
          YC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#888] hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.links.quantumreach}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-lg border border-[#6366f1]/40 text-[#6366f1] hover:bg-[#6366f1]/10 transition-colors"
          >
            QuantumReach ↗
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1">
            <span
              className={cn(
                "block h-px bg-current transition-all",
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              )}
            />
            <span
              className={cn(
                "block h-px bg-current transition-all",
                menuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block h-px bg-current transition-all",
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 px-4 py-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#888] hover:text-white text-sm py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.links.quantumreach}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6366f1]"
            >
              QuantumReach ↗
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
