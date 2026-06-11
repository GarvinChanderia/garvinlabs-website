---
type: project
domain: freelance
project: garvinlabs-website
status: active
created: 2026-04-28
updated: 2026-04-28
tags: [project, freelance, garvinlabs, assets, portfolio, analysis]
---

# GarvinLabs Website — Portfolio Assets Analysis

Conducted 2026-04-28. Scanned `project screenshots/` folder + `garvin-portfolio.vercel.app/projects.html` for all usable assets and mapped them to website sections.

---

## Assets in `project screenshots/`

### n8n Workflow Screenshots (10 files in `N8N projects/`)

A complete 4-phase outreach automation system plus supporting infrastructure. All built and owned by Garvin — own IP, no client confidentiality issues.

| File | Workflow | Status |
|---|---|---|
| 9.25.42 AM | D2C Lead Engine | Published |
| 9.26.00 AM | SaaS Lead Engine | Published |
| 9.26.35 AM | Community Discovery Engine Ph.1 | Unpublished |
| 9.26.46 AM | Phase 1 — Lead Intake (v2 Local CSV) | Unpublished |
| 9.26.55 AM | Phase 1 — Lead Intake | Unpublished |
| 9.27.03 AM | Phase 4 — Message Generator | Unpublished |
| 9.27.15 AM | Phase 3 — Enrichment | Unpublished |
| 9.27.24 AM | Phase 2 — Queue Assignment | Unpublished |
| 9.27.34 AM | Global Error Watchdog | Published |
| 9.27.42 AM | Status Update Handler (Button Listener) | Unpublished |

**System summary:** Lead Intake (Maps scrape → dedupe → Google Sheets) → Queue Assignment (daily prioritization) → Enrichment (AI-powered, every 15 min) → Message Generator (AI messages + links → Telegram cards). Plus: dual source pipelines (Apollo + YC/Remotive), error monitoring, and Telegram button-listener for status updates.

**Best screenshots for website (most readable):**
- Phase 1 Lead Intake (9.26.55) — complex multi-branch flow
- Phase 2 Queue Assignment (9.27.24) — clean linear pipeline
- Phase 4 Message Generator (9.27.03) — AI-powered, readable nodes
- Global Error Watchdog (9.27.34) — clean 3-node production monitor
- D2C Lead Engine (9.25.42) — dual-source merge, well-structured

**Website mapping:** PROOF → Visible Systems section (resolves P0 gap from v4)

---

### PDFs

**d2c-revenue-leak.pdf** — "The D2C Revenue Leak: 4 AI Systems That Recover Revenue You're Already Losing"
- 6 pages, professionally designed, dark theme, GarvinLabs branded
- Stats: 70% cart abandonment, 5x acquisition vs retention cost, 40% repeat purchase uplift
- Covers: Abandoned Cart Recovery, Repeat Purchase Trigger, Post-Purchase Flow, Win-Back Sequence
- Each leak quantified in INR for a 10Cr D2C brand (combined 10L–25L/month recoverable)
- Already hosted at garvinlabs.com
- **Website mapping:** FREE TEARDOWNS → D2C Teardown (asset complete, just needs CTA/delivery wired)

**lean-saas-stack.pdf** — "The Lean SaaS Stack: How Fast-Growing Teams Are Automating Their Ops Layer"
- 6 pages, professionally designed, orange/dark theme, GarvinLabs branded
- Stats: 200–400 hrs/month lost at 50 people, 1–2 FTEs of automatable effort
- Covers 5 drains: Support Triage (60h), Customer Onboarding (40h), Data Sync (30h), Weekly Reporting (25h), Internal Comms (20h)
- Each drain mapped to automated replacement with tech stack + build timeline
- Already hosted at garvinlabs.com
- **Website mapping:** FREE TEARDOWNS → SaaS Teardown (asset complete, just needs CTA/delivery wired)

---

### AI Consulting Report (Raunaq Engineering)

`AI_Consulting_Report.md` — Full consulting deliverable for Raunaq Engineering (manufacturing, Bhosari + Shirwal plants)

- Synthesises 26 business processes, 7 issues, time analysis, meeting notes, org structure
- Root cause chain mapped: No tracking → No documentation → No min-max enforcement
- 4 priority tiers with specific deliverables, owners, deadlines
- 4 AI automation opportunities with effort + value estimates:
  - Job Status Dashboard (4–6h, replaces 1–2h Director review/day)
  - Payment Clock Tracker (3–4h, reduces cash flow delay)
  - Material Reorder Alert (2–3h, eliminates +9–10 day delay)
  - Email Template Automation (4–5h, zero-effort sales comms)
- Outcome projection: 60-day cycle → 35-day cycle = 1.7x throughput on same capacity

