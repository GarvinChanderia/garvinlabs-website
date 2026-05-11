---
type: project
domain: technology
project: garvinlabs-website
status: active
created: 2026-05-11
updated: 2026-05-11
tags: [design, ui, components, landing-page, garvinlabs]
---

# GarvinLabs — Design Document (v2)

> Single-page conversion landing page. D2C AI customer support. Copy source: `planning/website-copy.md`.
> Tech: Next.js + Vanilla CSS. Deployed on Vercel. Live at garvinlabs.com.
> Previous version archived at `planning/archive/`.

---

## 1. Deployment & Assets

| Resource | Path / Link |
|---|---|
| Live site | https://garvinlabs.com |
| GitHub | https://github.com/GarvinChanderia/garvinlabs-website |
| Vercel | https://vercel.com/chanderia10garvin-1332s-projects/garvinlabs-website |
| Copy | `planning/website-copy.md` |
| Images | `image-assets/` |
| CSS tokens | `app/globals.css` |

---

## 2. Design Tokens

Carry forward from existing `globals.css`. No changes to the base token set.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--primary` | ` #10B981` | CTA buttons, badges, accents, links |
| `--surface` | ` #F9FAFB` | Page background |
| `--ink` | ` #1F2937` | All body text, headings |
| `--accent-sand` | ` #F3F4F6` | Section alternates, card fills |
| `--muted` | ` #6B7280` | Subheadings, captions, helper text |
| `--white` | ` #FFFFFF` | Card backgrounds, button fills |

Glass overlay (new for v2 hero): `rgba(255,255,255,0.65)` with `backdrop-filter: blur(20px)`.

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Headings | Figtree | 600–700 | All `h1`–`h3` |
| Body | Outfit | 400–500 | Paragraphs, bullets, captions |
| Labels | JetBrains Mono | 400 | Status badges, mono tags only |

Font sizes:
- `h1` (hero): `3.5rem` desktop / `2.25rem` mobile
- `h2` (section): `2.5rem` desktop / `1.75rem` mobile
- `h3` (card): `1.25rem`
- Body: `1.1rem` / line-height `1.7`
- Caption / muted: `0.95rem`

### Spacing & Radius

| Token | Value |
|---|---|
| `--radius` | `16px` |
| `--border` | `1.5px solid var(--accent-sand)` |
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| Section padding | `6rem` top/bottom desktop / `4rem` mobile |
| Container max-width | `1200px`, `2rem` side padding |

---

## 3. Page Structure

Single-page layout. Scroll-based. No sub-pages for this build.

```
[NAV]
[S1]  Hero
[S2]  Problem — 3 pain blocks
[S3]  Before / After
[S4]  How It Works
[S5]  Demo
[S6]  What You Get
[S7]  How We Engage
[S8]  CTA / Close  (Who builds this + CTAs + FAQ)
[FOOTER]
```

---

## 4. Navigation

**Minimal — landing page nav, not site nav.**

```
[Logo + wordmark]                    [Book a Free 20-Min Call →]
```

- Left: `logo-icon.svg` + "GarvinLabs" wordmark in Figtree 700
- Right: Single CTA button (`.btn-primary`)
- No nav links — this is a conversion page, not a site
- Sticky on scroll with subtle `box-shadow` on scroll (JS class toggle)
- Background: `var(--surface)` with `border-bottom: var(--border)`
- Mobile: logo left, CTA right (both visible — no hamburger needed at this nav density)

---

## 5. Section Specs

---

### S1 — Hero

**Layout:** Full-width section. Aurora image as background. Glassmorphism card centred over it.

**Background:** `hero-aurora.png` — `object-fit: cover`, full-width, fixed height `600px` desktop / `auto` mobile.

**Glass card** (centred, max-width `780px`, `margin: 0 auto`):
- `background: rgba(255,255,255,0.65)`
- `backdrop-filter: blur(20px)`
- `border: 1.5px solid rgba(255,255,255,0.8)`
- `border-radius: 24px`
- `padding: 4rem`
- `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`

