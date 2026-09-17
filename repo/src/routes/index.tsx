import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/cyra/Hero";
import { ExpertiseSection } from "@/components/cyra/ExpertiseSection";
import { ProjectsSection } from "@/components/cyra/ProjectsSection";
import { CTASection } from "@/components/cyra/CTASection";

export const Route = createFileRoute("/")({
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
