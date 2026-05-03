import type { Metadata } from "next";
import { Figtree, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import Script from "next/script";

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
  title: "GarvinLabs | Architecting Agentic AI Systems",
  description: "I help scaling brands eliminate the 'Manual Tax' by installing intelligent decision layers. Specialized in AI Support Triage.",
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
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
      </body>
    </html>
  );
}
