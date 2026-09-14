import { Cloud, Cpu, Server } from "lucide-react";

const nodes = [
  [17, 33], [27, 23], [39, 29], [50, 16], [65, 24], [78, 17], [85, 34],
  [90, 51], [79, 64], [87, 78], [69, 82], [52, 75], [37, 84], [28, 66], [13, 61],
];

export function TechVisual() {
  return (
    <div className="hero-visual relative mx-auto aspect-square w-full max-w-[610px]" aria-label="Illustration abstraite représentant le logiciel, le matériel et les systèmes connectés">
      <div className="absolute inset-[8%] hero-africa" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <g className="text-visual-line" fill="none" stroke="currentColor" strokeWidth="0.45">
          <path d="M17 33 L27 23 L39 29 L50 16 L65 24 L78 17 L85 34 L90 51 L79 64 L87 78 L69 82 L52 75 L37 84 L28 66 L13 61 Z" />
          <path d="M27 23 L34 44 L17 54 M39 29 L43 47 L28 66 M50 16 L52 37 L65 49 M65 24 L62 42 L78 55 M85 34 L71 40 L90 51 M79 64 L63 61 L69 82 M52 75 L54 59 L37 84" />
        </g>
        {nodes.map(([x, y], index) => (
          <g key={`${x}-${y}`} className={index % 4 === 0 ? "text-accent" : "text-primary"}>
            <circle cx={x} cy={y} r="1.1" fill="currentColor" opacity=".18" />
            <circle cx={x} cy={y} r=".48" fill="currentColor" />
          </g>
        ))}
      </svg>

      <div className="absolute left-[20%] top-[15%] grid size-20 place-items-center rounded-2xl border border-visual-border bg-background/90 text-sky shadow-visual backdrop-blur-sm sm:size-24">
        <Cloud className="size-9 sm:size-11" strokeWidth={1.5} />
      </div>
      <div className="absolute right-[12%] top-[30%] grid size-16 place-items-center rounded-xl bg-primary text-primary-foreground shadow-visual sm:size-20">
        <Server className="size-8 sm:size-10" strokeWidth={1.5} />
      </div>
      <div className="chip-platform absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center sm:size-44">
        <div className="grid size-20 place-items-center rounded-2xl bg-visual-chip text-primary-foreground shadow-chip sm:size-24">
          <Cpu className="size-10 sm:size-12" strokeWidth={1.35} />
        </div>
      </div>
      <div className="absolute bottom-[11%] left-[8%] h-24 w-[58%] rounded-[50%] border-b-[18px] border-l-[14px] border-accent opacity-90 sm:h-32" aria-hidden="true" />
      <span className="absolute bottom-[9%] right-[9%] max-w-32 border-l-2 border-accent pl-3 text-xs font-medium leading-relaxed text-muted-foreground sm:max-w-40">
        Built in Africa. Engineered for impact.
      </span>
    </div>
  );
}