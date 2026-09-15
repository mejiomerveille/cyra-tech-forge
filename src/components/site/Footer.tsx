import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const columns = [
  { title: "EXPERTISE", links: ["Software", "Connected Hardware", "Product Design", "Data & AI"] },
  { title: "PROJETS", links: ["AgriPulse", "Mopital", "Intimia", "Chimsoy"] },
] as const;

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-5 py-9 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/projets" className="inline-flex items-center text-lg font-extrabold" aria-label="CHIMSOY">
              CHIMSOY<span className="ml-2 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-brand-sky" />
            </Link>
            <p className="mt-3 max-w-[250px] text-xs leading-5 text-primary-foreground/70">
              Nous concevons des solutions digitales adaptées aux réalités africaines.
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
            <h2 className="text-[10px] font-bold">ENTREPRISE</h2>
            <div className="mt-3 flex flex-col gap-1.5 text-[11px] text-primary-foreground/70">
              <Link to="/a-propos">À propos</Link>
              <Link to="/projets">Notre équipe</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-primary-foreground/15 pt-5 text-[10px] text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TECH COMPANY — Tous droits réservés.</p>
          <div className="flex items-center gap-3" aria-label="Réseaux sociaux">
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
}