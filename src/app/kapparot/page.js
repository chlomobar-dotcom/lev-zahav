import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import KapparotForm from "@/components/KapparotForm";
import CTADonation from "@/components/CTADonation";
import FAQ from "@/components/FAQ";
import { Sparkles, ScrollText, ReceiptText, Clock } from "lucide-react";
import { kapparot, donation, site } from "@/data/content";

export const metadata = {
  title: "Kapparot en ligne",
  description:
    "Accomplissez la mitsva des Kapparot en ligne avec LEV ZAHAV. 18 € par personne, intégralement reversés à des familles dans le besoin. Reçu fiscal.",
};

export default function KapparotPage() {
  return (
    <>
      <PageHero
        eyebrow={kapparot.eyebrow}
        title={kapparot.title}
        subtitle={kapparot.subtitle}
      />

      {/* Introduction */}
      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          {kapparot.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={Sparkles}
            title="18 € par personne"
            text="La valeur symbolique de « Haï » (חי), qui signifie « vivant »."
          />
          <InfoCard
            icon={ReceiptText}
            title="Reçu fiscal Cerfa"
            text="Réduction d’impôt selon la législation en vigueur."
          />
          <InfoCard icon={Clock} title="Avant Yom Kippour" text={kapparot.deadline} />
        </div>
      </section>

      {/* Prière à réciter */}
      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Rituel"
            title={kapparot.prayer.title}
            subtitle={kapparot.prayer.instruction}
          />

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6">
            <PrayerBlock
              index="1"
              text={kapparot.prayer.part1.transliteration}
              translation={kapparot.prayer.part1.french}
            />
            <PrayerBlock
              index="2"
              text={kapparot.prayer.part2.transliteration}
              translation={kapparot.prayer.part2.french}
              highlight
            />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center font-script text-xl italic tracking-[0.12em] text-gold-dark">
            « {site.slogan} »
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Participer"
          title="Faire mes Kapparot en ligne"
          subtitle="Renseignez les informations ci-dessous, puis validez pour être redirigé(e) vers le paiement sécurisé."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <KapparotForm />
        </div>

        {!kapparot.url && !donation.url && (
          <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-bordeaux/20 bg-bordeaux/5 p-5 text-center text-sm text-bordeaux">
            ⚠️ Aucun lien de paiement n’est configuré pour l’instant. Ajoutez
            <code className="mx-1 rounded bg-cream px-1.5 py-0.5">kapparot.url</code>
            (ou <code className="rounded bg-cream px-1.5 py-0.5">donation.url</code>) dans
            <code className="rounded bg-cream px-1.5 py-0.5">src/data/content.js</code>.
          </p>
        )}
      </section>

      <FAQ />
      <CTADonation />
    </>
  );
}

function InfoCard({ icon: IconCmp, title, text }) {
  return (
    <AnimatedSection className="flex flex-col items-start gap-3 rounded-2xl border border-sand bg-cream-50 p-6 shadow-soft">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
        <IconCmp className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="font-serif text-lg text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
    </AnimatedSection>
  );
}

function PrayerBlock({ index, text, translation, highlight = false }) {
  return (
    <AnimatedSection
      className={`relative overflow-hidden rounded-3xl border p-7 shadow-soft ${
        highlight
          ? "border-gold/50 bg-gradient-to-br from-gold/10 to-cream"
          : "border-sand bg-cream"
      }`}
    >
      <span
        className="absolute -right-4 -top-6 font-serif text-8xl text-sand/70"
        aria-hidden="true"
      >
        {index}
      </span>
      <div className="relative">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-bordeaux">
          <ScrollText className="h-4 w-4" aria-hidden="true" />
          Translittération
        </div>
        <p className="mt-2 font-serif text-lg italic leading-relaxed text-ink">
          {text}
        </p>
        <div className="mt-5 border-t border-sand pt-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
            Traduction
          </div>
          <p className="mt-2 leading-relaxed text-ink-soft">{translation}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
