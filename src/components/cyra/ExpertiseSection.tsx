import { Cloud, Code2, Cpu, Radio, UsersRound, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

const meta: { icon: LucideIcon; tone: string }[] = [
  { icon: Code2, tone: "icon-sky" },
  { icon: Radio, tone: "icon-blue" },
  { icon: Cpu, tone: "icon-pink" },
  { icon: Cloud, tone: "icon-sky" },
  { icon: UsersRound, tone: "icon-violet" },
];

export function ServiceCard({ title, description, icon: Icon, tone }: { title: string; description: string; icon: LucideIcon; tone: string }) {
  return (
    <article className="service-card">
      <span className={`grid size-14 place-items-center rounded-full ${tone}`}><Icon className="size-7" strokeWidth={1.7} /></span>
      <h3 className="mt-5 min-h-12 font-display text-[0.95rem] font-bold leading-5 text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}

export function ExpertiseSection({ withHeading = true }: { withHeading?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-20 border-y border-border bg-secondary py-20 md:py-24">
      <div className="site-container">
        {withHeading && <SectionHeading eyebrow={t.expertise.eyebrow} title={t.expertise.title} />}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.expertise.services.map((service, index) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={meta[index].icon} tone={meta[index].tone} />
          ))}
        </div>
      </div>
    </section>
  );
}
