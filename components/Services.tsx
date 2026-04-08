import Link from "next/link";

const services = [
  {
    tag: "VOLUME · 1–2 WEEKS · FROM ₹20,000",
    title: "n8n Automation Builds",
    description:
      "We design and build automation workflows using n8n that eliminate repetitive tasks, capture leads, and connect your tools. WhatsApp bots, CRM pipelines, booking systems, notification flows — if it can be automated, we build it.",
    href: "/services/automation",
  },
  {
    tag: "BIG TICKET · 3–6 WEEKS · FROM ₹1,50,000",
    title: "Lead Generation Engines",
    description:
      "Custom-built lead generation systems that scrape, enrich, qualify, and deliver prospects to your inbox or CRM on autopilot. We've built pipelines that processed 1,100+ leads with automated previews — now we build them for you.",
    href: "/services/lead-engines",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What We Build
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Two services. One goal: more revenue, less manual work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
          {services.map((s) => (
            <div key={s.title} className="bg-[#0A0A0A] p-10 group hover:bg-[#111111] transition-colors">
              <span
                className="text-xs text-[#D4A853] font-semibold uppercase tracking-widest mb-6 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {s.tag}
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-5 leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#A0A0A0] leading-relaxed mb-8 text-sm">{s.description}</p>
              <Link
                href={s.href}
                className="text-sm font-semibold text-[#D4A853] hover:text-[#E8C36A] transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
