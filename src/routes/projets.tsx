import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/cyra/PageHeader";
import { ProjectsSection } from "@/components/cyra/ProjectsSection";
import { CTASection } from "@/components/cyra/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Projects — Cyra Tech";
const description = "Connected agriculture, smart operations platforms and industrial IoT prototypes engineered by Cyra Tech.";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
      <ProjectsSection withHeading={false} />
      <CTASection />
    </>
  );
}
