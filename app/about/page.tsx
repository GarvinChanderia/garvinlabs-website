import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Garvin Chanderia: enterprise architecture background, n8n + AI automation builds for D2C operators.",
};

const EXPERIENCE = [
  {
    role: "Product Consultant, Enterprise Architecture Platforms",
    org: "Invecto Technologies",
    period: "Oct 2025 – Present",
    points: [
      "Own discovery and delivery of enterprise architecture reporting and workflow capabilities",
      "Translate requirements from CTO-level stakeholders, architects, and EA teams into platform configuration and demos",
    ],
  },
  {
    role: "BI Developer / Product Owner",
    org: "Cummins India",
    period: "Jun 2024 – Oct 2025",
    points: [
      "Built 35+ dashboards translating real-time plant operations into actionable ERP insights",
      "Automated recurring reporting workflows with Power BI and Power Automate, cutting turnaround time by 40%",
      "Promoted from Data Analyst Intern after demonstrating impact on the reporting backlog",
    ],
  },
  {
    role: "Founder, Product & Insights Lead",
    org: "ThrottleApp",
    period: "Jan 2024 – May 2025",
    points: [
      "Took a motorcycle road-trip companion app from 0 to 1, 300+ organic downloads in 4 months",
      "Ran 200+ user interviews and usability tests to shape the product roadmap",
    ],
  },
];

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Business Analysis",
    items: ["Process mapping", "PRDs", "Agile / Scrum", "Stakeholder alignment"],
  },
  {
    group: "Automation & AI",
    items: ["n8n", "Claude API / MCP", "Gemini", "Prompt engineering"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "SQL", "Python", "Databricks"],
  },
];

const CERTIFICATIONS = [
  "Anthropic (2026): MCP, Subagents, Agent Skills, Claude Code, AI Fluency",
  "Microsoft AI Product Manager Professional Certificate",
  "Avolution ABACUS (Enterprise Architecture)",
  "Databricks Lakehouse Architecture",
];

