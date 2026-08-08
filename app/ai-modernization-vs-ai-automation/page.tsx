import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

const TITLE = "AI modernization vs AI automation: what's actually different";
const DESCRIPTION =
  "Automation does the same process faster. Modernization asks whether it's the right process at all. Conflating them is why some AI projects speed up a broken workflow instead of fixing it.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-modernization-vs-ai-automation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/ai-modernization-vs-ai-automation",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/ai-modernization-vs-ai-automation/cover.svg",
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
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/ai-modernization-vs-ai-automation",
  },
  image: "https://garvinlabs.com/ai-modernization-vs-ai-automation/cover.svg",
};

export default function AiModernizationVsAutomation() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick answer" style={{ display: "none" }}>
        <strong>What&apos;s the difference between AI modernization and AI automation?</strong>
        <p>
          AI automation takes an existing process and makes it faster, often by having a model or
          script do a step a person used to do manually. AI modernization questions the process
          itself first, mapping how work actually happens and finding root causes, before deciding
          whether automation is even the right fix. Automating a broken process just fails faster;
          modernizing it fixes the cause and then decides what, if anything, should be automated.
        </p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <figure className="post-figure" style={{ marginTop: "2rem" }}>
          <Image
            src="/ai-modernization-vs-ai-automation/cover.svg"
            alt="A gear labeled automation on the left, a magnifying glass over a mapped process labeled modernization on the right"
            width={1730}
            height={909}
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <Link href="/" className="post-back">← Home</Link>
          <p className="post-tag">AI Modernization · Comparison</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            Automation does the same process faster. Modernization asks whether
            it&apos;s the right process at all.
          </p>
        </header>

        <div className="post-body">
          <h2>Automation: doing the same process faster</h2>
          <p>
            Most &quot;add AI&quot; projects are automation projects wearing a bigger label. A form
            gets auto-filled. A reply gets auto-drafted. A report that took an hour now takes five
            minutes. All genuinely useful, and all of it assumes the underlying process was correct to
            begin with.
          </p>

          <h2>Modernization: questioning whether it&apos;s the right process at all</h2>
          <p>
            Modernization starts one step earlier: is this the process that should exist, or is it
            just the process that exists because nobody&apos;s re-examined it. That means mapping how
            the work actually happens, not how the documentation says it happens, finding where time
            is really going, and only then deciding what to automate, or restructure, or drop
            entirely.
          </p>

          <h2>Why the distinction matters</h2>
          <p>
            Automating a broken process doesn&apos;t fix it. It just runs the same mistake faster and
            with more confidence, because now a system is doing it instead of a person who might have
            noticed something was off. The failure gets harder to see, not easier.
          </p>

          <h2>A worked example</h2>
          <p>
            A manufacturer&apos;s order cycle ran 55 to 70 days against an ideal of 25 to 28. The
            instinct would&apos;ve been to automate the slowest-looking step. Mapping the full process
            first found the actual causes: no real-time job tracking, no documentation at the point of
            work, no minimum-stock enforcement. None of those get fixed by a faster tool. They get
            fixed by changing how the work happens, and only after that change is in place does
            automation add anything: four specific automations, each scoped to 2 to 6 hours of build
            time once the process discipline existed to feed them real data. Full write-up: the{" "}
            <Link href="/ai-modernization-for-manufacturing">manufacturing diagnostic</Link>.
          </p>

          <h2>How to tell which one you need</h2>
          <p>
            If the process is already correct and just slow or repetitive, that&apos;s an automation
            problem: find the manual step, build a system around it. If nobody can say with confidence
            where the time is actually going, or the same complaint keeps resurfacing despite fixes,
            that&apos;s a modernization problem: map the process before touching a tool.
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
