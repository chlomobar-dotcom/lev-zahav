import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/data/content";

export const metadata = {
  title: "Contact",
  description:
    "Contactez LEV ZAHAV — La Banque du Cœur. Par e-mail, téléphone, WhatsApp ou via notre formulaire. Nous sommes à votre écoute.",
};

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: site.address,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: site.phoneDisplay,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Écrivez-nous directement",
    href: `https://wa.me/${site.whatsapp}`,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons ensemble"
        subtitle="Une question, une demande d'aide, une envie de soutenir l'association ? Nous vous répondons avec plaisir."
      />

      <section className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Coordonnées */}
          <AnimatedSection className="flex flex-col gap-4">
            {infos.map(({ icon: IconCmp, label, value, href, external }) => {
              const inner = (
                <>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                    <IconCmp className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-bordeaux">
                      {label}
                    </span>
                    <span className="text-ink">{value}</span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-4 rounded-2xl border border-sand bg-cream-50 p-5 shadow-soft transition-colors hover:border-gold/50";
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}

            <div className="flex items-center gap-4 rounded-2xl border border-sand bg-cream-50 p-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-bordeaux">
                  Distribution
                </span>
                <span className="text-ink">Une fois par mois (dates communiquées)</span>
              </span>
            </div>
          </AnimatedSection>

          {/* Formulaire */}
          <AnimatedSection
            delay={0.1}
            className="rounded-3xl border border-sand bg-cream p-6 shadow-soft sm:p-8"
          >
            <h2 className="font-serif text-2xl text-ink">Écrivez-nous</h2>
            <p className="mt-2 mb-6 text-sm text-ink-soft">
              Les champs marqués d’un astérisque (*) sont obligatoires.
            </p>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Emplacement carte (placeholder) */}
      <section className="container-wide pb-20">
        <AnimatedSection className="placeholder-grad flex aspect-[21/9] w-full items-center justify-center rounded-3xl text-center text-sm font-medium text-ink/60">
          {/* 👉 Remplacez ce bloc par une carte (iframe Google Maps / OpenStreetMap). */}
          <span className="px-6">
            Emplacement de la carte — insérez ici votre iframe Google Maps
          </span>
        </AnimatedSection>
      </section>
    </>
  );
}
