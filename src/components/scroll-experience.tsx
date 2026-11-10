"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

const stories = {
  workflow: [
    {
      title: "Start with a conversation.",
      copy: "A customer calls. The interface captures the first moment of a business workflow.",
      label: "Incoming call",
      detail: "Customer → Priya",
      icon: "â†™",
    },
    {
      title: "Give intelligence a purpose.",
      copy: "The voice agent connects the conversation to the tools behind it.",
      label: "Voice intelligence",
      detail: "Vapi / Voice agent",
      icon: "◉",
    },
    {
      title: "Connect the moving parts.",
      copy: "Webhooks carry information into the automation, linking the voice interface to business operations.",
      label: "Orchestration",
      detail: "n8n / Webhook routing",
      icon: "⌘",
    },
    {
      title: "Make it useful to the team.",
      copy: "Business records and staff notifications bring the workflow into everyday operations.",
      label: "Business operations",
      detail: "Google Sheets + Telegram",
      icon: "↗",
    },
  ],
  systems: [
    {
      title: "An interface people understand.",
      copy: "The experience translates the product into something a person can actually use.",
      label: "Experience",
      detail: "React / TypeScript",
      icon: "□",
    },
    {
      title: "Logic beneath the surface.",
      copy: "Application services and inference connect user intent to useful work.",
      label: "Intelligence",
      detail: "Python / FastAPI / AI",
      icon: "◉",
    },
    {
      title: "State that carries forward.",
      copy: "Persistence, identity, and monitoring support the application beyond a single interaction.",
      label: "State & operations",
      detail: "PostgreSQL / Clerk / Sentry",
      icon: "▤",
    },
    {
      title: "Infrastructure you can operate.",
      copy: "Cloud deployments and self-hosted nodes connect software to the machines that run it.",
      label: "Compute & connectivity",
      detail: "Linux / Docker / Tailscale",
      icon: "⌘",
    },
  ],
};
function Plate({
  index,
  progress,
  label,
  detail,
  icon,
  active,
}: {
  index: number;
  progress: MotionValue<number>;
  label: string;
  detail: string;
  icon: string;
  active: boolean;
}) {
  const y = useTransform(
    progress,
    [0, 0.65, 1],
    [index * 16, index * 100, index * 100],
  );
  const x = useTransform(progress, [0, 0.65], [index * 10, 0]);
  const rotate = useTransform(progress, [0, 0.65], [index * -2, 0]);
  const rotateX = useTransform(progress, [0, 0.55, 1], [22, 0, 0]);
  const scale = useTransform(progress, [0, 0.65], [1 - index * 0.035, 1]);
  return (
    <motion.div
      className={`story-plate ${active ? "is-active" : ""}`}
      style={{ y, x, rotate, rotateX, scale, zIndex: 5 - index }}
    >
      <span className="plate-icon">{icon}</span>
      <div>
        <strong>{label}</strong>
        <small>{detail}</small>
      </div>
      <span className="mono">0{index + 1}</span>
    </motion.div>
  );
}
export function ScrollStory({
  variant = "workflow",
}: {
  variant?: "workflow" | "systems";
}) {
  const target = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  const pathLength = useTransform(progress, [0.12, 0.9], [0, 1]);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActive(Math.min(3, Math.floor(v * 4))),
  );
  const steps = stories[variant];
  return (
    <section
      ref={target}
      className={`scroll-story ${reduced ? "reduced-story" : ""}`}
      aria-label={
        variant === "workflow"
          ? "From conversation to operation"
          : "The layers of a complete system"
      }
    >
      <div className="story-sticky container">
        <div className="section-label">
          <span>
            {variant === "workflow"
              ? "One connected system"
              : "Inside the architecture"}
          </span>
          <span>Scroll to explore ↓</span>
        </div>
        <div className="story-layout">
          <div className="story-editorial">
            <p className="eyebrow">
              {variant === "workflow"
                ? "The Priya workflow / Illustrated"
                : "Capabilities across projects / Illustrated"}
            </p>
            <h2>
              {variant === "workflow" ? (
                <>
                  A conversation.
                  <br />
                  An entire operation.
                </>
              ) : (
                <>
                  Every layer.
                  <br />
                  One system.
                </>
              )}
            </h2>
            <ol className="story-steps">
              {steps.map((step, i) => (
                <li key={step.label} className={active === i ? "current" : ""}>
                  <span className="mono">0{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="story-machine" aria-hidden="true">
            <div className="machine-grid" />
            <div className="machine-heading mono">
              <span>
                {variant === "workflow"
                  ? "PRIYA / SYSTEM VIEW"
                  : "ARCHITECTURE / CROSS-SECTION"}
              </span>
              <span>0{active + 1} / 04</span>
            </div>
            <div className="plates">
              <svg viewBox="0 0 360 400" fill="none" className="plate-path">
                <path d="M30 36V340" stroke="#2A323D" />
                <motion.path
                  d="M30 36V340"
                  stroke="#A9C7FF"
                  strokeWidth="2"
                  style={{ pathLength }}
                />
              </svg>
              {steps.map((step, i) => (
                <Plate
                  key={step.label}
                  index={i}
                  progress={progress}
                  {...step}
                  active={active === i}
                />
              ))}
            </div>
            <div className="machine-foot mono">
              <span>ILLUSTRATIVE / NOT LIVE TELEMETRY</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const animations: Animation[] = [];
    const setup = () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      if (media.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target;
              animations.push(
                el.animate(
                  [
                    { opacity: 0.2, transform: "translateY(28px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
                  { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
                ),
              );
              observer?.unobserve(el);
            }
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(
          ".page-intro h1, .page-intro .section-copy, .project-heading, .priya-showcase, .split-heading, .service-row, .vault-layout, .systems-layout, .about-layout, .contact-layout, .project-index, .directory-grid > a, .process-grid > article, .principle-list > article, .next-chapter h2, .case-body h2",
        )
        .forEach((el) => observer?.observe(el));
    };
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-index"),
    );
    const cleanups = cards.map((card) => {
      const move = (e: PointerEvent) => {
        if (media.matches || e.pointerType !== "mouse") return;
        const r = card.getBoundingClientRect();
        card.style.setProperty(
          "--tilt-x",
          `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`,
        );
        card.style.setProperty(
          "--tilt-y",
          `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`,
        );
      };
      const reset = () => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", reset);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", reset);
        reset();
      };
    });
    setup();
    media.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      animations.forEach((a) => a.cancel());
      media.removeEventListener("change", setup);
    };
  }, [pathname]);
  return null;
}
