"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <Navbar />
      <RevealInit />

      {/* ── AEO WEDGE ─────────────────────────────────────── */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What does GarvinLabs do?</strong>
        <p>GarvinLabs connects businesses at the exact moment a new need appears (a new obligation, a new space, or a broken process) with the specialists built to solve it, before the window closes, and builds AI modernization systems for D2C retail brands.</p>
      </aside>

      {/* ═══════════════════════════════════════════════════
          HERO, Connector offering (primary), tenant/contractor photo background
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

        {/* Flat black overlay, 40% opacity, keeps text legible across the whole photo
            (raised from 20% since this photo runs brighter/more even than the old one) */}
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

        {/* Hero content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "860px",
            padding: "3rem 2rem 1rem",
          }}
        >
          {/* Eyebrow */}
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
            GarvinLabs · Connector
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f5f7",
              marginBottom: "1.5rem",
              textShadow: "0 2px 16px rgba(0,0,0,0.55)",
            }}
          >
            We connect businesses at the exact moment a new need appears
            <br />
            <span
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #10B981 0%, #34d399 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 1px 10px rgba(0,0,0,0.85))",
              }}
            >
              with the specialists built to solve it, before the window closes.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "#a1a1a6",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              textShadow: "0 1px 8px rgba(0,0,0,0.7)",
            }}
          >
            Independent. Building this practice in the open, 2026&ndash;. Taking
            our first 3 counterparties.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://cal.com/garvin-chanderia/30min"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-primary"
              style={{
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
              }}
            >
              Book a 30-minute call →
            </a>
            <Link
              href="/demos"
              id="hero-cta-secondary"
              style={{
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
              }}
            >
              See AI Solutions work
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
          LIVE SIGNAL, connector offering, real public-data pulls
      ══════════════════════════════════════════════════ */}
      <section
        id="tracking"
        aria-label="Live signal"
        style={{ background: "#0d0d0d", padding: "5rem 0" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="reveal">
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              Live Signal
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "2rem" }}>
              Public data on the moments that create real work: regulatory, real estate, and operational.
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              "Office net absorption positive for a third straight quarter, even as new construction sits at a 14-year low, landlords are paying up in TI allowances to close deals",
              "OSHA renewed its National Emphasis Program on warehousing and distribution centers for five years, effective July 31, 2026",
              "Willful and repeat OSHA violations now cap at $165,514 per violation, the highest penalty ceiling on record",
              "Vecna Robotics raised $31M this month to expand its warehouse automation line after demand for its picking system more than doubled year over year",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`reveal delay-${Math.min(idx + 1, 3)}`}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "baseline",
                  padding: "0.875rem 0",
                  borderBottom: idx < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span style={{ color: "#10B981", fontFamily: "var(--font-mono)", fontSize: "0.8125rem", flex: "none" }}>→</span>
                <span style={{ fontSize: "0.9375rem", color: "#a1a1a6", lineHeight: 1.65 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "0.8125rem", color: "#6b7280", fontStyle: "italic", marginTop: "1.25rem" }}>
            Sourced from Newmark and CBRE office-market reports, OSHA directive CPL-03-00-026, and current funding coverage of the warehouse robotics market.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW WE WORK, connector offering, the match as a service
      ══════════════════════════════════════════════════ */}
      <section
        id="connector-how"
        aria-label="How we work"
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              How We Work
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", lineHeight: 1.65 }}>
              No deal to point at yet, so here&rsquo;s exactly what we put in motion.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                pair: "New obligation lands → the provider who resolves it",
                desc: "When a regulator, an auditor, or an insurer flags a gap, there’s a narrow window before it becomes a bigger problem. We get the right specialist in the room inside that window.",
              },
              {
                pair: "New space opens → the team that finishes it",
                desc: "The day a lease is signed, a clock starts on turning the space into something usable. We connect the tenant to a contractor who can move before that clock runs out.",
              },
              {
                pair: "Old process breaks → the operator who rebuilds it",
                desc: "When a facility’s current way of doing things stops working (a bad peak, a labor shortfall), we bring in the operator who can fix it properly, not patch it.",
              },
            ].map((row, idx) => (
              <div
                key={row.pair}
                className={`reveal delay-${idx + 1}`}
                style={{ padding: "1.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", color: "#10B981", fontSize: "0.8125rem", letterSpacing: "0.02em" }}>
                  {row.pair}
                </span>
                <p style={{ marginTop: "0.5rem", color: "#a1a1a6", fontSize: "0.9375rem", lineHeight: 1.65 }}>{row.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              marginTop: "2rem",
              fontSize: "0.9375rem",
              color: "#a1a1a6",
              lineHeight: 1.65,
            }}
          >
            <b style={{ color: "#f5f5f7" }}>Building in the open.</b> We&rsquo;re working alongside myoProcess, a vetted B2B partner trusted across $1B+ in transactions, while we route our first introductions in this lane. Our first closed match replaces this paragraph.
          </div>

          <ul style={{ listStyle: "none", margin: "2.5rem 0 0", padding: 0 }}>
            <li style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#10B981", fontWeight: 700, marginBottom: "1rem" }}>
              Field Notes
            </li>
            {[
              { href: "/connector/real-clock-on-every-buildout", title: "The Clock That Starts the Day You Sign" },
              { href: "/connector/citation-isnt-the-trigger", title: "The Trigger Before the Paperwork" },
              { href: "/connector/warehouses-automate-after-the-peak", title: "Why the Fix Gets Bought After It’s Needed" },
            ].map((essay) => (
              <li key={essay.href} style={{ padding: "0.5rem 0" }}>
                <Link href={essay.href} style={{ color: "#f5f5f7", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.25)", fontSize: "0.9375rem" }}>
                  {essay.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT, connector offering, final CTA
      ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        aria-label="Work with GarvinLabs"
        style={{ background: "#050505", padding: "6rem 0 7rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <p
            className="reveal eyebrow-label"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
            }}
          >
            Work With GarvinLabs
          </p>
          <h2
            className="reveal delay-1"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Tell us where you&rsquo;re at and what you&rsquo;re trying to fix.
          </h2>
          <p
            className="reveal delay-1"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "#34d399", marginBottom: "1.5rem" }}
          >
            Taking our first 3 counterparties right now.
          </p>
          <p className="reveal delay-2" style={{ fontSize: "1.0625rem", color: "#a1a1a6", lineHeight: 1.65, maxWidth: "52ch", marginBottom: "2rem" }}>
            If you&rsquo;ve just hit a new obligation, a new space, or a limit in how you operate, or you&rsquo;re the specialist who resolves those, message us. We&rsquo;ll take it from there.
          </p>
          <a
            className="reveal delay-3"
            href="https://cal.com/garvin-chanderia/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
            }}
          >
            Book a 30-minute call →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
