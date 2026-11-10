import type { Metadata } from "next";
import { NextChapter } from "@/components/next-chapter";

export const metadata: Metadata = {
  title: "QuantumReach",
  description:
    "AI automation and development built around the work your business actually needs to do.",
  alternates: { canonical: "/services/" },
};
export default function Page() {
  return (
    <main id="main" className="interior-page">
      <header className="container page-intro">
        <p className="eyebrow">QuantumReach</p>
        <h1>Less friction. More forward.</h1>
        <p className="section-copy">
          I’m building QuantumReach: an AI automation agency for custom
          workflows, AI integration, and systems architecture.
        </p>
        <a className="text-link" href="https://quantumreach.tech/agency/">
          Visit QuantumReach ↗
        </a>
      </header>{" "}
      <section className="section container" id="services">
        <div className="section-label">
          <span>02 / QuantumReach</span>
          <span>Automation & development</span>
        </div>
        <div className="split-heading">
          <h2>Bring me the workflow that slows your business down.</h2>
          <p>
            One point of ownership.
            <br />
            From the first conversation to the system your team uses.
          </p>
        </div>
        <div className="services">
          {[
            {
              title: "AI reception & customer workflows",
              copy: "Connect customer conversations to the tools your team uses.",
              tag: "Conversations → operations",
            },
            {
              title: "Lead & operations automation",
              copy: "Reduce repetitive collection, routing, and follow-up work.",
              tag: "Manual steps → connected systems",
            },
            {
              title: "Business websites & digital setup",
              copy: "Build the website, domain, and business presence needed to operate online.",
              tag: "First impression → business foundation",
            },
          ].map((item, i) => (
            <a className="service-row" href="/contact/" key={item.title}>
              <span className="mono muted">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <span className="service-tag mono">{item.tag}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section className="section container process-section">
        <div className="section-label">
          <span>How we work</span>
          <span>From problem to operation</span>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Understand",
              "Map the workflow, the people involved, and the tools already in use.",
            ],
            [
              "02",
              "Design",
              "Define the smallest useful system, the integrations, and the delivery scope.",
            ],
            [
              "03",
              "Build",
              "Implement the interface and automation, with clear paths for exceptions.",
            ],
            [
              "04",
              "Operate",
              "Deploy the system and establish how it will be monitored and maintained.",
            ],
          ].map(([n, t, c]) => (
            <article key={n}>
              <span className="mono muted">{n}</span>
              <h3>{t}</h3>
              <p>{c}</p>
            </article>
          ))}
        </div>
      </section>
      <NextChapter
        href="/contact/"
        label="Have a workflow in mind?"
        title="Let’s build something useful."
      />
    </main>
  );
}
