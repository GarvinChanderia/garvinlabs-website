const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "20-minute call to understand your business and identify the real bottleneck.",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    description: "Clear deliverables, timeline, and pricing. No surprises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "AI-assisted delivery, 2–3x faster than traditional freelancers. Weekly updates.",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    description:
      "Deployed, documented, and handed over. We stay available for iterations.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Process
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            From call to live system in weeks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#222222]">
          {steps.map((step, i) => (
            <div key={step.number} className="bg-[#111111] p-8">
              <div
                className="text-5xl font-bold text-[#D4A853]/20 mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.number}
              </div>
              <h3
                className="text-lg font-bold text-[#F5F5F5] mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block mt-8 h-px bg-[#D4A853]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
