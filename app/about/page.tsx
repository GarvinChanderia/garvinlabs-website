import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Garvin Chanderia — Conversion Optimization Specialist. Based in Pune. Built products with 300+ downloads, audited 938 pages in one project, delivered 25+ dashboards and systems across industries.",
  alternates: { canonical: "https://garvinlabs.vercel.app/about" },
  openGraph: {
    title: "About Garvin Chanderia | GarvinLabs",
    description:
      "Conversion optimization specialist based in Pune. I fix the funnel so your traffic converts.",
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
  "Business Analyst, Fortune 500 manufacturing (~2 years)",
  "Founded IDEATE UX Club",
];

const proofPoints = [
  { number: "938", label: "Pages audited in one project" },
  { number: "300+", label: "Organic app downloads, zero ad spend" },
  { number: "25+", label: "Dashboards and projects delivered" },
  { number: "200+", label: "User interviews conducted across products" },
  { number: "26", label: "Business processes documented for manufacturing client" },
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
              className="text-xl text-[#00AE43]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Conversion Optimization Specialist
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
                    I&apos;m based in Pune, and I fix conversion funnels for businesses.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    I spent 2 years building products — an app with 300+ organic downloads,
                    25+ dashboards for a Fortune 500, websites that closed freelance deals,
                    automation pipelines that processed 1,000+ leads. The pattern I kept seeing:
                    the businesses that grew fastest weren&apos;t getting more traffic.
                    They were converting more of the traffic they already had.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    That&apos;s what I do now. I look at your landing page, your funnel,
                    your CTA, your copy — and I find the specific places where visitors drop off.
                    Then I fix them. Not a redesign. Not a rebrand. Specific problems, specific fixes,
                    delivered in 5-10 days.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
                    My background is in computer science (B.Tech, AI/ML) with nearly two years
                    as a Business Analyst at a Fortune 500 manufacturer — where I learned how
                    real operations work, built 25+ dashboards, and shipped automation workflows.
                    I hold certifications from Microsoft, Google, Databricks, and Product School.
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed">
                    I don&apos;t sell hours. I sell more conversions. If I can&apos;t identify
                    a clear improvement for you, I&apos;ll tell you — and I won&apos;t take the project.
                  </p>
                </div>
              </div>

              <div>
                <h2
                  className="text-sm font-semibold text-[#00AE43] uppercase tracking-widest mb-8"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Credentials
                </h2>
                <ul className="space-y-4">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-4 pb-4 border-b border-[#222222] last:border-0">
                      <span className="text-[#00AE43] text-sm mt-0.5 shrink-0">—</span>
                      <span className="text-[#A0A0A0] text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-sm font-semibold text-[#00AE43] uppercase tracking-widest mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              By The Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#222222]">
              {proofPoints.map((p) => (
                <div key={p.label} className="bg-[#0A0A0A] p-8">
                  <div
                    className="text-3xl font-bold text-[#00AE43] mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.number}
                  </div>
                  <div className="text-sm text-[#A0A0A0] leading-relaxed">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2
                className="text-sm font-semibold text-[#00AE43] uppercase tracking-widest mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Philosophy
              </h2>
              <blockquote
                className="text-2xl md:text-3xl font-bold text-[#F5F5F5] leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                &ldquo;Your landing page doesn&apos;t need a redesign. It needs 3 specific
                copy changes that take 20 minutes. A redesign changes the paint.
                Copy changes fix the engine.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
