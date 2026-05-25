import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { partners } from "@/data/content";

export default function Partners() {
  if (!partners?.length) return null;

  return (
    <section className="container-wide py-16 sm:py-20">
      <SectionHeading
        eyebrow="Ils nous soutiennent"
        title="Une aventure collective"
        subtitle="Merci à nos partenaires qui rendent chaque distribution possible."
      />

      <AnimatedSection className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((p, i) => {
          const content = p.logo ? (
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-12 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <span className="text-center text-sm font-semibold text-ink-soft transition-colors group-hover:text-ink">
              {p.name}
            </span>
          );

          const classes =
            "group flex h-24 items-center justify-center rounded-2xl border border-sand bg-cream-50 p-4 transition-colors hover:border-gold/50";

          return p.url ? (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
            >
              {content}
            </a>
          ) : (
            <div key={i} className={classes}>
              {content}
            </div>
          );
        })}
      </AnimatedSection>

      <p className="mt-6 text-center text-xs text-ink-soft/60">
        {/* 👉 Remplacez les noms et logos dans src/data/content.js (tableau `partners`). */}
        Vous souhaitez devenir partenaire ? Écrivez-nous.
      </p>
    </section>
  );
}
