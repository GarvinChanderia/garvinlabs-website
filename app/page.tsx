import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Challenges } from "@/components/Challenges";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Outcomes } from "@/components/Outcomes";
import { Testimonials } from "@/components/Testimonials";
import { WhoFor } from "@/components/WhoFor";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <Process />
        <Outcomes />
        <Testimonials />
        <WhoFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
