import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/cyra/Hero";
import { ExpertiseSection } from "@/components/cyra/ExpertiseSection";
import { ProjectsSection } from "@/components/cyra/ProjectsSection";
import { CTASection } from "@/components/cyra/CTASection";

const title = "Cyra Tech — Digital Solutions & Engineering";
const description = "Cyra Tech combines software development, hardware engineering and IoT to build reliable technology solutions for the real world.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}
