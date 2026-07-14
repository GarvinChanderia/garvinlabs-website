import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export type ResourceDocBullet = {
  text: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type ResourceDocConfig = {
  eyebrow: string;
  headline: React.ReactNode;
  lead: string;
  bullets: ResourceDocBullet[];
  coverImage: string;
  coverAlt: string;
  pdfHref: string;
};

export function ResourceDocPage({ config }: { config: ResourceDocConfig }) {
  const { eyebrow, headline, lead, bullets, coverImage, coverAlt, pdfHref } = config;

  return (
    <main>
      <Navbar />

      <div className="container section" style={{ maxWidth: 1020 }}>
        <div className="resource-doc-layout">
          <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="section-title">{headline}</h1>
            <p className="lead" style={{ marginTop: "1rem", maxWidth: 600 }}>
              {lead}
            </p>

            <ul className="report-bullets" style={{ marginTop: "2.25rem" }}>
              {bullets.map((b) => (
                <li key={b.text}>
                  <span className="report-bullet-dot" aria-hidden="true" />
                  <span>
                    {b.text} (
                    <a href={b.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {b.sourceLabel}
                    </a>
                    )
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card resource-doc-download">
            <Image
              src={coverImage}
              alt={coverAlt}
              width={260}
              height={337}
              style={{ display: "block", width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
            <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--ink)" }}>Get the PDF</p>
            <a
              href={pdfHref}
              download
              className="btn-primary btn-large"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
