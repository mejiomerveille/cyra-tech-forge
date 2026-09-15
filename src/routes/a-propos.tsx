import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/cyra/PageHeader";
import { CTASection } from "@/components/cyra/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "About — Cyra Tech";
const description = "Cyra Tech is an African technology and engineering company building reliable software, hardware and connected systems.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro} />
      <section className="bg-background py-20 md:py-24">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {t.about.values.map((value) => (
            <article key={value.title} className="service-card">
              <h2 className="font-display text-lg font-bold text-foreground">{value.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
