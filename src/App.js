import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollRef = useRef(null);           // ✅ Define it here
  const sectionsRef = useRef([]);           // Optional: for snap navigation

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // ✅ Skip on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let index = 0;
    let isScrolling = false;

    const scrollToSection = (delta) => {
      if (isScrolling) return;
      isScrolling = true;

      index = Math.max(0, Math.min(index + delta, sectionsRef.current.length - 1));
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      scrollToSection(e.deltaY > 0 ? 1 : -1);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <Navbar scrollContainerRef={scrollRef} />

      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory"
      >
        <section ref={(el) => (sectionsRef.current[0] = el)} className="md:h-screen md:snap-start">
          <Hero />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)} className="md:h-screen md:snap-start">
          <About />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)} className="md:h-screen md:snap-start">
          <Projects />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)} className="md:h-screen md:snap-start">
          <Education />
        </section>
        <section ref={(el) => (sectionsRef.current[4] = el)} className="md:h-screen md:snap-start">
          <Skills />
        </section>
        <section ref={(el) => (sectionsRef.current[5] = el)} className="md:h-screen md:snap-start">
          <Contact />
        </section>
        <section ref={(el) => (sectionsRef.current[6] = el)} className="md:h-screen md:snap-start">
          <Footer scrollRef={scrollRef} />
        </section>
      </div>
    </div>
  );
}

export default App;
