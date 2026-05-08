"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";

export function SkillsConstellation() {
  const [activeSkill, setActiveSkill] = useState<{ name: string; description: string } | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Skills" title="Skills Constellation" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
            >
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[#6366f1] text-xs font-mono uppercase tracking-widest mb-5">
                  {category.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        activeSkill?.name === skill.name
                          ? "border-[#6366f1]/60 bg-[#6366f1]/10 text-[#6366f1]"
                          : "border-white/8 bg-white/[0.03] text-[#888] hover:border-white/15 hover:text-white"
                      }`}
                      onClick={() =>
                        setActiveSkill(
                          activeSkill?.name === skill.name ? null : skill
                        )
                      }
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {activeSkill &&
                    category.skills.some((s) => s.name === activeSkill.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pt-4 border-t border-white/5 text-[#666] text-xs leading-relaxed">
                          {activeSkill.description}
                        </p>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#333] text-xs mt-8 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          // click any skill to see how I use it
        </motion.p>
      </div>
    </section>
  );
}
