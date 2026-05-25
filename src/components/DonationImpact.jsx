import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { donationImpact } from "@/data/content";

export default function DonationImpact() {
  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow={donationImpact.eyebrow}
          title={donationImpact.title}
          subtitle={donationImpact.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {donationImpact.tiers.map((tier, i) => (
            <AnimatedSection
              key={tier.amount}
              delay={i * 0.1}
              className={`relative flex flex-col gap-4 rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 ${
                tier.highlight
                  ? "bg-ink text-cream shadow-card ring-2 ring-gold"
                  : "border border-sand bg-cream text-ink"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-gold">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Le plus utile
                </span>
              )}
              <div className="flex items-baseline gap-1">
                <span
                  className={`font-serif text-5xl font-semibold ${
                    tier.highlight ? "text-gold-light" : "text-bordeaux"
                  }`}
                >
                  {tier.amount}
                </span>
                <span
                  className={`text-2xl font-medium ${
                    tier.highlight ? "text-gold-light" : "text-bordeaux"
                  }`}
                >
                  €
                </span>
              </div>
              <h3 className="font-serif text-xl">{tier.title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  tier.highlight ? "text-cream/80" : "text-ink-soft"
                }`}
              >
                {tier.text}
              </p>
              <Link
                href="/faire-un-don"
                className={`mt-auto ${tier.highlight ? "btn-gold" : "btn-outline"}`}
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donner {tier.amount} €
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Vous préférez un autre montant ?{" "}
          <Link href="/faire-un-don" className="font-semibold text-bordeaux underline-offset-4 hover:underline">
            {donationImpact.freeAmountLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
