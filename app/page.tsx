import Image from "next/image";
import Navbar from "@/components/Navbar";
import FAQAccordion from "@/components/FAQAccordion";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <main>
      <Navbar />
      <RevealInit />

      {/* ── S1: HERO ─────────────────────────────────────────── */}
      <section className="hero-bg" aria-label="Hero">
        <Image
          src="/website-images/hero-aurora.png"
          alt=""
          fill
          className="hero-bg-image"
          style={{ objectFit: "cover" }}
          priority
          aria-hidden="true"
        />
        <div className="glass-card">
          <h1>200 daily tickets. 60% auto-resolved. No new hires.</h1>
          <p className="hero-sub">
            Your support inbox, running automatically. Every ticket read and sorted before your team
            opens their inbox. Urgent issues on your phone within 2 minutes. 60% of replies sent
            without a human. Your team stops sorting and starts actually resolving.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary btn-large">
              Watch the 5-Min Demo
            </a>
            <a
              href="https://calendly.com/labs-garvin/30min"
              className="btn-secondary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free 20-Min Call →
            </a>
          </div>
          <p className="hero-trust">Built for D2C brands processing 100+ support emails a day.</p>
        </div>
      </section>

      {/* ── S2: PROBLEM ──────────────────────────────────────── */}
      <section id="problem" className="problem-section" aria-label="The problem">
        <div className="container section">
          <h2 className="section-title text-center mb-3">
            Here&apos;s what your support inbox actually looks like.
          </h2>

          <div className="problem-grid reveal">
            <article className="problem-card">
              <div className="problem-number">01 — Volume</div>
              <h3>The math doesn&apos;t work.</h3>
              <p>
                A $5M D2C brand averages 150–300 support emails a day. 60% are &ldquo;where is my
                order,&rdquo; returns, and sizing questions your FAQ already answers. Your team reads
                every single one before they know what to do with it.
              </p>
              <p className="problem-punch">
                That&apos;s not support. That&apos;s sorting — and you&apos;re paying $40,000 a year for it.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-number">02 — Speed</div>
              <h3>The ticket that cost you $800.</h3>
              <p>
                A billing dispute arrives Friday at 4pm. Your team leaves for the weekend. Monday
                morning, the customer has already filed a chargeback. You lose the dispute, the $800,
                plus fees.
              </p>
              <p className="problem-punch">
                Speed isn&apos;t a nice-to-have. It&apos;s how D2C brands protect margin.
              </p>
            </article>

            <article className="problem-card">
              <div className="problem-number">03 — Cost</div>
              <h3>The hidden cost of manual sorting.</h3>
              <p>
                A support coordinator costs $3,000–$5,000/month in the US. And 60–70% of their day
                is reading and sorting — not responding thoughtfully. Just sorting.
              </p>
              <p className="problem-punch">
                One month of a coordinator costs more than this entire build.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── S3: BEFORE / AFTER ───────────────────────────────── */}
      <section id="results" className="section-mist-bg section-surface" aria-label="Before and after">
        <div className="container section">
          <h2 className="section-title text-center mb-3">
            What changes when your inbox runs on AI.
          </h2>
          <div className="ba-wrapper reveal">
            <table className="ba-table">
              <thead>
                <tr>
                  <th scope="col">Before</th>
                  <th scope="col">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inbox floods every morning</td>
                  <td>Every ticket read and sorted within 2 minutes of arriving</td>
                </tr>
                <tr>
                  <td>Team reads 200 emails to find 3 urgent ones</td>
                  <td>Urgent tickets alert your phone immediately. Inbox unopened.</td>
                </tr>
                <tr>
                  <td>Billing dispute found 3 hours later</td>
                  <td>Double charges and disputes flagged the moment they arrive</td>
                </tr>
                <tr>
                  <td>Same reply drafted 30–40 times a day</td>
                  <td>60%+ of tickets answered automatically</td>
                </tr>
                <tr>
                  <td>No visibility into what&apos;s coming in</td>
                  <td>
                    Full dashboard: every ticket logged with category, urgency, summary, and
                    resolution status
                  </td>
                </tr>
                <tr>
                  <td>Considering your next support hire</td>
                  <td>Your current team handles 3× the volume, without the hire</td>
                </tr>
                <tr>
                  <td>Support is a cost centre</td>
                  <td>Support becomes your first line of retention</td>
                </tr>
              </tbody>
            </table>
            <p className="ba-callout">
              Most brands run support as a cost centre. The ones that automate the sorting layer
              start using it as a retention engine, catching problems before customers leave, not
              after.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: HOW IT WORKS ─────────────────────────────────── */}
      <section id="process" className="section-sand" aria-label="How it works">
        <div className="container section">
          <h2 className="section-title text-center mb-3">Three phases. One build. You own it.</h2>
          <div className="phase-grid reveal">
            <div className="phase-card">
              <div className="phase-number">01</div>
              <div className="phase-name">Discover</div>
              <p className="phase-body">
                We learn your business: your top ticket categories, your policies, your response
                standards. Everything the system needs to handle your inbox exactly the way you
                would.
              </p>
            </div>
            <div className="phase-card">
              <div className="phase-number">02</div>
              <div className="phase-name">Build</div>
              <p className="phase-body">
                We build and test the full system against real ticket scenarios: automatic replies,
                pre-written drafts, urgent alerts, and a live support dashboard. Everything
                calibrated to your brand before it touches a live email.
              </p>
            </div>
            <div className="phase-card">
              <div className="phase-number">03</div>
              <div className="phase-name">Deploy &amp; Hand Off</div>
              <p className="phase-body">
                The system goes live in your inbox. You get a full walkthrough, complete
                documentation, and 14 days of post-launch support. You own it entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: DEMO ─────────────────────────────────────────── */}
      <section id="demo" className="section-white" aria-label="Live demo">
        <div className="container section narrow-container">
          <h2 className="section-title text-center">
            Watch it handle a billing dispute, a shipping delay, and a return request. In real time.
          </h2>
          <p
            className="text-center muted-text"
            style={{ marginBottom: "2rem", marginTop: "0.75rem", fontSize: "1rem" }}
          >
            Built for a D2C clothing brand. Same system, built for your brand and your ticket types.
          </p>
          <div className="loom-wrapper">
            <iframe
              src="https://www.loom.com/embed/122e74a0d155456a9666c9cb27649790"
              allowFullScreen
              title="GarvinLabs AI Support Triage — Live Demo"
            />
          </div>
          <p className="proof-callout">
            Built and tested on real D2C support emails: returns, billing disputes, shipping
            complaints, and product defects. Billing disputes surfaced within 2 minutes. 60%+ of
            emails handled without human input. 94%+ accuracy. This is a production system, not a
            prototype.
          </p>
        </div>
      </section>

      {/* ── S6: WHAT YOU GET ─────────────────────────────────── */}
      <section id="offer" className="section-mist-bg section-surface" aria-label="What you get">
        <div className="container section">
          <h2 className="section-title text-center mb-3">Everything included. No surprises.</h2>
          <div className="feature-grid-2col reveal">
            <div className="feature-block">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              <h3>Every ticket handled automatically</h3>
              <p>
                Every email that hits your inbox is read, categorised, and prioritised before any
                human opens it. Billing disputes, shipping complaints, return requests, product
                defects — each one identified, assessed, and handled the right way.
              </p>
            </div>

            <div className="feature-block">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              <h3>Your policies, built in</h3>
              <p>
                Before any reply is drafted, the system checks your brand&apos;s knowledge base:
                your return policy, shipping timelines, refund rules. Replies aren&apos;t generic.
                They reflect what your business actually says.
              </p>
            </div>

            <div className="feature-block">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <h3>Nothing falls through the cracks</h3>
              <p>
                Urgent escalations alert your phone immediately. Clear-cut tickets get an automatic
                reply. Anything in the grey zone gets a pre-written draft flagged for your review,
                with context already prepared.
              </p>
            </div>

            <div className="feature-block">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              <h3>A support dashboard that builds itself</h3>
              <p>
                Every ticket logged automatically: category, urgency level, a plain-English summary,
                and what action was taken. No manual entry. One view of everything coming in and how
                it&apos;s being resolved.
              </p>
            </div>

            <div className="feature-block">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <h3>Full documentation + walkthrough</h3>
              <p>
                A runbook your team can follow, plus a recorded walkthrough of the entire system.
                You own it, you understand it, and you can hand it to anyone on your team.
              </p>
            </div>

            <div className="feature-block highlight">
              <span className="included-badge">Included</span>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.886-4.686a3 3 0 0 0-4.241 0l-2.121 2.12a3 3 0 0 0 0 4.243" />
              </svg>
              <h3>14-day post-launch support</h3>
              <p>
                Two weeks of availability after handoff to fix, adjust, or tune anything. Most
                providers charge separately for this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: HOW WE ENGAGE ────────────────────────────────── */}
      <section id="engage" className="section-white" aria-label="How we engage">
        <div className="container section">
          <div className="offer-wrapper">
            <h2 className="section-title text-center">One offer. Built around your brand.</h2>
            <p className="offer-intro">
              Imagine opening Monday morning and your inbox is already sorted. Every billing dispute
              is flagged on your phone. 60% of tickets are already answered. Your team walks in and
              has a focused list of things that actually need a human, not 200 emails to dig through.
              <br />
              <br />
              That&apos;s what this build delivers.
            </p>

            <div className="offer-card reveal">
              <div className="offer-label">The Full Build</div>
              <h3>
                Your AI support system, built to your brand&apos;s ticket types, policies, and
                response standards. Tested against real scenarios before it touches a live email. You
                own it entirely.
              </h3>
              <ul className="offer-list">
                <li>
                  <span className="offer-check">✓</span>
                  Every support email read and handled automatically. No new tools for your team to
                  learn.
                </li>
                <li>
                  <span className="offer-check">✓</span>
                  Urgent issues alerted to your phone within 2 minutes, so nothing critical slips
                  through
                </li>
                <li>
                  <span className="offer-check">✓</span>
                  60%+ of tickets resolved without human input
                </li>
                <li>
                  <span className="offer-check">✓</span>
                  Complete support dashboard, auto-populated from day one
                </li>
                <li>
                  <span className="offer-check">✓</span>
                  Full documentation so anyone on your team understands what&apos;s running and why
                </li>
              </ul>
              <p className="offer-guarantee">
                If it doesn&apos;t work the way it should after handoff, we fix it.
              </p>
              <p className="scarcity-line">Currently taking on 5 builds this month.</p>
            </div>

            <div className="retainer-card">
              <div className="retainer-label">Ongoing Retainer — Optional</div>
              <p>
                The retainer keeps GarvinLabs on standby as your brand evolves. Your system stays
                accurate as your catalogue grows, your policies change, and new ticket types emerge.
              </p>
              <ul className="retainer-list">
                <li>→ Monthly engagement, cancel any time</li>
                <li>→ No new build required. Just continuous optimisation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8a: FOUNDER ─────────────────────────────────────── */}
      <section className="founder-section" aria-label="About Garvin">
        <div className="container section founder-grid reveal">
          <div className="founder-image-box">
            <Image
              src="/website-images/founder-portrait.png"
              alt="Garvin Chanderia, AI Systems Builder"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="founder-label">Who builds this</p>
            <h2 className="founder-name">Garvin Chanderia</h2>
            <blockquote className="founder-quote">
              &ldquo;I build the connective tissue that allows your business to scale without the
              overhead of manual operations.&rdquo;
            </blockquote>
            <p className="founder-bio">
              Garvin designs and builds AI systems for growing brands: automation pipelines,
              intelligent decision layers, and production-grade workflows that handle operational
              work around the clock. He started GarvinLabs to give growing brands the infrastructure
              that removes manual work as a ceiling on growth.
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

      {/* ── S8b: CTA ─────────────────────────────────────────── */}
      <section id="contact" className="cta-section" aria-label="Book a call">
        <div className="container section">
          <h2>Your inbox doesn&apos;t have to work this way.</h2>
          <p className="cta-sub">
            No vague strategy. No mandatory retainer. Own the system outright and add ongoing
            support when it makes sense. If it doesn&apos;t work the way it should, we fix it.
          </p>
          <div className="cta-stack">
            <a
              href="https://calendly.com/labs-garvin/30min"
              className="btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free 20-Min Call
            </a>
            <a href="#demo" className="btn-secondary btn-large">
              Watch the Demo First →
            </a>
            <a href="#" className="cta-tertiary">
              Download the Free Report →
            </a>
          </div>
          <p className="cta-scarcity">
            Taking on 5 builds this month. Book your call before the spots fill.
          </p>

          <div className="pdf-card">
            <Image
              src="/website-images/pdf-report-cover.jpg"
              alt="The D2C Support Cost Report"
              width={64}
              height={80}
              className="pdf-thumb"
            />
            <div className="pdf-info">
              <p className="pdf-title">The D2C Support Cost Report</p>
              <a href="#" className="pdf-link">
                Download free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8c: FAQ ─────────────────────────────────────────── */}
      <section className="section-white" aria-label="FAQ">
        <div className="container section">
          <FAQAccordion />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
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
              Eliminating the Manual Tax through high-rigour AI architecture.
            </p>
            <div className="system-status">
              <span className="status-dot" aria-hidden="true" />
              Systems Operational
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links-list">
              <li><a href="#offer">AI Support Triage</a></li>
              <li><a href="#demo">Watch the Demo</a></li>
              <li><a href="#process">How It Works</a></li>
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
              <li>
                <a href="mailto:labs.garvin@gmail.com">labs.garvin@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://calendly.com/labs-garvin/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 GarvinLabs. Built by Garvin.</p>
          <nav className="legal-links" aria-label="Legal">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
