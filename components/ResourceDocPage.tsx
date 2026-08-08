import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceEmailGate } from "@/components/ResourceEmailGate";
import { EMAIL, MAILTO, LINKEDIN } from "@/lib/constants";
import { isResourceSlug } from "@/lib/resourceSlugs";

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
  const rawSlug = pdfHref.split('/').pop()?.replace(/\.pdf$/, '') ?? '';
  const trackedPdfHref = isResourceSlug(rawSlug) ? `/api/pdf-download/${rawSlug}` : pdfHref;

  return (
    <main>
      <Navbar />

      <section className="container section" aria-label={eyebrow} style={{ maxWidth: 1020 }}>
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
              sizes="(max-width: 820px) 90vw, 300px"
              style={{ display: "block", width: "100%", height: "auto", borderRadius: "var(--radius)" }}
            />
            <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--ink)" }}>Get the PDF</p>
            {isResourceSlug(rawSlug) ? (
              <ResourceEmailGate slug={rawSlug} downloadHref={trackedPdfHref} />
            ) : (
              <a
                href={trackedPdfHref}
                download
                className="btn-primary btn-large"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download PDF
              </a>
            )}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "var(--border)" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.975rem", marginBottom: "1rem" }}>
            Sound familiar? Here&apos;s where to find me.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href={MAILTO} className="social-chip">
              {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-chip">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
