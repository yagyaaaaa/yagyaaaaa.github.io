"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden",
        hover && "transition-colors hover:bg-white/[0.06] hover:border-white/12",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
