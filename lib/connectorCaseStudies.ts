// Connector case studies: myoProcess white-label case studies, shown as a GarvinLabs x myoProcess partnership (approved by Saad, 2026-09-22).
// Text is the original wording with partnership edits in content/connector-case-studies/<slug>.md; rendered by app/case-studies/[slug]/page.tsx.

import fs from "node:fs";
import path from "node:path";
import { parseCaseMarkdown, type Block } from "@/components/CaseMarkdown";

export type ConnectorCaseStudy = {
  slug: string;
  client: string;
  kind: "Routed introductions" | "Outbound system";
  industry: string;
};

export const PARTNER_NAME = "myoProcess";

export const CONNECTOR_CASE_STUDIES: ConnectorCaseStudy[] = [
  { slug: "regent-peak-wealth-advisors", client: "Regent Peak Wealth Advisors", kind: "Routed introductions", industry: "Wealth management" },
  { slug: "respilon", client: "RESPILON", kind: "Routed introductions", industry: "Advanced materials" },
  { slug: "clean-seas-west-virginia", client: "Clean-Seas West Virginia", kind: "Routed introductions", industry: "Industrial recycling" },
  { slug: "lasting-blueprint-productions", client: "Lasting Blueprint Productions", kind: "Routed introductions", industry: "Video production" },
  { slug: "vention", client: "Vention", kind: "Outbound system", industry: "Manufacturing automation" },
  { slug: "crawford-thomas-recruiting", client: "Crawford Thomas Recruiting", kind: "Outbound system", industry: "Recruitment" },
  { slug: "connect-group", client: "Connect Group", kind: "Outbound system", industry: "Recruitment" },
  { slug: "forplayers", client: "ForPlayers", kind: "Outbound system", industry: "Esports" },
  { slug: "elate-staffing", client: "Elate Staffing Solutions", kind: "Outbound system", industry: "Recruitment" },
  { slug: "hippocratic-ai", client: "Hippocratic AI", kind: "Outbound system", industry: "Healthcare AI" },
  { slug: "helpcare-ai", client: "HelpCare AI", kind: "Outbound system", industry: "Healthcare AI" },
  { slug: "fabulingua", client: "FabuLingua", kind: "Outbound system", industry: "EdTech" },
];

const IMAGES: Record<string, Record<string, { src: string; alt: string }>> = {
  "crawford-thomas-recruiting": {
    image1: { src: "/case-studies/crawford-thomas-recruiting/ct_image1.png", alt: "$123,039 in new revenue" },
    image2: { src: "/case-studies/crawford-thomas-recruiting/ct_image2.png", alt: "Prospect reply: \"I am almost sold on this offer, interesting approach, send over your calendar I'll book a meeting.\"" },
    image3: { src: "/case-studies/crawford-thomas-recruiting/ct_image3.png", alt: "Prospect reply asking about availability next week to discuss working together" },
  },
};

const plain = (s: string) =>
  s
    .replace(/\*\*|\\(?=[+\-!~&.#_()[\]])/g, "")
    .replace(/^#+\s*/, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();

export type LoadedCaseStudy = ConnectorCaseStudy & {
  title: string;
  summary: string;
  blocks: Block[];
};

export function loadConnectorCaseStudy(slug: string): LoadedCaseStudy | undefined {
  const meta = CONNECTOR_CASE_STUDIES.find((cs) => cs.slug === slug);
  if (!meta) return undefined;
  const md = fs.readFileSync(path.join(process.cwd(), "content/connector-case-studies", `${slug}.md`), "utf8");
  const lines = md.split("\n");
  const titleIdx = lines.findIndex((l) => l.trim());
  const title = plain(lines[titleIdx]);
  const blocks = parseCaseMarkdown(lines.slice(titleIdx + 1).join("\n"), IMAGES[slug]);
  const firstPara = blocks.find((b) => b.type === "p");
  const summary = firstPara && firstPara.type === "p" ? plain(firstPara.lines.join("").replace(/\n/g, " ")) : "";
  return { ...meta, title, summary, blocks };
}
