"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";
import { Footer } from "@/components/Footer";
import { BOOKING_URL, EMAIL, MAILTO } from "@/lib/constants";

const EYEBROW = {
  fontSize: "0.6875rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "#10B981",
  fontWeight: 700,
  marginBottom: "0.875rem",
};

const H2 = {
  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  fontWeight: 700,
  color: "#f5f5f7",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
  marginBottom: "1rem",
};

const PRIMARY_BTN = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  background: "#10B981",
  color: "#000000",
  padding: "0.9375rem 2rem",
  borderRadius: "980px",
  fontWeight: 700,
  fontSize: "0.9375rem",
  letterSpacing: "0.01em",
  minHeight: "48px",
  textDecoration: "none",
};

const SECONDARY_BTN = {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.9375rem 2rem",
  borderRadius: "980px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#f5f5f7",
  fontWeight: 600,
  fontSize: "0.9375rem",
  minHeight: "48px",
  textDecoration: "none",
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const LABEL = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#6b7280",
  marginBottom: "0.25rem",
};

const TEXT_LINK = {
  color: "#f5f5f7",
  textDecoration: "underline",
  textDecorationColor: "rgba(255,255,255,0.25)",
  fontSize: "0.9375rem",
};

// The three markets we route in: who's buying → who we introduce them to.
const MARKETS = [
  {
    lane: "Safety & compliance",
    demand: "Businesses facing OSHA citations, inspections or corrective action",
    supply: "Safety and compliance consultants",
  },
  {
    lane: "Commercial build-outs",
    demand: "Companies signing leases, relocating or opening new offices",
    supply: "Fit-out and tenant-improvement contractors",
  },
  {
    lane: "Warehouse automation",
    demand: "Distribution centers and 3PLs expanding or modernizing",
    supply: "Warehouse automation integrators",
  },
];

// Illustrative examples, one per market (no named buyers yet).
const OPPORTUNITIES = [
  {
    lane: "Safety & compliance",
    trigger:
      "A distribution center has just been cited after an OSHA inspection and has a deadline to show corrective action.",
    demand: "A safety program rebuild, staff training and abatement paperwork.",
    supplier: "An OSHA and EHS compliance consultancy.",
  },
  {
    lane: "Commercial build-outs",
    trigger:
      "A company has just signed a lease on a new office. It has a move-in date and an empty floor.",
    demand: "Design and fit-out of the space before the move-in date.",
    supplier: "A tenant-improvement contractor.",
  },
  {
    lane: "Warehouse automation",
    trigger: "A 3PL has announced a new distribution center to handle growth.",
    demand: "Material handling and automation designed into the building from day one.",
    supplier: "A warehouse automation integrator.",
  },
];

const STEPS = [
  {
    title: "We identify companies actively buying.",
    desc: "We track public signals like OSHA inspections, new commercial leases and distribution center announcements, so we reach a company while the decision is still open.",
  },
  {
    title: "We check whether the opportunity matches your services.",
    desc: "Before anything reaches you, we confirm the company's need, size and location fit what you actually deliver. If it doesn't fit, you never hear about it.",
  },
  {
    title: "We introduce you directly to the buyer.",
    desc: "You get a direct introduction to the person making the decision, with the context on what they need and why the timing matters.",
  },
];

const RESULTS = [
  {
    slug: "clean-seas-west-virginia",
    stat: "6 introductions in 120 days",
    client: "Clean-Seas West Virginia",
    industry: "Industrial recycling",
    desc: "Industrial partners who could supply, buy from, transport for or support a new plastic-conversion facility in Belle, West Virginia.",
  },
  {
    slug: "regent-peak-wealth-advisors",
    stat: "6 qualified introductions in 45 days",
    client: "Regent Peak Wealth Advisors",
    industry: "Wealth management",
    desc: "Business owners, executives and families who matched the advisory firm's existing client profile.",
  },
  {
    slug: "lasting-blueprint-productions",
    stat: "4 introductions in 78 days",
    client: "Lasting Blueprint Productions",
    industry: "Video production",
    desc: "Central Florida organizations with conferences, training programs and events that needed professional video.",
  },
];

const CARD = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column" as const,
};

