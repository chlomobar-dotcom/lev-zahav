import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="container-wide py-20 sm:py-24">
      <SectionHeading
        eyebrow="Notre impact humain"
        title="Des mots qui valent tous les chiffres"
        subtitle="Témoignages anonymisés de familles accompagnées et de bénévoles."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.1}
            className="flex flex-col gap-5 rounded-3xl border border-sand bg-cream-50 p-8 shadow-soft"
          >
            <Quote className="h-9 w-9 text-gold" aria-hidden="true" />
            <blockquote className="flex-1 font-serif text-lg leading-relaxed text-ink">
              « {t.quote} »
            </blockquote>
            <footer className="border-t border-sand pt-4">
              <p className="font-semibold text-ink">{t.author}</p>
              <p className="text-sm text-bordeaux">{t.role}</p>
            </footer>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
