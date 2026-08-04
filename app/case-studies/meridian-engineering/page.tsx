import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

const TITLE = "Manufacturing AI fit analysis";
const DESCRIPTION =
  "A manufacturer's order cycle ran 55 to 70 days against an ideal of 25 to 28. I mapped 26 processes across two plants, diagnosed three root causes, and proposed a sequenced fix, business recommendations separated from where AI actually fits.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies/meridian-engineering" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/case-studies/meridian-engineering",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/case-studies/meridian-engineering/cover.png",
        width: 1730,
        height: 909,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    name: "Garvin Chanderia",
    url: "https://garvinlabs.com",
  },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/case-studies/meridian-engineering",
  },
  image: "https://garvinlabs.com/case-studies/meridian-engineering/cover.png",
};

export default function CaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What did the Meridian Engineering AI fit diagnostic find?</strong>
        <p>
          A structural steel manufacturer&apos;s order cycle ran 55 to 70 days against an ideal of
          25 to 28. Mapping all 26 steps of the order-to-cash cycle across two plants traced the
          gap to three causes: no real-time job tracking, no documentation at point of work, and no
          minimum-stock enforcement, none of them about the workers or the equipment. Fixing the
          top two, on paper, recovers an estimated 12 to 25 days from the cycle. Four AI automations
          were scoped as a follow-on, each 2 to 6 hours of build time, but only after the manual
          process discipline was in place to feed them real data.
        </p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <figure className="post-figure" style={{ marginTop: "2rem" }}>
          <Image
            src="/case-studies/meridian-engineering/cover.png"
            alt={TITLE}
            width={1730}
            height={909}
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <Link href="/case-studies" className="post-back">← Case studies</Link>
          <p className="post-tag">AI Modernization · Process Diagnostic · Case Study</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            A structural steel manufacturer&#39;s order cycle ran 55 to 70 days against
            an ideal of 25 to 28. I mapped the business, found where the time was
            actually going, and proposed a sequenced fix.
          </p>
        </header>

        <div className="post-body">
          <p>
            Most modernization conversations start with the tool: which AI copilot,
            which automation platform, which ERP module. That skips the step that
            determines whether any of it works: knowing, in verifiable detail, how the
            work happens right now. Skip it, and you&#39;re not modernizing a process.
            You&#39;re automating a guess, faster.
          </p>
          <p>
            The industry in this case study is manufacturing. The method isn&#39;t
            industry-specific: map the real process, name an owner for every step,
            measure ideal against actual, sequence the fixes by impact before touching a
            tool. That&#39;s what I run on every engagement, D2C or otherwise, and this
            is what it looked like on one of them.
          </p>

          <div className="case-alert-note">
            <span className="case-alert-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </span>
            <p>
              Client and location names below are anonymized (&quot;Meridian
              Engineering&quot;, &quot;Plant A&quot;, &quot;Plant B&quot;). Every
              process, number, and finding is real.
            </p>
          </div>

          <h2>The situation</h2>
          <ul>
            <li>Structural steel fabrication, two plants, recurring B2B customer base built over years</li>
            <li>Director&#39;s complaint: orders taking longer than they should, and a few long-standing customers had started sending their own QC inspectors instead of trusting the internal sign-off</li>
            <li>Nobody in the business could say <em>where</em>, specifically, the time was going</li>
          </ul>

          <blockquote>
            <p>What they asked for: help figuring out why orders were slow.</p>
            <p>What I delivered: a diagnosis of the business, a root cause for the delay, a sequenced roadmap, and a separate set of AI opportunities scoped and ready to build.</p>
          </blockquote>

          <h2>How I approached it</h2>
          <ul>
            <li>Walked and documented all 26 steps of the order-to-cash cycle, from first RFP to final payment, based on what actually happens on the floor</li>
            <li>Built the org chart and a responsibility matrix so every step had a named owner</li>
            <li>Spent 48 hours in direct interviews with the Director and management to get every operational complaint on record, not guessed at</li>
            <li>Measured ideal vs. actual duration per process, from real job records</li>
          </ul>
          <p>
            That&#39;s diagnosis, not documentation. It&#39;s what let me trace 30 to 40
            lost days to three specific, fixable causes instead of guessing, and it&#39;s
            the same sequence I run whether the business underneath runs an ERP, a
            spreadsheet, or a whiteboard: understand first, prescribe second.
          </p>

          <h2>What I found</h2>
          <p>The gap between ideal and actual cycle time traced back to three failures, none of them about the workers or the equipment:</p>
          <ul>
            <li><strong>No real-time job tracking</strong>: a job falling behind stayed invisible until it was already late</li>
            <li><strong>No documentation at point of work</strong>: paperwork got filled in retroactively at dispatch, holding up shipments that were physically ready to go</li>
            <li><strong>No minimum-stock enforcement</strong>: every job started with a real chance of an emergency material run before a single cut was made</li>
          </ul>

          <figure className="post-figure">
            <Image
              src="/case-studies/meridian-engineering/failure-chain.svg"
              alt="Diagram: no real-time tracking, no documentation at point of work, and no min-max stock enforcement each feed into rushed, unrecorded work under pressure, which leads customers to send their own QC inspectors and some orders to be held or diverted to competitors."
              width={920}
              height={420}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <p>
            It was invisible slack compounding into a visible, expensive symptom three
            steps removed from its real cause, cosmetic rather than structural or a
            safety issue, which is why nobody inside the business had been able to name it.
          </p>

          <h2>The numbers</h2>
          <div className="case-stats">
            <div className="case-stat">
              <div className="case-stat-value">55–70 days</div>
              <div className="case-stat-label">actual order cycle, vs. an ideal of 25–28</div>
            </div>
            <div className="case-stat">
              <div className="case-stat-value">+9–10 days</div>
              <div className="case-stat-label">lost before production even starts, on material shortage alone</div>
            </div>
            <div className="case-stat">
              <div className="case-stat-value">+2–15 days</div>
              <div className="case-stat-label">lost at dispatch, waiting on documentation that should&#39;ve been done already</div>
            </div>
          </div>

          <figure className="post-figure">
            <Image
              src="/case-studies/meridian-engineering/cycle-time.svg"
              alt="Bar chart: actual order cycle measured at 55 to 70 days, against an ideal target range of 25 to 28 days."
              width={640}
              height={260}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <figure className="post-figure">
            <Image
              src="/case-studies/meridian-engineering/days-lost.svg"
              alt="Bar chart: days lost over ideal by process step. Material availability 9 to 10 days, dispatch and documentation 2 to 15 days, finishing 2 to 3 days."
              width={640}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <p>
            Fixing just the top two, on paper, recovers an estimated 12 to 25 days from
            the cycle. Not every finding deserves the same urgency, and naming which
            ones do is the point of running the diagnostic at all.
          </p>

          <h2>What I recommended</h2>
          <ol>
            <li>Daily job tracking matrix and an outsource follow-up log first, visibility with no new tools required</li>
            <li>Documentation gates, plus standard email templates for customer communication</li>
            <li>Minimum-stock enforcement and a finishing-capacity review</li>
            <li>A span-of-control restructure last, since one plant head was carrying roughly 45 direct reports and no tracking system survives that</li>
          </ol>

          <h2>AI solutions</h2>
          <p>Build the manual process first. The data comes from discipline, not from technology. Once that discipline is in place to feed them real data, four automations are scoped and ready to build, each 2 to 6 hours of build time on tools the business already had:</p>
          <ul>
            <li>Live job-status dashboard</li>
            <li>Payment-clock tracker with automatic escalation</li>
            <li>Material reorder alert</li>
            <li>Templated email automation for customer communication</li>
          </ul>

          <h2>What this doesn&#39;t claim</h2>
          <p>
            This covers the diagnostic and the roadmap it produced, not what happened
            after. A process map and a prioritized plan are a real deliverable on their
            own, and I&#39;d rather say exactly that than stretch it into a bigger claim.
          </p>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="/case-studies/meridian-engineering/summary.pdf"
              className="btn-secondary"
              download
            >
              Download the presentation (PDF) ↓
            </a>
          </div>
        </div>

        <footer className="post-footer" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>To know more, contact:</p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn ↗
          </a>
        </footer>
      </article>
      <Footer />
    </main>
  );
}
