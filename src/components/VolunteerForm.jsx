"use client";

import { useState } from "react";
import { HandHeart, Check, AlertCircle, Loader2 } from "lucide-react";
import { volunteerSteps } from "@/data/content";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID;

export default function VolunteerForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!FORMSPREE_ID) {
      setErrorMsg(
        "Le formulaire n'est pas encore configuré. Écrivez-nous directement à levzahav770@gmail.com."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData(e.target);
      // Concatène les missions cochées en une seule chaîne (multivalues)
      const missions = formData.getAll("missions").join(", ");
      formData.delete("missions");
      if (missions) formData.append("missions", missions);

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || "Envoi impossible");
      }
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-3xl border border-gold/40 bg-gold/10 p-10 text-center"
        role="status"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-2xl text-ink">Bienvenue dans l'aventure !</h3>
        <p className="text-ink-soft">Merci pour votre engagement. Nous vous recontactons très vite.</p>
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
          <option value="" disabled>Quand êtes-vous disponible ?</option>
          <option>En semaine</option>
          <option>Le week-end</option>
          <option>Ponctuellement</option>
          <option>Flexible</option>
        </select>
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-ink">Missions qui vous intéressent</legend>
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

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold" />
        <span>J'accepte d'être recontacté(e) par l'association. *</span>
      </label>

      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-xl bg-bordeaux/10 px-4 py-3 text-sm text-bordeaux">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-bordeaux self-start disabled:opacity-60">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <HandHeart className="h-4 w-4" aria-hidden="true" />
            Je deviens bénévole
          </>
        )}
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
