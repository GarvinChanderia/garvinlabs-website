import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garvinlabs.vercel.app"),
  title: {
    default: "GarvinLabs — Conversion Optimization for Businesses Losing Customers to Bad Funnels",
    template: "%s | GarvinLabs",
  },
  description:
    "I help businesses convert more of the traffic they're already paying for by fixing their conversion flow. Landing page audits, funnel fixes, and CTA rewrites — delivered in 5-10 days.",
  keywords: [
    "conversion optimization",
    "landing page audit",
    "conversion rate optimization",
    "CRO specialist India",
    "funnel optimization",
    "landing page fixes",
    "conversion specialist Pune",
    "GarvinLabs",
    "Garvin Chanderia",
    "CTA optimization",
    "landing page teardown",
    "conversion audit",
    "funnel audit India",
    "increase conversion rate",
    "website not converting",
  ],
  authors: [{ name: "Garvin Chanderia", url: "https://garvinlabs.vercel.app" }],
  creator: "Garvin Chanderia",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://garvinlabs.vercel.app",
    siteName: "GarvinLabs",
    title: "GarvinLabs — Conversion Optimization Specialist",
    description:
      "Stop losing customers to a broken funnel. I audit your landing page, find the leaks, and fix them — in 5-10 days.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GarvinLabs — Conversion Optimization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs — Conversion Optimization Specialist",
    description:
      "Stop losing customers to a broken funnel. I audit your landing page, find the leaks, and fix them — in 5-10 days.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://garvinlabs.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full context" />
        <meta name="ai-content-declaration" content="human-created" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
