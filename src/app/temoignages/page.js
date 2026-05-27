import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CTADonation from "@/components/CTADonation";

export const metadata = {
  title: "Témoignages",
  description:
    "10 ans de cœur en mots : témoignages de familles accompagnées et de bénévoles de l'association LEV ZAHAV — La Banque du Cœur.",
};

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        eyebrow="10 ans de cœur en mots"
        title="Témoignages"
        subtitle="Des familles qui ont retrouvé la dignité, des bénévoles qui ont donné de leur temps : ces voix racontent l'âme de LEV ZAHAV."
      />

      <Testimonials />
      <CTADonation />
    </>
  );
}
