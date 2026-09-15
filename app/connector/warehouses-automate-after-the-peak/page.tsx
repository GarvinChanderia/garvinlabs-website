import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why the Fix Gets Bought After It's Needed | GarvinLabs",
  description:
    "The pitch for warehouse automation is framed around growth. The actual trigger is almost always a pain point that already happened.",
  alternates: { canonical: "https://garvinlabs.com/connector/warehouses-automate-after-the-peak" },
};

export default function Page() {
  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "680px", margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#10B981", letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Field note · September 2026
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
          Why the fix gets bought after it&rsquo;s needed
        </h1>

        <div style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#a1a1a6" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            The pitch for warehouse automation is always framed around growth, a five-year plan, a new distribution center, a strategic bet on where the business is headed. That&rsquo;s the story integrators tell. It&rsquo;s rarely the actual reason a warehouse signs.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The real trigger is almost always a pain point that already happened: a peak season where throughput broke, a labor market where the facility can&rsquo;t hold onto pickers, or a new customer contract with service levels the current operation can&rsquo;t hit by hand. The five-year plan gets written afterward, to justify the money.
          </p>
          <p
            style={{
              fontSize: "1.375rem",
              lineHeight: 1.5,
              color: "#f5f5f7",
              borderLeft: "2px solid #10B981",
              paddingLeft: "1.25rem",
              margin: "2.25rem 0",
              fontStyle: "italic",
            }}
          >
            Nobody buys automation for the warehouse they wish they had. They buy it for the one that already failed them once.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            That helps explain why the market keeps growing through conditions that would slow other kinds of capital spending. The warehouse robotics market is on pace to more than double by the early 2030s, and funding is still moving this year, automated mobile robot vendors are raising fresh rounds on the strength of demand that&rsquo;s doubled year over year. The spending isn&rsquo;t speculative. It&rsquo;s reactive, and reaction has a shorter fuse than a five-year plan.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Which means the integrators who win aren&rsquo;t the ones pitching hardest during peak season, when everyone&rsquo;s underwater and can&rsquo;t take a meeting. They&rsquo;re the ones already in the room in the quiet months right after, while the memory of what broke is still fresh enough to get budget approved.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The opportunity is catching that window, a warehouse that just had its bad peak, or just signed a contract it can&rsquo;t service by hand, and putting the right integrator in front of it before the moment cools into &ldquo;maybe next year.&rdquo;
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#6b7280", marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            GarvinLabs connects warehouses and distribution operations with a genuine automation need to the integrators who can actually deliver it.
          </p>
        </div>

        <Link href="/#tracking" style={{ display: "inline-block", marginTop: "2.5rem", color: "#10B981", fontWeight: 600, fontSize: "0.9375rem" }}>
          ← Back to the connector offering
        </Link>
      </article>
      <Footer />
    </main>
  );
}
