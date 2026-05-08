"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const MISSION_CARDS = [
  { title: "Build useful things", description: "Ship products that solve real problems, not just technically interesting demos." },
  { title: "Talk to real users", description: "Validate assumptions through direct conversations, not static research." },
  { title: "Ship more", description: "Execution velocity over planning paralysis. Learn by doing." },
  { title: "Get better", description: "Compound skills across tech, business, design, and communication." },
];

export function Mission() {
  return (
    <section className="py-24 px-4 sm:px-6 relative" id="mission">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Mission"
          title={"I'm not building a portfolio.\nI'm building leverage."}
        />

        <motion.p
          className="text-[#666] text-base md:text-lg leading-relaxed max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m focused on becoming a stronger developer-founder by building real products,
          talking to real users, and turning technical curiosity into useful systems.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MISSION_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mb-4" />
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-[#555] text-xs leading-relaxed">{card.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
