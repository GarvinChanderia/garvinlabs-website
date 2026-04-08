import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and proof of work from GarvinLabs — automated lead generation pipelines, workflow automation, and operations systems delivered across industries.",
  alternates: { canonical: "https://garvinlabs.vercel.app/work" },
  openGraph: {
    title: "Work | GarvinLabs",
    description:
      "Real systems, real results. See the automation workflows and lead generation engines we've built.",
    url: "https://garvinlabs.vercel.app/work",
  },
};

const caseStudies = [
  {
    id: "dental",
    client: "Internal project (lead gen proof-of-concept)",
    title: "Dental Revenue Engine",
    problem: "Needed to validate automated outbound at scale for a niche industry.",
    built:
      "End-to-end lead gen pipeline — scraped 1,102 dental practices from directories, auto-generated 551 website preview mockups, built and deployed email outreach sequences. Entire system ran on n8n with zero manual intervention after setup.",
    result:
      "Proved the model works. Pipeline processed 1,100+ leads. Channel limitation (Gmail sender reputation) identified and documented — system architecture validated for migration to dedicated sending infrastructure.",
    tags: ["n8n", "Lead Generation", "Scraping", "Email Automation"],
  },
  {
    id: "sparring",
    client: "Sports tech startup",
    title: "Confidential SportsTech Org",
    problem: "Manual booking process killing conversion.",
    built:
      "Mapped the entire booking funnel and designed 7 automation workflows covering discovery, matching, booking confirmation, reminders, and follow-up. Delivered as an automation roadmap with implementation specs.",
    result:
      "Client received a complete automation blueprint ready for implementation. Identified that the core bottleneck was funnel friction, not supply.",
    tags: ["n8n", "Workflow Design", "Sports Tech"],
  },
  {
    id: "engineering",
    client: "Manufacturing business",
    title: "Confidential Engineering Org",
    problem: "Operations were tribal knowledge — nothing documented, processes varied by person.",
    built:
      "26 process documents standardizing operations across the business. Created a system the entire team now follows.",
    result: 'Team aligned on processes for the first time. Owner called it "the best investment we made this year."',
    tags: ["Process Documentation", "Manufacturing", "Operations"],
  },
];

const otherWork = [
  {
    title: "ThrottleApp.",
    description:
      "Motorcycle safety and community app. 300+ organic downloads, zero ad spend. Built with Flutter and Firebase. (Closed)",
  },
  {
    title: "Cummins India",
    description:
      "Delivered 40% faster workflow turnaround using Power Automate during Business Analyst role.",
  },
  {
    title: "Community Discovery Engine",
    description:
      "n8n workflow that scrapes Hive Index every 6 hours, discovering 246+ communities. Feeds into a structured join log for client acquisition.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Work
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-xl">
              Systems we&apos;ve built. Results we&apos;ve delivered.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-px bg-[#222222]">
              {caseStudies.map((cs) => (
                <article key={cs.id} className="bg-[#0A0A0A] p-10 md:p-14">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#A0A0A0] border border-[#222222] px-3 py-1"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#D4A853] uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                    {cs.client}
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-10"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {cs.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                      <h3
                        className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest mb-3"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        The Problem
                      </h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <h3
                        className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest mb-3"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        What We Built
                      </h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{cs.built}</p>
                    </div>
                    <div>
                      <h3
                        className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest mb-3"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        Result
                      </h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Other Work */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl font-bold text-[#F5F5F5] mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Other Work
            </h2>
            <div className="space-y-px bg-[#222222]">
              {otherWork.map((w) => (
                <div key={w.title} className="bg-[#0A0A0A] p-8 flex flex-col md:flex-row gap-6 hover:bg-[#111111] transition-colors">
                  <div className="md:w-56 shrink-0">
                    <h3
                      className="font-bold text-[#F5F5F5]"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {w.title}
                    </h3>
                  </div>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
