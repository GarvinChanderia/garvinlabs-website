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
  title: "Garvin Chanderia — Enterprise Architecture & AI Automation",
  description:
    "Enterprise Architecture Consultant and AI & automation practitioner. Building systems that replace manual ops. Writing about what it actually takes to implement AI that works.",
  metadataBase: new URL("https://garvinlabs.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Garvin Chanderia — Enterprise Architecture & AI Automation",
    description:
      "Enterprise Architecture Consultant and AI & automation practitioner. Building systems that replace manual ops.",
    url: "https://garvinlabs.com",
    siteName: "Garvin Chanderia",
    images: [
      {
        url: "/website-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garvin Chanderia — Enterprise Architecture & AI Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvin Chanderia — Enterprise Architecture & AI Automation",
    description:
      "Enterprise Architecture Consultant and AI & automation practitioner. Building systems that replace manual ops.",
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
