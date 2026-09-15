import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/cyra/PageHeader";
import { CTASection } from "@/components/cyra/CTASection";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Contact — Cyra Tech";
const description = "Talk to Cyra Tech about your software, hardware or IoT project.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  const items = [
    { icon: Mail, label: t.contact.email, value: "contact@cyratech.africa", href: "mailto:contact@cyratech.africa", tone: "icon-blue" },
    { icon: Phone, label: t.contact.phone, value: "+237 6 00 00 00 00", href: "tel:+237600000000", tone: "icon-sky" },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: undefined, tone: "icon-violet" },
  ];

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
      <section className="bg-background py-20 md:py-24">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href, tone }) => (
            <article key={label} className="service-card">
              <span className={`grid size-14 place-items-center rounded-full ${tone}`}><Icon className="size-7" strokeWidth={1.7} /></span>
              <h2 className="mt-5 font-display text-base font-bold text-foreground">{label}</h2>
              {href ? (
                <a href={href} className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-primary">{value}</a>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">{value}</p>
              )}
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
