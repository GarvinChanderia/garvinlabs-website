const problems = [
  {
    number: "01",
    title: "Leads slip through the cracks",
    body: "You're generating interest but there's no system to capture, qualify, and follow up automatically. Every missed lead is money left on the table.",
  },
  {
    number: "02",
    title: "Your team does the same tasks every day",
    body: "Data entry, follow-ups, report generation, CRM updates. Your team spends hours on work a machine should handle.",
  },
  {
    number: "03",
    title: "You know AI can help, but where do you start?",
    body: "Every vendor sells hype. You need someone who builds working systems, not slide decks about the future.",
  },
];

export function Challenges() {
  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            The Problem
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            You&apos;re losing revenue to manual work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {problems.map((p) => (
            <div key={p.number} className="bg-[#111111] p-10 hover:bg-[#141414] transition-colors">
              <span
                className="text-[#D4A853] text-sm font-semibold mb-6 block"
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
