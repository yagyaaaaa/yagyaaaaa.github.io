import type { Metadata } from "next";
import Link from "next/link";
import { Architecture3D } from "@/components/architecture-3d";
export const metadata: Metadata = {
  title: "QuantumVault — Escrow around verifiable milestones",
  description:
    "An AI-native escrow platform in development, exploring milestone verification and dispute arbitration. Product architecture by Yagya Chauhan.",
  alternates: { canonical: "/work/quantumvault/" },
  openGraph: { images: ["/share-quantumvault.png"] },
};
export default function QuantumVault() {
  return (
    <main id="main">
      <header className="case-hero container">
        <Link className="text-link" href="/work/">
          ← Founder-led product
        </Link>
        <h1>Building escrow around verifiable milestones.</h1>
        <p className="section-copy">
          I’m building QuantumVault: escrow infrastructure for Indian commerce,
          focused on the trust gap between freelancers and buyers. The MVP is in
          development.
        </p>
        <dl className="case-facts">
          <div>
            <dt>Product</dt>
            <dd>QuantumVault</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Founder & systems architect</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>In development</dd>
          </div>
        </dl>
      </header>
      <div className="container vault-spatial">
        <Architecture3D active={1} playing={false} compact />
        <div>
          <p className="eyebrow">Trust, built in layers</p>
          <h2>Agreement. Evidence. Resolution.</h2>
          <p>
            A product vision for transactions where payment and delivery need a
            shared record.
          </p>
          <a className="text-link" href="https://quantumreach.tech/app/">
            See the QuantumVault vision ↗
          </a>
        </div>
      </div>
      <article className="container case-body">
        <h2>The product question</h2>
        <p>
          How can a transaction be structured around evidence that an agreed
          milestone has been completed? QuantumVault explores this question
          through explicit workflow states, milestone verification, and dispute
          review.
        </p>
        <h2>What I’m working toward</h2>
        <p>
          The published roadmap brings together escrow state transitions, an AI
          arbitrator called Alfred, identity-backed trust scores, and a security
          monitor called Jarvis. These are product goals for the MVP, not a
          claim that every capability is operating in production.
        </p>
        <p>
          QuantumReach’s agency work is intended to fund this product ecosystem.
          QuantumVault is the first product in that direction.
        </p>
        <h2>Architecture under development</h2>
        <div className="vault-diagram">
          <div className="panel-top">
            <span>MILESTONE LIFECYCLE</span>
            <span>CONCEPTUAL MODEL</span>
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
        <p>
          This schematic describes the intended milestone lifecycle. It is not a
          claim of production readiness or a demonstration of live custody,
          payments, or automated arbitration.
        </p>
        <ul>
          <li>
            <strong>State-machine backend:</strong> explicit transitions for a
            milestone-driven workflow.
          </li>
          <li>
            <strong>PostgreSQL:</strong> persistence for application state.
          </li>
          <li>
            <strong>Clerk:</strong> authentication.
          </li>
          <li>
            <strong>Sentry and Doppler:</strong> monitoring and environment
            configuration.
          </li>
          <li>
            <strong>Azure / DigitalOcean:</strong> deployment infrastructure.
          </li>
        </ul>
        <h2>Founder progress</h2>
        <p>
          Startup proposals have been submitted to Conquest ’26 at BITS Pilani
          and FutureX AI. These are proposal submissions, not claims of
          acceptance, funding, or endorsement.
        </p>
        <h2>The conversation I’m looking for</h2>
        <p>
          Conversations with potential users, product partners, and investors
          interested in the practical challenges of milestone-based transactions
          and evidence-driven dispute resolution.
        </p>
        <a
          className="button primary"
          href="mailto:yagya@quantumreach.tech?subject=Discuss%20QuantumVault"
        >
          Discuss QuantumVault <span>↗</span>
        </a>
        <div className="actions">
          <Link className="text-link" href="/work/priya/">
            Explore deployed work / Priya ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
