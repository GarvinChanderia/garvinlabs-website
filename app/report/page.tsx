import type { Metadata } from "next";
import { Suspense } from "react";
import { ReportClient } from "./ReportClient";

export const metadata: Metadata = {
  title: "Free Business Case PDF | GarvinLabs",
  description:
    "The pre-built AI Customer Support Business Case — written for D2C founders to share with leadership. Get it free, straight to your inbox.",
  robots: { index: false, follow: true },
};

export default function ReportPage() {
  return (
    <Suspense fallback={null}>
      <ReportClient />
    </Suspense>
  );
}
