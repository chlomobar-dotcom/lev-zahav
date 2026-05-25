import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import VolunteerSection from "@/components/VolunteerSection";
import VolunteerForm from "@/components/VolunteerForm";
import SloganBanner from "@/components/SloganBanner";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Devenir bénévole",
  description:
    "Rejoignez les bénévoles de LEV ZAHAV. Préparation des colis, distribution, logistique : donnez un peu de votre temps pour aider des familles.",
};

export default function BenevolePage() {
  return (
    <>
      <PageHero
        eyebrow="Devenir bénévole"
        title="Donnez de votre temps, recevez du sens"
        subtitle="Quelques heures par mois suffisent pour faire une vraie différence. Rejoignez une équipe chaleureuse et engagée."
      />

      <VolunteerSection showCta={false} />

      <SloganBanner subtitle="Seuls, nous faisons peu. Ensemble, nous changeons des vies." />

      {/* Formulaire bénévole */}
      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="mb-10 text-center">
            <span className="eyebrow justify-center">
              <span className="gold-rule" aria-hidden="true" />
              Formulaire bénévole
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
              Prêt(e) à nous rejoindre ?
            </h2>
            <p className="mt-3 text-ink-soft">
              Remplissez ce formulaire : nous vous recontactons pour faire
              connaissance.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.1}
            className="rounded-3xl border border-sand bg-cream-50 p-6 shadow-soft sm:p-10"
          >
            <VolunteerForm />
          </AnimatedSection>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
