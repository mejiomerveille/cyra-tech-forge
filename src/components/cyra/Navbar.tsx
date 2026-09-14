import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./Brand";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "nav-scrolled" : "bg-background/80"}`}>
      <nav className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]" aria-label="Navigation principale">
        <Brand />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden justify-self-end lg:block">
          <Button asChild variant="magenta" size="lg">
            <a href="#contact">Nous contacter <ArrowRight /></a>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      <div className={`mobile-menu lg:hidden ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="site-container flex flex-col gap-1 pb-6 pt-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {item.label}
            </a>
          ))}
          <Button asChild variant="magenta" size="lg" className="mt-3 w-full">
            <a href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Nous contacter <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </header>
  );
}