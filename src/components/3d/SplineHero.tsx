"use client";

import { useEffect, useState } from "react";
import { ReducedMotionFallback } from "./ReducedMotionFallback";

export function SplineHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (prefersReducedMotion || isMobile) {
    return <ReducedMotionFallback />;
  }

  // Placeholder — replace with actual Spline scene URL once available
  return (
    <div className="w-full h-full relative">
      <ReducedMotionFallback />
    </div>
  );
}
