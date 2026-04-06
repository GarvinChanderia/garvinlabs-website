import { MessageCircle, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-green bg-brand-green/8 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Limited slots available
          </span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight">
            Let&apos;s build something
            <br />
            <span className="text-gradient">together.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Book a free 20-minute strategy call. We&apos;ll discuss your project,
            identify quick wins, and map out a plan — no commitment required.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-brand-green/20"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <a
              href="mailto:chanderia.10.garvin@gmail.com"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium px-8 py-4 rounded-full border border-glass-border hover:border-black/10 transition-all"
            >
              <Mail size={20} />
              chanderia.10.garvin@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
