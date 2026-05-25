"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

/**
 * Inscription à la newsletter.
 *
 * ⚠️ Démo : ce formulaire n'envoie rien pour l'instant (affichage d'un message
 * de confirmation seulement). Pour le connecter, branchez votre service
 * (Brevo, Mailchimp, Sendinblue...) dans la fonction handleSubmit ci-dessous.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // 👉 REMPLACER par l'appel à votre service d'emailing.
    setSent(true);
    setEmail("");
  }

  return (
    <section className="container-wide py-16 sm:py-20">
      <AnimatedSection className="overflow-hidden rounded-3xl border border-sand bg-cream-50 px-6 py-12 shadow-soft sm:px-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="gold-rule" aria-hidden="true" />
              Restons en lien
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Recevez les nouvelles de l’association
            </h2>
            <p className="mt-3 text-ink-soft">
              Distributions, coulisses, témoignages : suivez l’aventure LEV ZAHAV
              et l’impact de votre générosité.
            </p>
          </div>

          <div>
            {sent ? (
              <div
                className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5 text-ink"
                role="status"
              >
                <Check className="h-6 w-6 text-gold-dark" aria-hidden="true" />
                <p className="text-sm font-medium">
                  Merci ! Votre inscription est bien prise en compte.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Votre adresse e-mail
                </label>
                <div className="relative flex-1">
                  <Mail
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"
                    aria-hidden="true"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.fr"
                    className="w-full rounded-full border border-sand-dark bg-white py-3.5 pl-12 pr-4 text-sm text-ink outline-none transition-colors focus:border-gold"
                  />
                </div>
                <button type="submit" className="btn-bordeaux">
                  S’inscrire
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-ink-soft/70">
              Pas de spam. Désinscription possible à tout moment.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
