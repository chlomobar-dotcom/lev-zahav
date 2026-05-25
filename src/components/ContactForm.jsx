"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

/**
 * Formulaire de contact.
 *
 * ⚠️ Démo : aucune donnée n'est envoyée pour l'instant.
 * Pour le rendre fonctionnel, branchez votre solution dans handleSubmit :
 *   • un service no-code (Formspree, Getform, Tally...) — le plus simple ;
 *   • ou une route API Next.js (ex. /api/contact) qui envoie un e-mail.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // 👉 REMPLACER par l'envoi réel (fetch vers votre service ou route API).
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-3xl border border-gold/40 bg-gold/10 p-10 text-center"
        role="status"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-2xl text-ink">Message envoyé, merci !</h3>
        <p className="text-ink-soft">
          Nous revenons vers vous dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nom complet" required>
          <input type="text" id="name" name="name" required className={inputClass} />
        </Field>
        <Field id="email" label="E-mail" required>
          <input type="email" id="email" name="email" required className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Téléphone">
          <input type="tel" id="phone" name="phone" className={inputClass} />
        </Field>
        <Field id="subject" label="Sujet" required>
          <select id="subject" name="subject" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Choisissez un sujet
            </option>
            <option>Faire un don</option>
            <option>Devenir bénévole</option>
            <option>Demander de l’aide</option>
            <option>Devenir partenaire</option>
            <option>Autre</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Votre message" required>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y`}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold" />
        <span>
          J’accepte que mes informations soient utilisées pour me recontacter. *
        </span>
      </label>

      <button type="submit" className="btn-bordeaux self-start">
        <Send className="h-4 w-4" aria-hidden="true" />
        Envoyer le message
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-sand-dark bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

function Field({ id, label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-bordeaux">*</span>}
      </label>
      {children}
    </div>
  );
}
