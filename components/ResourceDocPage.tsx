import Image from "next/image";
import { Footer } from "@/components/Footer";

export type ResourceDocConfig = {
  eyebrow: string;
  headline: React.ReactNode;
  lead: string;
  bullets: string[];
  coverImage: string;
  coverAlt: string;
  pdfHref: string;
};

export function ResourceDocPage({ config }: { config: ResourceDocConfig }) {
  const { eyebrow, headline, lead, bullets, coverImage, coverAlt, pdfHref } = config;

  return (
    <>
      <nav className="report-nav">
        <a href="/" className="report-logo" aria-label="GarvinLabs home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-wordmark.svg" alt="GarvinLabs" height="20" style={{ display: "block" }} />
        </a>
        <a href="/resources" className="report-back">
          ← Back to resources
        </a>
      </nav>

      <main className="report-main">
        <div className="report-split">
          <div className="report-copy">
            <span className="report-eyebrow">
              <span className="report-eyebrow-dot" />
              {eyebrow}
            </span>
            <h1 className="report-headline">{headline}</h1>
            <p className="report-lead">{lead}</p>
            <ul className="report-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="report-bullet-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="report-gate">
            <div className="report-cover-wrap">
              <Image
                src={coverImage}
                alt={coverAlt}
                width={320}
                height={415}
                priority
                className="report-cover-img"
              />
            </div>

            <a href={pdfHref} download className="btn-primary btn-large" style={{ width: "fit-content" }}>
              Download PDF
            </a>
            <p className="report-fine" style={{ marginTop: 0 }}>
              Free, no email required. Questions on how this maps to your setup? Reach out any time.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
