import AnimatedSection from "./AnimatedSection";

/**
 * Titre de section réutilisable : petite étiquette (eyebrow) + titre + sous-titre.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center mx-auto";

  return (
    <AnimatedSection
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-gold-light" : ""}`}>
          <span className="gold-rule" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl md:text-[2.6rem] text-balance ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-pretty ${
            light ? "text-cream/80" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
