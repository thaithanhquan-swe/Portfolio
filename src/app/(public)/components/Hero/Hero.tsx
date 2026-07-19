import HeroPlasma from "./components/HeroPlasma/HeroPlasma";
import HeroTitle from "./components/HeroTile/HeroTile"
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-6rem)] scroll-mt-20 pb-12 sm:pb-16 lg:min-h-[calc(100vh-7.5rem)] lg:pb-20"
    >
      <ScrollReveal direction="left" className="relative z-10 lg:max-w-[52%]">
        <HeroTitle />
      </ScrollReveal>

      <HeroPlasma />
    </section>
  );
}
