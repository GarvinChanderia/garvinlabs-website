import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools and breakdowns for D2C operators: practical resources from the automations built at GarvinLabs.",
};

const RESOURCES = [
  {
    slug: "report",
    tag: "PDF · Support Operations",
    title: "AI Support Business Case",
    description:
      "A pre-built business case and ROI breakdown for AI support triage, written for D2C founders to share with leadership. No drip sequence, no pitch calls, just the document.",
    href: "/report",
    cta: "Get it free →",
  },
];

export default function Resources() {
  return (
    <main>
      <Navbar />
      <div className="container section" style={{ maxWidth: 800 }}>
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title">Free tools and breakdowns for D2C operators.</h1>
        <p className="writing-intro">
          Practical resources pulled from the automations built and shipped here.
          Free to use, no strings attached.
        </p>
        <div className="post-list">
          {RESOURCES.map((r) => (
            <Link key={r.slug} href={r.href} className="post-list-card">
              <p className="post-tag">{r.tag}</p>
              <h2 className="post-list-title">{r.title}</h2>
              <p className="post-list-desc">{r.description}</p>
              <span className="post-list-cta">{r.cta}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
