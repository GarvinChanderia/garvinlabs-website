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
  title: "GarvinLabs: AI Support Triage & Automation",
  description:
    "GarvinLabs builds AI triage systems for D2C and SaaS brands. Automatically classify, prioritize, and auto-reply to customer support tickets.",
  keywords: ["AI Support Triage", "Customer Support Automation", "Agentic AI", "D2C Support Automation", "SaaS Support Automation", "n8n", "GarvinLabs"],
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarvinLabs: AI Support Triage & Automation",
    description:
      "GarvinLabs builds AI triage systems for D2C and SaaS brands. Automatically classify, prioritize, and auto-reply to customer support tickets.",
    url: "https://garvinlabs.com",
    siteName: "GarvinLabs",
    images: [
      {
        url: "/website-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs: AI Support Triage & Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs: AI Support Triage & Automation",
    description:
      "GarvinLabs builds AI triage systems for D2C and SaaS brands. Automatically classify, prioritize, and auto-reply to customer support tickets.",
    images: ["/website-images/og-image.png"],
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
