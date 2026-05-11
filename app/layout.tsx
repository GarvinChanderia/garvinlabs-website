import type { Metadata } from "next";
import { Figtree, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
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
  title: "GarvinLabs — AI Customer Support Automation for D2C Brands",
  description:
    "Replace manual support sorting with AI. Every ticket read, prioritised, and 60% auto-replied within 2 minutes. Built for D2C brands processing 100+ support emails a day. Book a free 20-min call.",
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarvinLabs — AI Customer Support Automation for D2C Brands",
    description:
      "Replace manual support sorting with AI. Every ticket read, prioritised, and 60% auto-replied within 2 minutes. Built for D2C brands.",
    url: "https://garvinlabs.com",
    siteName: "GarvinLabs",
    images: [
      {
        url: "/website-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs — AI Customer Support Automation for D2C Brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs — AI Customer Support Automation for D2C Brands",
    description:
      "Replace manual support sorting with AI. Every ticket read, prioritised, and 60% auto-replied within 2 minutes.",
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
      <body className={`${figtree.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
        <SchemaOrg />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
