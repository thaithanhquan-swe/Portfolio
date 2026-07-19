import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div className="relative pt-24 sm:pt-28 lg:pt-30">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
