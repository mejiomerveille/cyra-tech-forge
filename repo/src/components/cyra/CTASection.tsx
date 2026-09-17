import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-24 bg-background pb-20">
      <div className="site-container">
        <div className="cta-banner relative overflow-hidden px-6 py-10 md:px-12 md:py-11">
          <div className="cta-shape cta-shape-one" aria-hidden="true" />
          <div className="cta-shape cta-shape-two" aria-hidden="true" />
          <div className="relative grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/80">{t.cta.eyebrow}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-normal text-primary-foreground md:text-4xl">{t.cta.title}</h2>
              <p className="mt-2 text-sm text-primary-foreground/80 md:text-base">{t.cta.description}</p>
            </div>
            <Button asChild variant="magenta" size="xl"><a href="https://wa.me/237620726721" target="_blank" rel="noreferrer">{t.cta.button} <ArrowRight /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
