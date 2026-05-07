# Agent Prompt — yagyachauhan.me

You are building the personal website of Yagya Chauhan, a 17-year-old builder from Borivali, Mumbai and founder of QuantumReach.

This website must not look like a generic AI-generated portfolio. It must feel custom, premium, technical, sharp, and slightly experimental — a mix of young founder, AI lab, personal operating system, and high-taste web presence.

The domain is:

yagyachauhan.me

## Primary Objective

Build a high-quality personal website that positions Yagya as:

- a 17-year-old builder from Mumbai
- founder of QuantumReach
- working across AI automation, web systems, local AI experiments, and startup execution
- early, ambitious, honest, and execution-focused
- not a fake "visionary CEO"
- not a basic student portfolio

The website should help him leverage his domain professionally, show what he is building, and create a credible presence for founders, mentors, clients, event organizers, and collaborators.

## Tone

Use sharp, direct, grounded copy.

Avoid:
- fake corporate language
- "visionary entrepreneur"
- "revolutionizing the world"
- "passionate about technology"
- generic AI slop
- fake numbers
- fake clients
- fake authority

Preferred tone:
- direct
- self-aware
- ambitious
- technical
- founder-like
- honest about being early
- serious, but not boring

## Core Positioning

Hero positioning:

Yagya Chauhan
17-year-old builder from Mumbai. Founder of QuantumReach.

Building at the intersection of AI automation, web systems, local AI, and startup execution.

## Core Sections

Build the following sections:

1. Hero
2. Mission
3. Current Builds
4. Timeline / Proof
5. Skills Constellation
6. Operating System
7. Contact

## Visual Direction

The website should feel like:

- young founder control room
- premium AI lab
- dark high-contrast interface
- clean but not plain
- 3D but not gimmicky
- animated but not chaotic
- custom, not template-based

Use:
- dark graphite/black background
- off-white typography
- subtle grid overlays
- controlled accent glow
- glass cards
- thin borders
- soft shadows
- magnetic buttons
- scroll progress
- section-based reveals

Avoid:
- random gradient blobs
- cartoon illustrations
- generic SaaS cards
- stock photos
- huge particle fields
- fake dashboards
- overused AI robot imagery

## Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui only as a base, heavily customized
- Motion for most animations
- GSAP ScrollTrigger only for complex scroll/pinned animation
- Spline for the main 3D hero scene
- @splinetool/react-spline for embedding Spline
- React Three Fiber and Drei only if a lightweight custom 3D object is needed
- lucide-react for icons
- Markdown or MDX content files
- Vercel-ready deployment

## Important Performance Rules

This site must be fast and usable.

Rules:
- Only one heavy Spline scene maximum.
- Lazy-load Spline.
- Use dynamic import with SSR disabled for heavy 3D components.
- Provide reduced-motion fallback.
- Provide mobile fallback for 3D scenes.
- Avoid loading massive 3D assets.
- Do not autoplay heavy video.
- Do not animate every element.
- Keep the experience premium and controlled.
- Target Lighthouse Performance above 85.
- Target Accessibility above 90.

## Content Files

Use markdown content from:

- src/content/experience.md
- src/content/projects.md
- src/content/timeline.md
- src/content/skills.md

If these files do not exist, create them with clean starter content.

## Section Requirements

### 1. Hero Section

The hero must immediately communicate identity.

Content:
- Name: Yagya Chauhan
- Description: 17-year-old builder from Mumbai. Founder of QuantumReach.
- Subcopy: Building at the intersection of AI automation, web systems, local AI, and startup execution.
- CTAs: View Work, Contact, QuantumReach

Visual:
- Interactive Spline hero object
- Object should feel like a bridge/network/AI structure inspired by QuantumReach
- Mouse-reactive if possible
- Not too flashy
- Dark premium background
- Fallback static visual for mobile/reduced motion

### 2. Mission Section

Title:
I'm not building a portfolio. I'm building leverage.

Copy:
I'm focused on becoming a stronger developer-founder by building real products, talking to real users, and turning technical curiosity into useful systems.

Cards:
- Build useful things
- Talk to real users
- Ship more
- Get better

