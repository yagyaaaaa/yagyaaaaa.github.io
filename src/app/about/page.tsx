import type { Metadata } from "next";
import { FounderVentures } from "@/components/founder-ventures";
import { NextChapter } from "@/components/next-chapter";

export const metadata: Metadata = {
  title: "Yagya Chauhan",
  description:
    "A Mumbai-based founder working across software, automation, and infrastructure.",
  alternates: { canonical: "/about/" },
};
export default function Page() {
  return (
    <main id="main" className="interior-page">
      <header className="container page-intro">
        <p className="eyebrow">Yagya Chauhan</p>
        <h1>Build it. Connect it. Own it.</h1>
        <p className="section-copy">
          A Mumbai-based founder working across software, automation, and
          infrastructure.
        </p>
      </header>{" "}
      <section className="section container" id="about">
        <div className="section-label">
          <span>05 / Behind the systems</span>
          <span>Mumbai, India</span>
        </div>
        <div className="about-layout">
          <div className="founder-mark" aria-label="Yagya Chauhan monogram">
            <span className="mono">YC / FOUNDER</span>
            <div>
              yc<span>.</span>
            </div>
            <span className="mono">BUILD. CONNECT. OPERATE.</span>
          </div>
          <div>
            <p className="eyebrow">Yagya Chauhan</p>
            <h2>
              Close to the problem.
              <br />
              Own the whole system.
            </h2>
            <p>
              I’m Yagya Chauhan, a Mumbai-based founder and full-stack
              developer. I’m building QuantumReach, an AI automation agency, and
              QuantumVault, an escrow product for Indian commerce. My focus is
              taking each system from the business problem through to the
              infrastructure behind it.
            </p>
            <p>
              My work spans the interface, backend, and infrastructure—including
              self-hosted systems.
            </p>
            <div className="actions">
              <a className="text-link" href="https://github.com/yagyaaaaa">
                GitHub ↗
              </a>
              <a
                className="text-link"
                href="https://linkedin.com/in/yagyachauhan"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-label">
          <span>Working principles</span>
          <span>Independent thinking</span>
        </div>
        <div className="principle-list">
          <article>
            <span>01</span>
            <h3>Start with the bottleneck.</h3>
            <p>
              The technology follows the problem. Talk to the people doing the
              work before deciding what to build.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Connect the last mile.</h3>
            <p>
              An interface matters when it reaches the records, notifications,
              and routines a business depends on.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Stay close to the machine.</h3>
            <p>
              Operating self-hosted systems keeps infrastructure decisions
              grounded in real constraints.
            </p>
          </article>
        </div>
      </section>
      <FounderVentures />
      <NextChapter
        href="/contact/"
        label="Have a workflow in mind?"
        title="Let’s build something useful."
      />
    </main>
  );
}