**Inside the card:**
1. Headline `h1`: `200 daily tickets. 60% auto-resolved. No new hires.`
   - Figtree 700, `3.5rem`, `var(--ink)`, `line-height: 1.1`
2. Subheadline `p`: as per copy
   - Outfit 400, `1.2rem`, `var(--muted)`, `line-height: 1.7`
   - `max-width: 620px`, `margin: 1.5rem auto 2.5rem`
3. CTA row (flex, `gap: 1rem`, `justify-content: center`):
   - Primary: `.btn-primary .btn-large` — "Watch the 5-Min Demo"
   - Secondary: `.btn-secondary .btn-large` — "Book a Free 20-Min Call →"
4. Trust line below CTAs:
   - `font-size: 0.9rem`, `color: var(--muted)`, `margin-top: 1.5rem`
   - Text: "Built for D2C brands processing 100+ support emails a day."

---

### S2 — Problem

**Layout:** Alternating background (`var(--white)`). `section-mist.png` at 15% opacity as background texture. `text-align: center` intro, then 3 cards.

**Intro block** (`max-width: 640px`, `margin: 0 auto 3rem`):
- Intro line: `"Here's what your support inbox actually looks like."` — muted, `1.1rem`

**3 pain blocks** — stacked vertically (not a grid), each full-width `max-width: 700px` centred:

Each pain block:
- No card border — open text layout
- `h3` heading: Figtree 600, `1.4rem`, `var(--ink)`, `margin-bottom: 1rem`
- Body paragraphs: `var(--ink)` / `var(--muted)` alternating rhythm
- Thin `border-bottom: var(--border)` between blocks, `padding-bottom: 3rem`, `margin-bottom: 3rem`
- Last block: no border

---

### S3 — Before / After

**Layout:** `section-mist.png` background at 20% opacity. Centred `max-width: 860px`.

**Section heading** (`h2`): "What changes when your inbox runs on AI." — centred, `margin-bottom: 3rem`

**Table:**
- Two columns: "Before" (left) / "After" (right)
- Before column header: Figtree 600, `var(--muted)`, uppercase, `0.85rem` letter-spacing
- After column header: Figtree 600, `var(--primary)`, uppercase, `0.85rem` letter-spacing
- Each row: `padding: 1.25rem 1.5rem`, alternating `var(--surface)` / `var(--white)` row backgrounds
- Before cell text: `var(--muted)`
- After cell text: `var(--ink)`, Outfit 500
- `border-radius: var(--radius)` on the table container
- `border: var(--border)`

**Callout block** (below table, `margin-top: 2.5rem`):
- `background: var(--primary)`, `color: var(--white)`
- `border-radius: var(--radius)`, `padding: 1.5rem 2rem`
- Figtree 600, `1.1rem`, `line-height: 1.6`
- Text: "Most brands run support as a cost centre..." (from copy)

---

### S4 — How It Works

**Layout:** `var(--accent-sand)` background. Centred heading. 3 phases in a horizontal row (desktop) / stacked (mobile).

**Section heading** (`h2`): "Three phases. One build. You own it." — centred, `margin-bottom: 3rem`

**Phase cards** (3-column grid, `gap: 2rem`):

Each card (`.card`):
- Phase number: JetBrains Mono, `var(--primary)`, `0.85rem`, `margin-bottom: 0.75rem`
  Format: `01`, `02`, `03`
- Phase name: Figtree 700, `1.2rem`, `var(--ink)`, `margin-bottom: 1rem`
  Format: `Discover` / `Build` / `Deploy & Hand Off`
- Body: Outfit 400, `1rem`, `var(--muted)`, `line-height: 1.6`
- Left `border-left: 3px solid var(--primary)` accent on each card

---

### S5 — Demo

