import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { HeroProjects } from "@/components/projects/HeroProjects";
import { Pagination } from "@/components/projects/Pagination";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters, type ProjectFilter } from "@/components/projects/ProjectFilters";
import { projects2 } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/projets")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t, language } = useLanguage();
  const allLabel = t.projects.filterAll;
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>(allLabel);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    const locale = language === "fr" ? "fr" : "en";
    const query = search.trim().toLocaleLowerCase(locale);
    return projects2.filter((project) => {
      const matchesCategory = activeCategory === allLabel || project.category === activeCategory;
      const haystack = `${project.name} ${project.description} ${project.category}`.toLocaleLowerCase(locale);
      return matchesCategory && haystack.includes(query);
    });
  }, [activeCategory, search, language, allLabel]);

  const updateCategory = (category: ProjectFilter) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <main>
        <HeroProjects />
        <section aria-label={t.projects.paginationLabel} className="pb-6">
          <ProjectFilters
            activeCategory={activeCategory}
            onCategoryChange={updateCategory}
            search={search}
            onSearchChange={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />

          {filteredProjects.length > 0 ? (
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-[1200px] px-5 py-20 text-center lg:px-8">
              <h2 className="text-xl font-bold text-foreground">{t.projects.noResultsTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.projects.noResultsText}</p>
            </div>
          )}

          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </section>
      </main>
    </div>
  );
}
