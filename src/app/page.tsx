import type { Metadata } from "next";
import Link from "next/link";
import { FounderVentures } from "@/components/founder-ventures";
import { KineticSystem } from "@/components/kinetic-system";
import { ScrollStory } from "@/components/scroll-experience";
import { NextChapter } from "@/components/next-chapter";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Founder & systems architect · Mumbai
          </p>
          <h1>
            Software that turns manual work into{" "}
            <span>automated operations.</span>
          </h1>
          <p className="hero-description">
            I build AI receptionists, business automations, and web
            platforms—from the customer interface to the infrastructure behind
            it.
          </p>
          <div className="actions">
            <a className="button primary" href="/contact/">
              Discuss a project <span>↗</span>
            </a>
            <a className="text-link" href="/work/">
              Explore selected work <span>↓</span>
            </a>
          </div>
          <div className="hero-signoff">
            <span>
              Building <strong>QuantumReach</strong>
            </span>
            <span>
              Building <strong>QuantumVault</strong>
            </span>
          </div>
        </div>
        <div className="hero-art hero-instrument">
          <KineticSystem />
          <Link className="diagram-link" href="/work/priya/">
            Explore the deployment <span>↗</span>
          </Link>
        </div>
      </section>
      <FounderVentures />
      <ScrollStory />
      <section className="section container home-work">
        <div className="section-label">
          <span>Selected work</span>
          <Link href="/work/">All projects ↗</Link>
        </div>
        <Link className="project-index" href="/work/priya/">
          <span className="mono muted">01 / DEPLOYED</span>
          <div>
            <h2>
              Priya<span>↗</span>
            </h2>
            <p>
              A restaurant’s voice receptionist, connected to the business
              behind the call.
            </p>
            <div className="tech-tags">
              <span>Voice AI</span>
              <span>n8n</span>
              <span>Business automation</span>
            </div>
          </div>
          <div className="index-art voice-bars" aria-hidden="true">
            {Array.from({ length: 21 }, (_, i) => (
              <i
                key={i}
                style={{
                  height: `${20 + ((i * 19) % 65)}%`,
                  animationDelay: `${i * 65}ms`,
                }}
              />
            ))}
          </div>
        </Link>
        <Link className="project-index" href="/work/quantumvault/">
          <span className="mono muted">02 / IN DEVELOPMENT</span>
          <div>
            <h2>
              QuantumVault<span>↗</span>
            </h2>
            <p>
              Building AI-native escrow around verifiable milestones and dispute
              review.
            </p>
            <div className="tech-tags">
              <span>State machines</span>
              <span>PostgreSQL</span>
              <span>AI-native product</span>
            </div>
          </div>
          <div className="index-art vault-rings" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </Link>
      </section>
      <section className="section container home-directory">
        <div className="section-label">
          <span>The complete picture</span>
          <span>Explore</span>
        </div>
        <div className="directory-grid">
          {[
            [
              "01",
              "Services",
              "Systems for the way your business works.",
              "/services/",
            ],
            [
              "02",
              "Engineering",
              "From the interface to self-hosted infrastructure.",
              "/systems/",
            ],
            [
              "03",
              "The founder",
              "The person and principles behind the work.",
              "/about/",
            ],
          ].map(([n, t, d, h]) => (
            <Link href={h} key={h}>
              <span className="mono muted">{n} /</span>
              <h3>
                {t}
                <span>↗</span>
              </h3>
              <p>{d}</p>
            </Link>
          ))}
        </div>
      </section>
      <NextChapter
        href="/contact/"
        label="From bottleneck to working system"
        title="What should your business stop doing manually?"
      />
    </main>
  );
}
