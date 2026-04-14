const audiences = [
  {
    title: "Coaches & Consultants",
    description:
      "You're running ads or posting content, driving people to a landing page — but bookings aren't where they should be. The traffic is there. The page isn't converting.",
  },
  {
    title: "Clinics & Service Businesses",
    description:
      "Dental practices, gyms, salons, physiotherapists — you have a website but it reads like a brochure. Visitors can't tell what to do next. You need a conversion flow, not a homepage.",
  },
  {
    title: "D2C Brands & E-commerce",
    description:
      "Your product pages get views but not sales. Your cart abandonment is high. Your landing pages from ads don't match the promise. Small copy and CTA fixes can change your unit economics.",
  },
];

export function WhoFor() {
  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Who This Is For
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            You&apos;re getting traffic. It&apos;s not converting.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {audiences.map((a) => (
            <div key={a.title} className="bg-[#111111] p-10 hover:bg-[#141414] transition-colors">
              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {a.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
