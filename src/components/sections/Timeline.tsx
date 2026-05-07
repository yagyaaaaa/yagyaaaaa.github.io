"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TIMELINE_EVENTS } from "@/lib/constants";

const TYPE_STYLES: Record<string, string> = {
  event: "bg-[#6366f1]",
  build: "bg-emerald-500",
};

export function Timeline() {
  return (
    <section className="py-24 px-4 sm:px-6 relative" id="timeline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Proof" title="Timeline" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          <div className="space-y-10">
            {TIMELINE_EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${TYPE_STYLES[event.type]} ring-4 ring-[#0a0a0a]`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-semibold text-sm">{event.title}</h3>
                      <span className="text-[#444] text-[10px] font-mono whitespace-nowrap">
                        {event.date}
                      </span>
                    </div>
                    {event.subtitle && (
                      <p className="text-[#6366f1] text-[11px] font-mono mb-3">{event.subtitle}</p>
                    )}
                    <p className="text-[#555] text-xs leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
