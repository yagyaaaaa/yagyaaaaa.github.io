import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { CurrentBuilds } from "@/components/sections/CurrentBuilds";
import { Timeline } from "@/components/sections/Timeline";
import { SkillsConstellation } from "@/components/sections/SkillsConstellation";
import { OperatingSystem } from "@/components/sections/OperatingSystem";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <CurrentBuilds />
      <Timeline />
      <SkillsConstellation />
      <OperatingSystem />
      <Contact />
    </main>
  );
}
