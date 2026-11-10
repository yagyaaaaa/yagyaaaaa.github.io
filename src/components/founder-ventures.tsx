import Link from "next/link";
export function FounderVentures() {
  return (
    <section className="section container founder-ventures">
      <div className="section-label">
        <span>What I’m building</span>
        <span>Agency → Product</span>
      </div>
      <div className="split-heading">
        <h2>
          Two ventures.
          <br />
          One connected ambition.
        </h2>
        <p>
          I’m building QuantumReach and QuantumVault: business automation today,
          and infrastructure for more trustworthy transactions next.
        </p>
      </div>
      <div className="venture-path">
        <article>
          <div className="venture-top">
            <span className="mono">01 / THE AGENCY</span>
            <span className="badge">Building & delivering</span>
          </div>
          <h3>QuantumReach</h3>
          <p>
            My AI automation agency. We build custom workflows, integrate AI
            into existing tools, and design the systems behind business
            operations.
          </p>
          <a className="text-link" href="https://quantumreach.tech/agency/">
            Explore QuantumReach ↗
          </a>
        </article>
        <div className="venture-bridge" aria-hidden="true">
          <span>
            EXPERTISE
            <br />+ REVENUE
          </span>
          <i />
          <b>→</b>
        </div>
        <article>
          <div className="venture-top">
            <span className="mono">02 / THE PRODUCT</span>
            <span className="badge">MVP in development</span>
          </div>
          <h3>QuantumVault</h3>
          <p>
            I’m building an escrow platform for Indian commerce, starting with
            the trust gap between freelancers and buyers. The product vision
            combines verified delivery with AI-assisted dispute review.
          </p>
          <Link className="text-link" href="/work/quantumvault/">
            Explore QuantumVault ↗
          </Link>
        </article>
      </div>
      <p className="venture-footnote">
        The plan: grow the agency’s expertise and revenue into independent
        products.{" "}
        <a href="https://quantumreach.tech/">See the venture vision ↗</a>
      </p>
    </section>
  );
}
