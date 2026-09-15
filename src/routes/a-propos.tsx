import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BarChart3, Boxes, Cpu, Handshake, Lightbulb, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Header } from "@/components/projects/Header";
import { Button } from "@/components/ui/button";
import leaderImage from "@/assets/about-leader.jpg";
import founderImage from "@/assets/about-founder.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos de Cyra Tech — Technologie africaine" },
      { name: "description", content: "Découvrez la mission, l’approche et l’équipe de CHIMSOY, entreprise technologique africaine." },
      { property: "og:title", content: "À propos de Cyra Tech — Technologie africaine" },
      { property: "og:description", content: "Une technologie africaine conçue pour produire un impact réel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, label: "Innovation continue" },
  { icon: Handshake, label: "Impact africain" },
  { icon: Cpu, label: "Excellence technique" },
  { icon: BarChart3, label: "Partenariats durables" },
] as const;

const timeline = [
  ["2020", "Création de TECH COMPANY"],
  ["2021", "Premiers projets clients"],
  ["2022", "Lancement de notre première solution hardware"],
  ["2024", "Expansion dans d’autres pays africains"],
  ["2026", "Une vision : un impact encore plus grand"],
] as const;

function AboutPage() {
  return (
    <div className="min-h-screen h-20 bg-background">
      <main>
        <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:pt-14">
          <div>
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">Notre mission</span>
            <h1 className="mt-4 max-w-[590px] text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.55rem]">
              Technologie africaine,<br /><span className="text-primary">impact</span> <span className="text-brand-violet">réel.</span>
            </h1>
            <p className="mt-5 max-w-[610px] text-sm leading-7 text-muted-foreground sm:text-[15px]">
              Nous sommes une entreprise tech africaine qui conçoit des solutions digitales innovantes pour répondre aux défis concrets des entreprises et des communautés en Afrique.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-blue-soft text-primary"><Icon className="h-4 w-4" /></span>
                  <span className="text-[10px] font-semibold leading-tight text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] px-7 py-4">
            <span className="absolute left-2 top-[24%] h-20 w-5 rotate-[38deg] rounded-full bg-brand-sky" />
            <span className="absolute left-8 top-[38%] h-24 w-9 rotate-[38deg] rounded-full bg-brand-violet" />
            <span className="absolute right-0 top-[55%] h-20 w-6 rotate-[35deg] rounded-full bg-brand-sky" />
            <div className="relative aspect-[1.05/1] overflow-hidden rounded-[42px_18px_42px_18px] bg-brand-blue-soft">
              <img src={leaderImage} alt="Dirigeante africaine de CHIMSOY" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 top-[42%] max-w-[150px] rounded-[16px_5px_16px_5px] bg-background px-4 py-3 shadow-float">
              <p className="text-[11px] font-semibold leading-4 text-foreground">Ensemble pour un numérique inclusif en Afrique</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/55 py-14 lg:py-16">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">Notre approche</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">La puissance du logiciel<br />et du matériel, ensemble.</h2>
              <p className="mt-4 max-w-[500px] text-sm leading-6 text-muted-foreground">Nous combinons la force du logiciel et du matériel connecté pour créer des solutions complètes, intelligentes et durables.</p>
              <Button asChild variant="outline" className="mt-6 rounded-full border-primary px-5 text-xs font-bold text-primary">
                <Link to="/projets">Découvrir nos solutions <ArrowRight /></Link>
              </Button>
            </div>
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <article className="min-h-[190px] rounded-lg border border-border bg-background p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-sky-soft text-primary"><MonitorSmartphone /></span>
                <h3 className="mt-5 text-sm font-bold text-foreground">Solutions logicielles</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">Des plateformes intuitives, sécurisées et évolutives pour digitaliser vos activités.</p>
              </article>
              <span className="hidden text-3xl font-light text-foreground sm:block">+</span>
              <article className="min-h-[190px] rounded-lg border border-border bg-background p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-violet-soft text-brand-violet"><Boxes /></span>
                <h3 className="mt-5 text-sm font-bold text-foreground">Solutions matérielles</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">Des dispositifs connectés pour collecter et analyser les données en temps réel.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">Des talents engagés</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Une équipe passionnée<br />par l’innovation</h2>
            <p className="mt-4 max-w-[480px] text-sm leading-6 text-muted-foreground">Notre équipe réunit des experts en technologie, design, produit et métiers pour créer des solutions qui font la différence.</p>
            <Button asChild variant="outline" className="mt-6 rounded-full border-primary px-5 text-xs font-bold text-primary"><Link to="/contact">Rejoindre l’équipe <ArrowRight /></Link></Button>
          </div>
          <article className="relative grid gap-6 rounded-lg border border-border bg-background p-4 shadow-card sm:grid-cols-[185px_1fr]">
            <img src={founderImage} alt="Samuel Nguema, fondateur de CHIMSOY" width={768} height={1024} loading="lazy" className="h-[230px] w-full rounded-md object-cover object-top sm:h-[230px]" />
            <div className="py-2 pr-3">
              <h3 className="text-base font-extrabold text-foreground">Samuel Nguema</h3>
              <p className="mt-1 text-[10px] font-bold text-primary">CEO & Fondateur</p>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">Passionné par les nouvelles technologies et le développement de l’Afrique, Samuel met son expertise au service d’un numérique plus inclusif et durable.</p>
              <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-primary text-[10px] font-bold text-primary"><Link to="/projets">Voir le portfolio <ArrowRight /></Link></Button>
            </div>
            <div className="absolute right-3 top-3 flex gap-2">
              <Button variant="ghost" size="iconSm" aria-label="Profil précédent" className="h-7 w-7 rounded-full border border-border"><ArrowLeft /></Button>
              <Button variant="ghost" size="iconSm" aria-label="Profil suivant" className="h-7 w-7 rounded-full border border-border"><ArrowRight /></Button>
            </div>
          </article>
        </section>

        <section className="bg-secondary/55 py-12">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
            <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">Notre parcours</span>
            <h2 className="mt-3 text-xl font-extrabold text-foreground">Quelques étapes clés</h2>
            <div className="scrollbar-none mt-7 overflow-x-auto pb-3">
              <div className="grid min-w-[760px] grid-cols-5">
                {timeline.map(([year, description], index) => (
                  <div key={year} className="relative pr-6">
                    <div className="absolute left-8 right-0 top-3 h-px bg-primary/20" />
                    <span className="relative z-10 inline-flex rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">{year}</span>
                    <p className="mt-3 max-w-[155px] text-[10px] leading-4 text-muted-foreground">{description}</p>
                    {index < timeline.length - 1 && <span className="absolute right-0 top-[9px] h-2 w-2 rotate-45 bg-primary/20" />}
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