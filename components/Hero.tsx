const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%20want%20a%20free%20landing%20page%20audit";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-[#0A0A0A] bg-grid-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00AE43]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 text-center z-10">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium text-[#00AE43] border border-[#00AE43]/30 px-4 py-1.5 mb-10 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00AE43] animate-pulse" />
          5 free audit slots this week
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-[#F5F5F5] leading-[1.05] mb-8"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Your traffic isn&apos;t the problem.
          <br />
          <span className="text-[#00AE43]">Your funnel is.</span>
        </h1>

        <p
          data-speakable="true"
          className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I help businesses convert more of the traffic they&apos;re already paying for
          by fixing their conversion flow. Specific problems. Specific fixes. 5-10 days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00AE43] hover:bg-[#00C94E] text-[#0A0A0A] font-semibold px-8 py-4 text-base transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get Your Free Audit
          </a>
          <a
            href="#packages"
            className="text-[#A0A0A0] hover:text-[#F5F5F5] font-medium px-8 py-4 border border-[#222222] hover:border-[#444444] transition-all text-base"
          >
            See Packages
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            "938 pages audited in one project",
            "25+ dashboards delivered",
            "Pune, India",
          ].map((item) => (
            <span key={item} className="text-sm text-[#A0A0A0]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
