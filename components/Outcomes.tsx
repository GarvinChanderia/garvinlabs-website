const proofCards = [
  {
    title: "Dental Revenue Engine",
    description:
      "Automated lead gen pipeline: 1,102 leads scraped, 551 site previews generated, full outreach sequence — zero manual work after setup.",
  },
  {
    title: "SparringPlayer",
    description:
      "7-workflow automation roadmap for a sports booking marketplace. Mapped the entire booking funnel from discovery to confirmation.",
  },
  {
    title: "Morning Briefing System",
    description:
      "Personal operations layer: n8n workflows that scan active projects, pull daily notes, and fire a Telegram briefing every morning at 8 AM.",
  },
];

export function Outcomes() {
  return (
    <section id="results" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Results
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Systems we&apos;ve built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {proofCards.map((card) => (
            <div key={card.title} className="bg-[#0A0A0A] p-10 hover:bg-[#111111] transition-colors">
              <div className="w-8 h-px bg-[#D4A853] mb-8" />
              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {card.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
