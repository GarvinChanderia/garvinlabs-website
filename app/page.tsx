"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";
import { Footer } from "@/components/Footer";

const BUILDS_INDEX = [
  {
    tag: "Support Triage",
    name: "ThreadWave: Support Triage",
    problem: "200+ tickets a day, all needing manual sorting before anyone can act on them.",
    href: "/demos#threadwave",
    highlight: true,
    stat: "61%",
    statLabel: "auto-resolved within 30 days",
  },
  {
    tag: "Storefront Chatbot",
    name: "Storefront Support Chatbot",
    problem: "Sizing, returns, and shipping questions go unanswered outside business hours.",
    href: "/demos#storefront-chatbot",
    highlight: false,
    stat: "24/7",
    statLabel: "on-brand coverage",
  },
  {
    tag: "Instagram DMs",
    name: "Instagram DM Concierge",
    problem: "DMs and story replies pile up faster than anyone can reply to them.",
    href: "/demos#instagram-dm",
    highlight: false,
    stat: "∞",
    statLabel: "scale without headcount",
  },
];

const AEO_FAQS = [
  {
    q: "How do you decide what to automate first?",
    a: "By mapping the manual process before touching any tooling: what triggers the work, who does it, and where the judgment calls actually happen. The build gets scoped around that, not a templated workflow. Support tickets are where this showed up first for ThreadWave, but the same method applies to ops reporting, fulfilment, or influencer tracking."
  },
  {
    q: "How long does a build like this typically take?",
    a: "ThreadWave went from mapping the ticket taxonomy to a live system in 14 days. Most of that time is discovery, understanding the process as it actually runs, not the build itself. Once the process is mapped, wiring it into the existing tools is the fast part."
  },
  {
    q: "How does a system like this avoid sending a wrong reply?",
    a: "ThreadWave only auto-replies to low-risk, well-defined query types, like order status or return policy questions, where confidence is high. Anything ambiguous or high-stakes gets escalated to a person with a draft already attached. The rule isn't automate everything, it's automate what's safe to automate and escalate the rest."
  },
  {
    q: "Why not just use basic rule-based automation like Zapier?",
    a: "Rule-based automation breaks the moment something is phrased unexpectedly: a typo, an odd word order, a two-part request. The systems here read intent instead of matching keywords, so they hold up against that kind of variation, whether it's a support ticket, a fulfilment exception, or an inventory alert."
  },
  {
    q: "Does this only apply to customer support?",
    a: "No, support is just where the first build landed, because that pain surfaced first in founder conversations. The method, map the manual process, then build the system around what actually happens, applies to any repetitive operational work: daily ops reporting, fulfilment checks, influencer or affiliate tracking, inventory alerts."
  }
];



