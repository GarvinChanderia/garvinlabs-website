import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="What We Do"
            title="Four ways we grow your business"
            subtitle="Each service is designed to deliver a measurable outcome — more customers, less manual work, faster growth."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={(i + 1) * 100}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <GlassCard className="h-full group cursor-pointer hover:border-brand-green/20">
                  <div className="flex items-start justify-between mb-4">
                    <service.icon
                      size={36}
                      className="text-brand-green"
                      strokeWidth={1.5}
                    />
                    <ArrowRight
                      size={20}
                      className="text-text-secondary group-hover:text-brand-green group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-brand-green">
                    {service.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-text-primary mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="mt-6 text-sm font-medium text-brand-green">
                    {service.priceRange}
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
