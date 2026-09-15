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
  title: "GarvinLabs: connecting businesses to the specialists who solve their exact moment of need",
  description:
    "We connect businesses at the exact moment a new need appears (a new obligation, a new space, or a broken process) with the specialists built to solve it, before the window closes. GarvinLabs also builds AI modernization systems for D2C retail brands: support, ops reporting, fulfilment, and inventory.",
  keywords: ["Business Connector", "Tenant Improvement", "Build-Out Contractor Matching", "Compliance Consultant Matching", "Commercial Fit-Out", "GarvinLabs", "AI Modernization for D2C", "Support Triage Automation", "AI Modernization Partner"],
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarvinLabs: connecting businesses to the specialists who solve their exact moment of need",
    description:
      "We connect businesses at the exact moment a new need appears (a new obligation, a new space, or a broken process) with the specialists built to solve it, before the window closes. GarvinLabs also builds AI modernization systems for D2C retail brands.",
    url: "https://garvinlabs.com",
    siteName: "GarvinLabs",
    images: [
      {
        url: "/hero-connector.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs: connecting businesses to the specialists who solve their exact moment of need",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs: connecting businesses to the specialists who solve their exact moment of need",
    description:
      "We connect businesses at the exact moment a new need appears (a new obligation, a new space, or a broken process) with the specialists built to solve it, before the window closes. GarvinLabs also builds AI modernization systems for D2C retail brands.",
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
      </head>
      <body className={`${figtree.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
