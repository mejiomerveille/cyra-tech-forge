import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  const columns = [
    { title: t.footer.expertises.toUpperCase(), links: t.footer.links },
  ] as const;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-5 py-9 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center text-lg font-extrabold" aria-label="CYRA TECH">
              CYRA TECH<span className="ml-2 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-brand-sky" />
            </Link>
            <p className="mt-3 max-w-[250px] text-xs leading-5 text-primary-foreground/70">
              {t.about.intro}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[10px] font-bold">{column.title}</h2>
              <ul className="mt-3 space-y-1.5 text-[11px] text-primary-foreground/70">
                {column.links.map((link) => <li key={link}>{link}</li>)}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-[10px] font-bold">{t.nav.about.toUpperCase()}</h2>
            <div className="mt-3 flex flex-col gap-1.5 text-[11px] text-primary-foreground/70">
              <Link to="/a-propos">{t.nav.about}</Link>
              <Link to="/projets">{t.nav.projects}</Link>
              <Link to="/contact">{t.nav.contact}</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-primary-foreground/15 pt-5 text-[10px] text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-3" aria-label={t.contact.socialsLabel}>
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
}
