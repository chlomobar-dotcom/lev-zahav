import PageHero from "@/components/PageHero";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import BehindScenes from "@/components/BehindScenes";
import DonationImpact from "@/components/DonationImpact";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import SloganBanner from "@/components/SloganBanner";
import CTADonation from "@/components/CTADonation";

export const metadata = {
  title: "Nos actions",
  description:
    "Distribution mensuelle de colis alimentaires, accompagnement humain, lutte contre le gaspillage : découvrez les actions concrètes de LEV ZAHAV.",
};

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos actions"
        title="Agir concrètement, chaque mois"
        subtitle="Derrière chaque colis, une organisation rigoureuse et beaucoup de cœur. Voici comment nous transformons votre générosité en aide réelle."
      />

      <Mission />
      <HowItWorks />
      <SloganBanner subtitle="Trier, préparer, distribuer : à chaque étape, c'est la même énergie collective qui nous anime." />
      <BehindScenes />
      <DonationImpact />
      <Testimonials />
      <Partners />
      <CTADonation />
    </>
  );
}
