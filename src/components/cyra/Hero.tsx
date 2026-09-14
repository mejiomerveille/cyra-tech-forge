import { ArrowRight, Code2, Cpu, Radio, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechVisual } from "./TechVisual";


const technologies = [
  { label: "Software", Icon: Code2 },
  { label: "Hardware", Icon: Cpu },
  { label: "IoT", Icon: Radio },
  { label: "Engineering", Icon: Settings },
];

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-background pt-20">
      <div className="hero-grid-bg absolute inset-y-0 right-0 w-1/2" aria-hidden="true" />
      <div className="site-container relative grid min-h-[calc(100svh-5rem)] items-center gap-8 py-14 lg:grid-cols-[0.94fr_1.06fr] lg:py-10">
        <div className="animate-hero-copy max-w-2xl">
          <div className="eyebrow-pill"><span /> Innovation <b>•</b> Afrique <b>•</b> Impact</div>
          <h1 className="mt-7 font-display text-[2.55rem] font-extrabold leading-[1.06] tracking-normal text-foreground sm:text-5xl md:text-[3.45rem] lg:text-[3.85rem] xl:text-[4.15rem]">
            We Build Digital Solutions<br className="hidden sm:block" /> That Connect <span className="text-gradient">Software &amp;<br className="hidden sm:block" /> Engineering.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-base leading-7 text-muted-foreground md:text-lg">
            Cyra Tech designs reliable software, connected systems and intelligent hardware solutions that turn ambitious ideas into real-world technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl"><a href="#contact">Start a Project <ArrowRight /></a></Button>
            <Button asChild variant="heroOutline" size="xl"><a href="#solutions">Explore Our Solutions</a></Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Nos technologies">
            {technologies.map(({ label, Icon }, index) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Icon className="size-4 text-primary" strokeWidth={1.8} />{label}{index < technologies.length - 1 && <span className="ml-3 hidden text-border sm:inline">•</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-hero-visual lg:pl-4"><TechVisual /></div>
      </div>
    </section>
  );
}