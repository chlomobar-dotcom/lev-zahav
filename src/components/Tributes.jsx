import { Flame } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { tributes } from "@/data/content";

export default function Tributes() {
  return (
    <section className="border-t border-sand bg-cream-50 py-20 sm:py-24">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{tributes.eyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            {tributes.title}
          </h2>
          <div className="mx-auto mt-5 gold-rule" />
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            {tributes.intro}
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {tributes.people.map((p, i) => (
            <AnimatedSection
              key={p.name}
              delay={i * 0.12}
              className="relative flex flex-col gap-3 rounded-3xl border border-sand bg-cream p-8 shadow-soft"
            >
              <span
                aria-hidden="true"
                className="absolute -top-5 left-1/2 inline-flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold-dark"
              >
                <Flame className="h-5 w-5" />
              </span>
              <p className="mt-4 text-center font-serif text-xl font-semibold text-ink">
                {p.name}
                {p.hebrewMemorial && (
                  <span className="ml-2 align-middle font-script text-base text-gold-dark">
                    {p.hebrewMemorial}
                  </span>
                )}
              </p>
              <p className="text-center text-xs font-medium uppercase tracking-wider text-bordeaux">
                {p.title}
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-ink-soft">
                {p.text}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-12 text-center font-script text-lg italic text-gold-dark">
          {tributes.closing}
        </p>
      </div>
    </section>
  );
}
