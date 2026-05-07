"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const OS_CARDS = [
  {
    title: "School",
    description: "Balancing academics while running a studio and shipping projects. Not perfect. Working on it.",
    icon: "📚",
  },
  {
    title: "Gym",
    description: "Daily training session. Physical discipline as a system, not just a habit.",
    icon: "💪",
  },
  {
    title: "Development",
    description: "Coding, building, researching. Deep work blocks dedicated to active builds.",
    icon: "⚙️",
  },
  {
    title: "Startup",
    description: "Client outreach, product thinking, user conversations. QuantumReach is the main focus.",
    icon: "🚀",
  },
  {
    title: "Recovery",
    description: "Sleep, downtime, and mental reset. Still optimizing timing and structure.",
    icon: "🔄",
  },
];

export function OperatingSystem() {
  return (
    <section className="py-24 px-4 sm:px-6 relative" id="os">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Personal" title="The Operating System" />

        <motion.p
          className="text-[#666] text-base leading-relaxed max-w-2xl mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I track fitness, screen time, sleep, execution, and focus through a 90-day system.
          I&apos;m still learning structure, but I treat personal discipline as part of the build.
        </motion.p>

        <motion.p
          className="text-[#444] text-sm font-mono mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          // Current flaw: I can enter deep work, but I&apos;m still fixing sleep timing and structure.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {OS_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard className="h-full">
                <div className="text-2xl mb-3">{card.icon}</div>
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
