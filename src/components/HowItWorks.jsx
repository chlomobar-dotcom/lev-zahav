import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { howItWorks } from "@/data/content";

export default function HowItWorks() {
  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => (
            <AnimatedSection
              key={step.title}
              delay={i * 0.1}
              className="group relative flex flex-col gap-4 rounded-2xl border border-sand bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="absolute right-5 top-5 font-serif text-4xl font-semibold text-sand-dark transition-colors group-hover:text-gold/50">
                {i + 1}
              </span>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-ink">
                <Icon name={step.icon} className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