export default function Home() {
  // Cursor-tracking glow on bento cards
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".bento-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const glow = card.querySelector<HTMLElement>(".glass-cursor-glow");
      if (!glow) return;

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--cursor-x", `${x}%`);
        card.style.setProperty("--cursor-y", `${y}%`);
      };

      card.addEventListener("mousemove", onMouseMove);
      handlers.push({ el: card, fn: onMouseMove });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <Navbar />
      <RevealInit />

      {/* ── AEO WEDGE ─────────────────────────────────────── */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What is Support Triage automation?</strong>
        <p>Support triage automation is a system that reads, classifies, and drafts responses for inbound customer support tickets. ThreadWave, one implementation of this pattern, resolves 61% of tickets without a person touching them.</p>
      </aside>

      {/* ═══════════════════════════════════════════════════
          HERO — Full-viewport, text-only, orb background
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          overflow: "hidden",
          paddingTop: "80px",
          textAlign: "center",
        }}
      >

        {/* Radial vignette overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0d0d0d 100%)",
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
            padding: "3rem 2rem 5rem",
          }}
        >
          {/* Eyebrow */}
          <p
            className="reveal eyebrow-label"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            GarvinLabs · Operations Automation
          </p>

          {/* Headline */}
          <h1
            className="reveal delay-1"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f5f5f7",
              marginBottom: "1.75rem",
            }}
          >
            I find the manual work,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34d399 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              then automate it.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className="reveal delay-2"
            style={{
              fontSize: "1.1875rem",
              lineHeight: 1.7,
              color: "#a1a1a6",
              maxWidth: "620px",
              margin: "0 auto 3rem",
            }}
          >
            D2C founders end up personally running the parts of the business nobody
            automated: support inboxes, daily ops reports, fulfilment checks, influencer
            spreadsheets. I build systems that take that work off your plate,
            permanently.
          </p>

          {/* CTAs */}
          <div
            className="reveal delay-3"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <Link
              href="/demos"
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
              See the builds →
            </Link>
            <a
              href="https://linkedin.com/in/garvinchanderia"
              target="_blank"
              rel="noopener noreferrer"
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
              Connect on LinkedIn
            </a>
          </div>

          {/* KPI row — glassmorphic pills */}
          <div
            className="reveal delay-3"
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { stat: "14 days", label: "discovery to a live system" },
              { stat: "61%", label: "of ThreadWave's tickets auto-resolved in 30 days" },
              { stat: "5", label: "operational functions this method covers" },
            ].map((kpi) => (
              <div
                key={kpi.stat}
                className="glass-thin"
                style={{
                  padding: "1.25rem 1.5rem",
                  textAlign: "center",
                  minWidth: "160px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top shimmer line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "15%",
                    right: "15%",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
                  }}
                />
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.035em", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {kpi.stat}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", lineHeight: 1.5, maxWidth: "130px", margin: "0 auto" }}>
                  {kpi.label}
                </p>
              </div>
            ))}
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
            height: "160px",
            background: "linear-gradient(to bottom, transparent, #0d0d0d)",
            zIndex: 3,
          }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          BUILDS — Bento Grid
      ══════════════════════════════════════════════════ */}
      <section
        id="projects"
        aria-label="Projects"
        style={{
          background: "#0d0d0d",
          padding: "7rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >


        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
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
              The Builds
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              The manual work, systemized.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", maxWidth: "540px", lineHeight: 1.65 }}>
              Each one started as a manual process someone was doing by hand every day.
              The method is the same regardless of which one it&apos;s pointed at next.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {BUILDS_INDEX.map((build, idx) => (
              <Link
                key={build.name}
                href={build.href}
                id={`build-card-${idx}`}
                className={`bento-card reveal delay-${idx + 1}${build.highlight ? " bento-card-highlight" : ""}`}
                style={{
                  display: "block",
                  padding: build.highlight ? "2.5rem" : "2rem",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "saturate(1.8) blur(24px)",
                  WebkitBackdropFilter: "saturate(1.8) blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Cursor glow layer */}
                <div className="glass-cursor-glow" aria-hidden="true" />

                {/* Top accent line on highlight card */}
                {build.highlight && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "8%",
                      right: "8%",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, #10B981, transparent)",
                    }}
                  />
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Tag + stat row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.625rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#10B981",
                        fontWeight: 700,
                        background: "rgba(16,185,129,0.08)",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "980px",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {build.tag}
                    </span>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.04em", lineHeight: 1 }}>
                        {build.stat}
                      </p>
                      <p style={{ fontSize: "0.6875rem", color: "#6b7280", marginTop: "0.3rem", maxWidth: "90px", textAlign: "right", lineHeight: 1.45 }}>
                        {build.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: build.highlight ? "1.5rem" : "1.1875rem",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      letterSpacing: "-0.015em",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {build.name}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "#6b7280", lineHeight: 1.65 }}>
                    {build.problem}
                  </p>

                  {/* Footer arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: "#10B981",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      marginTop: "1.5rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    View build
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE LAB — Philosophy + spinning conic glow
      ══════════════════════════════════════════════════ */}
      <section
        id="philosophy"
        aria-label="Philosophy"
        style={{
          background: "#0d0d0d",
          padding: "9rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >


        <div
          className="container"
          style={{ position: "relative", zIndex: 2, maxWidth: "800px", textAlign: "center" }}
        >
          <p
            className="reveal eyebrow-label"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            The Lab
          </p>
          <h2
            className="reveal delay-1"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              marginBottom: "2.5rem",
            }}
          >
            Automating the mundane.
          </h2>

          {/* Glassmorphic text card */}
          <div
            className="reveal delay-2 glass"
            style={{
              padding: "3rem",
              textAlign: "left",
              marginBottom: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top shimmer */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
              }}
            />
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#a1a1a6", marginBottom: "1.25rem" }}>
              The system sits between your existing tools (inbox, storefront, WhatsApp, Instagram,
              sheets) and does the reading, deciding, and acting a person used to do by hand.
              The pattern repeats across functions; what changes is which manual process gets automated first.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#a1a1a6" }}>
              Every build above is a working system, not a mockup, built on a real operational pain
              and tested against real-world inputs.
            </p>
          </div>

          {/* Works with your existing tools */}
          <div
            className="reveal delay-3"
            style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            {["Zendesk", "Instagram", "Gmail", "WhatsApp"].map((tech) => (
              <span
                key={tech}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.5rem 1rem",
                  borderRadius: "980px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  fontSize: "0.8125rem",
                  color: "#86868b",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — Dark accordion
      ══════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-label="Frequently Asked Questions"
        style={{
          background: "#050505",
          padding: "7rem 0 9rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
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
            FAQ
          </p>
          <h2
            className="reveal delay-1"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}
          >
            Direct answers.
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {AEO_FAQS.map((faq, idx) => (
              <details
                key={idx}
                id={`faq-item-${idx}`}
                className={`reveal delay-${(idx % 3) + 1}`}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "0 0.25rem",
                }}
              >
                <summary
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#f5f5f7",
                    outline: "none",
                    listStyle: "none",
                    padding: "1.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    userSelect: "none",
                  }}
                >
                  <span>{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M5 8l5 5 5-5" />
                  </svg>
                </summary>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "#6b7280",
                    paddingBottom: "1.5rem",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