export default function About() {
  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <Navbar />

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
        aria-label="About Garvin"
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Two-column hero */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 300px) 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Portrait */}
            <div
              style={{
                position: "relative",
                height: "320px",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                background: "rgba(255,255,255,0.03)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/website-images/founder-portrait.png"
                alt="Garvin Chanderia"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Bio */}
            <div>
              <p
                style={{
                  fontSize: "var(--type-caption2)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#10B981",
                  fontWeight: 700,
                  marginBottom: "0.875rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                About
              </p>
              <h1
                style={{
                  fontSize: "var(--type-large-title)",
                  fontWeight: 700,
                  color: "#f5f5f7",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Garvin Chanderia
              </h1>
              <blockquote
                style={{
                  borderLeft: "2px solid #10B981",
                  paddingLeft: "1.25rem",
                  fontStyle: "italic",
                  fontSize: "var(--type-title3)",
                  color: "#a1a1a6",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;I diagnose before I build.&rdquo;
              </blockquote>
              <p
                style={{
                  fontSize: "var(--type-body)",
                  lineHeight: 1.75,
                  color: "#a1a1a6",
                  marginBottom: "1rem",
                }}
              >
                My background is in enterprise architecture and analytics: designing how systems
                connect, how data flows, and how decisions get made inside large organisations.
                That background shapes every build here. I map the operations first, then build
                the automation around what actually exists, not what the documentation says.
              </p>
              <p
                style={{
                  fontSize: "var(--type-body)",
                  lineHeight: 1.75,
                  color: "#a1a1a6",
                  marginBottom: "2rem",
                }}
              >
                The <Link href="/demos" style={{ color: "#10B981" }}>builds</Link> are real
                systems, not demos or mockups. Each one started with a manual process someone
                was doing by hand every day.
              </p>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────── */}
      <section
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Experience"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "var(--type-caption2)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Experience
          </p>
          <h2
            style={{
              fontSize: "var(--type-title1)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Where this comes from.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {EXPERIENCE.map((job) => (
              <div
                key={job.role}
                style={{
                  padding: "1.75rem 2rem",
                  borderRadius: "var(--radius-card)",
                  background: "var(--glass-medium-bg)",
                  backdropFilter: "var(--glass-medium-blur)",
                  WebkitBackdropFilter: "var(--glass-medium-blur)",
                  border: "var(--glass-medium-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--type-title3)",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      lineHeight: 1.3,
                    }}
                  >
                    {job.role}
                    <span style={{ color: "#10B981", fontWeight: 500 }}> · {job.org}</span>
                  </h3>
                  <span
                    style={{
                      fontSize: "var(--type-caption1)",
                      fontFamily: "var(--font-mono)",
                      color: "#6b7280",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "0.2rem 0.625rem",
                      borderRadius: "var(--radius-pill)",
                      flexShrink: 0,
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {job.points.map((p) => (
                    <li
                      key={p}
                      style={{ fontSize: "var(--type-callout)", lineHeight: 1.65, color: "#a1a1a6" }}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDS ─────────────────────────────────────────────── */}
      <section
        style={{ background: "#050505", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Builds"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "var(--type-caption2)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Builds
          </p>
          <h2
            style={{
              fontSize: "var(--type-title1)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            What I build with.
          </h2>
          <p style={{ fontSize: "var(--type-body)", lineHeight: 1.75, color: "#a1a1a6", marginBottom: "1rem" }}>
            n8n is the connective tissue between a brand&apos;s tools and an AI layer that reads,
            decides, and acts.{" "}
            <Link href="/demos" style={{ color: "#10B981" }}>See the live builds</Link>, including
            ThreadWave, the AI support triage system that hit 61% auto-resolution in 30 days.
          </p>
          <p style={{ fontSize: "var(--type-body)", lineHeight: 1.75, color: "#a1a1a6" }}>
            On the personal side, I built an n8n MCP Server: a connector that lets the Claude API
            call n8n&apos;s REST API directly through 10 custom tools, so an AI agent can build,
            inspect, and run workflows. It&apos;s a personal R&amp;D project exploring how far an
            AI agent can go in managing its own automation layer.
          </p>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────── */}
      <section
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Skills"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "var(--type-caption2)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Skills
          </p>
          <h2
            style={{
              fontSize: "var(--type-title1)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Toolkit.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3
                  style={{
                    fontSize: "var(--type-footnote)",
                    fontWeight: 700,
                    color: "#f5f5f7",
                    marginBottom: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.group}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {s.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.375rem 0.875rem",
                        borderRadius: "var(--radius-pill)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        fontSize: "var(--type-caption1)",
                        color: "#86868b",
                        fontWeight: 500,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTIFICATIONS ─────────────────────────── */}
      <section
        style={{ background: "#050505", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Education and Certifications"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "var(--type-caption2)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Education &amp; Certifications
          </p>
          <h2
            style={{
              fontSize: "var(--type-title1)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Background.
          </h2>

          <div
            style={{
              padding: "1.75rem 2rem",
              borderRadius: "var(--radius-card)",
              background: "var(--glass-medium-bg)",
              backdropFilter: "var(--glass-medium-blur)",
              WebkitBackdropFilter: "var(--glass-medium-blur)",
              border: "var(--glass-medium-border)",
              marginBottom: "1.25rem",
            }}
          >
            <h3 style={{ fontSize: "var(--type-title3)", fontWeight: 700, color: "#f5f5f7", marginBottom: "0.4rem" }}>
              B.Tech, Computer Engineering (AI/ML Specialisation)
            </h3>
            <p
              style={{
                fontSize: "var(--type-caption1)",
                fontFamily: "var(--font-mono)",
                color: "#6b7280",
              }}
            >
              MIT ADT University · 2020 – 2024
            </p>
          </div>

          <div
            style={{
              padding: "1.75rem 2rem",
              borderRadius: "var(--radius-card)",
              background: "var(--glass-medium-bg)",
              backdropFilter: "var(--glass-medium-blur)",
              WebkitBackdropFilter: "var(--glass-medium-blur)",
              border: "var(--glass-medium-border)",
            }}
          >
            <h3
              style={{
                fontSize: "var(--type-title3)",
                fontWeight: 700,
                color: "#f5f5f7",
                marginBottom: "1rem",
              }}
            >
              Certifications
            </h3>
            <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c}
                  style={{ fontSize: "var(--type-callout)", lineHeight: 1.65, color: "#a1a1a6" }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "6rem 0 7rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
        }}
        aria-label="Get in touch"
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "var(--type-title1)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Want to talk through something similar?
          </h2>
          <p style={{ fontSize: "var(--type-body)", color: "#6b7280", marginBottom: "2rem", lineHeight: 1.65 }}>
            Drop me a message on LinkedIn or send an email directly.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn ↗
            </a>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
