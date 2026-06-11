---
type: project
domain: freelance
project: garvinlabs-website
status: active
created: 2026-04-28
updated: 2026-04-28
tags: [project, freelance, garvinlabs, IA, homepage]
---

# GarvinLabs — Full Site Information Architecture

Updated 2026-04-29 · Multi-page structure · Copy files: 08 (homepage), 09 (saas), 10 (d2c)

---

## Site Map

```
garvinlabs.com/
│
├── /                          → Homepage (long-form sales page, anchor nav)
├── /saas                      → SaaS ICP landing page (paid ads — SaaS audience)
├── /d2c                       → D2C ICP landing page (paid ads — D2C audience)
├── /work                      → Expanded case studies (SEO + deep-research buyers)
├── /calculator                → Standalone D2C revenue leak calculator
├── /teardowns/saas-stack      → SaaS teardown delivery page (post email gate)
└── /teardowns/d2c-revenue     → D2C teardown delivery page (post email gate)
```

### Page purposes

| Route | Purpose | Traffic source |
|---|---|---|
| `/` | Convert cold traffic — full funnel, both ICPs | Organic, direct, referral |
| `/saas` | Convert SaaS ops buyers — no D2C content | Paid ads targeting SaaS founders/ops leads |
| `/d2c` | Convert D2C founders — no SaaS content, rupee-forward | Paid ads targeting D2C brands |
| `/work` | Deep proof for research-mode buyers | SEO, linked from homepage proof section |
| `/calculator` | Lead capture for D2C visitors who self-serve first | Linked from `/d2c` and social |
| `/teardowns/saas-stack` | PDF delivery after email gate | Email gate redirect |
| `/teardowns/d2c-revenue` | PDF delivery after email gate | Email gate redirect |

### Shared components (across all pages)
- Nav (same structure, CTA always → Calendly)
- Footer (same across all pages)
- Offer cards (same three tiers)
- FAQ (core 7 questions; ICP pages add/prioritise ICP-specific Qs)

---

## Homepage (`/`) — Page Flow

```
NAV
 └── Logo | The Problem | Proof | Offers | How It Works | FAQ | [Book the Diagnostic]

HERO
 └── Headline + Sub-headline
 └── Primary CTA: Book the $500 Diagnostic
 └── Guarantee note: Full refund if not useful
 └── Social proof strip (3 outcome stats)

PROBLEM — What Manual Ops Actually Costs You
 └── Section intro
 └── SaaS Operations (stat + 5 pain bullets)
 └── D2C Revenue (stat + 5 pain bullets)
 └── Mid-section CTA (text link) → Diagnostic

PROOF
 └── Stats callout (5 stats)
 └── Case Study 1: Cummins — 35 workflows, Fortune 500, 40% turnaround reduction
 └── Case Study 2: Process documentation — 26 docs, 80-person team
 └── Testimonials (1 live + 1 gap placeholder)
 └── [Visible Systems — implementation required]

HOW IT WORKS
 └── Step 1: Diagnostic ($500)
 └── Step 2: Scope
 └── Step 3: Ship

OFFERS — Pick Your Starting Point
 └── The Diagnostic ($500) ← primary entry point
      └── CTA: Book the $500 Diagnostic
      └── Guarantee note: Full refund
 └── AI Implementation ($3K–$8K)
      └── CTA: Book the $500 Diagnostic
      └── Secondary: email instead
 └── Full System Build ($10K–$20K)
      └── CTA: Book the $500 Diagnostic
      └── Secondary: email instead

GUARANTEE
 └── Refund statement
 └── CTA: Book the $500 Diagnostic

WHY GARVINLABS
 └── Comparison table (desktop) / Stacked cards (mobile)
 └── 5 columns: GarvinLabs · Agency · No-code DIY · Internal hire

ABOUT
 └── [Photo — implementation required]
 └── Bio + positioning line
 └── LinkedIn + Email

FREE TEARDOWNS
 └── SaaS Teardown (lead magnet)
 └── D2C Teardown (lead magnet)
 └── Secondary CTA → Diagnostic

CALCULATOR
 └── D2C revenue leak calculator
 └── Secondary CTA → Diagnostic

FAQ
 └── 7 objection-resolution questions

FOOTER
 └── CTA: Book the $500 Diagnostic
 └── Copyright + links
```

