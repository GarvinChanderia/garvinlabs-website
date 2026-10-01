import type { Metadata } from "next";
import { Figtree, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GarvinLabs: qualified buyers for service providers, introduced while they're actively buying",
  description:
    "We connect businesses with qualified service providers when they're actively looking to buy: companies facing OSHA citations, signing new commercial leases or expanding warehouses, introduced directly to safety consultants, fit-out contractors and automation integrators.",
  keywords: ["Business Connector", "Qualified Introductions", "OSHA Compliance Consultant Leads", "Tenant Improvement", "Commercial Fit-Out Contractor Leads", "Warehouse Automation Integrator Leads", "GarvinLabs"],
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarvinLabs: qualified buyers for service providers, introduced while they're actively buying",
    description:
      "We connect businesses with qualified service providers when they're actively looking to buy: companies facing OSHA citations, signing new commercial leases or expanding warehouses, introduced directly to safety consultants, fit-out contractors and automation integrators.",
    url: "https://garvinlabs.com",
    siteName: "GarvinLabs",
    images: [
      {
        url: "/hero-connector.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs: qualified buyers for service providers, introduced while they're actively buying",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs: qualified buyers for service providers, introduced while they're actively buying",
    description:
      "We connect businesses with qualified service providers when they're actively looking to buy: companies facing OSHA citations, signing new commercial leases or expanding warehouses, introduced directly to safety consultants, fit-out contractors and automation integrators.",
    images: ["/hero-connector.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
        {/* Leadsy / vtag.ai visitor identification pixel */}
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="s6UEcSGKlR3enQ5W"
          data-version="062024"
        />
      </head>
      <body className={`${figtree.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
