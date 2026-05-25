import { site } from "@/data/content";

/**
 * En-tête des pages intérieures : titre, sous-titre et slogan discret.
 */
export default function PageHero({ eyebrow, title, subtitle, showSlogan = true }) {
  return (
    <section className="relative overflow-hidden border-b border-sand/70 bg-cream-50">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page relative z-10 py-16 text-center sm:py-20">
        {eyebrow && (
          <span className="eyebrow justify-center">
            <span className="gold-rule" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {subtitle}
          </p>
        )}
        {showSlogan && (
          <p className="mt-6 font-script text-xl italic tracking-[0.16em] text-gold-dark">
            {site.slogan}
          </p>
        )}
      </div>
    </section>
  );
}