---

## CTA Architecture

One conversion goal throughout: **Book the $500 Diagnostic**

| Location | Primary CTA | Secondary CTA |
|---|---|---|
| Hero | Book the $500 Diagnostic | — |
| Problem (mid-section) | → Book the $500 Diagnostic (text link) | — |
| Diagnostic offer card | Book the $500 Diagnostic | — |
| Implementation offer card | Book the $500 Diagnostic | email instead |
| Full System Build offer card | Book the $500 Diagnostic | email instead |
| Guarantee | Book the $500 Diagnostic | — |
| Free Teardowns | Send me the [SaaS/D2C] teardown | → Diagnostic (text link) |
| Calculator | Try the Free Calculator | → Diagnostic (text link) |
| Footer | Book the $500 Diagnostic → | — |

**Removed from all CTAs:** WhatsApp · Generic "Book a discovery call" · "Get the free teardown" (was competing hero CTA)

---

## Navigation

| Nav Item | Destination | Notes |
|---|---|---|
| Garvin_Labs. (logo) | #hero | Home anchor |
| The Problem | #problem | |
| Proof | #proof | |
| Offers | #offers | |
| How It Works | #how-it-works | |
| FAQ | #faq | |
| Book the Diagnostic | Calendly link | Primary nav CTA — filled button |

---

## Content Gaps (blocking or near-blocking)

| Gap | Blocks | Action |
|---|---|---|
| Founder photo | About section | Take/source before launch |
| US/EU client testimonial | Proof section credibility for ICP | Outreach to existing international contacts |
| Second testimonial (any) | Proof section has only 1 live testimonial | Outreach to any past client |
| Visible systems screenshots | Proof section conviction | Export Power BI / Power Automate screenshots |
| Calendly link | All primary CTAs | Set up booking page |

---

## Section Purposes

| Section | Job | Visitor State |
|---|---|---|
| Hero | Hook — state the promise, remove risk, show credibility | Cold — just arrived |
| Problem | Amplify pain — make the cost of inaction visceral | Aware but not ready to act |
| Proof | Earn trust — specific outcomes, real systems, real people | Skeptical — "can he actually do this?" |
| How It Works | Remove fear of engagement — make the process feel safe | Interested but hesitant |
| Offers | Convert — clear tiers, Diagnostic as entry point | Ready to evaluate |
| Guarantee | Remove last objection — no risk to try | Almost convinced |
| Why GarvinLabs | Answer "why not someone else?" — handle alternatives | Comparison-shopping |
| About | Identity trust — face + story + positioning | Checking who they're dealing with |
| Free Teardowns | Capture not-yet-ready visitors — secondary path | Not ready to book |
| Calculator | Capture D2C visitors who want self-service | Prefer to explore first |
| FAQ | Resolve final objections | Late-stage doubt |
| Footer | Last conversion opportunity | Scrolled to the end |

---

---

## /saas — SaaS ICP Landing Page Flow

