import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import { BuildsGrid } from "@/components/BuildsGrid";

export const metadata: Metadata = {
  title: "Builds: Real AI Modernization Systems | GarvinLabs",
  description: "AI modernization systems built for D2C operations: the problem each one solves, how it works, and what the manual version costs.",
  alternates: { canonical: "https://garvinlabs.com/demos" },
  openGraph: {
    title: "Builds: Real AI Modernization Systems | GarvinLabs",
    description: "AI modernization systems built for D2C operations: the problem each one solves, how it works, and what the manual version costs.",
    url: "https://garvinlabs.com/demos",
    images: [{ url: "/website-images/threadwave_hero.png", width: 1200, height: 630, alt: "GarvinLabs builds" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builds: Real AI Modernization Systems | GarvinLabs",
    description: "AI modernization systems built for D2C operations: the problem each one solves, how it works, and what the manual version costs.",
    images: ["/website-images/threadwave_hero.png"],
  },
};

const BUILDS = [
  {
    id: "threadwave",
    tag: "Support Triage",
    title: "ThreadWave: Support Triage",
    youtubeId: "owzL30vbPco",
    alt: "ThreadWave AI support triage, full walkthrough video",
    problem:
      "A D2C support inbox getting 200+ tickets a day, all needing manual sorting before anyone can act on them.",
    howSolved:
      "A two-pass pipeline: classify the ticket, pull the relevant policy from a knowledge base, draft a reply, then either auto-send when confidence is high or escalate with full context attached.",
    cost:
      "Support teams spend 60-70% of their day reading and sorting tickets before a single one gets resolved. Industry estimates put the cost of that manual sorting layer at $40K+/year for a mid-size D2C team.",
    stats: [
      { num: "61%", label: "auto-resolution" },
      { num: "94%+", label: "classification accuracy" },
    ],
    stack: ["Gemini API", "Notion", "Telegram"],
    cta: { label: "Watch on YouTube", href: "https://youtu.be/owzL30vbPco" },
  },
  {
    id: "storefront-chatbot",
    tag: "Storefront Chatbot",
    title: "Storefront Support Chatbot",
    image: "/website-images/hero_automation_dark.png",
    alt: "Automation dashboard visual representing the storefront chatbot pipeline",
    problem:
      "Storefront visitors with sizing, returns, or shipping questions get no answer outside business hours, and most won't come back later to ask again.",
    howSolved:
      "An embedded chatbot wired into the same pipeline as the support inbox. It reads the same knowledge base and answers sizing, returns, and shipping questions instantly, any time of day.",
    cost:
      "Pre-purchase questions that go unanswered are one of the most common reasons a visitor abandons checkout. An always-on answer layer closes that gap without adding headcount.",
    stats: [
      { num: "24/7", label: "instant answers" },
      { num: "0", label: "wait time" },
    ],
    stack: ["Gemini API", "Next.js", "Tailwind CSS"],
  },
  {
    id: "instagram-dm",
    tag: "Instagram DMs",
    title: "Instagram DM Concierge",
    problem:
      "Instagram DMs and story replies pile up faster than anyone can answer them, and a slow reply often means a lost sale.",
    howSolved:
      "Listens to the Instagram webhook and runs each message through the same triage logic as the support inbox, mapping casual DM language into structured tickets, then auto-replying or handing off to the support queue.",
    cost:
      "Response time is one of the biggest drivers of whether a DM turns into a sale. Most D2C accounts take hours to reply, by which point the buyer has moved on.",
    stats: [
      { num: "Auto", label: "story-reply handling" },
      { num: "Synced", label: "to main helpdesk" },
    ],
    stack: ["Meta Graph API", "Gemini API"],
    video: "/instagram-dm-demo.mp4",
    videoPoster: "/instagram-dm-demo-poster.jpg",
  },
  {
    id: "brand-voice-ai",
    tag: "On YouTube",
    title: "How to Build an AI That Writes Like You",
    youtubeId: "HUp2ZIK-uZg",
    problem:
      "Writing convincingly in a specific voice, someone else's or your own, and holding it across new topics and new brands, breaks down fast once it's not the original person typing.",
    howSolved:
      "Analyzed 100+ social posts and ~150,000 words of long-form transcript from one real person to derive a structured voice guide: tone, sentence patterns, vocabulary, rhetorical templates, worldview. Then used that guide to write new content, social posts, an announcement, a podcast transcript, for a completely unrelated business, in that exact voice.",
    cost:
      "Ghostwriting a distinct voice by hand only scales as far as the one person who has it in their head. Walked through step by step in the video.",
    stats: [
      { num: "150K+", label: "words of source material analyzed" },
      { num: "5:01", label: "video walkthrough" },
    ],
    stack: ["Claude"],
    cta: { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=HUp2ZIK-uZg" },
  },
];

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: 680 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>The Builds
              </span>
              <h1 className="h2" style={{ marginTop: 18 }}>
                Real builds, not mockups.
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                Each one started as a manual process someone was doing by hand every day.
                For each: the problem, how the system solves it, and what the
                manual version typically costs.
              </p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0, paddingBottom: 120 }}>
          <div className="container">
            <BuildsGrid builds={BUILDS} />
          </div>
        </section>
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
