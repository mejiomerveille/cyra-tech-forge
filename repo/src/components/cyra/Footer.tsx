import { Linkedin, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Brand } from "./Brand";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <Brand />
        <nav className="flex flex-wrap justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-center" aria-label={t.footer.expertises}>
          {t.footer.links.map((item) => (
            <Link key={item} to="/expertise" className="transition-colors hover:text-primary">{item}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 lg:justify-self-end">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech LinkedIn" className="social-link"><Linkedin /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech X" className="social-link font-bold">X</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech YouTube" className="social-link"><Youtube /></a>
        </div>
      </div>
      <div className="site-container mt-8 border-t border-border pt-6 text-sm text-muted-foreground lg:text-right">{t.footer.rights}</div>
    </footer>
  );
}
