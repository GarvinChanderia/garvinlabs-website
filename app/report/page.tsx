import type { Metadata } from "next";
import { Suspense } from "react";
import { ReportClient } from "./ReportClient";

export const metadata: Metadata = {
  title: "Free AI Support Business Case | GarvinLabs",
  description:
    "The pre-built AI Customer Support Business Case: written for D2C founders to share with leadership. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Support Business Case PDF",
  "description": "A comprehensive business case and ROI analysis for implementing AI support triage in D2C and SaaS companies.",
  "publisher": {
    "@type": "Organization",
    "name": "GarvinLabs"
  },
  "url": "https://garvinlabs.com/report"
};

export default function ReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Suspense fallback={null}>
        <ReportClient />
      </Suspense>
    </>
  );
}
