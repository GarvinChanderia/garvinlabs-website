import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";

const PROJECTS = [
  {
    tag: "AI · Customer Support · Automation",
    name: "AI Customer Support Triage",
    desc: "Classifies every inbound support ticket, auto-handles the repetitive tier, and escalates urgent cases with full context attached — before a human opens the inbox.",
    stack: ["Claude API", "n8n", "Supabase", "Gmail"],
    stats: [
      { num: "61%", label: "auto-resolution" },
      { num: "94%+", label: "classification accuracy" },
    ],
    note: "Built for a D2C brand processing 200+ tickets/day. Ticket taxonomy was mapped before a single line of automation was written — that sequencing is what made the number real.",
    loom: "https://www.loom.com/embed/122e74a0d155456a9666c9cb27649790",
    status: "shipped",
  },
  {
    tag: "AI · Lead Generation · Automation",
    name: "Lead Scraper",
    desc: "Scrapes targeted company and contact data from LinkedIn and public sources, scores each lead against a custom ICP, and outputs a ranked list ready to act on — no manual research required.",
    stack: ["Python", "Playwright", "Claude API", "n8n"],
    stats: [
      { num: "500+", label: "leads processed/run" },
      { num: "<5 min", label: "full pipeline" },
    ],
    note: "Built for my own sales pipeline. Replaces hours of manual research per week. The scoring model is calibrated to intent signals, not just job title — that's what makes the shortlist actually usable.",
    loom: null,
    status: "shipped",
  },
  {
    tag: "AI · Healthcare · Revenue Operations",
    name: "Dental Revenue Operations",
    desc: "Automates the revenue operations layer of a dental practice — overdue recall outreach, appointment follow-ups, and payment nudges — without touching the existing practice management software.",
    stack: ["n8n", "Claude API", "Twilio", "Supabase"],
    stats: [
      { num: "38%", label: "recall reactivation" },
      { num: "0", label: "workflow changes for staff" },
    ],
    note: "The hard constraint was zero disruption to existing clinical workflows. The automation runs entirely outside the PMS — triggered by scheduled exports, not API access. Staff never changed a single habit.",
    loom: null,
    status: "shipped",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <RevealInit />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-bg hero-premium" aria-label="Hero">
        <Image
          src="/website-images/hero-aurora.png"
          alt=""
          fill
          className="hero-bg-image"
          style={{ objectFit: "cover" }}
          priority
          aria-hidden="true"
        />
        <div className="hero-dark-overlay" aria-hidden="true" />
        <div className="container hero-premium-content">
          <p className="hero-eyebrow-dark">Enterprise Architecture · AI &amp; Automation</p>
          <h1 className="hero-premium-title">
            Garvin<br />
            <span className="hero-name-accent">Chanderia</span>
          </h1>
          <p className="hero-premium-sub">
            I map how operations actually run — then build AI systems that slot into that reality.
            Every project here started with a diagnosis, not a tool.
          </p>
          <a href="#projects" className="btn-primary btn-large hero-premium-cta">
            See the work ↓
          </a>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="section-white" aria-label="Projects">
        <div className="container section" style={{ maxWidth: "1000px" }}>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">What I&apos;ve shipped.</h2>

          <div className="project-grid">
            {PROJECTS.map((p) => (
              <article key={p.name} className={`project-card reveal${p.loom ? " project-card--featured" : ""}`}>
                <div className="project-card-header">
                  <p className="proof-tag">{p.tag}</p>
                  <div className="project-status-badge" data-status={p.status}>
                    {p.status === "shipped" ? "Shipped" : "In progress"}
                  </div>
                </div>

                <h3 className="proof-name">{p.name}</h3>
                <p className="proof-desc">{p.desc}</p>

                {p.stats.length > 0 && (
                  <div className="proof-stats">
                    {p.stats.map((s) => (
                      <div key={s.label} className="stat-chip">
                        <span className="stat-num">{s.num}</span>
                        <span className="stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="stack-tag">{t}</span>
                  ))}
                </div>

                {p.note && <p className="proof-method">{p.note}</p>}

                {p.loom && (
                  <div className="loom-wrapper" style={{ marginTop: "1.75rem" }}>
                    <iframe
                      src={p.loom}
                      allowFullScreen
                      title={`${p.name} — Live Demo`}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="founder-section" aria-label="About Garvin">
        <div className="container section founder-grid reveal">
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
            <h2 className="founder-name">Garvin Chanderia</h2>
            <blockquote className="founder-quote">
              &ldquo;I diagnose before I build.&rdquo;
            </blockquote>
            <p className="founder-bio">
              Enterprise Architecture Consultant by day. I&apos;ve spent years designing how systems
              connect, how data flows, and how decisions get made across large, complex organisations.
              That background shapes every project here — map the operations first, then build the
              automation around what&apos;s actually there.
            </p>
            <p className="founder-bio" style={{ marginBottom: "2rem" }}>
              The projects on this page are real builds — not demos, not mockups. Each one started
              with a problem I either faced myself or saw clearly enough to take on.
            </p>
            <a
              href="https://linkedin.com/in/garvinchanderia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="footer" aria-label="Footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo-group mb-1">
              <Image src="/logo-icon.svg" alt="GarvinLabs" width={24} height={24} />
              <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--ink)" }}>
                GarvinLabs
              </span>
            </div>
            <p className="footer-tagline">
              Enterprise Architecture · AI &amp; Automation
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links-list">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://linkedin.com/in/garvinchanderia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Garvin Chanderia.</p>
          <nav className="legal-links" aria-label="Legal">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
