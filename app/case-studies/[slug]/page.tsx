import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EMAIL, MAILTO } from "@/lib/constants";
import {
  CONNECTOR_CASE_STUDIES,
  PARTNER_NAME,
  loadConnectorCaseStudy,
} from "@/lib/connectorCaseStudies";
import { CaseMarkdown } from "@/components/CaseMarkdown";

// Static case-study folders (meridian-engineering, ai-ugc-image-generation) take
// precedence over this route; it only serves the Connector case studies.
export const dynamicParams = false;

export function generateStaticParams() {
  return CONNECTOR_CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = loadConnectorCaseStudy(slug);
  if (!cs) return {};
  const url = `https://garvinlabs.com/case-studies/${cs.slug}`;
  return {
    title: `${cs.title}: GarvinLabs`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.summary,
      url,
      siteName: "GarvinLabs",
      type: "article",
      images: [{ url: "/hero-connector.png", alt: cs.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: cs.title,
      description: cs.summary,
    },
  };
}

export default async function ConnectorCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = loadConnectorCaseStudy(slug);
  if (!cs) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.summary,
    author: {
      "@type": "Organization",
      "@id": "https://garvinlabs.com/#organization",
      name: "GarvinLabs",
      url: "https://garvinlabs.com",
    },
    contributor: { "@type": "Organization", name: PARTNER_NAME },
    about: { "@type": "Organization", name: cs.client },
    publisher: { "@id": "https://garvinlabs.com/#organization" },
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://garvinlabs.com/case-studies/${cs.slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What did GarvinLabs and myoProcess deliver for {cs.client}?</strong>
        <p>{cs.summary}</p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <header className="post-header">
          <Link href="/case-studies" className="post-back">← Case studies</Link>
          <p className="post-tag">Connector · {cs.kind} · {cs.industry}</p>
          <h1 className="post-title">{cs.title}</h1>
          <p className="post-byline">
            <Link href="/about">GarvinLabs</Link>, in partnership with {PARTNER_NAME}
          </p>
        </header>

        <div className="post-body">
          <CaseMarkdown blocks={cs.blocks} />
        </div>

        <footer className="post-footer" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>To know more, contact:</p>
          <a
            href={MAILTO}
            className="btn-primary"
          >
            Email {EMAIL}
          </a>
        </footer>
      </article>
      <Footer />
    </main>
  );
}