**Website mapping:** HOW IT WORKS — "What a Diagnostic output looks like" exhibit. Not a primary Proof case study (manufacturing vertical ≠ SaaS/D2C ICP). Get client permission before publishing publicly.

---

### Other

**Garvin-portfolio-link.md** — `garvin-portfolio.vercel.app/projects.html`
**Screenshot 9.16.21 AM** — Dense network graph, low resolution, unclear origin. Atmospheric use only.

---

## Portfolio Projects (garvin-portfolio.vercel.app)

### Tier 1 — Use on website now

**EA Skill Engine** (`projects/ea-skill-engine.html`)
- Production deployment at Enterprise Automotive Client via Invecto Technologies
- LLM-powered EA mapping across 11 domains — encodes TOGAF, ArchiMate, Zachman
- Avolution ABACUS integration with VB.NET script generation
- Multi-week team engagements → structured hours-long sessions
- Stack: Python, Claude Skills, ArchiMate, ABACUS, OpenAI API
- Applications: KTM acquisition assessment, application portfolio rationalization, strategic alignment analysis
- **Website mapping:** PROOF → Case Study 3 (real client, real production deployment, verifiable)

**Dental Revenue Engine** (`projects/dentist-gym-outreach.html`)
- Fully autonomous 4-stage pipeline: Discovery → Site Generation → Outreach → Monitoring
- 100+ personalized sites deployed live, ₹91 total infrastructure cost
- Neural search (Exa) identified clinics without web presence; Tailwind + GitHub Pages deployed personalized sites; Himalaya CLI sent email sequences with live preview links
- Geographic coverage: Pune, Mumbai, Bengaluru + 100 tier-1 city clinics
- Stack: Python, Tailwind CSS, Exa Neural Search, GitHub Pages, Himalaya CLI
- **Website mapping:** PROOF → Visible Systems exhibit 2 (self-built, own IP, shows autonomous pipeline depth)

**n8n MCP Server** (`projects/n8n-mcp-server.html`)
- TypeScript MCP server that enables Claude to control self-hosted n8n via natural language
- Bridges LLM reasoning + workflow execution — the same gap GarvinLabs sells to fix
- Powers 3 production systems: PM Outreach Engine, Dental Revenue Engine, Nightly Distillation
- Stack: TypeScript, Node.js, MCP, n8n REST API
- In daily production use
- **Website mapping:** About section credibility + How It Works as "frontier builder" signal

### Tier 2 — Use selectively

**BranClosr** (`projects/branclosr.html`)
- Influencer marketing marketplace (D2C-adjacent), deal cycles 30 days → 48 hours
- 56 TypeScript modules, Supabase PostgreSQL 15+, Next.js 16, full-stack solo build
- Deployed MVP with active development
- **Website mapping:** Why GarvinLabs / About — full-stack build depth proof (not a client project)

**PM Outreach Engine** (`projects/pm-outreach.html`)
- n8n + Claude MCP + WhatsApp Business API pipeline for job search outreach
- Scaled to Gmail volume restrictions → pivoted to WhatsApp API
- **Website mapping:** Visible Systems exhibit 3 (alongside GarvinLabs outreach n8n screenshots)

**HR Offboarding Automation** (`projects/hr-offboarding.html`)
- Automated enterprise offboarding: checklists, IT revocation, knowledge transfer, auto-generated presentations
- Stack: Python, PowerPoint automation
- Unclear if client work or internal
- **Website mapping:** Hold — confirm client/internal before featuring. If client, becomes a case study.

### Tier 3 — Skip for website

ThrottleApp (consumer mobile, no automation angle), ClawBoard (in dev, no metrics), AI Audio Renamer (personal utility), Smartwatch Landscape (product strategy), TrailForge (brand), Self-Hosted NAS (hobby infrastructure), Google Keep case study (Behance), Tesseract Travel (Behance UX study).

---

## Resolved Gaps (v4 → v5)

| Gap (v4) | Status (v5) | Source |
|---|---|---|
| Visible Systems section (P0) | ✅ Assets available — 5 n8n screenshots + Dental Revenue Engine pipeline | n8n screenshots folder + portfolio |
| Third case study | ✅ EA Skill Engine / Enterprise Automotive Client | Portfolio |
| D2C Teardown PDF | ✅ Already exists and is hosted | project screenshots/ |
| SaaS Teardown PDF | ✅ Already exists and is hosted | project screenshots/ |
| Diagnostic output example | ✅ Raunaq report (pending client permission for public use) | project screenshots/ |

## Still Open

| Gap | Status |
|---|---|
| US/EU or SaaS client testimonial | Still missing — P0 before paid traffic |
| Second testimonial | Still missing — P0 before launch |
| Founder photo | Asset exists (Gemini-modified) — implement |
| Calendly booking link | External setup required |
