# Nexxy Website — PRD

## Original Problem Statement
Build a branded company website for "Nexxy" (company also has a Nexxy CRM). Detailed SaaS landing hero spec provided: 100vh Navbar+Hero (overflow-hidden), Instrument Serif + Inter fonts, exact CSS tokens (indigo accent 239 84% 67%), fullscreen background video, badge "Now with GPT-5 support ✨", headline "The Future of Smarter Automation" (Smarter italic serif), custom-coded dashboard preview (frosted glass, sidebar, Mercury Balance $8,450,190.32 with hand-crafted SVG Bézier chart, Accounts card, Recent Transactions table), framer-motion staggered animations.

## User Choices
- Brand "Nexxy" everywhere (replacing spec's "Nexora")
- Full landing page: Hero + Features + Pricing + About + Contact sections
- Keep all copy exactly as spec (Welcome Jane, Mercury Balance, Trake rutes typo, etc.)
- CRM connection: skipped/defaults → contact form saves leads to MongoDB

## Architecture
- Frontend: React 19 (CRA/craco), Tailwind (semantic tokens), framer-motion, lucide-react, shadcn/ui, sonner toasts
- Backend: FastAPI + Motor (MongoDB), /api prefix
- Fonts: Instrument Serif (display) + Inter (body) via Google Fonts import in index.css

## Implemented (Jun 2026)
- index.css tokens per spec, tailwind fontFamily display/body
- Navbar (✦ Nexxy, links, rounded-full CTA)
- Hero per spec + overlap effect: half dashboard in 100vh hero, half floats over Features (user-requested change from clipped spec)
- DashboardPreview fully coded in React (topbar, sidebar w/ Workflows, action pills, balance card w/ SVG chart, accounts card, transactions table)
- Humanized redesign (v2): Features = trusted-by strip + asymmetric bento grid (wide agent card w/ workflow chips, dark CRM card) + testimonial (Maya Krishnan, Crestline); About = founder story (2023, "Friday problem", 11,482 teams, 23 people) + numbered beliefs list; Pricing = "The price is on the page" + human footnote; Contact = "Talk to a person, not a chatbot"; Footer = "Written by humans, automated by agents"
- Backend: POST/GET /api/leads (Lead model, ISO datetime storage)
- Testing: iteration_1 — 100% backend & frontend pass

## Backlog / Next
- P1: Link "Get Started"/CTAs to actual Nexxy CRM URL when provided
- P1: Admin view or email notification for incoming leads
- P2: EmailStr validation + rate limiting on /api/leads
- P2: Play button → demo video modal
- P2: SEO meta tags / OG image
