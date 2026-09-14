import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { ExpertiseSection } from "./ExpertiseSection";
import { ProjectsSection } from "./ProjectsSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}