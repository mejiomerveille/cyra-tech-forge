import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Building2, CheckCircle2, ChevronDown, Instagram, Linkedin, Mail, MapPin, MessageSquareText, Phone, Send, User, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const WHATSAPP_URL = "https://wa.me/237620726721";

function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <main className="mx-auto max-w-[1040px] px-5 pb-14 pt-8 lg:px-8 lg:pt-12">
        <span className="inline-flex rounded-full bg-brand-sky-soft px-3 py-1 text-[10px] font-bold uppercase text-primary">{c.pageBadge}</span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{c.pageTitleA} <span className="text-primary">{c.pageTitleB}</span></h1>
        <p className="mt-3 max-w-[600px] text-sm leading-6 text-muted-foreground">{c.pageDescription}</p>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={submit} className="rounded-lg border border-border bg-background p-5 shadow-card sm:p-7">
            {sent && (
              <div className="mb-5 flex items-center gap-2 rounded-md bg-brand-sky-soft p-3 text-xs font-semibold text-primary" role="status">
                <CheckCircle2 className="h-4 w-4" /> {c.formSuccess}
              </div>
            )}
            <Field label={c.formName} icon={User}><input required name="name" placeholder={c.formNamePlaceholder} className="form-control" /></Field>
            <Field label={c.formEmail} icon={Mail}><input required type="email" name="email" placeholder={c.formEmailPlaceholder} className="form-control" /></Field>
            <Field label={c.formSubject} icon={Building2}>
              <div className="relative">
                <select required name="subject" defaultValue="" className="form-control appearance-none pr-10">
                  <option value="" disabled>{c.formSubjectPlaceholder}</option>
                  {c.formSubjectOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>
            <Field label={c.formMessage} icon={MessageSquareText}><textarea required name="message" rows={5} placeholder={c.formMessagePlaceholder} className="form-control resize-none" /></Field>
            <Button type="submit" className="mt-1 rounded-full px-6 text-xs font-bold">{c.formSubmit} <Send /></Button>
          </form>

          <aside className="rounded-lg bg-secondary/70 p-6 sm:p-7">
            <h2 className="text-sm font-extrabold text-foreground">{c.coordsTitle}</h2>
            <div className="mt-5 space-y-4 text-xs text-muted-foreground">
              <ContactLine icon={Mail} text={c.emailValue} />
              <ContactLine icon={Phone} text={c.phoneValue} />
              <ContactLine icon={MapPin} text={c.locationValuePage} />
            </div>
            <div className="mt-5 flex gap-2" aria-label={c.socialsLabel}>
              {[Linkedin, Instagram, Youtube].map((Icon, index) => <span key={index} className="grid h-8 w-8 place-items-center rounded-full bg-background text-primary"><Icon className="h-3.5 w-3.5" /></span>)}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-4 py-3 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90">
              <Phone className="h-4 w-4" /> {t.nav.cta}
            </a>
            <div className="relative mt-6 h-[210px] overflow-hidden rounded-md bg-brand-blue-soft text-primary">
              <svg viewBox="0 0 400 230" className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
                <path d="M-10 45 80 20l48 46 72-34 44 43 82-34 86 30M15 220l45-65-28-45 80-44 40 78 45-39 64 65 66-48 80 56M128 66l-16 154M244 75l-47 155M326 41l1 181" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <div className="absolute left-[58%] top-[41%] -translate-x-1/2 -translate-y-1/2 text-primary"><MapPin className="h-10 w-10 fill-current" /></div>
              <span className="absolute left-[58%] top-[62%] -translate-x-1/2 rounded-full bg-background px-3 py-1.5 text-[10px] font-bold text-primary shadow-card">{c.locationValuePage}</span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof User; children: ReactNode }) {
  return <label className="mb-4 block"><span className="mb-2 flex items-center gap-2 text-[11px] font-bold text-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{label}<span className="text-brand-magenta">*</span></span>{children}</label>;
}

function ContactLine({ icon: Icon, text }: { icon: typeof Mail; text: string }) {
  return <div className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-background text-primary"><Icon className="h-3.5 w-3.5" /></span><span>{text}</span></div>;
}
