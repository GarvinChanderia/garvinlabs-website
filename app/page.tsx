"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RevealInit from "@/components/RevealInit";
import { Footer } from "@/components/Footer";

const CASE_STUDIES_TEASER = [
  {
    slug: "meridian-engineering",
    tag: "AI Modernization · Process Diagnostic",
    title: "Manufacturing AI fit analysis",
    description: "A manufacturer's order cycle ran 55 to 70 days against an ideal of 25 to 28. Before recommending a single tool, I mapped where those days actually went across 26 processes, two plants, and a full org chart.",
  },
  {
    slug: "ai-ugc-image-generation",
    tag: "AI Content Production · Case Study",
    title: "Fashion brand AI photography process",
    description: "A founder-led apparel brand needed campaign-ready photography without a studio shoot. I built a 7-step process, ICP through iteration, that gets AI-generated images to read as a real shoot instead of obviously synthetic.",
  },
];

const BLOG_TEASER = [
  {
    slug: "abandoned-cart-recovery",
    category: "Retention & recovery",
    title: "Abandoned cart recovery: the automation almost everyone already half has",
    description: "70.22% of online carts get abandoned. Most brands already have a recovery flow running, untouched, tuned for nobody in particular.",
  },
  {
    slug: "instant-customer-support",
    category: "Support & service",
    title: "Instant answers for the questions you've already answered a thousand times",
    description: "One founder's ticket audit found 61% of his support inbox was questions already answered in the FAQ.",
  },
  {
    slug: "low-inventory-and-expiry-alerts",
    category: "Ops & inventory",
    title: "The stockout a customer notices before you do",
    description: "Periodic inventory checks catch a stockout after it's already cost you a customer.",
  },
];

const RESOURCES_TEASER = [
  { slug: "beauty-cosmetics", kind: "Automation guide", tag: "Beauty & Cosmetics", cta: "View guide →", href: "/resources/beauty-cosmetics", image: "/website-images/pdf-beauty-cosmetics-cover.png" },
  { slug: "fashion-apparel", kind: "Automation guide", tag: "Fashion & Apparel", cta: "View guide →", href: "/resources/fashion-apparel", image: "/website-images/pdf-fashion-apparel-cover.png" },
  { slug: "food-beverage", kind: "Automation guide", tag: "Food & Beverage", cta: "View guide →", href: "/resources/food-beverage", image: "/website-images/pdf-food-beverage-cover.png" },
];

// Focused on the three builds that have a full YouTube walkthrough. Thumbnails
// use YouTube's own hqdefault image, kept at a 16:9 aspect ratio (the same
// ratio as the embed itself) so the card reads as a video, not a screenshot.
const BUILDS_INDEX = [
  {
    tag: "Support Triage",
    name: "ThreadWave: Support Triage",
    problem: "200+ tickets a day, all needing manual sorting before anyone can act on them.",
    href: "https://youtu.be/owzL30vbPco",
    youtubeId: "owzL30vbPco",
    highlight: true,
    stat: "61%",
    statLabel: "auto-resolved within 30 days",
  },
  {
    tag: "Reputation Monitoring",
    name: "Reputation Monitor",
    problem: "A legal or safety complaint buried in a review, DM, or support email can sit unread for hours before anyone catches it.",
    href: "https://youtu.be/gYs7189XEJw",
    youtubeId: "gYs7189XEJw",
    highlight: false,
    stat: "<2 min",
    statLabel: "from review to alert",
  },
  {
    tag: "On YouTube",
    name: "How to Build an AI That Writes Like You",
    problem: "Derived a voice guide from a real person's posts and transcripts, then wrote new content for a completely different brand in that exact voice.",
    href: "https://www.youtube.com/watch?v=HUp2ZIK-uZg",
    youtubeId: "HUp2ZIK-uZg",
    highlight: false,
    stat: "150K+",
    statLabel: "words analyzed",
  },
];

