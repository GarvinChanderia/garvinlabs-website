import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garvinlabs.vercel.app"),
  title: {
    default: "GarvinLabs — Build. Automate. Scale.",
    template: "%s | GarvinLabs",
  },
  description:
    "Website development, n8n automation, software development, and AI consulting. We help businesses build revenue-ready digital systems. Based in Pune, India.",
  keywords: [
    "web development",
    "n8n automation",
    "software development",
    "AI consulting",
    "Pune",
    "India",
    "freelance developer",
    "SaaS development",
    "workflow automation",
    "Next.js",
    "GarvinLabs",
  ],
  authors: [{ name: "Garvin Chanderia", url: "https://garvinlabs.vercel.app" }],
  creator: "Garvin Chanderia",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://garvinlabs.vercel.app",
    siteName: "GarvinLabs",
    title: "GarvinLabs — Build. Automate. Scale.",
    description:
      "Website development, n8n automation, software development, and AI consulting for businesses ready to grow.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GarvinLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarvinLabs — Build. Automate. Scale.",
    description:
      "Website development, n8n automation, software development, and AI consulting for businesses ready to grow.",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
