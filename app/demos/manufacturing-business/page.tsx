import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Business — Ops Transformation",
  description: "How GarvinLabs mapped 26 business processes at a heavy engineering manufacturer and delivered a prioritised AI transformation roadmap.",
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="case-hero">
          <div className="container">
            <Link href="/demos" className="case-back reveal">
              ← All demos
            </Link>
            <div className="reveal" style={{ maxWidth: 760, marginTop: 24 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Consulting · Manufacturing
              </span>
              <h1 className="h2" style={{ marginTop: 18 }}>
                Manufacturing Business
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                A heavy engineering manufacturer with experienced people, clear processes — and a 30-day gap between how long jobs took and how long they should. We found it, mapped it, and built the roadmap to close it.
              </p>
            </div>
            <div className="case-meta reveal">
              <div className="case-meta-item">
                <div className="case-meta-label">Sector</div>
                <div className="case-meta-value">Heavy Engineering / Manufacturing</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Type</div>
                <div className="case-meta-value">AI Consulting & Ops Audit</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Processes mapped</div>
                <div className="case-meta-value">26 end-to-end</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Cycle time gap</div>
                <div className="case-meta-value">30–45 days recoverable</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-body">
          <div className="container case-content">
            <div className="case-block reveal">
              <h2 className="case-section-title">The Problem</h2>
              <p>
                The client operates two manufacturing plants producing structural steel fabrications. Their production cycle was running 55–70 days from order to dispatch. The target should have been 25–28 days.
              </p>
              <p>
                The Director knew something was wrong. But without visibility into where jobs were at any given moment, the delays only became visible when they were already critical. By then, the options were either rush the job and risk quality, or absorb the delay and strain the payment cycle.
              </p>
              <p>
                The problem wasn't the team. It wasn't the machines. It was three invisible failures cascading through every job: no tracking, no documentation at point of work, and no material stock enforcement. Each one made the others worse.
              </p>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">What We Did</h2>
              <p>
                We conducted a full operations audit — not a surface-level review, but a ground-up mapping of every process from initial customer enquiry to final payment collection.
              </p>
              <ul className="case-list">
                <li>
                  <strong>Business process map</strong> — 26 process blocks documented end-to-end across both plants, covering every stage from RFP and e-auction through fabrication, surface finishing, quality checks, dispatch, and payment.
                </li>
                <li>
                  <strong>Time analysis</strong> — Ideal vs. actual time for each process, with variance flags and root cause identification. This surfaced where days were being lost and why.
                </li>
                <li>
                  <strong>Issues register</strong> — Seven operational issues documented with their downstream consequences, mapped back to the specific process blocks they were creating delays in.
                </li>
                <li>
                  <strong>Prioritised transformation roadmap</strong> — A four-priority action plan sequenced by impact and effort: from immediate tracking fixes in week 1, to structural changes in month 2. No generic advice — specific to the client's org, people, and constraints.
                </li>
                <li>
                  <strong>AI automation opportunities</strong> — Four specific automation builds identified (job status dashboard, payment clock tracker, material reorder alert, email template automation), each with effort estimates and expected value.
                </li>
              </ul>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">The Result</h2>
              <p>
                A complete operations consulting report — covering process documentation, root cause analysis, and a sequenced implementation roadmap — delivered to the Director and management team.
              </p>
              <p>
                The analysis identified that implementing the first two priority phases alone could recover 10–25 days from the production cycle. The full roadmap, if executed, brings the cycle from 55–70 days to a target of 30–40 days — allowing the business to theoretically run significantly more jobs per year on the same physical capacity.
              </p>
              <p>
                The engagement also produced 26 individual process documents, a responsibility matrix, and an org structure review — collateral the business can use operationally well beyond the consulting engagement itself.
              </p>
            </div>

            <div className="case-cta reveal">
              <p>Running a business with delays you can't quite locate?</p>
              <a href="/#cta" className="btn btn-green btn-lg">
                Book a free diagnostic
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
