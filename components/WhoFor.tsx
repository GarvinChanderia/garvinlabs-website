const audiences = [
  {
    title: "SME Owners (5–50 employees)",
    description:
      "You're generating revenue but your processes are held together with WhatsApp groups and spreadsheets. You need systems.",
    budget: "Budget: ₹50K–₹2L",
  },
  {
    title: "Startup Founders",
    description:
      "You have traction and need infrastructure that scales. Automated pipelines, not more hires.",
    budget: "Budget: ₹1.5L–₹5L",
  },
  {
    title: "Agencies & Service Businesses",
    description:
      "Your client delivery is manual. We automate your internal ops so you can take on more work without burning out.",
    budget: "Budget: ₹20K–₹1L",
  },
];

export function WhoFor() {
  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Built for operators, not browsers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {audiences.map((a) => (
            <div key={a.title} className="bg-[#111111] p-10 hover:bg-[#141414] transition-colors">
              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {a.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{a.description}</p>
              <span
                className="text-xs text-[#D4A853] font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {a.budget}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
