import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/cyra/CTASection";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/expertise")({
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <>
      <ServicePage />
      <CTASection />
    </>
  );
}
