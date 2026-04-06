import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const stats = [
  {
    value: "25+",
    label: "Projects Delivered",
    detail: "Across web, mobile, automation, and consulting",
  },
  {
    value: "300+",
    label: "Organic Downloads",
    detail: "ThrottleApp — zero ad spend, pure product-market fit",
  },
  {
    value: "40%",
    label: "Faster Delivery",
    detail: "AI-enabled workflows at Cummins India",
  },
  {
    value: "5+",
    label: "Industries Served",
    detail: "Healthcare, logistics, sports, edtech, manufacturing",
  },
];

const industries = [
  "Healthcare",
  "Logistics & Transport",
  "Sports Tech",
  "EdTech",
  "Manufacturing",
  "Media & Creative",
];

export function Outcomes() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Results"
            title="Built to deliver outcomes"
            subtitle="We measure success by the impact we create — not the hours we bill."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={(i + 1) * 100}>
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-brand-green">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-text-primary">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-text-secondary">{stat.detail}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider uppercase text-text-secondary mb-6">
              Industries we&apos;ve worked in
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="glass px-5 py-2 rounded-full text-sm font-medium text-text-secondary"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
