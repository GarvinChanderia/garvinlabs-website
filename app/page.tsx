import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { WhoFor } from "@/components/WhoFor";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <WhoFor />
        <Packages />
        <Process />
        <Proof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