**Layout:** `var(--white)` background. Centred, `max-width: 800px`.

**Section heading** (`h2`): "Watch it handle a billing dispute, a shipping delay, and a return request. In real time." — centred, `margin-bottom: 0.75rem`

**Sub-caption**: "Built for a D2C clothing brand. Same system, built for your brand and your ticket types." — `var(--muted)`, `margin-bottom: 2rem`

**Loom embed:**
- `<iframe>` embed from `https://www.loom.com/share/122e74a0d155456a9666c9cb27649790`
- Wrapper: `position: relative`, `padding-bottom: 56.25%` (16:9), `height: 0`, `overflow: hidden`
- `border-radius: var(--radius)`, `overflow: hidden`
- `box-shadow: var(--shadow-md)`

**Proof line** (below embed, `margin-top: 1.5rem`):
- `.card` with tighter padding (`1.25rem 1.5rem`)
- Outfit 400, `0.95rem`, `var(--muted)`
- Left `border-left: 3px solid var(--primary)`
- Text: "Built and tested on real D2C support emails..." (from copy)

---

### S6 — What You Get

**Layout:** `section-mist.png` at 15% opacity. Centred heading. 2-column grid of feature blocks (desktop) / 1-column (mobile).

**Section heading** (`h2`): "Everything included. No surprises." — centred, `margin-bottom: 3rem`

**Feature blocks** (6 total, `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 2rem`):

Each block (`.card`):
- Icon: SF-style SVG, `24px`, `var(--primary)`, `margin-bottom: 1rem`
- Heading: Figtree 600, `1.1rem`, `var(--ink)`, `margin-bottom: 0.5rem`
- Body: Outfit 400, `0.95rem`, `var(--muted)`, `line-height: 1.6`

Icons per block:
1. Every ticket handled automatically → `inbox` icon
2. Your policies, built in → `book-open` icon
3. Nothing falls through the cracks → `shield-check` icon
4. A support dashboard that builds itself → `chart-bar` icon
5. Full documentation + walkthrough → `document-text` icon
6. Included: 14-day post-launch support → `wrench-screwdriver` icon (badge with "Included" label in `var(--primary)`)

The 14-day support card gets a subtle `border: 1.5px solid var(--primary)` to visually call it out as a bonus.

---

### S7 — How We Engage

**Layout:** `var(--white)`. Centred `max-width: 740px`.

**Section heading** (`h2`): "One offer. Built around your brand." — centred, `margin-bottom: 1rem`

**Dream outcome paragraph** (`p`): Outfit 400, `1.15rem`, `var(--ink)`, `line-height: 1.8`, centred, `margin-bottom: 3rem`
Text: "Imagine opening Monday morning..." (from copy)

**Full Build card** (`.card`, `padding: 2.5rem`):
- `border: 2px solid var(--primary)` — distinct from other cards
- Sub-label above card title: JetBrains Mono, `var(--primary)`, `0.85rem` — "THE BUILD"
- Card title: Figtree 700, `1.5rem`, `margin-bottom: 1.5rem`
- Bullet list: `checkmark` SVG icon (`var(--primary)`) + Outfit `1rem` text, `gap: 0.75rem`
- Guarantee line: Figtree 600, `var(--ink)`, `margin-top: 1.5rem`, `padding-top: 1.5rem`, `border-top: var(--border)`
- Scarcity line below guarantee: JetBrains Mono, `var(--muted)`, `0.85rem`, `margin-top: 0.75rem`
  Text: "Currently taking on 5 builds this month."

**Retainer block** (below the card, `margin-top: 2rem`, `padding: 1.5rem 2rem`):
- `.card` with `background: var(--accent-sand)`
- Label: "ONGOING RETAINER (OPTIONAL)" — JetBrains Mono, `var(--muted)`, `0.8rem`
- Body: Outfit 400, `0.95rem`, `var(--muted)`
- Two bullets: same checkmark style, subdued
- No CTA — the main CTA is in S8

