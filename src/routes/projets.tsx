import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/projects/Header";
import { HeroProjects } from "@/components/projects/HeroProjects";
import { Pagination } from "@/components/projects/Pagination";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters, type ProjectFilter } from "@/components/projects/ProjectFilters";
import { projects2 } from "@/data/projects";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets digitaux en Afrique — Cyra Tech" },
      { name: "description", content: "Découvrez neuf solutions Cyra Tech en logiciel, objets connectés et design pour les entreprises africaines." },
      { property: "og:title", content: "Projets digitaux en Afrique — Cyra Tech" },
      { property: "og:description", content: "Logiciels, objets connectés et design : découvrez les projets innovants de CHIMSOY." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("Tous");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("fr");
    return projects2.filter((project) => {
      const matchesCategory = activeCategory === "Tous" || project.category === activeCategory;
      const haystack = `${project.name} ${project.description} ${project.category}`.toLocaleLowerCase("fr");
      return matchesCategory && haystack.includes(query);
    });
  }, [activeCategory, search]);

  const updateCategory = (category: ProjectFilter) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen h-20  bg-background">
      <main>
        <HeroProjects />
        <section aria-label="Portfolio des projets" className="pb-6">
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
              {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          ) : (
            <div className="mx-auto max-w-[1200px] px-5 py-20 text-center lg:px-8">
              <h2 className="text-xl font-bold text-foreground">Aucun projet trouvé</h2>
              <p className="mt-2 text-sm text-muted-foreground">Essayez une autre recherche ou une autre catégorie.</p>
            </div>
          )}

          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </section>
      </main>
    </div>
  );
}
