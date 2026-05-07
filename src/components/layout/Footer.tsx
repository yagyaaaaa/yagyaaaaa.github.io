import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold font-mono text-sm mb-1">Yagya Chauhan</p>
          <p className="text-[#555] text-xs">
            17-year-old builder from Mumbai. Founder of QuantumReach.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white text-xs transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white text-xs transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SITE_CONFIG.links.email}
            className="text-[#555] hover:text-white text-xs transition-colors"
          >
            Email
          </a>
          <a
            href={SITE_CONFIG.links.quantumreach}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white text-xs transition-colors"
          >
            QuantumReach
          </a>
        </div>
        <p className="text-[#333] text-xs">© 2025 Yagya Chauhan</p>
      </div>
    </footer>
  );
}
