import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <nav className="flex items-center justify-center gap-2 py-10" aria-label={p.paginationLabel}>
      <Button variant="pagination" size="iconSm" onClick={() => onPageChange(Math.max(1, currentPage - 1))} aria-label={p.prevPage}>
        <ArrowLeft />
      </Button>
      {[1, 2, 3].map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "paginationActive" : "pagination"}
          size="iconSm"
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
          aria-label={`Page ${page}`}
        >
          {page}
        </Button>
      ))}
      <Button variant="pagination" size="iconSm" onClick={() => onPageChange(Math.min(3, currentPage + 1))} aria-label={p.nextPage}>
        <ArrowRight />
      </Button>
    </nav>
  );
}
