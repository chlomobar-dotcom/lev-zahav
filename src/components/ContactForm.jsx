"use client";

import { useState } from "react";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
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
        <h3 className="font-serif text-2xl text-ink">Message envoyé, merci !</h3>
        <p className="text-ink-soft">Nous revenons vers vous dans les meilleurs délais.</p>
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
            <option value="" disabled>Choisissez un sujet</option>
            <option>Faire un don</option>
            <option>Devenir bénévole</option>
            <option>Demander de l'aide</option>
            <option>Devenir partenaire</option>
            <option>Autre</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Votre message" required>
        <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-y`} />
      </Field>

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold" />
        <span>J'accepte que mes informations soient utilisées pour me recontacter. *</span>
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
            <Send className="h-4 w-4" aria-hidden="true" />
            Envoyer le message
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
