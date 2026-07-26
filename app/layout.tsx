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
  title: "GarvinLabs: AI modernization for retail brands that move too slow",
  description:
    "It could be support, ops reporting, fulfilment, or inventory. I map how the work actually happens, then build the automation around it. 14 days from discovery to a live system.",
  keywords: ["Support Triage Automation", "Customer Support Automation", "AI Modernization for D2C", "AI Modernization", "SaaS Support Automation", "GarvinLabs"],
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarvinLabs: AI modernization for retail brands that move too slow",
    description:
      "It could be support, ops reporting, fulfilment, or inventory. I map how the work actually happens, then build the automation around it. 14 days from discovery to a live system.",
    url: "https://garvinlabs.com",
    siteName: "GarvinLabs",
    images: [
      {
        url: "/hero-diagram.png",
        width: 1200,
        height: 630,
        alt: "GarvinLabs: AI modernization for retail brands that move too slow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs: AI modernization for retail brands that move too slow",
    description:
      "It could be support, ops reporting, fulfilment, or inventory. I map how the work actually happens, then build the automation around it. 14 days from discovery to a live system.",
    images: ["/hero-diagram.png"],
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
