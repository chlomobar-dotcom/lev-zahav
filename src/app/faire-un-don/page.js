import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import DonationImpact from "@/components/DonationImpact";
import FAQ from "@/components/FAQ";
import { Heart, Landmark, ShieldCheck, ReceiptText } from "lucide-react";
import { donation, site } from "@/data/content";

export const metadata = {
  title: "Faire un don",
  description:
    "Faites un don à LEV ZAHAV — La Banque du Cœur. 18 € = un colis de base. Reçu fiscal et réduction d'impôt. Chaque don compte.",
};

export default function DonPage() {
  return (
    <>
      <PageHero
        eyebrow="Faire un don"
        title="Votre générosité change des vies"
        subtitle="Chaque don, ponctuel ou régulier, permet de nourrir et d'accompagner des familles avec dignité."
      />

      {/* Bloc don principal */}
      <section className="container-page py-16 sm:py-20">
        <AnimatedSection className="overflow-hidden rounded-3xl border border-sand bg-cream-50 shadow-card">
          <div className="grid md:grid-cols-2">
            {/* Don en ligne */}
            <div className="flex flex-col gap-5 p-8 sm:p-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                <Heart className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl text-ink">Don en ligne sécurisé</h2>
              <p className="text-ink-soft">
                Le moyen le plus simple et le plus rapide de nous soutenir. Don
                ponctuel ou mensuel, à partir de quelques euros.
              </p>
              {/* 👉 Le lien pointe vers donation.url (à configurer dans content.js) */}
              <a
                href={donation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold self-start"
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
                Je fais un don maintenant
              </a>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-ink-soft">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                  Paiement 100 % sécurisé
                </li>
                <li className="flex items-center gap-2">
                  <ReceiptText className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                  Reçu fiscal envoyé automatiquement
                </li>
              </ul>
            </div>

            {/* Don par virement */}
            <div className="flex flex-col gap-5 border-t border-sand bg-ink p-8 text-cream sm:p-10 md:border-l md:border-t-0">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-light">
                <Landmark className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl text-cream">{donation.ribLabel}</h2>
              <p className="text-cream/75">
                Vous préférez le virement bancaire ? Utilisez nos coordonnées
                ci-dessous.
              </p>
              <dl className="flex flex-col gap-3 rounded-2xl bg-white/5 p-5 text-sm">
                <div className="flex flex-col gap-1">
                  <dt className="text-cream/60">IBAN</dt>
                  <dd className="font-mono tracking-wide text-cream">{donation.iban}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-cream/60">BIC</dt>
                  <dd className="font-mono tracking-wide text-cream">{donation.bic}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-cream/60">Bénéficiaire</dt>
                  <dd className="text-cream">{site.legalName}</dd>
                </div>
              </dl>
              <p className="font-script text-xl italic tracking-[0.16em] text-gold-light">
                {site.slogan}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Note fiscale */}
        <AnimatedSection className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/30 bg-gold/10 p-6 text-center text-sm text-ink">
          {donation.taxNote}
        </AnimatedSection>
      </section>

      <DonationImpact />
      <FAQ />
    </>
  );
}
