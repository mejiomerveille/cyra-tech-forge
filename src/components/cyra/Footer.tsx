import { Linkedin, Youtube } from "lucide-react";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer id="a-propos" className="scroll-mt-20 border-t border-border bg-background py-10">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <Brand />
        <nav className="flex flex-wrap justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-center" aria-label="Expertises">
          {['Software', 'Hardware', 'IoT', 'Engineering'].map((item) => <a key={item} href="#solutions" className="transition-colors hover:text-primary">{item}</a>)}
        </nav>
        <div className="flex items-center gap-4 lg:justify-self-end">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech sur LinkedIn" className="social-link"><Linkedin /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech sur X" className="social-link font-bold">X</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Cyra Tech sur YouTube" className="social-link"><Youtube /></a>
        </div>
      </div>
      <div className="site-container mt-8 border-t border-border pt-6 text-sm text-muted-foreground lg:text-right">© 2026 Cyra Tech. Tous droits réservés.</div>
    </footer>
  );
}