import { Code2, Grid2X2, Palette, Search, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectCategory } from "@/types/project";
import { useLanguage } from "@/i18n/LanguageProvider";

export type ProjectFilter = string | ProjectCategory;

interface ProjectFiltersProps {
  activeCategory: ProjectFilter;
  onCategoryChange: (category: ProjectFilter) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function ProjectFilters({ activeCategory, onCategoryChange, search, onSearchChange }: ProjectFiltersProps) {
  const { t } = useLanguage();
  const p = t.projects;

  const filters = [
    { label: p.filterAll, icon: Grid2X2 },
    { label: "Software", icon: Code2 },
    { label: "Connected hardware", icon: Wifi },
    { label: "Design", icon: Palette },
  ] as const;

  return (
    <div className="mx-auto grid max-w-[1200px] gap-4 px-5 pb-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:px-8">
      <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 scrollbar-none" aria-label={p.filtersLabel}>
        {filters.map((filter) => (
          <Button
            key={filter.label}
            type="button"
            variant={activeCategory === filter.label ? "filterActive" : "filter"}
            size="filter"
            onClick={() => onCategoryChange(filter.label)}
            aria-pressed={activeCategory === filter.label}
          >
            <filter.icon />
            {filter.label}
          </Button>
        ))}
      </div>
      <label className="relative block">
        <span className="sr-only">{p.searchLabel}</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" aria-hidden="true" />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={p.searchPlaceholder}
          className="h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-hidden transition-shadow placeholder:text-muted-foreground/70 focus:border-primary focus:ring-3 focus:ring-ring/20"
        />
      </label>
    </div>
  );
}
