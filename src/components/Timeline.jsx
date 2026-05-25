import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { timeline, site } from "@/data/content";

export default function Timeline() {
  return (
    <section className="container-wide py-20 sm:py-24">
      <SectionHeading
        eyebrow="Notre parcours"
        title="10 ans de cœur"
        subtitle="Une décennie d’engagement, d’étape en étape, au plus près des familles."
      />

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Ligne verticale */}
        <div
          className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 sm:left-1/2 sm:-translate-x-1/2"
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-8">
          {timeline.map((item, i) => (
            <li key={item.year} className="relative sm:grid sm:grid-cols-2 sm:gap-x-12">
              <AnimatedSection
                delay={0.05}
                className={
                  i % 2 === 0
                    ? "sm:col-start-1 sm:text-right"
                    : "sm:col-start-2 sm:row-start-1"
                }
              >
                {/* Pastille sur la ligne */}
                <span
                  className={`absolute left-[1.15rem] top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gold ring-4 ring-cream sm:left-1/2`}
                  aria-hidden="true"
                />
                <div className="ml-10 rounded-2xl border border-sand bg-cream-50 p-6 shadow-soft sm:ml-0">
                  <span className="font-serif text-2xl font-semibold text-bordeaux">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 text-center font-script text-2xl italic tracking-[0.16em] text-gold-dark">
        {site.slogan}
      </p>
    </section>
  );
}
