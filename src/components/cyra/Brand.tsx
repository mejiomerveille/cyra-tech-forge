import { Cpu } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#accueil" className="group inline-flex items-center gap-3" aria-label="Cyra Tech, accueil">
      <span className="brand-mark grid size-10 shrink-0 place-items-center" aria-hidden="true">
        <Cpu className="size-5 text-primary-foreground" strokeWidth={1.8} />
      </span>
      {!compact && (
        <span className="font-display text-[1.08rem] font-extrabold tracking-normal text-primary">
          CYRA TECH
        </span>
      )}
    </a>
  );
}