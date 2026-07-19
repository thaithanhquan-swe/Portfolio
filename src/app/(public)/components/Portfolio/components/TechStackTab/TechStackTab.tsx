import { techStack } from "@/data/portfolio.data";
import ScrollReveal from "@/components/motion/ScrollReveal";

function TechStackTab() {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
      {techStack.map((technology, index) => {
        const Icon = technology.icon;

        return (
          <ScrollReveal
            key={technology.name}
            direction={index % 2 === 0 ? "up" : "down"}
            delay={(index % 5) * 0.05}
            className="group flex aspect-square w-full max-w-32 flex-col items-center justify-center gap-3 rounded-[20px] border border-white/10 bg-[#181818]/90 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-[#202020] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:gap-4 sm:rounded-[26px]"
          >
            <Icon
              className={`text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl ${technology.className}`}
            />

            <span className="text-xs font-medium text-white/65 transition-colors group-hover:text-white">
              {technology.name}
            </span>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export default TechStackTab;
