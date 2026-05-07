"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SITE_CONFIG } from "@/lib/constants";

const SplineHero = dynamic(
  () => import("@/components/3d/SplineHero").then((m) => ({ default: m.SplineHero })),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-overlay" id="hero">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#6366f1]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              className="text-[#6366f1] text-xs font-mono uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mumbai, India
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Yagya
              <br />
              Chauhan
            </motion.h1>

            <motion.p
              className="text-[#888] text-base sm:text-lg leading-relaxed mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              17-year-old builder from Mumbai.{" "}
              <span className="text-white">Founder of QuantumReach.</span>
            </motion.p>

            <motion.p
              className="text-[#555] text-sm leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Building at the intersection of AI automation, web systems, local AI, and startup execution.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MagneticButton>
                <a
                  href="#builds"
                  className="px-6 py-3 rounded-lg bg-[#6366f1] text-white font-medium hover:bg-[#5558e8] transition-colors text-sm"
                >
                  View Work
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border border-white/10 text-[#e8e8e8] font-medium hover:border-white/20 hover:bg-white/5 transition-colors text-sm"
                >
                  Contact
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={SITE_CONFIG.links.quantumreach}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-[#6366f1]/30 text-[#6366f1] font-medium hover:bg-[#6366f1]/10 transition-colors text-sm"
                >
                  QuantumReach ↗
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            className="hidden md:flex items-center justify-center h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SplineHero />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
