const problems = [
  {
    number: "01",
    title: "Your headline talks about you, not them",
    body: "Visitors decide in 3 seconds. If your headline describes your product instead of their outcome, they bounce — and your ad spend goes with them.",
  },
  {
    number: "02",
    title: "Your CTA says \"Learn More\"",
    body: "Nobody wakes up wanting to \"learn more\" or \"submit.\" Generic CTAs kill urgency. Specific CTAs — \"Get My Free Audit\" — give people a reason to click.",
  },
  {
    number: "03",
    title: "Your best proof is buried at the bottom",
    body: "80% of visitors never scroll past the first screen. If your strongest testimonial or metric is below the fold, most people will never see it.",
  },
];

export function Problems() {
  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            The Problem
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            You&apos;re paying for traffic that doesn&apos;t convert
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {problems.map((p) => (
            <div key={p.number} className="bg-[#111111] p-10 hover:bg-[#141414] transition-colors">
              <span
                className="text-[#00AE43] text-sm font-semibold mb-6 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {p.number}
              </span>
              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {p.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
