import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Why from "@/components/Why";
import Calculator from "@/components/Calculator";
import Projects from "@/components/Projects";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Why />
        <Calculator />
        <Projects />
        <Faq />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
