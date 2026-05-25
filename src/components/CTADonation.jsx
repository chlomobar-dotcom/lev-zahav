import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { site } from "@/data/content";

/**
 * Bloc d'appel au don réutilisable (bordeaux profond + slogan).
 */
export default function CTADonation() {
  return (
    <section className="container-wide py-16 sm:py-20">
      <AnimatedSection className="relative overflow-hidden rounded-3xl bg-bordeaux px-6 py-14 text-center shadow-card sm:px-12">
        {/* Décor doré discret */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-2xl" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
          <Heart className="h-9 w-9 text-gold-light" aria-hidden="true" />
          <h2 className="font-serif text-3xl leading-tight text-cream sm:text-4xl text-balance">
            Faites partie de celles et ceux qui changent une vie
          </h2>
          <p className="text-cream/85">
            En quelques clics, votre don devient un colis, un repas, un sourire.
          </p>
          <p className="font-script text-xl italic tracking-[0.18em] text-gold-light">
            {site.slogan}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link href="/faire-un-don" className="btn-gold">
              <Heart className="h-4 w-4" aria-hidden="true" />
              Faire un don
            </Link>
            <Link href="/devenir-benevole" className="btn-ghost-light">
              Devenir bénévole
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
