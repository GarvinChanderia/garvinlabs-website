import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Interactive AI Agent Demo | GarvinLabs",
  description:
    "Test-drive custom AI agents built by GarvinLabs. Interactive playgrounds for Customer Support Triage, CRO Audits, and Personalized Outreach engines.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <Suspense fallback={null}>
      <DemoClient />
    </Suspense>
  );
}
