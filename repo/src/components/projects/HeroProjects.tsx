import { ArrowUpRight, Rocket, UsersRound } from "lucide-react";
import heroImage from "@/assets/chimsoy-hero.jpg";
import { useLanguage } from "@/i18n/LanguageProvider";

const statIcons = [Rocket, UsersRound, AfricaIcon];

export function HeroProjects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-14 pt-8 md:pt-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="min-w-0">
        <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-xs font-bold text-primary">
          {p.pageBadge}
        </span>
        <h1 className="mt-4 max-w-[580px] text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.04] text-foreground">
          {p.pageTitleA}
          <br className="hidden sm:block" /> {p.pageTitleB}
        </h1>
        <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-muted-foreground sm:text-base">
          {p.pageDescription}
        </p>

        <div className="mt-9 grid grid-cols-3 gap-3 sm:max-w-[570px] sm:gap-8">
          {p.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div key={stat.label} className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-blue-soft text-primary">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-base font-extrabold text-foreground sm:text-lg">{stat.value}</strong>
                  <span className="block text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[590px] px-7 py-5 sm:px-12 sm:py-8">
        <span className="absolute left-0 top-[38%] h-20 w-5 -rotate-[150deg] rounded-full bg-primary" />
        <span className="absolute left-6 top-[49%] h-28 w-9 rotate-[35deg] rounded-full bg-brand-violet" />
        <span className="absolute right-0 top-[43%] h-20 w-6 rotate-[34deg] rounded-full bg-brand-magenta" />
        <div className="relative aspect-[1.22/1] overflow-hidden rounded-[56px_24px_56px_24px] bg-brand-sky-soft">
          <img
            src={heroImage}
            alt={p.heroImageAlt}
            width={1024}
            height={768}
            className="h-full w-full object-cover object-[52%_38%]"
          />
        </div>
        <div className="absolute right-1 top-[12%] grid grid-cols-[1fr_auto] items-center gap-2 rounded-[18px_5px_18px_5px] bg-background px-4 py-3 shadow-float sm:right-2">
          <p className="text-[11px] font-semibold leading-[1.25] text-foreground sm:text-xs">{p.heroCardText}</p>
          <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function AfricaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.4 2.7 5.3 4.1 3.2 7.6l1.5 2.9-.2 3.2 2.4 1.9 1.2 3.7 2.5 2 2.2-2.4 1.8-1.2.9-3.2 2.5-2.2 2.2-4-2.7-3.6-4.1-.5-2.3-1.8Z" />
    </svg>
  );
}
