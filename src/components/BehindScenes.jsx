import AnimatedSection from "./AnimatedSection";
import SmartImage from "./SmartImage";
import { behindScenes } from "@/data/content";

export default function BehindScenes() {
  return (
    <section className="container-wide py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Mosaïque d'images */}
        <AnimatedSection className="grid grid-cols-2 gap-4">
          {behindScenes.images.map((img, i) => (
            <SmartImage
              key={i}
              src={img}
              alt={`Préparation des colis — photo ${i + 1}`}
              label="Coulisses"
              className={`overflow-hidden rounded-2xl shadow-soft ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"
              }`}
            />
          ))}
        </AnimatedSection>

        {/* Texte */}
        <AnimatedSection delay={0.1} className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="gold-rule" aria-hidden="true" />
            {behindScenes.eyebrow}
          </span>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl text-balance">
            {behindScenes.title}
          </h2>
          <p className="leading-relaxed text-ink-soft">{behindScenes.text}</p>
          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {[
              "Tri des denrées",
              "Pesée & équilibre",
              "Assemblage des colis",
              "Chargement & logistique",
            ].map((s) => (
              <li
                key={s}
                className="rounded-xl border border-sand bg-cream-50 px-4 py-3 text-sm font-medium text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
