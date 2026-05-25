import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import SloganBanner from "@/components/SloganBanner";
import HowItWorks from "@/components/HowItWorks";
import Timeline from "@/components/Timeline";
import DonationImpact from "@/components/DonationImpact";
import BehindScenes from "@/components/BehindScenes";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import Partners from "@/components/Partners";
import VolunteerSection from "@/components/VolunteerSection";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import CTADonation from "@/components/CTADonation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />

      {/* Section artistique / émotionnelle avec le slogan au centre */}
      <SloganBanner subtitle="Chaque mois, des bénévoles unissent leurs forces pour redonner le sourire à des familles. Voilà ce que signifie, pour nous, être en vie." />

      <HowItWorks />
      <Timeline />
      <DonationImpact />
      <BehindScenes />
      <Testimonials />
      <GalleryPreview />
      <Partners />
      <VolunteerSection />
      <Newsletter />
      <FAQ />
      <CTADonation />
    </>
  );
}
