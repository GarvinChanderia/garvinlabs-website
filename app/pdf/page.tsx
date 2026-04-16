import type { Metadata } from "next";
import { Suspense } from "react";
import { PDFClient } from "./PDFClient";

export const metadata: Metadata = {
  title: "Free Teardown | GarvinLabs",
  robots: { index: false, follow: true },
};

export default function PDFPage() {
  return (
    <Suspense fallback={null}>
      <PDFClient />
    </Suspense>
  );
}
