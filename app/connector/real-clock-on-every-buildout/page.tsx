import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Clock That Starts the Day You Sign | GarvinLabs",
  description:
    "A lease signature starts a colder clock than the one everyone watches: the landlord's tenant-improvement allowance.",
  alternates: { canonical: "https://garvinlabs.com/connector/real-clock-on-every-buildout" },
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
          The clock that starts the day you sign
        </h1>

        <div style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#a1a1a6" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            A company signs a new lease and everyone treats the deal as done. It isn&rsquo;t. The lease is a start date, not a finished space, and there&rsquo;s a colder clock running underneath it, the landlord&rsquo;s tenant-improvement allowance and the free-rent period that comes bundled with it. That clock starts the day the ink dries, whether or not a contractor has walked the space yet.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Most tenants don&rsquo;t learn how tight that window is until they&rsquo;re already inside it. Tenant-improvement allowances in major gateway markets are running roughly 75% above pre-pandemic levels this year, with landlords competing hard for tenants in a market where office construction sits at its lowest point in fourteen years. But a bigger allowance only helps if it gets spent before the concession period ends. Spend it late, and the tenant covers the difference out of pocket.
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
            The lease closes the deal. The build-out clock is what actually decides whether the tenant makes money on it.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This is why the sales cycle for fit-out work looks nothing like the sales cycle for the lease itself. A broker works in months. A tenant has weeks between signing and needing a contractor who can scope, price, and mobilize before the free-rent period burns down. Contractors who wait for a formal RFP are already behind; the ones who win are already in the conversation while the ink is still wet.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            On the other side, general contractors and design-build firms aren&rsquo;t short on capability, they&rsquo;re short on timing. They find out about a build-out the same way everyone else does: after the tenant has already spent weeks calling around. By then the good ones are booked into someone else&rsquo;s schedule.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The opportunity isn&rsquo;t matching &ldquo;a company that needs space&rdquo; to &ldquo;a contractor who builds space.&rdquo; It&rsquo;s catching the handful of days between the signature and the clock starting, and making sure the right contractor is already in the room before the tenant even realizes how urgent it&rsquo;s about to get.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#6b7280", marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            GarvinLabs connects companies moving into new commercial space with the build-out contractors who get them open on time.
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