const AEO_FAQS = [
  {
    q: "How do you decide what to automate first?",
    a: "By mapping the manual process before touching any tooling: what triggers the work, who does it, and where the judgment calls actually happen. The build gets scoped around that, not a templated workflow. Support tickets are where this showed up first for ThreadWave, but the same method applies to ops reporting, fulfilment, or influencer tracking."
  },
  {
    q: "How long does a build like this typically take?",
    a: "ThreadWave went from mapping the ticket taxonomy to a live system in 14 days. Most of that time is discovery, understanding the process as it actually runs, not the build itself. Once the process is mapped, wiring it into the existing tools is the fast part."
  },
  {
    q: "How does a system like this avoid sending a wrong reply?",
    a: "ThreadWave only auto-replies to low-risk, well-defined query types, like order status or return policy questions, where confidence is high. Anything ambiguous or high-stakes gets escalated to a person with a draft already attached. The rule isn't automate everything, it's automate what's safe to automate and escalate the rest."
  },
  {
    q: "Why not just use basic rule-based automation like Zapier?",
    a: "Rule-based automation breaks the moment something is phrased unexpectedly: a typo, an odd word order, a two-part request. The systems here read intent instead of matching keywords, so they hold up against that kind of variation, whether it's a support ticket, a fulfilment exception, or an inventory alert."
  },
  {
    q: "Does this only apply to customer support?",
    a: "No, support is just where the first build landed, because that pain surfaced first in founder conversations. The method, map the manual process, then build the system around what actually happens, applies to any repetitive operational work: daily ops reporting, fulfilment checks, influencer or affiliate tracking, inventory alerts."
  }
];



