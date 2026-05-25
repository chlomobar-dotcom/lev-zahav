import AnimatedSection from "./AnimatedSection";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="border-y border-sand/70 bg-cream-50" aria-label="Chiffres clés">
      <div className="container-wide grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimatedSection
            key={stat.label}
            delay={i * 0.1}
            className="flex flex-col items-center gap-2 px-4 py-10 text-center sm:py-12"
          >
            <p className="font-serif text-4xl font-semibold text-bordeaux sm:text-5xl">
              {stat.value}
              <span className="text-2xl text-gold-dark sm:text-3xl">{stat.suffix}</span>
            </p>
            <p className="max-w-[14rem] text-sm leading-snug text-ink-soft">
              {stat.label}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
