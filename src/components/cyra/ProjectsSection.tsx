import { ArrowRight } from "lucide-react";
import connectedAgriculture from "@/assets/connected-agriculture.jpg";
import smartOperations from "@/assets/smart-operations.jpg";
import industrialIot from "@/assets/industrial-iot.jpg";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { category: "IoT & Connected Systems", title: "Connected Agriculture", description: "IoT monitoring and intelligent field systems.", image: connectedAgriculture, tone: "badge-sky", alt: "Station IoT solaire surveillant une exploitation agricole africaine" },
  { category: "Software Development", title: "Smart Operations Platform", description: "Software for managing complex business processes.", image: smartOperations, tone: "badge-blue", alt: "Ordinateur et téléphone affichant une plateforme d’opérations" },
  { category: "Hardware Engineering", title: "Industrial IoT Prototype", description: "Connected hardware and real-time monitoring.", image: industrialIot, tone: "badge-pink", alt: "Prototype de carte électronique industrielle connectée" },
];

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card group">
      <div className="aspect-[5/3] overflow-hidden bg-muted">
        <img src={project.image} alt={project.alt} loading="lazy" width={1200} height={720} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
      </div>
      <div className="relative px-5 pb-6 pt-4">
        <span className={`project-badge ${project.tone}`}>{project.category}</span>
        <h3 className="mt-3 font-display text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 max-w-[85%] text-sm leading-6 text-muted-foreground">{project.description}</p>
        <span className="project-arrow" aria-hidden="true"><ArrowRight className="size-4" /></span>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projets" className="scroll-mt-20 bg-background py-20 md:py-24">
      <div className="site-container">
        <SectionHeading eyebrow="Nos projets en cours" title="Technology built for the real world." action={<a href="#projets" className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-accent md:flex">Voir tous les projets <ArrowRight className="size-4" /></a>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}