import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We get on a call, understand your business, and identify the real problem — not just the surface symptoms.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You receive a clear scope with deliverables, timeline, and transparent pricing. No surprises, no hidden costs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build fast — AI-enabled delivery means 2-3x faster than traditional freelancers. Weekly updates, no vanishing acts.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Your project goes live with deployment, analytics, and a handoff session. We stay available for questions and iterations.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="How It Works"
            title="From idea to live in weeks"
            subtitle="A simple, proven process designed to move fast without cutting corners."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={(i + 1) * 100}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-green/30 to-transparent" />
                )}
                <div className="text-5xl font-bold text-brand-green/15 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