---

### S8 — CTA / Close

Three sub-blocks stacked: **Who builds this** → **CTA block** → **FAQ**.

**Who builds this:**
- Background: `var(--ink)`, full bleed section
- `color: var(--white)`
- Layout: 2-column grid (`1fr 1.5fr`, `gap: 4rem`, `align-items: center`)
- Left: Founder portrait (`image-assets/founder-portrait.png`)
  - `border-radius: var(--radius)`, `height: 320px`, `object-fit: cover`
  - Subtle green border: `border: 2px solid rgba(16,185,129,0.4)`
- Right:
  - Name: Figtree 700, `1.75rem`, `var(--white)`
  - Title: Figtree 500, `1rem`, `var(--primary)`, `margin-bottom: 1.5rem` — "AI Systems Builder"
  - Quote: Outfit italic, `1.1rem`, `opacity: 0.8`, `margin-bottom: 1.5rem`, left `border-left: 3px solid var(--primary)`, `padding-left: 1.25rem`
  - Bio: Outfit 400, `1rem`, `opacity: 0.85`, `line-height: 1.7`, `margin-bottom: 1.5rem`
  - LinkedIn link: `.btn-primary` (green on dark bg works)

**CTA block** (`var(--surface)`, `text-align: center`, `padding: 5rem 0`):
- Heading `h2`: "Your inbox doesn't have to work this way." — Figtree 700, `2.5rem`
- Sub-copy: `var(--muted)`, `1.1rem`, `max-width: 560px`, `margin: 1rem auto 2.5rem`
- CTA stack (flex column, `align-items: center`, `gap: 1rem`):
  - Primary: `.btn-primary .btn-large` — "Book a Free 20-Min Call"
  - Secondary: `.btn-secondary .btn-large` — "Watch the Demo First →"
  - Tertiary: plain text link, `var(--muted)`, `0.95rem`, underline on hover
    "Download the Free Report: The D2C Support Cost Report →"
- Urgency line: JetBrains Mono, `var(--primary)`, `0.85rem`, `margin-top: 1.5rem`
  "Taking on 5 builds this month. Book your call before the spots fill."

**PDF report card** (inline within CTA block or just below):
- `.card`, `max-width: 420px`, `margin: 2rem auto 0`, flex row
- Left: `pdf-report-cover.jpg`, `80px` wide, `border-radius: 8px`
- Right: title + download link

**FAQ accordion** (`var(--white)`, `max-width: 740px`, `margin: 0 auto`):
- Section label: "Common questions" — Figtree 600, `1.25rem`, `margin-bottom: 2rem`, centred
- Each FAQ item:
  - Trigger: Figtree 500, `1rem`, `var(--ink)`, `padding: 1.25rem 0`, `cursor: pointer`
  - `border-bottom: var(--border)`
  - Right side: `+` / `−` toggle, `var(--primary)`
  - Answer: Outfit 400, `0.95rem`, `var(--muted)`, `line-height: 1.7`, `padding: 0 0 1.25rem`
  - JS-toggled `max-height` transition for open/close
- 6 questions total (as per copy)

---

## 6. Footer

Carry forward existing footer structure. Updates:

- Remove "Autonomous Agents" link (no longer a page)
- Systems links: AI Support Triage (anchor `#offer`), The Demo (anchor `#demo`), How It Works (anchor `#process`)
- Connect links: LinkedIn, Email (`labs.garvin@gmail.com`), Book a Call (Calendly)
- Tagline: "Eliminating the Manual Tax through high-rigour AI architecture." (unchanged)
- Status dot + "Systems Operational" (keep — good trust signal)
- Copyright: "© 2026 GarvinLabs. Built by Garvin."

---

## 7. Image Asset Map

