import type { Metadata } from "next";
import Link from "next/link";
import { NextChapter } from "@/components/next-chapter";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Deployed client workflows and a founder-led product. Explore the decisions, architecture, and scope behind each.",
  alternates: { canonical: "/work/" },
};
export default function Page() {
  return (
    <main id="main" className="interior-page">
      <header className="container page-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Systems with a purpose.</h1>
        <p className="section-copy">
          Deployed client workflows and a founder-led product. Explore the
          decisions, architecture, and scope behind each.
        </p>
      </header>{" "}
      <section id="work" className="section container">
        <div className="section-label">
          <span>01 / Selected work</span>
          <span>Built for the real world</span>
        </div>
        <div className="project-heading">
          <div>
            <p className="eyebrow">QuantumReach / Priya</p>
            <h2>
              A voice receptionist connected to the business behind the call.
            </h2>
          </div>
          <span className="badge">
            <span className="status-dot" /> Deployed project
          </span>
        </div>
        <div className="priya-showcase">
          <div className="call-preview">
            <div className="panel-top">
              <span>PRIYA / VOICE INTERFACE</span>
              <span>ILLUSTRATIVE DEMO</span>
            </div>
            <div className="voice-symbol">
              P<span className="voice-orbit" />
            </div>
            <p className="call-title">
              A conversation.
              <br />A connected workflow.
            </p>
            <div className="waveform" aria-hidden="true">
              {Array.from({ length: 39 }, (_, i) => (
                <i
                  key={i}
                  style={{ height: `${12 + ((i * 17 + 9) % 47)}px` }}
                />
              ))}
            </div>
            <p className="mono muted">Voice → workflow → business tools</p>
          </div>
          <div className="delivery">
            <p className="eyebrow">Beyond answering the call</p>
            <h3>
              Useful information.
              <br />
              Right where it’s needed.
            </h3>
            <p>
              A restaurant’s voice receptionist, connected to its day-to-day
              operations through automated webhooks and staff notifications.
            </p>
            <ol className="delivery-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Pick up the conversation</strong>
                  <p>Vapi powers the voice interface.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Connect the workflow</strong>
                  <p>n8n routes data through webhooks.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Keep the team informed</strong>
                  <p>Google Sheets records. Telegram alerts.</p>
                </div>
              </li>
            </ol>
            <Link className="text-link" href="/work/priya/">
              Read the deployment story <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section container" id="quantumvault">
        <div className="section-label">
          <span>03 / Founder-led product</span>
          <span>QuantumVault</span>
        </div>
        <div className="vault-layout">
          <div>
            <p className="eyebrow">Trust, designed into the workflow</p>
            <h2>Building escrow around verifiable milestones.</h2>
            <p className="section-copy">
              QuantumVault is an AI-native escrow platform being developed
              around milestone verification and dispute arbitration.
            </p>
            <div className="actions">
              <Link className="button secondary" href="/work/quantumvault/">
                Explore the architecture <span>↗</span>
              </Link>
            </div>
            <p className="mono muted small">Product in development</p>
          </div>
          <div className="vault-diagram">
            <div className="panel-top">
              <span>QUANTUMVAULT / STATE MODEL</span>
              <span>CONCEPTUAL</span>
            </div>
            <div className="state-node">
              Milestone defined <span>01</span>
            </div>
            <div className="connector" />
            <div className="state-node selected">
              Evidence submitted <span>02</span>
            </div>
            <div className="connector" />
            <div className="state-node">
              Verification <span>03</span>
            </div>
            <div className="state-branches">
              <span>Approved</span>
              <span>Dispute review</span>
            </div>
            <div className="vault-foundation">
              <span>PostgreSQL</span>
              <span>Clerk</span>
              <span>State machine</span>
            </div>
          </div>
        </div>
        <div className="submission-strip">
          <span className="mono muted">2026 / PROPOSAL SUBMISSIONS</span>
          <span>
            Conquest ’26 <small>BITS Pilani</small>
          </span>
          <span>
            FutureX AI <small>Startup proposal</small>
          </span>
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
