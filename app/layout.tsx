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
    default: "GarvinLabs — Automation & Lead Generation Systems for Growing Businesses",
    template: "%s | GarvinLabs",
  },
  description:
    "GarvinLabs builds n8n automation workflows and AI-powered lead generation engines for businesses in India. Eliminate manual work, capture more leads, and grow revenue without adding headcount.",
  keywords: [
    "n8n automation",
    "lead generation",
    "automation workflows",
    "AI lead generation India",
    "business automation Pune",
    "n8n developer India",
    "WhatsApp automation",
    "CRM automation",
    "lead generation engine",
    "workflow automation India",
    "GarvinLabs",
    "Garvin Chanderia",
    "automation consultant Pune",
    "outbound lead generation",
    "sales automation India",
  ],
  authors: [{ name: "Garvin Chanderia", url: "https://garvinlabs.vercel.app" }],
  creator: "Garvin Chanderia",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://garvinlabs.vercel.app",
    siteName: "GarvinLabs",
    title: "GarvinLabs — Automation & Lead Generation Systems",
    description:
      "n8n automation workflows and AI-powered lead generation engines for businesses that want to grow without adding headcount.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GarvinLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs — Automation & Lead Generation Systems",
    description:
      "n8n automation workflows and AI-powered lead generation engines for businesses that want to grow without adding headcount.",
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
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
