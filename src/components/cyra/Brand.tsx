import logo from "@/assets/logo.png";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#accueil" className="group inline-flex items-center gap-3" aria-label="Cyra Tech, accueil">
      <img
  src={logo}
  alt="Cyra Tech"
  className="size-10 shrink-0 object-contain"
/>
      {!compact && (
        <span className="font-display text-[1.08rem] font-extrabold tracking-normal text-primary">
          CYRA TECH
        </span>
      )}
    </a>
  );
}