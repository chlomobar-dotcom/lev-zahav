import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/content";

/**
 * Section "Notre impact humain" — affiche les témoignages de la brochure.
 *
 * Props :
 *   limit (number)  : nombre max à afficher (par défaut tous)
 *   showSeeMore     : ajoute un lien "Voir tous les témoignages" si limit < total
 */
export default function Testimonials({ limit, showSeeMore = false }) {
  const items = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;
  const hasMore = showSeeMore && typeof limit === "number" && limit < testimonials.length;

  return (
    <section className="container-wide py-20 sm:py-24">
      <SectionHeading
        eyebrow="Notre impact humain"
        title="Des mots qui valent tous les chiffres"
        subtitle="Témoignages de familles accompagnées et de bénévoles, recueillis tout au long de ces 10 années."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <AnimatedSection
            key={`${t.author}-${t.year}-${i}`}
            delay={i * 0.08}
            className="flex flex-col gap-5 rounded-3xl border border-sand bg-cream-50 p-8 shadow-soft"
          >
            <div className="flex items-start justify-between">
              <Quote className="h-9 w-9 text-gold" aria-hidden="true" />
              {t.year && (
                <span className="rounded-full bg-ink/85 px-2.5 py-0.5 font-serif text-xs font-semibold text-cream">
                  {t.year}
                </span>
              )}
            </div>
            <blockquote className="flex-1 font-serif text-[0.98rem] leading-relaxed text-ink">
              « {t.quote} »
            </blockquote>
            <footer className="border-t border-sand pt-4">
              <p className="font-semibold text-ink">{t.author}</p>
              <p className="text-sm text-bordeaux">{t.role}</p>
            </footer>
          </AnimatedSection>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <Link
            href="/temoignages"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Voir tous les témoignages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}
