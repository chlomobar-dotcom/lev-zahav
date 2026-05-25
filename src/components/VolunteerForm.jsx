"use client";

import { useState } from "react";
import { HandHeart, Check } from "lucide-react";
import { volunteerSteps } from "@/data/content";

/**
 * Formulaire pour devenir bénévole.
 *
 * ⚠️ Démo : aucune donnée n'est envoyée. Branchez votre service
 * (Formspree, Tally, route API Next.js...) dans handleSubmit.
 */
export default function VolunteerForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // 👉 REMPLACER par l'envoi réel.
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
        <h3 className="font-serif text-2xl text-ink">Bienvenue dans l’aventure !</h3>
        <p className="text-ink-soft">
          Merci pour votre engagement. Nous vous recontactons très vite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="v-name" label="Nom complet" required>
          <input type="text" id="v-name" name="name" required className={inputClass} />
        </Field>
        <Field id="v-email" label="E-mail" required>
          <input type="email" id="v-email" name="email" required className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="v-phone" label="Téléphone" required>
          <input type="tel" id="v-phone" name="phone" required className={inputClass} />
        </Field>
        <Field id="v-city" label="Ville">
          <input type="text" id="v-city" name="city" className={inputClass} />
        </Field>
      </div>

      <Field id="v-availability" label="Vos disponibilités">
        <select id="v-availability" name="availability" className={inputClass} defaultValue="">
          <option value="" disabled>
            Quand êtes-vous disponible ?
          </option>
          <option>En semaine</option>
          <option>Le week-end</option>
          <option>Ponctuellement</option>
          <option>Flexible</option>
        </select>
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-ink">
          Missions qui vous intéressent
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {volunteerSteps.missions.map((m) => (
            <label
              key={m}
              className="flex items-center gap-3 rounded-xl border border-sand-dark bg-cream-50 px-4 py-3 text-sm text-ink"
            >
              <input
                type="checkbox"
                name="missions"
                value={m}
                className="h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="v-message" label="Un mot pour nous (facultatif)">
        <textarea id="v-message" name="message" rows={4} className={`${inputClass} resize-y`} />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold" />
        <span>J’accepte d’être recontacté(e) par l’association. *</span>
      </label>

      <button type="submit" className="btn-bordeaux self-start">
        <HandHeart className="h-4 w-4" aria-hidden="true" />
        Je deviens bénévole
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
