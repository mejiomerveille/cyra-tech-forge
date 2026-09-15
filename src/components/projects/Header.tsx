import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Accueil", href: "/projets" },
  { label: "Services", href: "/projets" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="relative z-30 bg-background">
      <div className="mx-auto grid h-20 max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link to="/projets" className="flex min-w-0 items-center" aria-label="CHIMSOY — Projets">
          <span className="truncate text-[21px] font-extrabold text-foreground">CHIMS</span>
          <span className="relative text-[21px] font-extrabold text-foreground">
            O
            <span className="absolute left-[5px] top-[6px] h-2 w-2 rotate-45 rounded-[2px] bg-brand-magenta" />
          </span>
          <span className="text-[21px] font-extrabold text-foreground">Y</span>
          <span className="ml-1.5 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-brand-sky" />
        </Link>

        <nav className="hidden items-stretch gap-10 self-stretch lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => {
            const isActive = item.label === "Projets" ? pathname === "/projets" : pathname === item.href && item.label !== "Accueil";
            return (
            <Link
              key={item.label}
              to={item.href}
              className={`relative flex items-center text-[13px] font-semibold transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`}
            >
              {item.label}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          )})}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4">
          <Button asChild variant="cta" size="pill" className="hidden sm:inline-flex">
            <Link to="/contact">Démarrer un projet</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute inset-x-0 top-20 border-y border-border bg-background px-5 py-4 shadow-soft lg:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-[1200px] flex-col">
            {navigation.map((item) => {
              const isActive = item.label === "Projets" ? pathname === "/projets" : pathname === item.href && item.label !== "Accueil";
              return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-border py-3 text-sm font-semibold last:border-0 ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {item.label}
              </Link>
            )})}
            <Button asChild variant="cta" size="pill" className="mt-4 sm:hidden">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Démarrer un projet</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
