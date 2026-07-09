import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import { BuildsGrid } from "@/components/BuildsGrid";

export const metadata: Metadata = {
  title: "Builds",
  description: "Systems built for D2C operations: the problem each one solves, how it works, and what the manual version costs.",
};

const BUILDS = [
  {
    id: "threadwave",
    tag: "Support Triage",
    title: "ThreadWave: Support Triage",
    image: "/website-images/threadwave_hero.png",
    alt: "ThreadWave demo storefront with the AI support chat widget open",
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
