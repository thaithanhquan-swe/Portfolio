"use client";

import { TypeAnimation } from "react-type-animation";

const technologies = ["TypeScript", "React.js", "Next.js", "Tailwind", "Spring Boot"];

function HeroTitle() {
  return (
    <div className="max-w-150 space-y-4 sm:space-y-5 lg:space-y-6">
      {/* Availability */}
      <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-white/35 uppercase sm:text-xs sm:tracking-[0.35em]">
        <span className="size-1 rounded-full bg-white/60" />
        <span>Available for work</span>
      </div>

      {/* Title */}
      <div className="leading-[0.88]">
        <h1 className="text-[clamp(2.65rem,13vw,4rem)] font-black sm:text-6xl lg:text-7xl">Fullstack</h1>

        <h1 className="bg-linear-to-b from-white/80 to-white/40 bg-clip-text text-[clamp(2.65rem,13vw,4rem)] font-black text-transparent sm:text-6xl lg:text-7xl">
          Developer
        </h1>
      </div>

      {/* Typing */}
      <div className="min-h-6 font-mono text-sm text-white/60 sm:text-base lg:text-lg">
        <TypeAnimation
          sequence={[
            "Intern Developer_",
            1500,
            "Fullstack Developer_",
            1500,
            "Happy coding!_",
            1500,
          ]}
          speed={60}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
        I build modern full-stack web applications using React, Next.js,
        TypeScript, and Spring Boot, focusing on performance, scalability, and
        exceptional user experiences.
      </p>

      {/* Technology tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 font-mono text-[10px] tracking-wide text-white/45 transition-colors duration-200 hover:border-white/25 hover:text-white/70 sm:px-4 sm:py-2 sm:text-xs"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Bottom links */}
      <div className="space-y-3 pt-1 font-mono text-xs text-white/30 sm:pt-2 sm:text-sm">
        <a
          href="#portfolio"
          className="group flex w-fit items-center gap-3 transition-colors duration-200 hover:text-white/65"
        >
          <span className="transition-transform duration-200 group-hover:translate-y-1">
            ↓
          </span>
          <span>explore my work below</span>
        </a>

        <a
          href="#contact"
          className="group flex w-fit items-center gap-3 transition-colors duration-200 hover:text-white/65"
        >
          <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
          <span>open to internship & freelance opportunities</span>
        </a>
      </div>
    </div>
  );
}

export default HeroTitle;
