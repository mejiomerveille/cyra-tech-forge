import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BarChart3, Boxes, Cpu, Handshake, Lightbulb, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import leaderImage from "@/assets/about-leader.jpg";
import founderImage from "@/assets/about-founder.jpg";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
});

const valueIcons = [Lightbulb, Handshake, Cpu, BarChart3];

function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="min-h-screen bg-background pt-20">
      <main>
        <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:pt-14">
          <div>
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">{a.pageBadge}</span>
            <h1 className="mt-4 max-w-[590px] text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.55rem]">
              {a.pageTitleA}<br /><span className="text-primary">{a.pageTitleB}</span> <span className="text-brand-violet">{a.pageTitleC}</span>
            </h1>
            <p className="mt-5 max-w-[610px] text-sm leading-7 text-muted-foreground sm:text-[15px]">
              {a.pageDescription}
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {a.pageValues.map(({ label }, index) => {
                const Icon = valueIcons[index];
                return (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-blue-soft text-primary"><Icon className="h-4 w-4" /></span>
                    <span className="text-[10px] font-semibold leading-tight text-foreground">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] px-7 py-4">
            <span className="absolute left-2 top-[24%] h-20 w-5 rotate-[38deg] rounded-full bg-brand-sky" />
            <span className="absolute left-8 top-[38%] h-24 w-9 rotate-[38deg] rounded-full bg-brand-violet" />
            <span className="absolute right-0 top-[55%] h-20 w-6 rotate-[35deg] rounded-full bg-brand-sky" />
            <div className="relative aspect-[1.05/1] overflow-hidden rounded-[42px_18px_42px_18px] bg-brand-blue-soft">
              <img src={leaderImage} alt={a.leaderImageAlt} width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 top-[42%] max-w-[150px] rounded-[16px_5px_16px_5px] bg-background px-4 py-3 shadow-float">
              <p className="text-[11px] font-semibold leading-4 text-foreground">{a.leaderCardText}</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/55 py-14 lg:py-16">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">{a.approachBadge}</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{a.approachTitleA}<br />{a.approachTitleB}</h2>
              <p className="mt-4 max-w-[500px] text-sm leading-6 text-muted-foreground">{a.approachDescription}</p>
              <Button asChild variant="outline" className="mt-6 rounded-full border-primary px-5 text-xs font-bold text-primary">
                <Link to="/projets">{a.approachCta} <ArrowRight /></Link>
              </Button>
            </div>
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <article className="min-h-[190px] rounded-lg border border-border bg-background p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-sky-soft text-primary"><MonitorSmartphone /></span>
                <h3 className="mt-5 text-sm font-bold text-foreground">{a.softwareTitle}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{a.softwareDescription}</p>
              </article>
              <span className="hidden text-3xl font-light text-foreground sm:block">+</span>
              <article className="min-h-[190px] rounded-lg border border-border bg-background p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-violet-soft text-brand-violet"><Boxes /></span>
                <h3 className="mt-5 text-sm font-bold text-foreground">{a.hardwareTitle}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{a.hardwareDescription}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">{a.teamBadge}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{a.teamTitleA}<br />{a.teamTitleB}</h2>
            <p className="mt-4 max-w-[480px] text-sm leading-6 text-muted-foreground">{a.teamDescription}</p>
            <Button asChild variant="outline" className="mt-6 rounded-full border-primary px-5 text-xs font-bold text-primary"><Link to="/contact">{a.teamCta} <ArrowRight /></Link></Button>
          </div>
          <article className="relative grid gap-6 rounded-lg border border-border bg-background p-4 shadow-card sm:grid-cols-[185px_1fr]">
            <img src={founderImage} alt={a.founderImageAlt} width={768} height={1024} loading="lazy" className="h-[230px] w-full rounded-md object-cover object-top sm:h-[230px]" />
            <div className="py-2 pr-3">
              <h3 className="text-base font-extrabold text-foreground">{a.founderName}</h3>
              <p className="mt-1 text-[10px] font-bold text-primary">{a.founderRole}</p>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">{a.founderDescription}</p>
              <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-primary text-[10px] font-bold text-primary"><Link to="/projets">{a.founderCta} <ArrowRight /></Link></Button>
            </div>
            <div className="absolute right-3 top-3 flex gap-2">
              <Button variant="ghost" size="iconSm" aria-label={a.prevProfile} className="h-7 w-7 rounded-full border border-border"><ArrowLeft /></Button>
              <Button variant="ghost" size="iconSm" aria-label={a.nextProfile} className="h-7 w-7 rounded-full border border-border"><ArrowRight /></Button>
            </div>
          </article>
        </section>

        <section className="bg-secondary/55 py-12">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">{a.journeyBadge}</span>
            <h2 className="mt-3 text-xl font-extrabold text-foreground">{a.journeyTitle}</h2>
            <div className="scrollbar-none mt-7 overflow-x-auto pb-3">
              <div className="grid min-w-[760px] grid-cols-5">
                {a.timeline.map((entry, index) => (
                  <div key={entry.year} className="relative pr-6">
                    <div className="absolute left-8 right-0 top-3 h-px bg-primary/20" />
                    <span className="relative z-10 inline-flex rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">{entry.year}</span>
                    <p className="mt-3 max-w-[155px] text-[10px] leading-4 text-muted-foreground">{entry.description}</p>
                    {index < a.timeline.length - 1 && <span className="absolute right-0 top-[9px] h-2 w-2 rotate-45 bg-primary/20" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