export default function Home() {
  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <Navbar />
      <RevealInit />

      {/* ── AEO WEDGE ─────────────────────────────────────── */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What does GarvinLabs do?</strong>
        <p>
          GarvinLabs connects businesses with qualified service providers when they&apos;re actively
          looking to buy. We identify companies with a live need (an OSHA citation or inspection, a
          new commercial lease, a warehouse expansion), check the opportunity matches the
          provider&apos;s services, and introduce the provider directly to the buyer. Markets:
          safety and compliance consultants, commercial fit-out contractors, and warehouse
          automation integrators.
        </p>
      </aside>

      {/* ═══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          overflow: "hidden",
          paddingTop: "112px",
          paddingBottom: "4rem",
          textAlign: "center",
        }}
      >
        {/* Background photo */}
        <Image
          src="/hero-connector.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%", zIndex: 0 }}
        />

        {/* Flat black overlay keeps text legible across the whole photo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Center scrim, darkens the text column for legibility over the photo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 65% 90% at 50% 45%, rgba(13,13,13,0.8) 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.15) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "960px",
            padding: "3rem 2rem 1rem",
          }}
        >
          <p
            className="eyebrow-label"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "1.25rem",
              textShadow: "0 1px 8px rgba(0,0,0,0.85)",
            }}
          >
            GarvinLabs
          </p>

          <h1
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#f5f5f7",
              marginBottom: "2.5rem",
              textShadow: "0 2px 16px rgba(0,0,0,0.55)",
            }}
          >
            We connect businesses with qualified service providers{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34d399 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 1px 10px rgba(0,0,0,0.85))",
              }}
            >
              when they&rsquo;re actively looking to buy.
            </span>
          </h1>

          {/* Three markets */}
          <div className="home-card-grid" style={{ marginBottom: "2.5rem" }}>
            {MARKETS.map((m) => (
              <div
                key={m.lane}
                style={{
                  background: "rgba(13,13,13,0.72)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "1.125rem 1.25rem",
                  textAlign: "left",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <p style={{ ...EYEBROW, fontSize: "0.625rem", marginBottom: "0.625rem" }}>{m.lane}</p>
                <p style={{ fontSize: "0.9375rem", color: "#f5f5f7", lineHeight: 1.5, marginBottom: "0.5rem" }}>
                  {m.demand}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#a1a1a6", lineHeight: 1.5 }}>
                  <span style={{ color: "#10B981", fontFamily: "var(--font-mono)" }}>→ </span>
                  {m.supply}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" id="hero-cta-primary" style={PRIMARY_BTN}>
              Book a 30-minute call →
            </a>
            <Link href="/case-studies" id="hero-cta-secondary" style={SECONDARY_BTN}>
              See results
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "70px",
            background: "linear-gradient(to bottom, transparent, #0d0d0d)",
            zIndex: 1,
          }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE'RE SOURCING, one example opportunity per market
      ══════════════════════════════════════════════════ */}
      <section id="sourcing" aria-label="What we're sourcing right now" style={{ background: "#0d0d0d", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div className="reveal" style={{ maxWidth: "720px", marginBottom: "2.5rem" }}>
            <p className="eyebrow-label" style={EYEBROW}>What we&rsquo;re sourcing right now</p>
            <p style={{ fontSize: "1.0625rem", color: "#a1a1a6", lineHeight: 1.65 }}>
              Examples of the kind of opportunity we source in each market: what the company needs,
              and who we introduce them to.
            </p>
          </div>

          <div className="home-card-grid">
            {OPPORTUNITIES.map((o, idx) => (
              <div key={o.lane} className={`reveal delay-${idx + 1}`} style={{ ...CARD, gap: "1rem" }}>
                <p style={{ ...EYEBROW, marginBottom: 0 }}>{o.lane}</p>
                <p style={{ fontSize: "0.9375rem", color: "#f5f5f7", lineHeight: 1.6 }}>{o.trigger}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem", marginTop: "auto" }}>
                  <p style={LABEL}>Demand</p>
                  <p style={{ fontSize: "0.9375rem", color: "#a1a1a6", lineHeight: 1.55, marginBottom: "0.875rem" }}>{o.demand}</p>
                  <p style={LABEL}>Matched supplier</p>
                  <p style={{ fontSize: "0.9375rem", color: "#34d399", lineHeight: 1.55 }}>{o.supplier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════════════ */}
      <section
        id="connector-how"
        aria-label="How we work"
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="reveal eyebrow-label" style={EYEBROW}>How We Work</p>

          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {STEPS.map((step, idx) => (
              <li
                key={step.title}
                className={`reveal delay-${idx + 1}`}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.5rem 0",
                  borderBottom: idx < STEPS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", color: "#10B981", fontSize: "0.875rem", flex: "none", paddingTop: "0.2rem" }}>
                  0{idx + 1}
                </span>
                <div>
                  <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#f5f5f7", lineHeight: 1.4 }}>{step.title}</p>
                  <p style={{ marginTop: "0.5rem", color: "#a1a1a6", fontSize: "0.9375rem", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul style={{ listStyle: "none", margin: "2.5rem 0 0", padding: 0 }}>
            <li style={{ ...EYEBROW, marginBottom: "1rem" }}>Field Notes</li>
            {[
              { href: "/connector/real-clock-on-every-buildout", title: "The Clock That Starts the Day You Sign" },
              { href: "/connector/citation-isnt-the-trigger", title: "The Trigger Before the Paperwork" },
              { href: "/connector/warehouses-automate-after-the-peak", title: "Why the Fix Gets Bought After It’s Needed" },
            ].map((essay) => (
              <li key={essay.href} style={{ padding: "0.5rem 0" }}>
                <Link href={essay.href} style={TEXT_LINK}>
                  {essay.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESULTS, partner case studies
      ══════════════════════════════════════════════════ */}
      <section
        id="results"
        aria-label="Results"
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="container" style={{ maxWidth: "960px" }}>
          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <p className="eyebrow-label" style={EYEBROW}>Results</p>
            <h2 style={H2}>Introductions we&rsquo;ve routed</h2>
            <p style={{ fontSize: "0.9375rem", color: "#a1a1a6", lineHeight: 1.65 }}>
              Delivered with our partner myoProcess.
            </p>
          </div>

          <div className="home-card-grid">
            {RESULTS.map((r, idx) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className={`reveal delay-${idx + 1}`}
                style={{ ...CARD, gap: "0.75rem", textDecoration: "none" }}
              >
                <p style={{ fontSize: "1.375rem", fontWeight: 700, color: "#f5f5f7", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                  {r.stat}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#10B981" }}>
                  {r.client} · {r.industry}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "#a1a1a6", lineHeight: 1.6 }}>{r.desc}</p>
                <span style={{ marginTop: "auto", fontSize: "0.875rem", color: "#f5f5f7", fontWeight: 600 }}>Read the case study →</span>
              </Link>
            ))}
          </div>

          <p className="reveal" style={{ marginTop: "1.75rem" }}>
            <Link href="/case-studies" style={TEXT_LINK}>
              See all case studies
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        aria-label="Work with GarvinLabs"
        style={{ background: "#050505", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="reveal eyebrow-label" style={EYEBROW}>Work With GarvinLabs</p>
          <h2 className="reveal delay-1" style={{ ...H2, marginBottom: "2rem" }}>
            Looking for more customers? Tell us what services you provide and which markets you serve.
          </h2>
          <div className="reveal delay-2" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={PRIMARY_BTN}>
              Book a 30-minute call →
            </a>
            <a href={MAILTO} style={SECONDARY_BTN}>
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BACKGROUND, career summary
      ══════════════════════════════════════════════════ */}
      <section
        id="background"
        aria-label="Background"
        style={{ background: "#050505", padding: "4rem 0 6rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="reveal eyebrow-label" style={EYEBROW}>Background</p>
          <h2 className="reveal" style={{ ...H2, fontSize: "1.5rem" }}>Garvin Chanderia</h2>
          <div className="reveal delay-1" style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1rem", color: "#a1a1a6", lineHeight: 1.75 }}>
            <p>
              I&rsquo;ve spent my career working out how businesses actually run before deciding what
              should change.
            </p>
            <p>
              I&rsquo;ve worked in enterprise architecture with CXO-level stakeholders: leading
              discovery, turning what architects and IT teams need into workflows, data models and
              dashboards, and building the platform demos that shaped their buy or don&rsquo;t-buy
              decisions.
            </p>
            <p>
              I also spent nearly two years at Cummins, first as a data analyst and then as a
              BI developer. I built 30+ dashboards that turned live plant and ERP data into insight
              for leadership, automated recurring reporting to cut turnaround by 40%, and visited
              manufacturing sites to check the numbers against what was happening on the floor.
            </p>
            <p>
              Along the way I built a motorcycle road-trip app from scratch, on the back of 200+ rider
              interviews, and took it to 300+ organic downloads in four months.
            </p>
            <p>
              GarvinLabs points the same habit at one question: which companies are about to buy, and
              which provider should be in the room when they do.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
