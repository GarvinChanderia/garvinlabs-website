import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlassCard } from "@/components/GlassCard";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.description,
    keywords: [...service.keywords],
    openGraph: {
      title: `${service.title} | GarvinLabs`,
      description: service.shortDescription,
      url: `https://garvinlabs.vercel.app/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://garvinlabs.vercel.app/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "GarvinLabs",
      url: "https://garvinlabs.vercel.app",
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              All Services
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                <Icon size={28} className="text-brand-green" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-green">
                  {service.tagline}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
                  {service.title}
                </h1>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12">
              {service.description}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                What&apos;s Included
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-brand-green mt-0.5 shrink-0"
                    />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Proof It Works
              </h2>
              <div className="space-y-4">
                {service.proof.map((p) => (
                  <div
                    key={p}
                    className="glass rounded-xl px-6 py-4 text-text-secondary"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <p className="text-sm font-semibold text-brand-green mb-2">
                {service.priceRange}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Ready to get started?
              </h2>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                Book a free 20-minute call. We&apos;ll scope your project, identify
                quick wins, and give you a clear proposal.
              </p>
              <a
                href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27m%20interested%20in%20your%20{service.title}%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-brand-green/20"
              >
                <MessageCircle size={20} />
                Book a Free Call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
