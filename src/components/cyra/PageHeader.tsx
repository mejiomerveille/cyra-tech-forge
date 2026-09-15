export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary pt-32 pb-14 md:pt-36 md:pb-16">
      <div className="hero-grid-bg absolute inset-y-0 right-0 w-1/2" aria-hidden="true" />
      <div className="site-container relative">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}
