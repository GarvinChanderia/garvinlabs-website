import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

const audiences = [
  {
    title: "Creative Founders",
    description: "Your work is premium — your website should match.",
    traits: [
      "Filmmakers, designers, photographers, agencies",
      "Need a portfolio or marketing site that converts",
      "Value taste, craft, and speed",
      "Budget: Rs 60K – Rs 1.2L",
    ],
  },
  {
    title: "Startup Founders",
    description: "You have traction — you need a product.",
    traits: [
      "Building a SaaS, marketplace, or app",
      "Have early customers or funding",
      "Need an MVP that actually works",
      "Budget: Rs 1.5L – Rs 5L",
    ],
  },
  {
    title: "SME Owners",
    description: "Your team needs systems, not chaos.",
    traits: [
      "5-50 employees, generating revenue",
      "Manual processes eating your time",
      "Need automation or digital transformation",
      "Budget: Rs 50K – Rs 2L",
    ],
  },
];

export function WhoFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Who This Is For"
            title="Built for founders who move fast"
            subtitle="If you're running a business and need things done right — not just done — we're your team."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <ScrollReveal key={a.title} delay={(i + 1) * 100}>
              <GlassCard className="h-full">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {a.title}
                </h3>
                <p className="text-text-secondary mb-6">{a.description}</p>
                <ul className="space-y-3">
                  {a.traits.map((trait) => (
                    <li key={trait} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-brand-green mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-text-secondary">{trait}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