const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AEO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  // Cursor-tracking glow on bento cards
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".bento-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const glow = card.querySelector<HTMLElement>(".glass-cursor-glow");
      if (!glow) return;

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--cursor-x", `${x}%`);
        card.style.setProperty("--cursor-y", `${y}%`);
      };

      card.addEventListener("mousemove", onMouseMove);
      handlers.push({ el: card, fn: onMouseMove });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <Navbar />
      <RevealInit />

      {/* ── AEO WEDGE ─────────────────────────────────────── */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What is Support Triage automation?</strong>
        <p>Support triage automation is a system that reads, classifies, and drafts responses for inbound customer support tickets. ThreadWave, one implementation of this pattern, resolves 61% of tickets without a person touching them.</p>
      </aside>

      {/* ═══════════════════════════════════════════════════
          HERO — Full-viewport, text-only, orb background
      ══════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          overflow: "hidden",
          paddingTop: "112px",
          paddingBottom: "4rem",
          textAlign: "center",
        }}
      >

        {/* Radial vignette overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0d0d0d 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "860px",
            padding: "3rem 2rem 1rem",
          }}
        >
          {/* Eyebrow */}
          <p
            className="eyebrow-label"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            GarvinLabs · AI Modernization
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f5f7",
              marginBottom: "1.5rem",
            }}
          >
            Most automation fails because nobody mapped the process first.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34d399 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I map it, then build the system around what&apos;s actually there.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "#a1a1a6",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            Support, ops reporting, fulfilment, inventory: wherever the
            repetitive work is piling up. I map how it actually runs before
            touching any tooling, then scope the build around that instead
            of a templated workflow.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/demos"
              id="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#10B981",
                color: "#000000",
                padding: "0.9375rem 2rem",
                borderRadius: "980px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
                minHeight: "48px",
                textDecoration: "none",
              }}
            >
              See the builds →
            </Link>
            <Link
              href="/resources"
              id="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9375rem 2rem",
                borderRadius: "980px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#f5f5f7",
                fontWeight: 600,
                fontSize: "0.9375rem",
                minHeight: "48px",
                textDecoration: "none",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              Free automation guide
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "70px",
            background: "linear-gradient(to bottom, transparent, #0d0d0d)",
            zIndex: 1,
          }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          CASE STUDIES — Summary teaser
      ══════════════════════════════════════════════════ */}
      <section
        id="case-studies-teaser"
        aria-label="Case studies"
        style={{
          background: "#0d0d0d",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              Case Studies
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Where AI modernization fits, and where it doesn&apos;t.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", maxWidth: "540px", lineHeight: 1.65 }}>
              Anonymized write-ups from inside real businesses, with the actual
              numbers behind each finding.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CASE_STUDIES_TEASER.map((cs, idx) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`reveal delay-${idx + 1}`}
                style={{
                  display: "block",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "saturate(1.8) blur(24px)",
                  WebkitBackdropFilter: "saturate(1.8) blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={`/case-studies/${cs.slug}/cover.png`}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.625rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#10B981",
                      fontWeight: 700,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {cs.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.625rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {cs.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#10B981", fontSize: "0.8125rem", fontWeight: 700 }}>
                    Read case study
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/case-studies" style={{ color: "#10B981", fontWeight: 600, fontSize: "0.9375rem" }}>
              See all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BUILDS — Bento Grid, the three YouTube walkthroughs
      ══════════════════════════════════════════════════ */}
      <section
        id="projects"
        aria-label="Projects"
        style={{
          background: "#0d0d0d",
          padding: "7rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >


        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              The Builds
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Watch how each one actually works.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", maxWidth: "540px", lineHeight: 1.65 }}>
              Full walkthroughs on YouTube, not screenshots. Each one started
              as a documented problem before any tooling got touched.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {BUILDS_INDEX.map((build, idx) => {
              // Only the first two cards get the scroll-driven .reveal fade: their
              // animation-timeline range reliably resolves to opacity 1. Cards from
              // idx 2 onward (delay-3+) sit far enough down the page that Chrome's
              // view() timeline gets stuck mid-fade (confirmed via computed-opacity
              // checks on mobile AND desktop, ~0.68-0.93) -- same root cause as the
              // hero fade bug, fixed there by omitting reveal/delay-N entirely.
              const revealClass = idx < 2 ? ` reveal delay-${idx + 1}` : "";
              return (
              <a
                key={build.name}
                href={build.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`build-card-${idx}`}
                className={`bento-card${revealClass}${build.highlight ? " bento-card-highlight" : ""}`}
                style={{
                  display: "block",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "saturate(1.8) blur(24px)",
                  WebkitBackdropFilter: "saturate(1.8) blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Cursor glow layer */}
                <div className="glass-cursor-glow" aria-hidden="true" />

                {/* YouTube thumbnail — same 16:9 aspect ratio as the embed itself */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={`https://i.ytimg.com/vi/${build.youtubeId}/hqdefault.jpg`}
                    alt={build.name}
                    fill
                    sizes="(max-width: 834px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 45%)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.55)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="#ffffff">
                      <path d="M4 2.5v11l9-5.5-9-5.5z" />
                    </svg>
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 1, padding: build.highlight ? "2rem 2.5rem 2.5rem" : "1.5rem 2rem 2rem" }}>
                  {/* Tag + stat row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.625rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#10B981",
                        fontWeight: 700,
                        background: "rgba(16,185,129,0.08)",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "980px",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {build.tag}
                    </span>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.04em", lineHeight: 1 }}>
                        {build.stat}
                      </p>
                      <p style={{ fontSize: "0.6875rem", color: "#6b7280", marginTop: "0.3rem", maxWidth: "90px", textAlign: "right", lineHeight: 1.45 }}>
                        {build.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: build.highlight ? "1.5rem" : "1.1875rem",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      letterSpacing: "-0.015em",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {build.name}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "#6b7280", lineHeight: 1.65 }}>
                    {build.problem}
                  </p>

                  {/* Footer arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: "#10B981",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      marginTop: "1.5rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Watch on YouTube
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHEN AI FAILS — Standalone featured spotlight
      ══════════════════════════════════════════════════ */}
      <section
        id="when-ai-fails-spotlight"
        aria-label="Featured: When AI fails"
        style={{ background: "#0d0d0d", padding: "5rem 0" }}
      >
        <div className="container">
          <div className="reveal spotlight-grid">
            <Link href="/when-ai-fails" className="spotlight-media">
              <Image
                src="/when-ai-fails/cover.png"
                alt="A boardroom lit in green with an elephant standing at the head of the table, while four people in a meeting look anywhere but at it."
                fill
                sizes="(max-width: 860px) 100vw, 460px"
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div>
              <p
                className="eyebrow-label"
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#10B981",
                  fontWeight: 700,
                  marginBottom: "0.875rem",
                }}
              >
                Featured · AI guardrails
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#f5f5f7",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                When AI fails, it&apos;s rarely the model&apos;s fault.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1.75rem" }}>
                Chevrolet, Air Canada, and DPD all had AI go publicly wrong, for three
                different reasons, none of them a bad model. A three-question framework,
                reversibility, stakes, verifiability, for deciding where AI should run
                unsupervised in a business, and where it shouldn&apos;t.
              </p>
              <Link
                href="/when-ai-fails"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "#10B981", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}
              >
                Read the full breakdown
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BLOG — Featured posts
      ══════════════════════════════════════════════════ */}
      <section
        id="blog-teaser"
        aria-label="From the blog"
        style={{
          background: "#0d0d0d",
          padding: "7rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              The Blog
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              The same complaints, mapped one at a time.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", maxWidth: "540px", lineHeight: 1.65 }}>
              Each post starts from one documented pain point, then breaks down
              what a real fix looks like.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {BLOG_TEASER.map((post, idx) => {
              // Only the first two cards get the scroll-driven .reveal fade: their
              // animation-timeline range reliably resolves to opacity 1. The third
              // card (delay-3) gets stuck mid-fade (confirmed via computed-opacity
              // checks, ~0.64 on mobile even with this section near the top of the
              // page) -- same root cause as the hero and Builds bento-grid fades,
              // fixed there by omitting reveal/delay-N entirely.
              const revealClass = idx < 2 ? `reveal delay-${idx + 1}` : "";
              return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={revealClass}
                style={{
                  display: "block",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "saturate(1.8) blur(24px)",
                  WebkitBackdropFilter: "saturate(1.8) blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={`/blog/${post.slug}/cover.png`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.625rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#10B981",
                      fontWeight: 700,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.625rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {post.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#10B981", fontSize: "0.8125rem", fontWeight: 700 }}>
                    Read post
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/blog" style={{ color: "#10B981", fontWeight: 600, fontSize: "0.9375rem" }}>
              See all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESOURCES — Free guides by industry
      ══════════════════════════════════════════════════ */}
      <section
        id="resources-teaser"
        aria-label="Free resources"
        style={{
          background: "#050505",
          padding: "7rem 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3.5rem" }}>
            <p
              className="eyebrow-label"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#10B981",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              Free Resources
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Free tools and breakdowns for D2C operators.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", lineHeight: 1.65 }}>
              Practical resources pulled from the same builds below. Free to
              use, no strings attached.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {RESOURCES_TEASER.map((r, idx) => (
              <Link
                key={r.slug}
                href={r.href}
                className={`reveal delay-${(idx % 3) + 1}`}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.75rem",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "saturate(1.8) blur(24px)",
                  WebkitBackdropFilter: "saturate(1.8) blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "72px",
                    aspectRatio: "3 / 4",
                    flexShrink: 0,
                    borderRadius: "6px",
                    overflow: "hidden",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={r.image}
                    alt={`${r.tag} guide cover`}
                    fill
                    sizes="72px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.625rem" }}>
                    {r.kind}
                  </span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#f5f5f7", marginBottom: "1rem", lineHeight: 1.3 }}>
                    {r.tag}
                  </h3>
                  <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.8125rem" }}>
                    {r.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/resources" style={{ color: "#10B981", fontWeight: 600, fontSize: "0.9375rem" }}>
              See all guides →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE LAB — Philosophy + spinning conic glow
      ══════════════════════════════════════════════════ */}
      <section
        id="philosophy"
        aria-label="Philosophy"
        style={{
          background: "#0d0d0d",
          padding: "9rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >


        <div
          className="container"
          style={{ position: "relative", zIndex: 2, maxWidth: "800px", textAlign: "center" }}
        >
          <p
            className="reveal eyebrow-label"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            AI Modernization
          </p>
          <h2
            className="reveal delay-1"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              marginBottom: "2.5rem",
            }}
          >
            Modernizing the mundane.
          </h2>

          {/* Glassmorphic text card */}
          <div
            className="reveal delay-2 glass"
            style={{
              padding: "3rem",
              textAlign: "left",
              marginBottom: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top shimmer */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
              }}
            />
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#a1a1a6", marginBottom: "1.25rem" }}>
              The system sits between your existing tools (inbox, storefront, WhatsApp, Instagram,
              sheets) and does the reading, deciding, and acting a person used to do by hand.
              The pattern repeats across functions; what changes is which manual process gets automated first.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#a1a1a6" }}>
              Every build above is a working system, not a mockup, built on a real operational pain
              and tested against real-world inputs. That&apos;s the role here: an AI modernization
              partner for the mapping-and-building work, not a vendor selling a fixed AI
              modernization consulting package off a shelf.
            </p>
          </div>

          {/* Works with your existing tools */}
          <div
            className="reveal delay-3"
            style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            {["Zendesk", "Instagram", "Gmail", "WhatsApp"].map((tech) => (
              <span
                key={tech}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.5rem 1rem",
                  borderRadius: "980px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  fontSize: "0.8125rem",
                  color: "#86868b",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — Dark accordion
      ══════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-label="Frequently Asked Questions"
        style={{
          background: "#050505",
          padding: "7rem 0 9rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <p
            className="reveal eyebrow-label"
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#10B981",
              fontWeight: 700,
              marginBottom: "0.875rem",
            }}
          >
            FAQ
          </p>
          <h2
            className="reveal delay-1"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}
          >
            Direct answers.
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {AEO_FAQS.map((faq, idx) => (
              <details
                key={idx}
                id={`faq-item-${idx}`}
                className={`reveal delay-${(idx % 3) + 1}`}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "0 0.25rem",
                }}
              >
                <summary
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#f5f5f7",
                    outline: "none",
                    listStyle: "none",
                    padding: "1.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    userSelect: "none",
                  }}
                >
                  <span>{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M5 8l5 5 5-5" />
                  </svg>
                </summary>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "#6b7280",
                    paddingBottom: "1.5rem",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
