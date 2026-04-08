import Link from "next/link";

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-[#0A0A0A] bg-grid-dark overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A853]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 text-center z-10">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D4A853] border border-[#D4A853]/30 px-4 py-1.5 mb-10 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-syne)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse" />
          Currently accepting projects
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-[#F5F5F5] leading-[1.05] mb-8"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          We Build Automated Systems
          <br />
          <span className="text-[#D4A853]">That Bring You Customers</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed mb-12">
          n8n automation workflows and AI-powered lead generation engines for businesses
          that want to grow without adding headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] font-semibold px-8 py-4 text-base transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Book a Free Strategy Call
          </a>
          <Link
            href="/work"
            className="text-[#A0A0A0] hover:text-[#F5F5F5] font-medium px-8 py-4 border border-[#222222] hover:border-[#444444] transition-all text-base"
          >
            See Our Work
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            "25+ projects delivered",
            "5+ industries",
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
