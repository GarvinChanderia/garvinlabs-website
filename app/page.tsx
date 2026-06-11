import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";
import { Footer } from "@/components/Footer";

const BUILDS_INDEX = [
  {
    tag: "AI · Support · n8n",
    name: "ThreadWave: AI Support Triage",
    problem: "200+ tickets a day, all needing manual sorting before anyone can act on them.",
    href: "/demos#threadwave",
  },
  {
    tag: "AI · Storefront · n8n",
    name: "Storefront Support Chatbot",
    problem: "Sizing, returns, and shipping questions go unanswered outside business hours.",
    href: "/demos#storefront-chatbot",
  },
  {
    tag: "AI · Instagram · n8n",
    name: "Instagram DM Concierge",
    problem: "DMs and story replies pile up faster than anyone can reply to them.",
    href: "/demos#instagram-dm",
  },
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
      "description": "An agentic AI system that categorizes, prioritizes, and drafts responses for inbound customer support emails."
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
            <p className="hero-eyebrow-dark" style={{ color: "rgba(255,255,255,0.85)" }}>GarvinLabs · n8n + AI Automation</p>
            <h1 className="hero-premium-title" style={{ color: "#ffffff" }}>
              I find the manual work,<br />
              <span className="hero-name-accent">then automate it.</span>
            </h1>
            <p className="hero-premium-sub" style={{ color: "rgba(255,255,255,0.9)" }}>
              D2C founders end up babysitting the same operational work every day, support tickets, storefront questions, DMs, order updates. I build n8n + AI systems that take that work off your plate. Support triage is one example below.
            </p>

            <div className="hero-kpis" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1.5rem", marginBottom: "2.5rem" }}>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>60-70%</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>of a support team's day spent sorting tickets, one of many manual ops patterns.</p>
               </div>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>$40K+</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>annual cost of a manual support-sorting layer alone.</p>
               </div>
               <div>
                 <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ffffff", marginBottom: "0.25rem" }}>61%</p>
                 <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", maxWidth: "150px", lineHeight: "1.4" }}>auto-resolution rate the support build hit within 30 days.</p>
               </div>
            </div>
            <Link href="/demos" className="btn-primary btn-large hero-premium-cta">
              See the builds →
            </Link>
          </div>

        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="section-white" aria-label="Projects">
        <div className="container section" style={{ maxWidth: "1000px" }}>
          <p className="section-eyebrow">The Builds</p>
          <h2 className="section-title">n8n + AI systems, shipped.</h2>
          <p className="lead" style={{ marginTop: "1rem", maxWidth: "640px" }}>
            A few of the operational automations live so far. Each one started as a
            manual process someone was doing by hand every day.
          </p>

          <div className="demos-grid" style={{ marginTop: "2.5rem" }}>
            {BUILDS_INDEX.map((b) => (
              <Link key={b.name} href={b.href} className="demo-card">
                <div className="demo-card-tag">{b.tag}</div>
                <h3 className="demo-card-headline">{b.name}</h3>
                <p className="demo-card-summary">{b.problem}</p>
                <div className="demo-card-footer">
                  <span className="demo-link">
                    View build
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE LAB / PHILOSOPHY ──────────────────────────────── */}
      <section id="philosophy" className="section-white" aria-label="Philosophy" style={{ backgroundColor: "#fafafa" }}>
        <div className="container section">
          <p className="section-eyebrow">The Lab</p>
          <h2 className="section-title">Automating the mundane.</h2>
          <div style={{ maxWidth: "800px" }}>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              n8n is the connective tissue: it sits between your existing tools (inbox, storefront,
              WhatsApp, Instagram, sheets) and an AI layer that reads, decides, and acts. The pattern
              repeats across functions, what changes is which manual process gets automated first.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
              Every build above is a working system, not a mockup, built on a real operational pain
              and tested against real-world inputs.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="section-white" aria-label="Frequently Asked Questions">
        <div className="container section" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">FAQ</p>
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

      <Footer />
    </main>
  );
}
