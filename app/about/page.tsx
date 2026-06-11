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
    <main>
      <Navbar />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="founder-section" aria-label="About Garvin">
        <div className="container section founder-grid">
          <div className="founder-image-box">
            <Image
              src="/website-images/founder-portrait.png"
              alt="Garvin Chanderia"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="founder-label">About</p>
            <h1 className="founder-name">Garvin Chanderia</h1>
            <blockquote className="founder-quote">
              &ldquo;I diagnose before I build.&rdquo;
            </blockquote>
            <p className="founder-bio">
              My background is in enterprise architecture and analytics: designing how systems
              connect, how data flows, and how decisions get made inside large organisations.
              That background shapes every build here. I map the operations first, then build
              the automation around what actually exists, not what the documentation says.
            </p>
            <p className="founder-bio" style={{ marginBottom: "2rem" }}>
              The <Link href="/demos">builds</Link> are real systems, not demos or mockups. Each
              one started with a manual process someone was doing by hand every day.
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <section className="section-white" aria-label="Experience">
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where this comes from.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "2.5rem" }}>
            {EXPERIENCE.map((job) => (
              <div key={job.role} style={{ paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)" }}>
                    {job.role} · {job.org}
                  </h3>
                  <span className="mono-tag">{job.period}</span>
                </div>
                <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {job.points.map((p) => (
                    <li key={p} style={{ fontSize: "0.975rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDS ────────────────────────────────────────────── */}
      <section className="section-white" aria-label="Builds" style={{ backgroundColor: "#fafafa" }}>
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">Builds</p>
          <h2 className="section-title">What I build with.</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            n8n is the connective tissue between a brand&apos;s tools and an AI layer that reads,
            decides, and acts. <Link href="/demos">See the live builds</Link>, including
            ThreadWave, the AI support triage system that hit 61% auto-resolution in 30 days.
          </p>
          <p style={{ fontSize: "0.975rem", lineHeight: "1.7", color: "var(--text-secondary)", marginTop: "1.5rem" }}>
            On the personal side, I built an n8n MCP Server: a connector that lets the Claude API
            call n8n&apos;s REST API directly through 10 custom tools, so an AI agent can build,
            inspect, and run workflows. It&apos;s a personal R&amp;D project exploring how far an
            AI agent can go in managing its own automation layer.
          </p>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section className="section-white" aria-label="Skills">
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Toolkit.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2.5rem" }}>
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem" }}>
                  {s.group}
                </h3>
                <div className="project-stack" style={{ marginTop: 0 }}>
                  {s.items.map((item) => (
                    <span key={item} className="stack-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTIFICATIONS ───────────────────────────── */}
      <section className="section-white" aria-label="Education and Certifications" style={{ backgroundColor: "#fafafa" }}>
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">Education &amp; Certifications</p>
          <h2 className="section-title">Background.</h2>

          <div style={{ marginTop: "2.5rem" }}>
            <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem" }}>
              B.Tech, Computer Engineering (AI/ML Specialisation)
            </h3>
            <p className="mono-tag">MIT ADT University · 2020 – 2024</p>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem" }}>
              Certifications
            </h3>
            <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {CERTIFICATIONS.map((c) => (
                <li key={c} style={{ fontSize: "0.975rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-white" aria-label="Get in touch">
        <div className="container section" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className="section-title">Want to talk through something similar?</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
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
