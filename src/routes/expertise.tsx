import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/cyra/PageHeader";
import { ExpertiseSection } from "@/components/cyra/ExpertiseSection";
import { CTASection } from "@/components/cyra/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Expertise & Services — Cyra Tech";
const description = "Software development, IoT and connected systems, hardware engineering, cloud infrastructure and technical consulting by Cyra Tech.";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.expertise.eyebrow} title={t.expertise.title} intro={t.expertise.intro} />
      <ExpertiseSection withHeading={false} />
      <div className="pt-20" />
      <CTASection />
    </>
  );
}
