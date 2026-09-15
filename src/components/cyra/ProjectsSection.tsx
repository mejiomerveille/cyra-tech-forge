import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import connectedAgriculture from "@/assets/connected-agriculture.jpg";
import smartOperations from "@/assets/smart-operations.jpg";
import industrialIot from "@/assets/industrial-iot.jpg";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

const visuals = [
  { image: connectedAgriculture, tone: "badge-sky", alt: "Station IoT solaire surveillant une exploitation agricole africaine" },
  { image: smartOperations, tone: "badge-blue", alt: "Ordinateur et téléphone affichant une plateforme d’opérations" },
  { image: industrialIot, tone: "badge-pink", alt: "Prototype de carte électronique industrielle connectée" },
];

export function ProjectCard({ index, category, title, description }: { index: number; category: string; title: string; description: string }) {
  const visual = visuals[index];
  return (
    <article className="project-card group">
      <div className="aspect-[5/3] overflow-hidden bg-muted">
        <img src={visual.image} alt={visual.alt} loading="lazy" width={1200} height={720} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
      </div>
      <div className="relative px-5 pb-6 pt-4">
        <span className={`project-badge ${visual.tone}`}>{category}</span>
        <h3 className="mt-3 font-display text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 max-w-[85%] text-sm leading-6 text-muted-foreground">{description}</p>
        <span className="project-arrow" aria-hidden="true"><ArrowRight className="size-4" /></span>
      </div>
    </article>
  );
}

export function ProjectsSection({ withHeading = true }: { withHeading?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-20 bg-background py-20 md:py-24">
      <div className="site-container">
        {withHeading && (
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            action={
              <Link to="/projets" className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-accent md:flex">
                {t.projects.all} <ArrowRight className="size-4" />
              </Link>
            }
          />
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={project.title} index={index} category={project.category} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
