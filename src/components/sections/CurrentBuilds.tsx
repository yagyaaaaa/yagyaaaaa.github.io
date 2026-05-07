"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/constants";

const STATUS_COLORS: Record<string, string> = {
  green: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  yellow: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export function CurrentBuilds() {
  return (
    <section className="py-24 px-4 sm:px-6 relative" id="builds">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Builds" title="Current Builds" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <motion.div
                className="relative h-full rounded-xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden group"
                whileHover={{ y: -2, borderColor: "rgba(99,102,241,0.2)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-[#6366f1]/3 to-transparent" />

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        STATUS_COLORS[project.statusColor]
                      }`}
                    >
                      {project.status}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#555] hover:text-[#6366f1] transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#666] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="space-y-3 border-t border-white/5 pt-4">
                  <div>
                    <p className="text-[#444] text-[10px] font-mono uppercase tracking-wider mb-1">
                      Current priority
                    </p>
                    <p className="text-[#888] text-xs">{project.priority}</p>
                  </div>
                  <div>
                    <p className="text-[#444] text-[10px] font-mono uppercase tracking-wider mb-1">
                      Next milestone
                    </p>
                    <p className="text-[#6366f1] text-xs">{project.milestone}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
