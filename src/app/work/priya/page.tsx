import type { Metadata } from "next";
import Link from "next/link";
import { Workflow } from "@/components/portfolio-interactions";
export const metadata: Metadata = {
  title: "Priya — A connected voice receptionist",
  description:
    "A deployed restaurant voice receptionist connecting Vapi, n8n webhooks, Google Sheets, and Telegram. Built by Yagya Chauhan through QuantumReach.",
  alternates: { canonical: "/work/priya/" },
  openGraph: { images: ["/share-priya.png"] },
};
export default function Priya() {
  return (
    <main id="main">
      <header className="case-hero container">
        <Link className="text-link" href="/work/">
          ← Selected work
        </Link>
        <h1>A voice receptionist connected to the business behind the call.</h1>
        <p className="section-copy">
          Priya connects a restaurant’s voice interface to its operational
          tools. Built and deployed through QuantumReach.
        </p>
        <dl className="case-facts">
          <div>
            <dt>Project</dt>
            <dd>Priya / Restaurant automation</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Workflow design & deployment</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Deployed project</dd>
          </div>
        </dl>
      </header>
      <article className="container case-body">
        <h2>The business problem</h2>
        <p>
          A customer conversation is only useful to the business if its
          information reaches the people and tools that need it. Priya was built
          to connect a restaurant’s voice receptionist to the rest of its
          workflow.
        </p>
        <h2>The connected workflow</h2>
        <Workflow />
        <p>
          The diagram is an illustrative view of the deployed integration, not a
          live call monitor or a customer transcript.
        </p>
        <ul>
          <li>
            <strong>Vapi:</strong> provides the voice AI receptionist.
          </li>
          <li>
            <strong>n8n webhooks:</strong> connect the conversation to the
            automation workflow.
          </li>
          <li>
            <strong>Google Sheets API:</strong> carries information into the
            business’s records.
          </li>
          <li>
            <strong>Telegram:</strong> delivers notification alerts to staff.
          </li>
        </ul>
        <h2>End-to-end ownership</h2>
        <p>
          The work covered the voice reception workflow, integration between
          services, and deployment. The result is a connected path from a
          customer conversation to business records and staff alerts.
        </p>
        <h2>What this case study demonstrates</h2>
        <p>
          A deployed integration across voice AI, workflow orchestration, data
          capture, and notifications. No call-volume, revenue, or time-saving
          figures are claimed here; those require measured operational data.
        </p>
        <p>
          Customer data, call recordings, and private operational details are
          not included in this public overview.
        </p>
        <Link className="button primary" href="/contact/">
          Discuss a similar workflow <span>↗</span>
        </Link>
        <div className="actions">
          <Link className="text-link" href="/work/quantumvault/">
            Next / QuantumVault ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
