import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Trigger Before the Paperwork | GarvinLabs",
  description:
    "The moment a company calls a safety consultant is almost never the accident. It's the quieter signal before it.",
  alternates: { canonical: "https://garvinlabs.com/connector/citation-isnt-the-trigger" },
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
          The trigger before the paperwork
        </h1>

        <div style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#a1a1a6" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Ask most people when a company finally calls a safety consultant, and they&rsquo;ll say: after an accident. That&rsquo;s the exception, not the rule. The more common trigger is quieter, an insurance renewal that flags a gap, a customer audit that won&rsquo;t sign off, or a facility that lands on a list it didn&rsquo;t know it was on.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This year that list got longer. OSHA renewed its National Emphasis Program on warehousing and distribution center operations through a directive effective July 31, 2026, and stretched the enforcement window from three years to five. A whole category of operator now sits under a standing target instead of a one-time sweep.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Penalty math has changed the incentive too. Maximum fines for a willful or repeat violation reached $165,514 this year, the highest they&rsquo;ve ever been, with a facility&rsquo;s clean history or size the main lever left to bring that number down. That&rsquo;s a figure a plant manager can put in front of a CFO. It doesn&rsquo;t show up on paper until the inspector is already in the building.
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
            By the time the citation arrives, the company didn&rsquo;t have a compliance problem anymore, it had a legal one. The consultant&rsquo;s job is to get there before that happens.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            So the real signal isn&rsquo;t the fine. It&rsquo;s the moment a facility gets named under an emphasis program, wins a new customer whose contract requires a safety audit, or has a near-miss serious enough to change how leadership thinks about risk, without yet becoming a number. That&rsquo;s the window a consultant is useful in, before the inspector&rsquo;s report exists, not after.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Which is also why the good consultants are hard to find in the moment a company actually needs one. They&rsquo;re not doing outbound; they&rsquo;re doing the work. Somebody has to be the one who knows both which businesses just crossed into that window, and which providers still have room to take the call.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#6b7280", marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            GarvinLabs connects businesses with an emerging OSHA or safety-compliance need with the consultants who can close the gap before it becomes a citation.
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
