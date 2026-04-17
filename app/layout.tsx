import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garvinlabs.vercel.app"),
  title: {
    default: "GarvinLabs | AI Consulting & Implementation for Lean Teams",
    template: "%s | GarvinLabs",
  },
  description:
    "GarvinLabs maps where AI fits in your business, then builds the systems. Fixed price. 2–4 week delivery. 25+ builds delivered. Start with a free AI teardown.",
  keywords: [
    "AI consulting",
    "AI implementation",
    "AI automation",
    "n8n consulting",
    "AI systems for SaaS",
    "AI systems for D2C",
    "AI agent development",
    "workflow automation",
    "AI strategy",
    "AI consulting India",
    "AI consulting Pune",
    "GarvinLabs",
    "Garvin Chanderia",
    "AI opportunity audit",
    "AI teardown",
    "AI consulting fixed price",
    "n8n automation India",
    "WhatsApp automation",
    "Shopify AI automation",
    "AI implementation freelancer",
  ],
  authors: [{ name: "Garvin Chanderia", url: "https://garvinlabs.vercel.app" }],
  creator: "Garvin Chanderia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://garvinlabs.vercel.app",
    siteName: "GarvinLabs",
    title: "GarvinLabs | AI Consulting & Implementation",
    description:
      "I help modern teams find where AI actually fits, then build the systems. Fixed price. No retainers. Start with a free teardown.",
    images: [
      {
        url: "/website-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs | AI Consulting & Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs | AI Consulting & Implementation",
    description:
      "I help modern teams find where AI fits, then build the systems. Start with a free teardown.",
    images: ["/website-images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://garvinlabs.vercel.app",
  },
  verification: {
    google: "c0xYu5MD9Yqhy96sjE-hCuOxN9ft2UKwOvCGdpsmioY",
  },
  icons: {
    icon: "/website-images/favicon.png",
    apple: "/website-images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full context" />
        <meta name="ai-content-declaration" content="human-created" />
      </head>
      <body>
        <JsonLd />
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