```
NAV (shared)

HERO
 └── SaaS-specific headline (ops vocabulary: triage, onboarding, pipeline)
 └── Sub-headline (same de-risk framing)
 └── CTA: Book the $500 Diagnostic → Calendly
 └── Social proof strip (Cummins + Enterprise Automotive Client + n8n pipeline)

PROBLEM — What SaaS Ops Actually Costs You
 └── Stat: $10K–$20K/month
 └── 5 SaaS pain bullets
 └── Mid-section CTA → Diagnostic

FREE TEARDOWN (SaaS only, single card)
 └── SaaS Teardown
 └── CTA → Diagnostic (text link)

PROOF
 └── Stats strip (SaaS tools logos: n8n, HubSpot, Stripe, Slack, Intercom)
 └── Case Study 1: Cummins — 35 workflows, 40% reduction
 └── Case Study 3: Enterprise Automotive Client — enterprise architecture
 └── Testimonial (1 live)
 └── Visible Systems: GarvinLabs Acquisition Pipeline + n8n MCP Server

HOW IT WORKS (shared — 3 steps + Diagnostic exhibit)

OFFERS (shared — all 3 tiers)

GUARANTEE (shared)

WHY GARVINLABS (shared table)

ABOUT (shared)

FAQ (SaaS-prioritised: no-code reliability first, then tools, then WhatsApp removed)

FOOTER (shared)
```

---

## /d2c — D2C ICP Landing Page Flow

```
NAV (shared)

HERO
 └── D2C-specific headline (revenue leakage, retention, cart recovery)
 └── Sub-headline (rupee-forward framing)
 └── CTA: Book the $500 Diagnostic → Calendly
 └── Social proof strip (100+ deployments + D2C-specific stats)

PROBLEM — Where Your D2C Revenue Is Leaking
 └── Stat: $12–30K/month (₹10–25 lakhs)
 └── 5 D2C pain bullets
 └── Inline calculator (moved up — triggers buying signal before CTA)
 └── Mid-section CTA → Diagnostic

FREE TEARDOWN (D2C only, single card — more prominent)
 └── D2C Teardown
 └── CTA → Diagnostic (text link)

PROOF
 └── Stats strip (D2C tools logos: Shopify, WhatsApp, n8n, Klaviyo)
 └── Visible Systems: Autonomous D2C Pipeline (Dental Revenue Engine reframed)
 └── Testimonial (1 live)
 └── Case Study 2: 26 docs (process proof — brand ops angle)

HOW IT WORKS (shared — 3 steps + Diagnostic exhibit)

OFFERS (shared — all 3 tiers, rupee equivalents prominent)

GUARANTEE (shared)

WHY GARVINLABS (shared table)

ABOUT (D2C-leaning intro paragraph)

FAQ (D2C-prioritised: WhatsApp compliance first, rupees, Indian market, then shared Qs)

FOOTER (shared)
```

---

## /work — Case Studies Page Flow

```
NAV (shared)

HERO
 └── Headline: "The work"
 └── Sub-headline: short (proof hub for research-mode buyers)

CASE STUDIES (expanded from homepage summaries)
 └── Case Study 1: Cummins (full)
 └── Case Study 2: 26 Documents (full)
 └── Case Study 3: Enterprise Automotive Client (full)
 └── Diagnostic Exhibit: Manufacturing client, India (from How It Works section)

VISIBLE SYSTEMS (full exhibit section from homepage)

CTA STRIP
 └── Book the $500 Diagnostic → Calendly

FOOTER (shared)
```

---

## /calculator — D2C Revenue Leak Calculator

```
NAV (shared, simplified — no anchor links)

HEADLINE: "How much is your D2C brand leaving on the table?"

CALCULATOR (full interactive tool)
 └── Inputs: monthly revenue, cart abandonment rate, repeat purchase rate, AOV
 └── Output: monthly leak in ₹ and $, broken down by category
 └── CTA: Book the $500 Diagnostic → Calendly

FOOTER (shared)
```

---

## /teardowns/[slug] — PDF Delivery Pages

```
Simple confirmation page
 └── "Your [SaaS Stack / D2C Revenue] teardown is ready."
 └── Download button → PDF
 └── Secondary CTA → Diagnostic
```

---

## Mobile Notes

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Standard | Stack CTA below proof strip |
| Why GarvinLabs | 5-column table | 4 stacked cards (remove empty label column) |
| Offers | 3 cards in a row | Stack vertically — Diagnostic first |
| Free Teardowns | 2 cards side by side | Stack vertically |
| Social proof strip | Horizontal row | Horizontal scroll or stack |
