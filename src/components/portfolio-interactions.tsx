"use client";
import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";

export function Workflow() {
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="workflow" ref={ref}>
      <div className="panel-top">
        <span>
          <span className="status-dot" /> PRIYA
        </span>
        <span>DEPLOYED WORKFLOW</span>
      </div>
      <div className="workflow-canvas">
        <svg
          className="workflow-lines"
          viewBox="0 0 440 390"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M220 66V128M220 180V242M220 294V320H112V342M220 320H328V342"
            stroke="#34404F"
          />
          <path
            key={run}
            className={started ? "trace" : ""}
            d="M220 66V128M220 180V242M220 294V320H112V342M220 320H328V342"
            stroke="#A9C7FF"
            strokeWidth="2"
            pathLength="1"
          />
        </svg>
        <div className="flow-node incoming">
          <span className="node-icon">↙</span>
          <div>
            Incoming call<small>Customer conversation</small>
          </div>
          <span className="node-index">01</span>
        </div>
        <div className="flow-node agent">
          <span className="node-icon">◉</span>
          <div>
            Voice agent<small>Vapi / Priya</small>
          </div>
          <span className="node-index">02</span>
        </div>
        <div className="flow-node automation">
          <span className="node-icon">⌘</span>
          <div>
            Workflow<small>n8n / Webhook routing</small>
          </div>
          <span className="node-index">03</span>
        </div>
        <div className="flow-outputs">
          <div>
            <span>▤</span>Business record<small>Google Sheets</small>
          </div>
          <div>
            <span>↗</span>Staff alert<small>Telegram</small>
          </div>
        </div>
      </div>
      <div className="workflow-bottom">
        <span>Illustrative workflow</span>
        <button
          onClick={() => {
            setStarted(true);
            setRun(run + 1);
          }}
          aria-label="Replay illustrative workflow"
        >
          Replay <span>↻</span>
        </button>
      </div>
    </div>
  );
}
const layers = [
  {
    name: "Experience",
    subtitle: "Interfaces people can use",
    tools: ["React", "Tailwind", "TypeScript"],
    title: "The interface is part of the system.",
    copy: "Business websites and web platforms turn technical capability into a clear, usable experience.",
    context: "QUANTUMREACH / WEB DEVELOPMENT",
  },
  {
    name: "Application & intelligence",
    subtitle: "Logic, orchestration, inference",
    tools: [
      "FastAPI",
      "Python",
      "OpenCV",
      "MediaPipe",
      "Claude",
      "Gemini",
      "OpenAI",
      "Ollama",
      "llama-cpp-python / CUDA",
      "OpenClaw",
    ],
    title: "Intelligence with a job to do.",
    copy: "Priya connects a voice interface to business workflows. Local inference experiments extend that exploration to self-hosted models and GPU-accelerated runtimes.",
    context: "VOICE AUTOMATION / LOCAL AI",
  },
  {
    name: "State & operations",
    subtitle: "Persistence, identity, visibility",
    tools: ["PostgreSQL", "Clerk", "Firebase", "Sentry", "Doppler"],
    title: "A product needs a reliable foundation.",
    copy: "QuantumVault’s architecture brings together state-machine logic, PostgreSQL persistence, Clerk authentication, and operational monitoring.",
    context: "QUANTUMVAULT / PRODUCT ARCHITECTURE",
  },
  {
    name: "Compute & connectivity",
    subtitle: "The infrastructure underneath",
    tools: [
      "Azure",
      "DigitalOcean",
      "Docker",
      "Git",
      "WSL2",
      "Ubuntu",
      "postmarketOS",
      "Cloudflare Tunnels",
      "Tailscale",
    ],
    title: "Built here. Operated here, too.",
    copy: "Self-hosted nodes on rooted hardware, Linux administration, and Tailscale mesh networking connect the software to the machines that run it.",
    context: "SELF-HOSTED SYSTEMS / DISTRIBUTED NODES",
  },
];
export function Systems() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const layer = layers[active];
  return (
    <div className="systems-layout">
      <div className="layer-list" aria-label="Architecture layers">
        {layers.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={active === i}
            aria-controls="layer-detail"
            onClick={() => setActive(i)}
            className={active === i ? "layer active" : "layer"}
          >
            <span className="mono">0{i + 1}</span>
            <span>
              <strong>{item.name}</strong>
              <small>{item.subtitle}</small>
            </span>
            <span>↗</span>
          </button>
        ))}
      </div>
      <div className="layer-detail" id="layer-detail" aria-live="polite">
        <motion.div
          key={active}
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 30,
            mass: 0.8,
          }}
        >
          <p className="eyebrow">{layer.context}</p>
          <h3>{layer.title}</h3>
          <p>{layer.copy}</p>
          <div className="tech-tags">
            {layer.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </motion.div>
        <p className="mono muted small">
          Selected capabilities across projects.
        </p>
      </div>
    </div>
  );
}
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const fallback = "Couldn’t send your brief. Please try again or";
    pending.current = true;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok && result?.ok === true) {
        form.reset();
        setStatus("sent");
      } else {
        setError(
          typeof result?.error === "string" ? `${result.error} You can also` : fallback,
        );
        setStatus("error");
      }
    } catch {
      setError(fallback);
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      method="post"
      action="/api/contact"
      aria-describedby="form-status"
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <label>
          Name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label>
        Company <span className="optional">Optional</span>
        <input
          name="company"
          autoComplete="organization"
          maxLength={150}
          placeholder="Company or project name"
        />
      </label>
      <label>
        Describe the workflow or product <span>*</span>
        <textarea
          name="brief"
          required
          rows={4}
          maxLength={1500}
          placeholder="What’s the problem, and what would a better system look like?"
        />
      </label>
      <div className="form-row">
        <label>
          Budget range <span className="optional">Optional</span>
          <select name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under ₹50,000</option>
            <option>₹50,000–₹2,00,000</option>
            <option>₹2,00,000+</option>
          </select>
        </label>
        <label>
          Timeline <span className="optional">Optional</span>
          <select name="timeline" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>3+ months</option>
          </select>
        </label>
      </div>
      <div hidden>
        <label>
          Leave this field empty
          <input name="website" autoComplete="off" tabIndex={-1} />
        </label>
      </div>
      <button type="submit" className="button primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : <>Send project brief <span>↗</span></>}
      </button>
      <div id="form-status" role="status" aria-atomic="true">
        {status === "sent" && <p className="form-feedback">Your project brief was sent.</p>}
        {status === "error" && (
          <p className="form-feedback">
            {error} <a href={SITE_CONFIG.links.email}>email me directly</a>.
          </p>
        )}
      </div>
    </form>
  );
}
