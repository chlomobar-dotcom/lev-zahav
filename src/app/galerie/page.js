import PageHero from "@/components/PageHero";
import GalleryYears from "@/components/GalleryYears";
import RecentDistributions from "@/components/RecentDistributions";
import CTADonation from "@/components/CTADonation";
import { Info } from "lucide-react";

export const metadata = {
  title: "Galerie photos & vidéos",
  description:
    "10 ans en images : revivez les distributions de LEV ZAHAV année par année. Albums photos et vidéos de 2015 à 2025.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="10 ans en images"
        title="Galerie photos & vidéos"
        subtitle="Filtrez par année et plongez dans une décennie de solidarité, de sourires et d'engagement."
      />

      <section className="container-wide py-16 sm:py-20">
        <RecentDistributions />
        <GalleryYears />

        {/* Note d'aide à la personnalisation (visible discrètement) */}
        <div className="mx-auto mt-16 flex max-w-3xl items-start gap-4 rounded-2xl border border-sand bg-cream-50 p-6 text-sm text-ink-soft">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
          <p>
            Les albums et vidéos peuvent être hébergés sur Google Photos, Google
            Drive, YouTube (non répertorié) ou Vimeo. Renseignez simplement les
            liens dans le fichier{" "}
            <code className="rounded bg-sand px-1.5 py-0.5 text-ink">
              src/data/content.js
            </code>{" "}
            (tableau <strong>galleryYears</strong>) : les boutons « Voir l’album
            photo » et « Voir la vidéo » apparaîtront automatiquement.
          </p>
        </div>
      </section>

      <CTADonation />
    </>
  );
}
