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
        <Hero />       {/* Clarity   — what you do, who it's for */}
        <Problems />   {/* Pain      — cost of inaction */}
        <Process />    {/* Solution  — how you approach it */}
        <Proof />      {/* Proof     — stats + testimonials */}
        <Offers />     {/* Offer     — pricing */}
        <Guarantee />  {/* De-risk   — right after the ask */}
        <PDFs />       {/* Nurture   — for those not ready to buy */}
        <CTA />        {/* Action    — hard close */}
        <FAQ />
        <MobileBar />
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
