const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%20want%20a%20free%20landing%20page%20audit";

export function CTA() {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-6xl font-bold text-[#F5F5F5] leading-tight mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Stop losing customers to a broken funnel.
        </h2>
        <p className="text-[#A0A0A0] text-lg mb-12 max-w-xl mx-auto">
          Send me your landing page URL. I&apos;ll send you a free audit PDF showing
          the top issues and exactly how to fix them. No pitch. No strings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00AE43] hover:bg-[#00C94E] text-[#0A0A0A] font-semibold px-10 py-4 text-base transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get Your Free Audit
          </a>
          <a
            href="mailto:labs.garvin@gmail.com"
            className="text-[#A0A0A0] hover:text-[#F5F5F5] text-sm transition-colors"
          >
            labs.garvin@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
