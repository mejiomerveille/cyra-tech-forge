import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 md:mb-10">
      <div className="min-w-0">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </header>
  );
}