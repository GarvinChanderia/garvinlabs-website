import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

const TITLE = "What an AI readiness audit actually finds";
const DESCRIPTION =
  "An AI readiness audit is a process diagnostic, not a tool recommendation. Map every step, name an owner, measure ideal against actual, then sequence the fixes before touching any automation.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-readiness-audit" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/ai-readiness-audit",
    siteName: "GarvinLabs",
    type: "website",
    images: [
      {
        url: "/ai-readiness-audit/cover.svg",
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
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "https://garvinlabs.com/ai-readiness-audit",
  author: { "@id": "https://garvinlabs.com/#garvin" },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
};

export default function AiReadinessAudit() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What is an AI readiness audit?</strong>
        <p>
          An AI readiness audit is a diagnostic of how a business&apos;s operations actually run, done
          before recommending any automation or AI tooling. It maps every step of a process, assigns
          an owner to each one, measures ideal duration against actual, and traces gaps to root
          causes. The output is a sequenced roadmap, with AI opportunities scoped separately and only
          after the underlying process issues are named. One example found a manufacturer&apos;s order
          cycle running 55 to 70 days against an ideal of 25 to 28, traced to three specific root
          causes.
        </p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <figure className="post-figure" style={{ marginTop: "2rem" }}>
          <Image
            src="/ai-readiness-audit/cover.svg"
            alt="A clipboard checklist with a magnifying glass, representing a process diagnostic before any tooling recommendation"
            width={1730}
            height={909}
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <Link href="/" className="post-back">← Home</Link>
          <p className="post-tag">AI Modernization · Readiness Audit</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            A process diagnostic, not a tool recommendation. Map every step, name an
            owner, measure ideal against actual, then sequence the fixes.
          </p>
        </header>

        <div className="post-body">
          <h2>What the audit actually is</h2>
          <p>
            Most things sold as an &quot;AI audit&quot; or &quot;readiness assessment&quot; are a
            checklist: does the business use cloud storage, does it have clean data, does someone on
            the team know Python. That&apos;s a maturity survey, not a diagnostic. The version
            described here is different: it maps how the business&apos;s actual operations run, step
            by step, and finds where time and money are genuinely leaking, before any tool gets
            recommended.
          </p>

          <h2>How it runs</h2>
          <ul>
            <li>Walk and document every step of the process in question, from trigger to resolution, based on what actually happens, not what a process document claims</li>
            <li>Build the org chart and a responsibility matrix so every step has a named owner</li>
            <li>Spend real hours in direct interviews with the people doing the work, to get every operational complaint on record instead of guessed at</li>
            <li>Measure ideal duration against actual duration per step, from real records, not estimates</li>
          </ul>
          <p>
            That sequence is what separates a diagnosis from a status report. &quot;Things feel
            slow&quot; turns into a ranked list of specific, fixable causes, the kind a business can
            actually act on.
          </p>

          <h2>What comes out of it</h2>
          <p>
            A sequenced roadmap: which fixes matter most, in what order, and why. Business-process
            recommendations are kept separate from AI recommendations, since not every fix needs
            automation, some just need a tracking sheet or an ownership change. AI opportunities get
            scoped last, once the underlying process is understood well enough to know where
            automation would actually help versus where it would just encode a broken process faster.
          </p>

          <h2>A worked example</h2>
          <p>
            A structural steel manufacturer&apos;s order cycle ran 55 to 70 days against an ideal of
            25 to 28. Mapping all 26 steps across two plants traced the gap to three causes, none of
            them about the workers or the equipment: no real-time job tracking, no documentation at
            point of work, no minimum-stock enforcement. Fixing the top two was estimated to recover
            12 to 25 days from the cycle, on paper, before any automation was scoped. Full write-up:
            the <Link href="/case-studies/meridian-engineering">Meridian Engineering case study</Link>.
          </p>

          <h2>What this isn&apos;t</h2>
          <p>
            Not a sales pitch wearing a diagnostic&apos;s name. Not a fixed checklist applied the same
            way to every business. The output is scoped entirely to what the mapping actually finds. A
            process map with a prioritized plan is a real deliverable in its own right, complete
            whether or not anything gets built after it.
          </p>
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
