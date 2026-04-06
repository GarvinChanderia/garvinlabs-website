import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Raunaq S.",
    role: "Manufacturing Business Owner",
    quote:
      "Garvin turned our messy operations into a clear system. 26 process documents that our entire team now follows. The best investment we made this year.",
    stars: 5,
  },
  {
    name: "Badi Bandi Team",
    role: "Logistics & Transport",
    quote:
      "We came back for a bigger project — that says everything. The website was clean, professional, and delivered on time. Now we're building a full SaaS platform together.",
    stars: 5,
  },
  {
    name: "SparringPlayer",
    role: "Sports Tech Platform",
    quote:
      "We had 700 trainers but only 1-2 bookings per week. Garvin mapped out 7 automation workflows that will transform our entire booking funnel.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Testimonials"
            title="What clients say"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i + 1) * 100}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-brand-green text-brand-green"
                    />
                  ))}
                </div>
                <p className="text-text-primary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-glass-border">
                  <div className="font-semibold text-text-primary">{t.name}</div>
                  <div className="text-sm text-text-secondary">{t.role}</div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
