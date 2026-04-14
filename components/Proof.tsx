const caseStudies = [
  {
    title: "938-Page Audit Pipeline",
    metric: "938 pages",
    metricLabel: "audited & personalized",
    description:
      "Built an automated pipeline that audited 938 business websites, generated personalized landing page mockups, and ran outreach — all at ₹91 total cost. Proved that conversion audits at scale work.",
    tags: ["Conversion Audit", "Automation", "Landing Pages"],
  },
  {
    title: "Freelance Website → SaaS Deal",
    metric: "Repeat client",
    metricLabel: "came back for SaaS deal",
    description:
      "Delivered a conversion-focused website for a logistics business that worked so well the client returned to build a full SaaS platform. The original site converted visitors to inquiries from day one.",
    tags: ["Website", "Conversion", "Repeat Client"],
  },
  {
    title: "Manufacturing Process Overhaul",
    metric: "26 processes",
    metricLabel: "documented & optimized",
    description:
      "Turned tribal knowledge into a systematic operation for a manufacturing business. 26 process documents that the entire team now follows. Owner called it \"the best investment we made this year.\"",
    tags: ["Process Optimization", "Manufacturing"],
  },
];

const highlights = [
  { number: "300+", label: "Organic app downloads (zero ad spend)" },
  { number: "25+", label: "Dashboards and projects delivered" },
  { number: "200+", label: "User interviews conducted" },
  { number: "5+", label: "Industries served" },
];

export function Proof() {
  return (
    <section id="proof" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Proof
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Results, not promises
          </h2>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222222] mb-px">
          {highlights.map((h) => (
            <div key={h.label} className="bg-[#0A0A0A] p-8 text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-[#00AE43] mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {h.number}
              </div>
              <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-[#0A0A0A] p-10 hover:bg-[#111111] transition-colors">
              <div className="mb-6">
                <div
                  className="text-2xl font-bold text-[#00AE43] mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {cs.metric}
                </div>
                <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">
                  {cs.metricLabel}
                </div>
              </div>

              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {cs.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{cs.description}</p>

              <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
