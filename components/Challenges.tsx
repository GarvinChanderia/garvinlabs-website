import { Globe, Workflow, Code, Brain } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

const challenges = [
  {
    icon: Globe,
    title: "Your website doesn't convert",
    description:
      "You have a website, but it doesn't generate leads or reflect the quality of your business. Visitors leave without taking action.",
  },
  {
    icon: Workflow,
    title: "Manual work is eating your time",
    description:
      "You're doing the same tasks over and over — follow-ups, data entry, lead tracking. It should be automated, but it isn't.",
  },
  {
    icon: Code,
    title: "You need custom software",
    description:
      "Off-the-shelf tools don't fit your workflow. You need a product built for your business — web app, SaaS, or mobile.",
  },
  {
    icon: Brain,
    title: "AI feels out of reach",
    description:
      "You know AI can help your business, but you don't know where to start. You need strategy, not just tools.",
  },
];

export function Challenges() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="The Problem"
            title="Sound familiar?"
            subtitle="These are the exact problems our clients come to us with. If any of these resonate, we can help."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i + 1) * 100}>
              <GlassCard className="h-full">
                <item.icon
                  size={32}
                  className="text-brand-green mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
