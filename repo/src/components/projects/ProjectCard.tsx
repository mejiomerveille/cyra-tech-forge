import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import { useLanguage } from "@/i18n/LanguageProvider";

const categoryClass = {
  Software: "bg-brand-sky-soft text-primary",
  "Connected hardware": "bg-brand-violet-soft text-brand-violet",
  Design: "bg-brand-pink-soft text-brand-magenta-strong",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const p = t.projects;
  const item = p.projectItems[index];

  return (
    <article className="group flex min-h-[405px] flex-col overflow-hidden rounded-card border border-border bg-card shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="aspect-[1.82/1] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={item ? item.imageAlt : project.imageAlt}
          width={1104}
          height={608}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
        <span className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold leading-none ${categoryClass[project.category]}`}>
          {project.category}
        </span>
        <h2 className="mt-3 text-[17px] font-extrabold leading-tight text-foreground">{item ? item.name : project.name}</h2>
        <p className="mt-2 line-clamp-3 text-[13px] leading-[1.55] text-muted-foreground">{item ? item.description : project.description}</p>
        <a
          href={`#${project.slug}`}
          onClick={(event) => event.preventDefault()}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-xs font-bold text-primary transition-opacity group-hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          aria-label={`${p.viewProject} ${item ? item.name : project.name}`}
        >
          {p.viewProject} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
