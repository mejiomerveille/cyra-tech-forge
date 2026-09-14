import { Cloud, Code2, Cpu, Radio, UsersRound, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Service = { title: string; description: string; icon: LucideIcon; tone: string };
const services: Service[] = [
  { title: "Software Development", description: "Web & Mobile Applications", icon: Code2, tone: "icon-sky" },
  { title: "IoT & Connected Systems", description: "Smart connected solutions", icon: Radio, tone: "icon-blue" },
  { title: "Hardware Engineering", description: "Prototyping & embedded systems", icon: Cpu, tone: "icon-pink" },
  { title: "Cloud & Infrastructure", description: "Scalable digital infrastructure", icon: Cloud, tone: "icon-sky" },
  { title: "Technical Consulting", description: "From concept to deployment", icon: UsersRound, tone: "icon-violet" },
];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <span className={`grid size-14 place-items-center rounded-full ${service.tone}`}><Icon className="size-7" strokeWidth={1.7} /></span>
      <h3 className="mt-5 min-h-12 font-display text-[0.95rem] font-bold leading-5 text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
    </article>
  );
}

export function ExpertiseSection() {
  return (
    <section id="solutions" className="scroll-mt-20 border-y border-border bg-secondary py-20 md:py-24">
      <div className="site-container">
        <SectionHeading eyebrow="Nos domaines d’expertise" title="What we do" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
  );
}