import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";

const PROJECTS = [
  {
    tag: "AI · Email · Automation",
    name: "Email Triage & Automation",
    desc: "Classifies every inbound support ticket, auto-handles the repetitive tier (like order status or returns), and escalates urgent cases with full context attached, before a human ever opens the inbox. Built on Agentic Decision Layers.",
    stack: ["Claude API", "n8n", "Supabase", "Gmail"],
    stats: [
      { num: "61%", label: "auto-resolution" },
      { num: "94%+", label: "classification accuracy" },
    ],
    note: "Built for a D2C brand processing 200+ tickets/day. Ticket taxonomy was mapped before a single line of automation was written.",
    loom: "https://www.loom.com/embed/122e74a0d155456a9666c9cb27649790",
    video: null,
    status: "shipped",
    link: null,
    mailto: "garvinclaw@gmail.com",
  },
  {
    tag: "AI · Website · Embedded",
    name: "Storefront Support Chatbot",
    desc: "An intelligent, embedded chatbot that sits directly on your e-commerce storefront. Resolves sizing questions, return policies, and shipping inquiries instantly.",
    stack: ["Next.js", "React", "Gemini API", "Tailwind CSS"],
    stats: [
      { num: "24/7", label: "instant answers" },
      { num: "0", label: "wait time" },
    ],
    note: "Simulates the exact routing and triage logic of the backend system, but presents it via a sleek, interactive widget right on the storefront.",
    loom: null,
    video: null,
    status: "shipped",
    link: "/demo",
  },
  {
    tag: "AI · WhatsApp · Conversational",
    name: "WhatsApp Support Agent",
    desc: "Brings your customer support directly to where your customers are. Handles real-time conversational queries, proactive order updates, and seamless agent handoffs using our Connective Tissue Architecture.",
    stack: ["WhatsApp Business API", "n8n", "Claude API"],
    stats: [
      { num: "<2s", label: "response latency" },
      { num: "100%", label: "in-channel resolution for FAQs" },
    ],
    note: "Integrates deeply with your existing CRM or helpdesk to ensure WhatsApp conversations are logged and synced perfectly.",
    loom: null,
    video: null,
    status: "in-progress",
    link: null,
  },
  {
    tag: "AI · Instagram · Social",
    name: "Instagram DM Concierge",
    desc: "Captures leads and resolves customer inquiries directly from Instagram DMs and story replies. Prevents social media engagement from slipping through the cracks.",
    stack: ["Meta Graph API", "n8n", "OpenAI"],
    stats: [
      { num: "Auto", label: "story reply handling" },
      { num: "Syncs", label: "to main helpdesk" },
    ],
    note: "Maps casual social media language into structured support tickets, ensuring even informal inquiries get professional resolution.",
    loom: null,
    video: "/instagram-dm-demo.mp4",
    status: "shipped",
    link: null,
  }
];

