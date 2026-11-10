import type { Metadata } from "next";
import { Systems } from "@/components/portfolio-interactions";
import { ScrollStory } from "@/components/scroll-experience";
import { NextChapter } from "@/components/next-chapter";

export const metadata: Metadata = {
  title: "Engineering & infrastructure",
  description:
    "Explore the layers underneath: application logic, intelligence, persistent state, and the machines that run it.",
  alternates: { canonical: "/systems/" },
};
export default function Page() {
  return (
    <main id="main" className="interior-page">
      <header className="container page-intro">
        <p className="eyebrow">Engineering & infrastructure</p>
        <h1>The interface is only the beginning.</h1>
        <p className="section-copy">
          Explore the layers underneath: application logic, intelligence,
          persistent state, and the machines that run it.
        </p>
      </header>{" "}
      <section className="section container" id="systems">
        <div className="section-label">
          <span>04 / Engineering depth</span>
          <span>The complete system</span>
        </div>
        <div className="split-heading">
          <h2>From interface to inference to infrastructure.</h2>
          <p>
            I build the experience, connect the intelligence, and operate the
            systems underneath.
          </p>
        </div>
        <Systems />
      </section>
      <ScrollStory variant="systems" />
      <NextChapter
        href="/contact/"
        label="Have a workflow in mind?"
        title="Let’s build something useful."
      />
    </main>
  );
}
