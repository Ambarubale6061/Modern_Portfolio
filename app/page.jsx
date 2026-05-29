import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Animations />
    </>
  );
}