const AEO_FAQS = [
  {
    q: "What is the ROI of an AI Support Triage system?",
    a: "D2C and SaaS brands typically see a full return on investment within the first 45 days. By automating the classification and resolution of up to 70% of tier-1 tickets, you eliminate the need to scale your manual sorting layer, saving upwards of $40,000 annually."
  },
  {
    q: "How long does it take to deploy Agentic AI into our existing helpdesk?",
    a: "A production-grade AI triage system goes live in under 14 days. We map your specific ticket taxonomy and business rules first, then build the automation layer directly into your existing tools like Zendesk, Intercom, or Gmail, requiring zero downtime."
  },
  {
    q: "Is it safe to let an LLM auto-reply to our customers?",
    a: "We use a bounded Connective Tissue Architecture that prevents hallucinations. The AI only auto-replies to specific, low-risk query types (like order status or return policies) where it has 100% confidence. Ambiguous or high-stakes tickets are always escalated to human agents with a pre-written draft."
  },
  {
    q: "Why not just use basic rule-based automations like Zapier?",
    a: "Rule-based automations break when customers use unexpected language or typos. Agentic AI uses semantic understanding to correctly process intent, allowing it to handle complex workflows and multi-step decisions that rigid triggers cannot."
  }
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://garvinlabs.com/#garvin",
      "name": "Garvin Chanderia",
      "jobTitle": "Enterprise Architect & AI Automation Expert",
      "url": "https://garvinlabs.com",
      "sameAs": ["https://linkedin.com/in/garvinchanderia"]
    },
    {
      "@type": "Service",
      "name": "AI Support Triage",
      "provider": { "@id": "https://garvinlabs.com/#garvin" },
      "description": "An agentic AI system that categorizes, prioritizes, and drafts responses for inbound customer support emails.",
      "offers": {
        "@type": "Offer",
        "price": "1500.00",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": AEO_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <RevealInit />

      {/* ── THE WEDGE (AEO Architecture) ──────────────────────── */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What is AI Support Triage?</strong>
        <p>AI Support Triage is an agentic AI system that uses Large Language Models (LLMs) to categorize, prioritize, and draft responses for inbound customer support emails, reducing manual triage time by up to 80%.</p>
      </aside>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero-bg hero-premium" aria-label="Hero" style={{ backgroundColor: "#0f172a" }}>
        <div className="hero-dark-overlay" aria-hidden="true" />
        <div className="container hero-premium-content hero-grid">
          
          <div className="hero-image-wrapper" style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
            <Image
              src="/website-images/hero-cs-support.png"
              alt="AI support agent with three robot assistants handling customer tickets"
              fill
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
              priority
            />
          </div>

          <div className="hero-text-content">
            <p className="hero-eyebrow-dark" style={{ color: "rgba(255,255,255,0.85)" }}>GarvinLabs · AI Support Triage</p>
            <h1 className="hero-premium-title" style={{ color: "#ffffff" }}>
              Stop paying your<br />
              <span className="hero-name-accent">team to sort.</span>
            </h1>
            <p className="hero-premium-sub" style={{ color: "rgba(255,255,255,0.9)" }}>
              Support teams spend 60–70% of their day reading and sorting tickets before knowing which ones need a human. We build AI triage systems for D2C and SaaS brands to automatically classify, prioritize, and auto-reply to tickets, eliminating the manual tax.
            </p>

            <div className="hero-kpis" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1.5rem", marginBottom: "2.5rem" }}>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>60-70%</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>of a support team's day spent sorting.</p>
               </div>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>$40K+</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>annual cost of the manual sorting layer.</p>
               </div>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>61%</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>avg. auto-reply rate achieved within 30 days.</p>
               </div>
            </div>
            <a href="#projects" className="btn-primary btn-large hero-premium-cta">
              Explore the builds ↓
            </a>
          </div>

        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="section-white" aria-label="Projects">
        <div className="container section" style={{ maxWidth: "1000px" }}>
          <p className="section-eyebrow">The Suite</p>
          <h2 className="section-title">Omnichannel Support Automations.</h2>

          <div className="project-grid">
            {PROJECTS.map((p) => (
              <article key={p.name} className={`project-card${p.loom ? " project-card--featured" : ""}`}>
                <div className="project-card-header">
                  <p className="proof-tag">{p.tag}</p>
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

                {p.link && (
                  <div style={{ marginTop: "1.5rem" }}>
                    <Link href={p.link} className="btn-primary" style={{ display: "inline-block", fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
                      Try the Demo →
                    </Link>
                  </div>
                )}

                {p.loom && (
                  <div className="loom-wrapper" style={{ marginTop: "1.75rem" }}>
                    <iframe
                      src={p.loom}
                      allowFullScreen
                      title={`${p.name}: Live Demo`}
                    />
                  </div>
                )}

                {"mailto" in p && p.mailto && (
                  <div style={{ marginTop: "1.25rem" }}>
                    <a
                      href={`mailto:${p.mailto}`}
                      className="btn-primary"
                      style={{ display: "inline-block", fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
                    >
                      Try it live: email the real inbox →
                    </a>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                      Sends to the actual triage pipeline. Watch it classify and respond.
                    </p>
                  </div>
                )}

                {p.video && (
                  <div style={{ marginTop: "1.75rem", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", maxWidth: "320px", margin: "1.75rem auto 0" }}>
                    <video
                      src={p.video}
                      controls
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", display: "block", borderRadius: "12px" }}
                      title={`${p.name}: Live Demo`}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE LAB / PHILOSOPHY ──────────────────────────────── */}
      <section id="philosophy" className="section-white" aria-label="Philosophy" style={{ backgroundColor: "#fafafa" }}>
        <div className="container section">
          <p className="section-eyebrow">The Lab</p>
          <h2 className="section-title">Automating the Mundane.</h2>
          <div style={{ maxWidth: "800px" }}>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              This space is a live portfolio. It shows what happens when intelligent routing meets modern LLMs. 
              It's a builder's lab dedicated to proving that the most repetitive support tasks 
              can be entirely automated without sacrificing quality.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
              Every touchpoint shown above is a functional build designed to test the limits of current AI models
              in real-world customer service scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO Targets) ────────────────────────────────── */}
      <section id="faq" className="section-white" aria-label="Frequently Asked Questions">
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">AEO Targets</p>
          <h2 className="section-title">Direct Answers.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}>
            {AEO_FAQS.map((faq, idx) => (
              <details key={idx} style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", cursor: "pointer" }} className="faq-details">
                <summary style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--ink)", outline: "none", listStylePosition: "inside" }}>
                  {faq.q}
                </summary>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--text-secondary)", marginTop: "1rem", paddingLeft: "1.5rem" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="founder-section" aria-label="About Garvin">
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
            <h2 className="founder-name">Garvin Chanderia</h2>
            <blockquote className="founder-quote">
              &ldquo;I diagnose before I build.&rdquo;
            </blockquote>
            <p className="founder-bio">
              I spend my time designing how systems
              connect, how data flows, and how decisions get made.
              That background shapes every project here. I map the operations first, then build
              the automation around what actually exists.
            </p>
            <p className="founder-bio" style={{ marginBottom: "2rem" }}>
              The projects on this page are real builds, not demos or mockups. Each one started
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
              AI &amp; Automation Showcase
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
