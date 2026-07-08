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

## Brand Repositioning (Website copy.docx — Jun 2026)
Nexxy = relationship-first CRM for real estate professionals. Sells better professional relationships, not AI/CRM features. Chain: AI → communication → consistency → trust → relationships → referrals → business.

## Implemented (Jun 2026)
- index.css tokens per spec, tailwind fontFamily display/body
- Navbar (✦ Nexxy, links, rounded-full CTA)
- Hero per spec + overlap effect: half dashboard in 100vh hero, half floats over Features (user-requested change from clipped spec)
- DashboardPreview fully coded in React (topbar, sidebar w/ Workflows, action pills, balance card w/ SVG chart, accounts card, transactions table)
- Humanized redesign (v2): Features = trusted-by strip + asymmetric bento grid (wide agent card w/ workflow chips, dark CRM card) + testimonial (Maya Krishnan, Crestline); About = founder story (2023, "Friday problem", 11,482 teams, 23 people) + numbered beliefs list; Pricing = "The price is on the page" + human footnote; Contact = "Talk to a person, not a chatbot"; Footer = "Written by humans, automated by agents"
- v3 Relationship-first rebuild per Website copy.docx: Hero (eyebrow "BUILT FOR RELATIONSHIP-FIRST REAL ESTATE PROFESSIONALS", "Every Great Deal Begins With a Great Relationship.", accent highlight line, CTAs "Start Building Better Relationships" / "See Nexxy In Action"); dashboard re-themed to real-estate CRM (Follow-ups, Contacts, Listings, Relationships Nurtured 2,847, Pipeline, Recent Conversations); Features.jsx = trust-bar beliefs + "Technology Should Never Replace Relationships" + Human→AI→Consistency→Trust→Referrals chain + 4 Relationship Pillars; Story.jsx = Consistency Engine + dark Philosophy section; Platform.jsx = Social/AI-quiet/CRM blocks + emotional testimonial; About.jsx = "Better Relationships Build Better Businesses" + Nexxy Manifesto block; Footer tagline "Helping professionals build relationships that build businesses."; hero badge "GPT-5 support" removed earlier per user
- v4: Dedicated /manifesto page (pages/Manifesto.jsx) with staggered serif line reveals + CTA; navbar & footer include "Manifesto" link; About shows teaser card linking to /manifesto
- v5: Social share meta tags in public/index.html (OG + Twitter card, branded title/description) + generated branded og-image.png (1200×630, PIL w/ Instrument Serif) served from /og-image.png. NOTE: og:url/og:image use preview domain — must be updated to custom domain at launch.
- Backend: POST/GET /api/leads (Lead model, ISO datetime storage)
- v6 Human-feel polish: marquee trust bar (pausable on hover, ✦ separators), hover-lift on pillar/pricing cards (accent border + shadow), nav-link underline animation, press (active scale) on CTAs, Platform section layout fix (accent-bordered copy blocks aligned), Growth plan "$2.60 a day" note
- Testing: iteration_2 — 100% backend & frontend pass (full regression, both / and /manifesto, no console errors)

## Backlog / Next
- P1: Link "Get Started"/CTAs to actual Nexxy CRM URL when provided
- P1: Admin view or email notification for incoming leads
- P2: EmailStr validation + rate limiting on /api/leads
- P2: Play button → demo video modal
- P2: SEO meta tags / OG image
