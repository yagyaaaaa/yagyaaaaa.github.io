import type { Metadata } from "next";
import { ContactForm } from "@/components/portfolio-interactions";

export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "A business workflow, a new platform, or a conversation about QuantumVault. Start here.",
  alternates: { canonical: "/contact/" },
};
export default function Page() {
  return (
    <main id="main" className="interior-page">
      <header className="container page-intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>Let’s solve the right problem.</h1>
        <p className="section-copy">
          A business workflow, a new platform, or a conversation about
          QuantumVault. Start here.
        </p>
      </header>{" "}
      <section className="section container contact-section" id="contact">
        <div className="section-label">
          <span>06 / Let’s build something useful</span>
          <span>Start a conversation</span>
        </div>
        <div className="contact-layout">
          <div>
            <h2>What should your business stop doing manually?</h2>
            <p className="section-copy">
              Tell me where the friction is. We’ll start with the problem, then
              work out the right system.
            </p>
            <a className="email-link" href="mailto:yagya@quantumreach.tech">
              yagya@quantumreach.tech ↗
            </a>
            <div className="investor-link">
              <p className="mono muted">PRODUCT & INVESTOR CONVERSATIONS</p>
              <a
                className="text-link"
                href="mailto:yagya@quantumreach.tech?subject=Discuss%20QuantumVault"
              >
                Discuss QuantumVault ↗
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
