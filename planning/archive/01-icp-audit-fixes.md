---
type: project
domain: freelance
project: garvinlabs-website
status: active
created: 2026-04-27
updated: 2026-04-27
tags: [project, freelance, garvinlabs, icp-audit, cro]
---

# GarvinLabs Website — ICP Audit Fix Log

ICP Reviewed: International SaaS founder/operator (20–200 person team) or D2C brand ($1M+ revenue, US/EU)
Page Audited: https://garvinlabs.com
Overall Score: 5/10

---

## P0 — Social Proof Mismatch (Score: 3/10)

**Problem:** None of the three testimonials match the ICP.
- Testimonial 1: Manufacturing Director — wrong industry vertical
- Testimonial 2: "Website was done fast and looked exactly like what we wanted" — wrong *service*. Signals web dev shop, not AI automation specialist. Must be removed.
- Testimonial 3: "W, Web Dev Freelancer" — wrong ICP entirely. A D2C/SaaS founder does not identify with a freelancer peer.
- All names redacted (R, C, W) — for US/EU buyers evaluating an unknown vendor, unverifiable testimonials reduce rather than build trust.

**Fixes:**
- [ ] Remove Testimonial 2 (website build) immediately — actively breaks positioning
- [ ] Replace Testimonial 3 with an AI automation result from a SaaS or D2C context
- [ ] Add ICP-identifying context to each testimonial: sector + company size + geography (e.g. "Founder, 40-person SaaS team, Austin TX") — even without a full name, this creates ICP identification
- [ ] The 938-page outreach case study is strong — expand into a 3-line mini case study: problem → solution → result. Move it from a stat to a named story block.

---

## P1 — WhatsApp as Primary CTA (Score: 5/10 on Offer Fit)

**Problem:** "Talk via WhatsApp" appears as the primary CTA on both offer cards and in the footer. For US/EU buyers this signals a local Indian vendor, not an international consultant. Most US/EU business buyers do not WhatsApp vendors they've just discovered online.

**Fixes:**
- [ ] Add a Calendly booking link or email-first CTA as the *primary* action on both offer cards
- [ ] Relabel WhatsApp as secondary: "or message on WhatsApp"
- [ ] In the footer, lead with email, not WhatsApp number
- [ ] The WhatsApp pre-filled message links are fine — just demote them visually

---

## P2 — Diagnostic Pricing Gap (Score: 5/10 on Offer Fit)

**Problem:** "$200 Diagnostic" was removed. The Guarantee section now says "Book the Diagnostic" with no price attached. The FAQ answer still describes detailed deliverables as if there's an implied price. For an international buyer, price ambiguity = "they'll try to upsell me on a call."

**Fixes:**
- [ ] Re-price the Diagnostic explicitly in the Guarantee section (e.g. $299) OR reframe it as "free 45-min discovery call → paid Diagnostic report"
- [ ] Add the Diagnostic as a visible third offer card before AI Implementation — the entry point needs its own named presence in the Offers section
- [ ] Update the FAQ question to match: "What exactly do I get from the Diagnostic?" (already done in code) — now update the answer to clarify pricing

---

## Dimension-Level Fixes (Supporting P0/P1/P2)

### Pain Recognition (7/10)
- The hero opens on positioning ("Find where AI actually fits") not pain. ICP may not self-identify before scrolling.
- **Fix:** Rewrite hero headline to lead with a specific, felt pain rather than a meta-framing statement.

### Language Match (6/10)
- "n8n" used in hero and offer cards — builder jargon the ICP doesn't recognise
- "Connective tissue" — unusual phrasing, not ICP vocabulary
- **Fix:** Replace "n8n" with "workflow automation" in all visible copy outside the FAQ. Save the tool list for FAQ where intent is already established.

### Trust Triggers (4/10)
- No founder photo anywhere on the page
- No founder LinkedIn link in a prominent position (footer only)
- The Demos section exists in nav but is not surfaced in-page with a preview or call-out
- No response time / communication model stated
- **Fix:** Add a 2-line founder bio with photo placeholder above or within the Process section. Add one demo preview inline (screenshot + "See it live"). Add a sentence on async delivery / timezone model.

### Objection Coverage (6/10)
- "Will there be communication or timezone issues?" — never addressed anywhere
- **Fix:** Add one sentence to the Process section: "All projects are fully async. Delivered on a fixed timeline with a Loom walkthrough — no timezone dependency."

### Journey Stage Fit (6/10)
- No "why GarvinLabs over alternatives" frame — solution-aware buyers are comparing options (US agency, no-code tools, internal hire) but the site doesn't address this
- **Fix:** Add a short comparison block (3 rows max): GarvinLabs vs Agency, vs no-code tool, vs internal hire.

### Exclusion Signals (4/10)
- "Based in Pune, India" in FAQ without offsetting international signals
- "+91" WhatsApp number visible in footer before trust is built
- **Fix:** Move international client geography ("US, EU, India") from the FAQ to a visible position near proof stats or hero.

---

## Copy Iteration Log

| Version | ICP Score | Lowest Dim | Status |
|---------|-----------|-----------|--------|
| Live site (pre-fix) | 5/10 | Social Proof 3/10 | ✅ Audited |
| v1 recommended copy | 7/10 | Social Proof 6/10 | ✅ Audited |
| v2 recommended copy | 8/10 | Social Proof 7/10 | ✅ Loop complete |
| Final copy (post-CRO) | — | — | ✅ Written → [[04-final-copy]] |

## CRO Audit Findings (applied to final copy)

**P0 (implementation only — cannot resolve in copy):**
- Founder photo missing — solo consultant needs a face in the About section
- No US/EU client testimonial — ICP has no one to identify with in proof section

**P1 (resolved in 04-final-copy):**
- Hero: two equal-weight CTAs → primary filled button + secondary text link
- Hero: "Schedule a free call" → "Book a 45-min discovery call" (duration sets expectation)
- How It Works Step 1: labeled "The Diagnostic ($299)" — price visible before offer section
- Section title: "The Real Cost" → "What Manual Ops Actually Costs You"
- Mid-page CTA added after Problem section (→ run the free calculator)
- Offers headline: "Three Clear Offers" → "Pick Your Starting Point"
- Guarantee block: move to directly below Diagnostic offer card (implementation task)
- "Greenlight the scope (or don't)" → "You decide whether to proceed — no pressure, no follow-ups"

**P2 (resolved in 04-final-copy):**
- "25+ systems shipped" → "25+ automation projects delivered"
- "What goes wrong" table cell strengthened
- Footer: added CTA ("Ready to start? Book the $299 Diagnostic →")
- Tools FAQ: removed "not whatever's trending" defensive line → "tools your team can operate without me"
- Guarantee CTA split: price in button, refund as supporting text below

**Implementation tasks (not copy):**
- Mobile: Why GarvinLabs table → card layout
- Calendly or booking link required for discovery call CTAs
- Move Guarantee block below Diagnostic offer card

---

## Related Files
- [[02-recommended-copy-v1]] — First iteration of recommended copy
- Source: [[garvinlabs-nextjs]] codebase at `/Users/garvinchanderia/projects/garvinlabs-nextjs`
