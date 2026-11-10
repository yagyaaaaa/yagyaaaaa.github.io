"use client";

import { useEffect, useRef, useState } from "react";
import { Architecture3D } from "@/components/architecture-3d";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const stages = [
  {
    name: "Receive",
    title: "A conversation becomes a signal.",
    detail: "01 / CUSTOMER INTERFACE",
  },
  {
    name: "Connect",
    title: "Intelligence meets the workflow.",
    detail: "02 / AUTOMATION & ORCHESTRATION",
  },
  {
    name: "Operate",
    title: "The right information. In the right place.",
    detail: "03 / BUSINESS OPERATIONS",
  },
];

export function KineticSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState(0);
  const playing = inView && !reduced && !paused && visible;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 75]);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStage((v) => (v + 1) % 3), 3400);
    return () => window.clearInterval(timer);
  }, [playing]);
  return (
    <div
      ref={ref}
      className="kinetic-system"
      data-playing={playing}
      data-stage={stage}
    >
      <div className="kinetic-caption mono">
        <span>
          <i className="status-dot" /> SYSTEMS, IN MOTION
        </span>
        <span>YC / 001</span>
      </div>
      <motion.div
        className="kinetic-camera"
        style={reduced ? undefined : { y }}
      >
        <Architecture3D active={stage} playing={playing} />
      </motion.div>
      <div className="kinetic-controls">
        <div className="kinetic-tabs" aria-label="Illustrated system stages">
          {stages.map((s, i) => (
            <button
              key={s.name}
              aria-pressed={i === stage}
              onClick={() => {
                setStage(i);
                setPaused(true);
              }}
            >
              <span className="mono">0{i + 1}</span>
              {s.name}
              <i />
            </button>
          ))}
        </div>
        <button
          className="motion-toggle"
          onClick={() => setPaused((v) => !v)}
          aria-label={
            paused ? "Play system animation" : "Pause system animation"
          }
          disabled={!!reduced}
        >
          {paused ? "Play ↗" : "Pause Ⅱ"}
        </button>
      </div>
      <div className="kinetic-description">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage}
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -6 }}
            transition={{ duration: 0.24 }}
          >
            <p className="mono muted">{stages[stage].detail}</p>
            <p>{stages[stage].title}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
