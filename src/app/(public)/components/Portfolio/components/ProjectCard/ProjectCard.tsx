import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio.types";
import Link from "next/link";


interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
   <article className="group mx-auto flex h-full w-full max-w-95 flex-col rounded-[20px] border border-white/10 bg-[#181818]/90 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1d1d1d] sm:rounded-[22px] sm:p-3">
      <Link href={project.liveUrl} target="_blank" className="relative aspect-video overflow-hidden rounded-[16px] border border-white/10 bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 50vw, 380px"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col px-1 pt-2">
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm leading-6 text-white/45">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/3 px-3 py-1 font-mono text-[11px] text-white/45"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-5 min-[400px]:flex-row min-[400px]:items-end min-[400px]:justify-between sm:pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-white/25">No Live Demo</span>
          )}

          {project.detailsUrl && (
            <a
              href={project.detailsUrl}
              target="_blank"
              rel="noreferrer"
              className="group/button flex h-10 items-center justify-center gap-2 rounded-full bg-white/10 px-5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Details

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover/button:translate-x-1"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
