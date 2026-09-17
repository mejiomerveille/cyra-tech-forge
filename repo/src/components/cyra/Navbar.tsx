import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Brand } from "./Brand";
import { useLanguage } from "@/i18n/LanguageProvider";

const WHATSAPP_URL = "https://wa.me/237620726721";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.expertise, to: "/expertise" },
    { label: t.nav.projects, to: "/projets" },
    { label: t.nav.about, to: "/a-propos" },
    { label: t.nav.contact, to: "/contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageSwitch = (
    <div className="inline-flex items-center rounded-full border border-border p-0.5" role="group" aria-label={t.nav.language}>
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase transition-colors ${
            language === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "nav-scrolled" : "bg-background/80"}`}>
      <nav className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]" aria-label={t.nav.main}>
        <Brand />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: item.to === "/" }}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          {languageSwitch}
          <Button asChild variant="magenta" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{t.nav.cta} <ArrowRight /></a>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          {languageSwitch}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      <div className={`grid overflow-hidden bg-background transition-[grid-template-rows,opacity] duration-300 lg:hidden ${open ? "grid-rows-[1fr] border-b border-border opacity-100" : "grid-rows-[0fr] opacity-0"}`} aria-hidden={!open}>
        <div className="min-h-0">
          <div className="site-container flex flex-col gap-1 pb-6 pt-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="mobile-nav-link" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {item.label}
              </Link>
            ))}
            <Button asChild variant="magenta" size="lg" className="mt-3 w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{t.nav.cta} <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
