import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

const TITLE = "Fashion brand AI photography process";
const DESCRIPTION =
  "A founder-led apparel brand needed campaign-ready photography without a studio shoot. I built a 7-step process, ICP through iteration, that gets AI-generated images to read as a real shoot instead of obviously synthetic.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies/ai-ugc-image-generation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/case-studies/ai-ugc-image-generation",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/case-studies/ai-ugc-image-generation/cover.png",
        width: 1200,
        height: 896,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    name: "Garvin Chanderia",
    url: "https://garvinlabs.com",
  },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/case-studies/ai-ugc-image-generation",
  },
  image: "https://garvinlabs.com/case-studies/ai-ugc-image-generation/cover.png",
};

export default function CaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>How do you generate AI product photography that doesn&apos;t look AI-generated?</strong>
        <p>
          For a founder-led apparel brand, I built a 7-step process: lock the ICP before
          generating anything, build a model document so identity holds across every shot, brief
          the product like a real photographer would (dimensions, fits, cuts), pull editorial
          references and align with the founder on the shot vision, lock poses and lighting and
          grading, generate every image with the full context loaded at once rather than a single
          prompt, then iterate 3 to 4 rounds against founder feedback. The tell in most AI product
          photography isn&apos;t the image model, it&apos;s a prompting process with no production
          discipline behind it.
        </p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <figure className="post-figure" style={{ marginTop: "2rem" }}>
          <Image
            src="/case-studies/ai-ugc-image-generation/cover.png"
            alt={TITLE}
            width={1200}
            height={896}
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <Link href="/case-studies" className="post-back">← Case studies</Link>
          <p className="post-tag">AI Content Production · Case Study</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            A founder-led apparel brand needed campaign-ready photography without booking a
            studio, a model, or a location. I built the process that got the output there.
          </p>
        </header>

        <div className="post-body">
          <p>
            Most AI-generated product shots have a tell within about two seconds: skin too
            smooth, hands slightly wrong, lighting that doesn&#39;t match the product, a pose no
            real photographer would ever call. A brand tries it once, gets something that reads
            as obviously synthetic, and goes back to booking real shoots.
          </p>
          <p>
            Most of that gap traces back to the prompting process, not the image model. A single
            detailed prompt, even a good one, produces one lucky image and nine that miss.
            Consistent, natural-looking output takes a real production process behind it, the
            same prep a photographer runs before a shoot.
          </p>

          <div className="case-alert-note">
            <span className="case-alert-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </span>
            <p>
              Brand name below is anonymized (&quot;a founder-led apparel brand&quot;). Every
              step, prompt structure, and image below is from real, paid client work.
            </p>
          </div>

          <h2>The situation</h2>
          <ul>
            <li>A founder-led apparel brand needed lifestyle and editorial photography for a product launch, on a timeline and budget that didn&#39;t fit a studio shoot</li>
            <li>An initial attempt at AI-generated images had already been tried and shelved, the output read as synthetic within a glance</li>
            <li>The founder had a specific editorial vision in mind (Vogue and Elle-adjacent), not a generic catalogue look</li>
          </ul>

          <blockquote>
            <p>What they needed: campaign-ready photography without a shoot.</p>
            <p>What I delivered: a 7-step generation process and a set of images that read as a real shoot on first look.</p>
          </blockquote>

          <h2>How I approached it</h2>
          <ol>
            <li><strong>Understood the ICP.</strong> Age, demographic, gender, ethnicity, colour palette, matched to the brand&#39;s actual customer, not a generic stock-model default.</li>
            <li><strong>Built a model document.</strong> A single reference file locking the model&#39;s identity (face shape, body type, skin tone, styling) so every image pointed back to the same source.</li>
            <li><strong>Documented the product.</strong> Dimensions, colours, SKUs, fits, cuts, angles, the same brief a real photographer would need before a shoot.</li>
            <li><strong>Aligned on shot expectations.</strong> Pulled reference imagery from Vogue, Elle, and comparable editorial sources, then sat with the founder directly to confirm the vision before generating anything.</li>
            <li><strong>Locked poses, props, lighting, and grading.</strong> Naturality lives in these details more than in the model&#39;s face.</li>
            <li><strong>Generated with full context loaded.</strong> Every prompt carried the ICP, model document, product spec, and shot reference together, not in isolation.</li>
            <li><strong>Iterated 3 to 4 rounds.</strong> Fine-tuned against founder feedback each round, usually on a detail (hand position, fabric fall, a light source), not the concept.</li>
          </ol>

          <figure className="post-figure">
            <Image
              src="/case-studies/ai-ugc-image-generation/flowchart.gif"
              alt="Animated flowchart of the 7-step process: ICP, model document, product spec, shot expectations, pose and lighting, full-context generation, and 3-4 iteration rounds, with the consequence of skipping the model-document or shot-expectations steps called out."
              width={920}
              height={920}
              unoptimized
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <p>
            Skipping the model document was the costliest shortcut to test: without it, every
            image in a set looked like a different person wearing similar clothes, worse for
            usable output than one clearly synthetic image, since it couldn&#39;t be assembled
            into a consistent-feeling set at all. Skipping the shot-expectations step produced
            images that were technically well-lit and well-composed but didn&#39;t match what the
            founder had in mind, which meant the iteration rounds got spent on a concept
            disagreement instead of a detail fix.
          </p>

          <h2>What shipped</h2>
          <p>Generated, not photographed. No studio, no camera, no model on a call sheet.</p>

          <figure className="post-figure">
            <Image
              src="/case-studies/ai-ugc-image-generation/example-editorial-stairs.png"
              alt="Solo editorial shot: a model in a white top and navy trousers descending a whitewashed outdoor staircase in hard daylight."
              width={1200}
              height={896}
              sizes="(max-width: 1024px) 100vw, 880px"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <p>
            Hard directional light, real shadow falloff on the stairs, a pose a photographer
            would actually direct rather than a default catalogue stance. The brief called for
            editorial, not catalogue, and step 5 is where that got enforced.
          </p>

          <figure className="post-figure">
            <Image
              src="/case-studies/ai-ugc-image-generation/example-lifestyle-duo.png"
              alt="Lifestyle duo shot: two models laughing together indoors in a sunlit room, one holding a mug, styled in a burgundy top and a rust-coloured dress."
              width={1200}
              height={896}
              sizes="(max-width: 1024px) 100vw, 880px"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <p>
            A genuine-feeling candid moment between two people is a harder ask than a single
            posed shot, expressions have to read as reactive, not performed. This is where
            iteration earned its keep: the first pass read a beat too posed.
          </p>

          <h2>What this doesn&#39;t claim</h2>
          <p>
            This covers the generation process and the images that shipped from it, not a claim
            that AI photography replaces a real shoot in every case. Motion-heavy campaign video
            and physical in-hand product detail still need a camera. Within the scope this
            process targets, catalogue and lifestyle stills, the output matched what a shoot
            would have delivered, without booking a studio, a model, or a location.
          </p>

        </div>

        <footer className="post-footer" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>To know more, contact:</p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn ↗
          </a>
        </footer>
      </article>
      <Footer />
    </main>
  );
}
