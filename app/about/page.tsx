import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Garvin Chanderia — Founder of GarvinLabs. 23, based in Pune. B.Tech CS (AI/ML), ex-Business Analyst at Cummins India. Builds n8n automation systems and lead generation engines.",
  alternates: { canonical: "https://garvinlabs.vercel.app/about" },
  openGraph: {
    title: "About Garvin Chanderia | GarvinLabs",
    description:
      "23-year-old automation builder based in Pune. B.Tech CS (AI/ML), ex-Cummins India BA, founder of GarvinLabs.",
    url: "https://garvinlabs.vercel.app/about",
  },
};

const credentials = [
  "B.Tech in CS (AI/ML) — MIT ADT University",
  "Microsoft AI PM Professional Certificate",
  "Google UX Design Certificate",
  "Google Data Analytics Certificate",
  "Databricks Lakehouse Fundamentals",
  "Product School PAC",
  "Business Analyst, Cummins India (~2 years)",
  "Founded IDEATE UX Club",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Garvin Chanderia
            </h1>
            <p
              className="text-xl text-[#D4A853]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Founder, GarvinLabs
            </p>
          </div>
        </section>

        {/* Bio + Credentials */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    I&apos;m 23, based in Pune, and I build automated systems for businesses.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    My background is in computer science (B.Tech, AI/ML specialization) with
                    almost two years of experience as a Business Analyst at Cummins India —
                    where I learned how enterprise operations actually work. I hold
                    certifications from Microsoft, Google, Databricks, and Product School.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    I started GarvinLabs because I kept seeing the same problem: businesses
                    running on WhatsApp groups and spreadsheets, with smart people doing dumb
                    repetitive work. I build the systems that fix that.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    My core tool is n8n — I&apos;ve built production workflows for lead
                    generation, operations, community discovery, and personal productivity.
                    I work at the code-node level, not just drag-and-drop. When a project
                    needs a team, I have four developers I work with on a project basis.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed">
                    Outside of work, I ride motorcycles, read about psychology and business,
                    and obsess over clean design.
                  </p>
                </div>
              </div>

              <div>
                <h2
                  className="text-sm font-semibold text-[#D4A853] uppercase tracking-widest mb-8"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Credentials
                </h2>
                <ul className="space-y-4">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-4 pb-4 border-b border-[#222222] last:border-0">
                      <span className="text-[#D4A853] text-sm mt-0.5 shrink-0">—</span>
                      <span className="text-[#A0A0A0] text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2
                className="text-sm font-semibold text-[#D4A853] uppercase tracking-widest mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Philosophy
              </h2>
              <blockquote
                className="text-2xl md:text-3xl font-bold text-[#F5F5F5] leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                &ldquo;I don&apos;t sell hours. I sell systems that make you money or save
                you time. If I can&apos;t identify a clear ROI for you, I&apos;ll tell you —
                and I won&apos;t take the project.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
