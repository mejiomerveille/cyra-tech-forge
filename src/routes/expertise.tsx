import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/cyra/PageHeader";
import { ExpertiseSection } from "@/components/cyra/ExpertiseSection";
import { CTASection } from "@/components/cyra/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/expertise")({
  component: ExpertisePage,
});

function ExpertisePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* <PageHeader eyebrow={t.expertise.eyebrow} title={t.expertise.title} intro={t.expertise.intro} /> */}
            <ServicePage />

      <div className="pt-20" />
      <CTASection />
    </>
  );
}
