import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import SmoothScrollAnimations from "@/app/components/SmoothScrollAnimations";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScrollAnimations>
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </SmoothScrollAnimations>
    </>
  );
}