Animation:
- Cards reveal on scroll.
- Use Motion.
- No excessive bounce or childish effects.

### 3. Current Builds Section

Include four project/build cards:

#### QuantumReach
Status: Active focus
Description: AI automation and premium web experience studio.
Current priority: turning brand and concept into client acquisition and service delivery.
Next milestone: first repeatable client acquisition system.

#### Jarvis Lab
Status: Experimental lab
Description: local AI hosting and personal assistant experiments using Dell G15 and rooted OnePlus 6T.
Current priority: learning local AI, vector databases, and multi-agent systems.
Next milestone: useful local automation prototype.

#### QuantumVault
Status: Early concept
Description: AI-powered escrow and trust infrastructure concept for safer digital transactions.
Current priority: user validation and problem narrowing.
Next milestone: validate the target audience before overbuilding.

#### MKure
Status: Hackathon project
Description: AI medical companion concept built during Hack The Flame.
Current priority: archived learning project.
Next milestone: use learnings in future AI companion systems.

Each card must show:
- title
- status badge
- description
- current priority
- next milestone

Design:
- premium dark cards
- hover tilt
- subtle border glow
- no generic card slop

### 4. Timeline / Proof Section

Create a vertical or horizontal timeline.

Include:
- FutureX AI 2026 — Campus Fund x Google Cloud x TaQsha
- IIT Bombay 21st E-Summit
- Hack The Flame / MKure
- QuantumReach domain and brand
- Jarvis Lab local AI experiments

FutureX copy:
Attended FutureX AI 2026 by Campus Fund, Google Cloud, and TaQsha. Asked panel questions around audience discovery, distribution, and whether market research should happen through static research or direct user conversations. Received encouraging public feedback on an early idea during the session.

Important:
Do not overuse external praise.
Do not make it sound like an award.
Frame it as exposure, learning, and signal.

### 5. Skills Constellation Section

Do not create a boring list.

Create a skills constellation or interactive matrix.

Categories:

Technical:
- Web development
- AI automation
- Local AI
- Vector databases
- Multi-agent systems
- Git/GitHub
- Deployment

Founder:
- Market research
- User discovery
- Positioning
- Outreach
- Pitching
- Client communication

Creative:
- Web design
- Brand direction
- Visual systems
- Product storytelling

Operating System:
- Gym
- Screen-time tracking
- 90-day performance system
- Sleep discipline in progress

Interaction:
- Hovering a skill shows a short explanation.
- On mobile, collapse into clean category grids.
- Add subtle orbital/constellation visual treatment if performance allows.

### 6. Operating System Section

This section should make the website feel personal and unique.

Title:
The Operating System

Copy:
I track fitness, screen time, sleep, execution, and focus through a 90-day system. I'm still learning structure, but I treat personal discipline as part of the build.

Cards:
- School
- Gym
- Development
- Startup
- Recovery

Include honest line:
Current flaw: I can enter deep work, but I'm still fixing sleep timing and structure.

This should not sound like self-help cringe. Keep it grounded.

### 7. Contact Section

Title:
Want to talk AI, websites, automation, or early-stage building?

Include:
- Email
- LinkedIn
- GitHub
- QuantumReach

Use clean CTAs.

No fake newsletter.
No fake booking system unless explicitly requested.
No "trusted by" section.

## Components To Build

Create reusable components:

- Navbar
- Footer
- SectionHeading
- GlassCard
- MagneticButton
- ScrollProgress
- ProjectCard
- TimelineItem
- SkillNode
- SplineHero
- ReducedMotionFallback

## Suggested File Structure

```
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    not-found.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Mission.tsx
      CurrentBuilds.tsx
      Timeline.tsx
      SkillsConstellation.tsx
      OperatingSystem.tsx
      Contact.tsx
    3d/
      SplineHero.tsx
      ProjectOrb.tsx
      ReducedMotionFallback.tsx
    ui/
      magnetic-button.tsx
      glass-card.tsx
      scroll-progress.tsx
      section-heading.tsx
  content/
    experience.md
    projects.md
    timeline.md
    skills.md
  lib/
    content.ts
    utils.ts
    animation.ts
    constants.ts
```
