import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { PDFs } from "@/components/PDFs";
import { Offers } from "@/components/Offers";
import { Guarantee } from "@/components/Guarantee";
import { Proof } from "@/components/Proof";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { MobileBar } from "@/components/MobileBar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problems />
        <PDFs />
        <Offers />
        <Guarantee />
        <Proof />
        <Process />
        <FAQ />
        <CTA />
        <MobileBar />
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
