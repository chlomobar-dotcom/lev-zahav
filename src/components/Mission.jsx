import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SmartImage from "./SmartImage";
import { mission, site } from "@/data/content";

export default function Mission() {
  return (
    <section className="container-wide py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Visuel */}
        <AnimatedSection className="order-2 lg:order-1">
          <div className="relative">
            <SmartImage
              src={mission.image}
              alt="Bénévoles préparant des colis alimentaires"
              label="Photo · mission"
              className="aspect-[4/3] rounded-[2rem] shadow-card"
            />
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-gold px-5 py-4 text-center shadow-gold sm:block">
              <p className="font-serif text-2xl font-semibold text-ink">10 ans</p>
              <p className="text-xs font-medium uppercase tracking-wider text-ink/70">
                de cœur
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Texte */}
        <AnimatedSection className="order-1 flex flex-col gap-5 lg:order-2" delay={0.1}>
          <span className="eyebrow">
            <span className="gold-rule" aria-hidden="true" />
            {mission.eyebrow}
          </span>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl text-balance">
            {mission.title}
          </h2>
          {mission.text.map((p, i) => (
            <p key={i} className="leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <ul className="mt-2 flex flex-col gap-3">
            {mission.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-ink">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-script text-xl italic tracking-[0.12em] text-gold-dark">
            {site.slogan}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
