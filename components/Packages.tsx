const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%20want%20a%20free%20landing%20page%20audit";

const packages = [
  {
    tag: "START HERE",
    title: "Conversion Audit",
    price: "₹5K – ₹10K",
    delivery: "1-2 days",
    description:
      "A detailed PDF audit of your landing page or funnel. I walk through every issue I find and tell you exactly how to fix it.",
    includes: [
      "Annotated PDF audit report",
      "Top 5-7 conversion issues identified",
      "Exact fix for each issue (copy rewrites, layout changes)",
      "Priority ranking (P0/P1/P2)",
      "Quick wins you can implement in under an hour",
    ],
    highlight: false,
  },
  {
    tag: "MOST POPULAR",
    title: "Conversion Sprint",
    price: "₹25K – ₹50K",
    delivery: "5-7 days",
    description:
      "Everything in the Audit — plus I implement the fixes. Headlines rewritten, CTAs rebuilt, social proof moved, page restructured.",
    includes: [
      "Full conversion audit (PDF report)",
      "Headline and CTA rewrites implemented",
      "Social proof placement optimized",
      "Page structure and flow fixed",
      "Mobile experience optimized",
      "Before/after documentation",
    ],
    highlight: true,
  },
  {
    tag: "FULL OVERHAUL",
    title: "Conversion System Sprint",
    price: "₹50K – ₹75K",
    delivery: "7-10 days",
    description:
      "Complete conversion flow redesign. I rebuild your entire funnel — from first click to final action — for maximum conversion.",
    includes: [
      "Everything in the Conversion Sprint",
      "Full funnel flow redesign",
      "Multi-page conversion path optimization",
      "Objection handling and FAQ copy",
      "Trust architecture (social proof system)",
      "Conversion tracking setup recommendations",
    ],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section id="packages" itemScope itemType="https://schema.org/OfferCatalog" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Packages
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            One offer. Three levels of depth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`p-10 flex flex-col ${
                pkg.highlight
                  ? "bg-[#111111] border-t-2 border-t-[#00AE43]"
                  : "bg-[#0A0A0A] hover:bg-[#111111]"
              } transition-colors`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-widest mb-6 block ${
                  pkg.highlight ? "text-[#00AE43]" : "text-[#A0A0A0]"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {pkg.tag}
              </span>

              <h3
                className="text-2xl font-bold text-[#F5F5F5] mb-2 leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {pkg.title}
              </h3>

              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="text-xl font-bold text-[#00AE43]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {pkg.price}
                </span>
                <span className="text-sm text-[#A0A0A0]">{pkg.delivery}</span>
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#00AE43] text-sm mt-0.5 shrink-0">—</span>
                    <span className="text-[#A0A0A0] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold py-3 text-sm transition-colors ${
                  pkg.highlight
                    ? "bg-[#00AE43] hover:bg-[#00C94E] text-[#0A0A0A]"
                    : "border border-[#222222] hover:border-[#00AE43] text-[#F5F5F5] hover:text-[#00AE43]"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
