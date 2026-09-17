import { type ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  ChartNoAxesCombined,
  CloudCog,
  Globe2,
  MousePointer2,
  PanelsTopLeft,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

import professionalImage from "@/assets/chimsoy-professional.jpg";
import { useLanguage } from "@/i18n/LanguageProvider";

const valuesIcons = [Zap, Users, Globe2, BarChart3];

const serviceIcons: ComponentType<{ className?: string; strokeWidth?: number }>[] = [
  Smartphone,
  PanelsTopLeft,
  CloudCog,
  MousePointer2,
  ChartNoAxesCombined,
];

type ServiceTone = "blue" | "violet" | "cyan" | "pink" | "indigo";

const toneClasses: Record<ServiceTone, { card: string; visual: string; accent: string }> = {
  blue: { card: "bg-service-blue", visual: "bg-service-blue-strong", accent: "bg-primary text-primary-foreground" },
  violet: { card: "bg-service-violet", visual: "bg-service-violet-strong", accent: "bg-brand-violet text-primary-foreground" },
  cyan: { card: "bg-service-cyan", visual: "bg-service-cyan-strong", accent: "bg-brand-sky text-primary-foreground" },
  pink: { card: "bg-service-pink", visual: "bg-service-pink-strong", accent: "bg-brand-pink text-primary-foreground" },
  indigo: { card: "bg-service-indigo", visual: "bg-service-indigo-strong", accent: "bg-brand-indigo text-primary-foreground" },
};

const serviceTones: ServiceTone[] = ["blue", "violet", "cyan", "pink", "indigo"];

export function ServicePage() {
  const { t } = useLanguage();
  const ep = t.expertisePage;

  return (
    <div className="min-h-screen bg-background pt-20">
      <main>
        <section className="overflow-hidden bg-background">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8 lg:pb-14 lg:pt-14">
            <div className="min-w-0">
              <span className="section-badge">{ep.heroBadge}</span>
              <h1 className="mt-5 max-w-[720px] font-display text-4xl font-extrabold leading-[1.08] tracking-normal text-foreground sm:text-5xl lg:text-[3.45rem]">
                {ep.heroTitleA}<br className="hidden sm:block" /> {ep.heroTitleB}<br className="hidden sm:block" /> <span className="text-gradient">{ep.heroTitleC}</span>
              </h1>
              <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-muted-foreground lg:text-[1.06rem]">
                {ep.heroDescription}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-b border-border/70 pb-8 sm:grid-cols-4">
                {ep.values.map(({ first, second }, index) => {
                  const Icon = valuesIcons[index];
                  return (
                    <div key={first} className="flex min-w-0 items-center gap-2.5">
                      <Icon className="size-6 shrink-0 text-primary" strokeWidth={2.6} />
                      <span className="text-xs font-semibold leading-4 text-foreground">{first}<br />{second}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px] px-5 pb-5 pt-4 sm:px-10">
              <div className="absolute left-0 top-[23%] z-10 h-24 w-7 rotate-[32deg] rounded-full bg-hero-streak" />
              <div className="absolute left-7 top-[39%] z-10 h-36 w-12 rotate-[32deg] rounded-full bg-hero-gradient" />
              <div className="absolute right-2 top-[10%] z-10 h-24 w-6 rotate-[34deg] rounded-full bg-brand-violet/70" />
              <div className="absolute -right-1 top-[20%] z-10 h-16 w-5 rotate-[34deg] rounded-full bg-brand-pink" />
              <div className="absolute right-4 top-[48%] z-10 h-28 w-7 rotate-[34deg] rounded-full bg-brand-pink/90" />
              <div className="relative aspect-[1.12/1] overflow-hidden rounded-[3.25rem_1.75rem_3.25rem_1.75rem] shadow-image">
                <img src={professionalImage} alt={ep.heroImageAlt} width={1024} height={1024} className="h-full w-full object-cover object-center" />
              </div>
              <div className="absolute right-0 top-[28%] z-20 w-36 rounded-xl bg-background/95 p-4 shadow-float backdrop-blur-sm sm:w-40">
                <p className="text-sm font-extrabold leading-[1.22] text-foreground">{ep.heroCardText}</p>
                <ArrowRight className="absolute right-3 top-3 size-4 -rotate-45 text-primary" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 pb-16 pt-4 sm:px-8 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-end gap-7 lg:grid-cols-[1.45fr_0.9fr] lg:gap-20">
              <div>
                <span className="section-badge">{ep.expertiseBadge}</span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-normal text-foreground sm:text-[2.75rem]">
                  {ep.expertiseTitleA}<br className="hidden sm:block" /> <span className="text-gradient">{ep.expertiseTitleB}</span>
                </h2>
              </div>
              <p className="max-w-md text-sm font-medium leading-6 text-muted-foreground lg:pb-1">
                {ep.expertiseDescription}
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {ep.services.map((service, index) => {
                const Icon = serviceIcons[index];
                const tone = toneClasses[serviceTones[index]];
                return (
                  <article key={service.number} className={`grid min-h-40 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-5 shadow-card sm:gap-6 sm:px-7 lg:grid-cols-[170px_minmax(0,1fr)_56px] lg:px-9 ${tone.card}`}>
                    <div className={`grid size-20 shrink-0 place-items-center rounded-[1.5rem] sm:size-24 lg:mx-auto lg:size-28 ${tone.visual}`}>
                      <Icon className="size-11 text-primary sm:size-14" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex min-w-0 items-center gap-4">
                        <span className={`grid h-7 min-w-7 place-items-center rounded-full px-2 text-[0.68rem] font-extrabold ${tone.accent}`}>{service.number}</span>
                        <h3 className="min-w-0 font-display text-lg font-bold leading-tight text-foreground sm:text-xl">{service.title}</h3>
                      </div>
                      <p className="mt-3 max-w-[760px] text-sm font-medium leading-6 text-muted-foreground">{service.description}</p>
                      <a href="/contact" className={`mt-3 inline-flex items-center gap-1.5 rounded-full border border-current bg-background/75 px-3 py-1.5 text-xs font-bold ${serviceTones[index] === "pink" ? "text-brand-pink" : serviceTones[index] === "violet" ? "text-brand-violet" : "text-primary"}`}>
                        {ep.exampleLabel} : {service.example} <ArrowRight className="size-3.5" />
                      </a>
                    </div>
                    <a href="/contact" aria-label={service.title} className={`grid size-11 shrink-0 place-items-center self-center rounded-full shadow-soft transition-transform hover:translate-x-1 sm:size-12 ${tone.accent}`}>
                      <ArrowRight className="size-5" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
