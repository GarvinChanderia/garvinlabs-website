---
type: project
domain: freelance
project: garvinlabs-website
status: active
created: 2026-04-28
updated: 2026-04-28
tags: [project, freelance, garvinlabs, gaps, tracker]
---

# GarvinLabs Website — Gaps Tracker

All unresolved content, asset, and implementation gaps blocking or limiting launch.
Update status here as items are resolved.

---

## Status Key

| Status | Meaning |
|---|---|
| 🔴 Open | Not started, blocking |
| 🟡 In Progress | Being worked on |
| 🟢 Resolved | Done, ready to implement |
| ⚫ Blocked | Waiting on external factor |
| ✅ Closed | Implemented on site |

---

## Visual Assets

| # | Gap | Status | Priority | Action | Notes |
|---|---|---|---|---|---|
| V1 | Founder photo | 🟡 In Progress | P0 | Crop Gemini-modified photo and implement in About section | Asset exists — just needs cropping |
| V2 | Visible systems screenshots | 🔴 Open | P0 | Source from recent client work or build a redacted demo system | Cummins screenshots unavailable — left org, was confidential |

---

## Social Proof

| # | Gap | Status | Priority | Action | Notes |
|---|---|---|---|---|---|
| S1 | US/EU or SaaS client testimonial | 🔴 Open | P0 | Run testimonial outreach strategy (see below) | ICP has no one to identify with — critical before paid traffic |
| S2 | Second testimonial (any) | 🔴 Open | P0 | Run testimonial outreach strategy (see below) | Fake one removed — currently only 1 live testimonial |

---

## Copy Content

| # | Gap | Status | Priority | Action | Notes |
|---|---|---|---|---|---|
| C1 | Second case study with $ outcome | 🔴 Open | P1 | Surface from past client work | Need a before/after with a dollar number or time metric |
| C2 | Third stat for social proof strip | 🔴 Open | P1 | Resolved once S1 or C1 is filled | Currently 3 stats — all Cummins-derived. Need more variety. |

---

## Implementation

| # | Gap | Status | Priority | Action | Notes |
|---|---|---|---|---|---|
| I1 | Calendly / booking link | 🔴 Open | P0 | Set up Calendly for "Book the $500 Diagnostic" | All primary CTAs point here — nothing works without it |
| I2 | CTA hierarchy (primary filled, secondary text link) | 🔴 Open | P1 | Dev task | Every section needs one filled button, one text link max |
| I3 | Guarantee block placement | 🔴 Open | P1 | Move directly below Diagnostic offer card | Currently at end of offers — needs to reduce risk at moment of decision |
| I4 | Mobile: Why GarvinLabs table → card layout | 🔴 Open | P1 | Dev task | 5-col table breaks on mobile |
| I5 | Remove WhatsApp as CTA path | 🔴 Open | P1 | Dev task | Email only as secondary |
| I6 | Post-calculator flow → Diagnostic | 🔴 Open | P2 | Dev task | Calculator should funnel to Diagnostic, not dead-end |

---

## Testimonial Outreach Strategy

*For gaps S1 and S2.*

**Goal:** 2 testimonials — at least 1 from a SaaS team or US/EU contact.

**Format to request:**
> "Hey [name], would you write one line I can put on my site? Something like what the outcome was and your role. Takes 30 seconds."
> Target format: "[Outcome in their words]" — [Role] · [Company type or size] · [Location if international]

**Who to contact (fill in from Garvin's network):**

| Contact | Company type | Location | Likely tier | Status |
|---|---|---|---|---|
| [name] | | | S1 / S2 | 🔴 Not contacted |
| [name] | | | S1 / S2 | 🔴 Not contacted |
| [name] | | | S1 / S2 | 🔴 Not contacted |

**Cadence:**
- Day 0: Send initial ask (WhatsApp or email, informal)
- Day 3: One follow-up if no reply
- Day 7: Final nudge or move on

---

## Case Study / Outcome Surface Strategy

*For gap C1.*

**Goal:** One more client outcome with a measurable result — a dollar number, a time saving, or a headcount reduction.

**How to surface:**

Think through past clients and ask for each:
1. What was broken or slow before?
2. What did I build?
3. What changed after — in hours, dollars, or headcount?

**Past work to review (fill in):**

| Client / Project | What was built | Known outcome | $ or time metric? | Usable? |
|---|---|---|---|---|
| Cummins India | 35 PBI + Power Automate workflows | 40% turnaround reduction | Time metric ✅ | ✅ (in copy) |
| [Client] | | | | |
| [Client] | | | | |

---

## Visible Systems — Alternative Sources

*For gap V2. Cummins screenshots unavailable.*

Options to resolve, in order of preference:

1. **Recent client screenshots** — any current or recent client who has given permission
2. **Zigyasaw or Takeback** — active clients; can we get a screenshot of a live system with their consent?
3. **Redacted demo build** — build a clean demo n8n workflow or Power Automate flow specifically for the website; own the IP
4. **Sanitised mock** — use real system structure, replace all real data with dummy data before screenshotting

**Decision needed:** Which path to take?

---

## Launch Readiness

| Category | Ready? | Blocker |
|---|---|---|
| Copy | ✅ v4 complete | — |
| Pricing | ✅ Premium set | — |
| Section structure / IA | ✅ Defined | — |
| Founder photo | 🟡 Crop + implement | V1 |
| Booking link | 🔴 Not set up | I1 |
| Testimonials | 🔴 Missing | S1, S2 |
| Visible systems | 🔴 No source yet | V2 |
| Dev implementation | 🔴 Not started | I2–I6 |

**Minimum viable launch** (before paid traffic): V1 + I1 + S1 + S2
**Full launch**: all items resolved
