import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import { galleryYears } from "@/data/content";

export default function GalleryPreview() {
  // Affiche les 4 années les plus récentes en aperçu
  const preview = [...galleryYears].reverse().slice(0, 4);

  return (
    <section className="container-wide py-20 sm:py-24">
      <div className="flex flex-col items-center gap-6">
        <SectionHeading
          eyebrow="10 ans en images"
          title="Revivez une décennie de solidarité"
          subtitle="Photos et vidéos de nos distributions, année après année."
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {preview.map((item, i) => (
          <AnimatedSection key={item.year} delay={i * 0.08}>
            <Link
              href="/galerie"
              className="group relative block aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <SmartImage
                src={item.cover}
                alt={`Souvenirs ${item.year}`}
                label={item.year}
                className="h-full w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-cream">
                {item.year}
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/galerie" className="btn-bordeaux">
          <Images className="h-4 w-4" aria-hidden="true" />
          Voir toutes les archives
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
