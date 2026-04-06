import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "300+", label: "App Downloads" },
  { value: "40%", label: "Faster Delivery" },
  { value: "5+", label: "Industries" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-surface pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-green bg-brand-green/8 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Available for new projects
          </span>
        </ScrollReveal>

        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary leading-[1.05]">
            Build.{" "}
            <span className="text-gradient">Automate.</span>
            <br />
            Scale.
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Website development, n8n automation, software development, and AI consulting
            — everything built to bring you more customers and reduce manual work.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-brand-green/20"
            >
              Book a Free Call
            </a>
            <a
              href="#services"
              className="text-text-secondary hover:text-text-primary font-medium px-8 py-4 rounded-full border border-glass-border hover:border-black/10 transition-all"
            >
              Explore Services
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
