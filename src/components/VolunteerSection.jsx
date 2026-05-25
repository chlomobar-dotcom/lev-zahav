import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { volunteerSteps } from "@/data/content";

export default function VolunteerSection({ showCta = true }) {
  return (
    <section className="container-wide py-20 sm:py-24">
      <SectionHeading
        eyebrow={volunteerSteps.eyebrow}
        title={volunteerSteps.title}
        subtitle="Donnez un peu de votre temps, recevez beaucoup en retour."
      />

      {/* 3 étapes */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {volunteerSteps.steps.map((step, i) => (
          <AnimatedSection
            key={step.title}
            delay={i * 0.1}
            className="relative flex flex-col items-center gap-4 rounded-3xl border border-sand bg-cream-50 p-8 text-center shadow-soft"
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-bordeaux font-serif text-sm font-semibold text-cream shadow-soft">
              {i + 1}
            </span>
            <span className="mt-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
              <Icon name={step.icon} className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="font-serif text-xl text-ink">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{step.text}</p>
          </AnimatedSection>
        ))}
      </div>

      {/* Missions possibles */}
      <AnimatedSection className="mt-12 rounded-3xl bg-ink p-8 sm:p-10" delay={0.1}>
        <h3 className="font-serif text-2xl text-cream">Des missions pour tous</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {volunteerSteps.missions.map((m) => (
            <li key={m} className="flex items-center gap-3 text-cream/85">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              {m}
            </li>
          ))}
        </ul>
        {showCta && (
          <Link href="/devenir-benevole" className="btn-gold mt-8">
            Devenir bénévole
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </AnimatedSection>
    </section>
  );
}