| File | Section | Usage |
|---|---|---|
| `hero-aurora.png` | S1 Hero | Full-bleed section background |
| `section-mist.png` | S2, S3, S6 | Background texture at 15–20% opacity |
| `pdf-report-cover.jpg` | S8 CTA | PDF report card thumbnail |
| `founder-portrait.png` | S8 Who builds | Founder photo in dark section |
| `logo-icon.svg` | Navbar, Footer | GarvinLabs icon |
| `logo-wordmark.svg` | Navbar | Full wordmark |

---

## 8. Component Library

| Component | Class | Notes |
|---|---|---|
| Primary button | `.btn-primary` | Green fill, white text, `border-radius: var(--radius)` |
| Secondary button | `.btn-secondary` | White fill, sand border |
| Large button modifier | `.btn-large` | `padding: 1rem 2rem`, `font-size: 1.1rem` |
| Card | `.card` | White bg, sand border, `var(--shadow-sm)` |
| Offer card | `.card.offer-card` | Primary border `2px solid var(--primary)` |
| Retainer card | `.card.retainer-card` | Sand bg, no primary border |
| Phase card | `.card.phase-card` | Left green border accent |
| Badge / label | `.badge` | Uppercase, JetBrains Mono, `var(--primary)` |
| Before/After table | `.ba-table` | New component — see S3 spec |
| FAQ accordion | `.faq-item` | JS toggle, `max-height` transition |
| Glass card | `.glass-card` | New — hero only, see S1 spec |
| Proof callout | `.proof-callout` | Left green border, muted text |
| Feature block | `.feature-block` | Icon + heading + body, in 2-col grid |

---

## 9. Interactions & Motion

- Button hover: `opacity: 0.9`, `translateY(-1px)`, `0.2s ease` (existing)
- Navbar scroll: JS adds `.scrolled` class → `box-shadow: var(--shadow-sm)` + `background: rgba(249,250,251,0.95)`
- FAQ accordion: `max-height` transition `0.3s ease`, `overflow: hidden`
- Section reveal: `IntersectionObserver` — fade-up on enter (`opacity: 0 → 1`, `translateY(20px → 0)`, `0.5s ease`), applied via `.reveal` class
- Status dot pulse: existing `@keyframes pulse` — keep
- No parallax, no scroll-triggered animations beyond fade-up — keep it fast

---

## 10. Responsive Breakpoints

Carry forward existing breakpoints (`1024px`, `768px`). New additions:

**1024px (tablet):**
- S1 Hero: glass card full-width, reduce `padding: 2.5rem`
- S4 How It Works: 3-col → 1-col stacked
- S6 What You Get: 2-col → 1-col
- S7 How We Engage: reduce max-width padding
- S8 Who builds this: 2-col → 1-col (portrait above, text below)

**768px (mobile):**
- Hero `h1`: `2.25rem`
- Glass card: `border-radius: 16px`, `padding: 2rem 1.5rem`
- All section padding: `4rem` top/bottom
- CTA stack: column, full-width buttons
- Before/After table: scroll-x if needed, or reformat as stacked cards
- FAQ: same, just smaller font

---

## 11. Anchor IDs (for nav + internal links)

| Section | ID |
|---|---|
| Problem | `#problem` |
| Before/After | `#results` |
| How It Works | `#process` |
| Demo | `#demo` |
| What You Get | `#offer` |
| How We Engage | `#engage` |
| CTA / Close | `#contact` |

---

## 12. SEO / Meta

- Page title: `GarvinLabs — AI Customer Support Automation for D2C Brands`
- Meta description: `Replace manual support sorting with AI. Every ticket read, prioritised, and 60% auto-replied. Built for D2C brands doing $3M+. Book a free 20-min call.`
- OG image: `image-assets/hero-aurora.png` (or a dedicated OG crop)
- Structured data: retain existing `SchemaOrg.tsx` component, update with new service description
- `lang="en"` — remove Google Translate widget (present in v1, not needed)
