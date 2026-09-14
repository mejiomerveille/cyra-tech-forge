import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background pb-20">
      <div className="site-container">
        <div className="cta-banner relative overflow-hidden px-6 py-10 md:px-12 md:py-11">
          <div className="cta-shape cta-shape-one" aria-hidden="true" />
          <div className="cta-shape cta-shape-two" aria-hidden="true" />
          <div className="relative grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/80">Une idée ?</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-normal text-primary-foreground md:text-4xl">Have an idea? Let’s build it.</h2>
              <p className="mt-2 text-sm text-primary-foreground/80 md:text-base">Parlons de votre projet et donnons vie à vos idées.</p>
            </div>
            <Button asChild variant="magenta" size="xl"><a href="mailto:contact@cyratech.africa">Talk to Cyra Tech <ArrowRight /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}