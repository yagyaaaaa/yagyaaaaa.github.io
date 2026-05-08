"use client";

import { motion } from "motion/react";
import { Mail, Code2, Globe, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONFIG } from "@/lib/constants";

const CONTACT_LINKS = [
  {
    label: "Email",
    href: SITE_CONFIG.links.email,
    icon: Mail,
    description: "Direct line",
    external: false,
  },
  {
    label: "GitHub",
    href: SITE_CONFIG.links.github,
    icon: Code2,
    description: "See what I'm building",
    external: true,
  },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.links.linkedin,
    icon: Globe,
    description: "Professional",
    external: true,
  },
  {
    label: "QuantumReach",
    href: SITE_CONFIG.links.quantumreach,
    icon: ExternalLink,
    description: "The studio",
    external: true,
  },
];

export function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Want to talk AI, websites, automation, or early-stage building?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-[#6366f1]/30 hover:bg-[#6366f1]/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <link.icon
                size={18}
                className="text-[#555] group-hover:text-[#6366f1] transition-colors"
              />
              <div>
                <p className="text-white text-sm font-medium">{link.label}</p>
                <p className="text-[#444] text-xs mt-0.5">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#333] text-xs font-mono">
            // yagya chauhan · 17 · builder · mumbai · 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
