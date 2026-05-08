export const SITE_CONFIG = {
  name: "Yagya Chauhan",
  title: "Yagya Chauhan — Builder & Founder",
  description:
    "17-year-old builder from Mumbai. Founder of QuantumReach. Building at the intersection of AI automation, web systems, local AI, and startup execution.",
  url: "https://yagyachauhan.me",
  links: {
    github: "https://github.com/yagyaaaaa",
    linkedin: "https://linkedin.com/in/yagyachauhan",
    email: "mailto:yagya@quantumreach.in",
    quantumreach: "https://quantumreach.in",
  },
};

export const NAV_LINKS = [
  { label: "Work", href: "#builds" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "OS", href: "#os" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: "quantumreach",
    title: "QuantumReach",
    status: "Active focus",
    statusColor: "green",
    description:
      "AI automation and premium web experience studio helping businesses build cleaner digital systems, better websites, and stronger automation workflows.",
    priority: "Turning brand and concept into client acquisition and service delivery.",
    milestone: "First repeatable client acquisition system.",
    link: "https://quantumreach.in",
  },
  {
    id: "jarvislab",
    title: "Jarvis Lab",
    status: "Experimental lab",
    statusColor: "blue",
    description:
      "Local AI hosting and personal assistant experiments using Dell G15 and rooted OnePlus 6T. Exploring LLMs, vector databases, and multi-agent systems.",
    priority: "Learning local AI, vector databases, and multi-agent systems.",
    milestone: "Useful local automation prototype.",
    link: null,
  },
  {
    id: "quantumvault",
    title: "QuantumVault",
    status: "Early concept",
    statusColor: "yellow",
    description:
      "AI-powered escrow and trust infrastructure concept for safer digital transactions in service marketplaces and peer-to-peer environments.",
    priority: "User validation and problem narrowing.",
    milestone: "Validate the target audience before overbuilding.",
    link: null,
  },
  {
    id: "mkure",
    title: "MKure",
    status: "Hackathon project",
    statusColor: "purple",
    description:
      "AI medical companion concept built during Hack The Flame. Explored health-focused AI companion interfaces under hackathon constraints.",
    priority: "Archived learning project.",
    milestone: "Apply learnings in future AI companion systems.",
    link: null,
  },
];

export const TIMELINE_EVENTS = [
  {
    id: "futurex",
    title: "FutureX AI 2026",
    subtitle: "Campus Fund x Google Cloud x TaQsha",
    date: "January 2026",
    description:
      "Attended FutureX AI 2026 hosted by Campus Fund, Google Cloud, and TaQsha by The Times of India. Asked panel questions around audience discovery, distribution, and whether market research should happen through static research or direct user conversations. Received encouraging public feedback on an early idea during the session.",
    type: "event",
  },
  {
    id: "esummit",
    title: "IIT Bombay 21st E-Summit",
    subtitle: "Entrepreneurship Summit",
    date: "December 2025",
    description:
      "Attended the IIT Bombay 21st E-Summit. Exposure to startup thinking, founder conversations, venture-building, and the Indian entrepreneurship ecosystem.",
    type: "event",
  },
  {
    id: "mkure",
    title: "Hack The Flame / MKure",
    subtitle: "Hackathon",
    date: "November 2025",
    description:
      "Built MKure, an AI medical companion concept, under hackathon constraints. Learned rapid prototyping, problem framing, and how to present ideas under pressure.",
    type: "build",
  },
  {
    id: "qr-brand",
    title: "QuantumReach — Brand Launch",
    subtitle: "Venture",
    date: "2024",
    description:
      "Registered the QuantumReach domain and began building the brand, service model, and initial client outreach system.",
    type: "build",
  },
  {
    id: "jarvis",
    title: "Jarvis Lab — Started",
    subtitle: "Personal Lab",
    date: "2024",
    description:
      "Began local AI experiments using personal hardware. Started exploring LLM hosting, vector databases, and personal AI assistant architecture.",
    type: "build",
  },
];

export const SKILLS = [
  {
    category: "Technical",
    skills: [
      { name: "Web Development", description: "Building production-ready websites and web apps." },
      { name: "AI Automation", description: "Designing automated workflows powered by AI." },
      { name: "Local AI", description: "Self-hosted LLMs and private AI inference on local hardware." },
      { name: "Vector Databases", description: "Semantic search and AI memory using vector stores." },
      { name: "Multi-agent Systems", description: "Orchestrating multiple AI agents for complex tasks." },
      { name: "Git / GitHub", description: "Version control, branching, and collaborative workflows." },
      { name: "Deployment", description: "Shipping to Vercel, GitHub Pages, and self-hosted environments." },
    ],
  },
  {
    category: "Founder",
    skills: [
      { name: "Market Research", description: "Understanding markets before building for them." },
      { name: "User Discovery", description: "Talking to real users to find real problems." },
      { name: "Positioning", description: "Making something feel distinct in a crowded market." },
      { name: "Outreach", description: "Cold and warm outreach for client and partnership acquisition." },
      { name: "Pitching", description: "Communicating ideas quickly and clearly under pressure." },
      { name: "Client Communication", description: "Managing expectations, delivery, and trust." },
    ],
  },
  {
    category: "Creative",
    skills: [
      { name: "Web Design", description: "Visual design systems built for the web." },
      { name: "Brand Direction", description: "Defining visual and verbal identity for brands." },
      { name: "Visual Systems", description: "Consistent design systems across products." },
      { name: "Product Storytelling", description: "Making products feel worth using through narrative." },
    ],
  },
  {
    category: "Operating System",
    skills: [
      { name: "Gym", description: "Daily training as a system, not just exercise." },
      { name: "Screen-time Tracking", description: "Monitoring and optimizing daily digital usage." },
      { name: "90-Day System", description: "Structured 90-day performance and execution cycles." },
      { name: "Sleep Discipline", description: "Work in progress. Optimizing sleep timing and structure." },
    ],
  },
];
