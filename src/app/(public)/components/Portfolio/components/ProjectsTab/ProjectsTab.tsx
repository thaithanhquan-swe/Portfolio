import { projects } from "@/data/portfolio.data";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollReveal from "@/components/motion/ScrollReveal";


function ProjectsTab() {
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ScrollReveal
          key={project.id}
          direction={index % 2 === 0 ? "left" : "right"}
          delay={(index % 3) * 0.07}
        >
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}

export default ProjectsTab;
