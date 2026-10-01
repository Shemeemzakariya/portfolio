import { useCallback, useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Services from "./components/Services";
import Explorations from "./components/Explorations";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import { initScroll, prefersReducedMotion } from "./lib/scroll";

export default function App() {
  const [loading, setLoading] = useState(() => !prefersReducedMotion());
  const done = useCallback(() => setLoading(false), []);

  useEffect(() => initScroll(), []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={done} />}
      <Navbar />
      <main>
        <Hero ready={!loading} />
        <Works />
        <Services />
        <Explorations />
        <Process />
        <Stats />
        <Testimonials />
        <About />
      </main>
      <Contact />
    </>
  );
}
