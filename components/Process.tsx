const steps = [
  {
    number: "01",
    title: "Send me your URL",
    description:
      "WhatsApp or email — just drop your landing page link. I'll take a look within 24 hours.",
  },
  {
    number: "02",
    title: "I find the leaks",
    description:
      "I audit your page against 7 conversion areas: headline, CTA, social proof, messaging, UX, value prop, and conversion killers.",
  },
  {
    number: "03",
    title: "You get the fixes",
    description:
      "A detailed PDF report showing every issue and the exact fix. Or I implement them myself — depends on your package.",
  },
  {
    number: "04",
    title: "More visitors convert",
    description:
      "Same traffic, more customers. Most clients see results within the first week after fixes go live.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            How It Works
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            From URL to more conversions in days
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#222222]">
          {steps.map((step, i) => (
            <div key={step.number} className="bg-[#111111] p-8">
              <div
                className="text-5xl font-bold text-[#00AE43]/20 mb-6"
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
                <div className="hidden md:block mt-8 h-px bg-[#00AE43]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
