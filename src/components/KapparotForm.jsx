"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  Minus,
  Heart,
  Check,
  User,
  ExternalLink,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { kapparot, donation } from "@/data/content";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_KAPPAROT_ID;

/**
 * Formulaire Kapparot en ligne.
 *
 * ⚠️ Le paiement est délégué à une plateforme externe :
 *   - Si `kapparot.url` est renseigné dans content.js, on redirige dessus.
 *   - Sinon, on utilise `donation.url` (lien de don général) en secours.
 *
 * Pour un flux 100% intégré (encart de paiement dans la page comme sur
 * torahtimes.fr), il faudra brancher un widget HelloAsso / AlloDons / PayPlug.
 */
export default function KapparotForm() {
  const [nbPeople, setNbPeople] = useState(1);
  const [people, setPeople] = useState([{ prenom: "", genre: "H" }]);
  const [contact, setContact] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
  });
  const [wantsReceipt, setWantsReceipt] = useState(true);
  const [receiptType, setReceiptType] = useState("particulier");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const total = useMemo(() => nbPeople * kapparot.pricePerUnit, [nbPeople]);

  function updatePeopleCount(newCount) {
    const clamped = Math.max(1, Math.min(kapparot.maxPeople, newCount));
    setNbPeople(clamped);
    setPeople((prev) => {
      const next = [...prev];
      while (next.length < clamped) next.push({ prenom: "", genre: "H" });
      return next.slice(0, clamped);
    });
  }

  function updatePerson(index, field, value) {
    setPeople((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    const names = people.map((p) => p.prenom.trim()).filter(Boolean);
    const dedicataires = people
      .map(
        (p, i) =>
          `${i + 1}. ${p.prenom.trim() || "(sans prénom)"} — ${
            p.genre === "F" ? "Femme" : "Homme"
          }`
      )
      .join("\n");

    // Si Formspree n'est pas configuré, on saute l'envoi mail et on passe direct au récap.
    if (!FORMSPREE_ID) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const payload = new FormData();
      payload.set("_subject", `Kapparot en ligne — ${total} € (${nbPeople} pers.)`);
      payload.set("nb_personnes", String(nbPeople));
      payload.set("montant_total", `${total} €`);
      payload.set("dedicataires", dedicataires);
      payload.set("prenom_donateur", contact.prenom);
      payload.set("nom_donateur", contact.nom);
      payload.set("email", contact.email);
      payload.set("telephone", contact.tel);
      payload.set("recu_fiscal", wantsReceipt ? "Oui" : "Non");
      if (wantsReceipt) {
        payload.set(
          "type_recu",
          receiptType === "societe" ? "Société" : "Particulier"
        );
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || "Envoi impossible");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  const paymentUrl = kapparot.url || donation.url;

  // ---------- Écran de confirmation / redirection paiement ----------
  if (status === "sent") {
    const names = people
      .map((p) => p.prenom.trim())
      .filter(Boolean)
      .join(", ");

    return (
      <div className="flex flex-col gap-6 rounded-3xl border border-gold/30 bg-cream-50 p-6 shadow-soft sm:p-10">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
            <Check className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-serif text-2xl text-ink">Récapitulatif</h3>
            <p className="text-sm text-ink-soft">
              Merci {contact.prenom || ""} ! Vérifiez ci-dessous avant le paiement.
            </p>
          </div>
        </div>

        <dl className="grid gap-3 rounded-2xl bg-cream p-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-ink-soft">Nombre de personnes</dt>
            <dd className="text-lg font-semibold text-ink">{nbPeople}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Montant total</dt>
            <dd className="text-lg font-semibold text-bordeaux">{total} €</dd>
          </div>
          {names && (
            <div className="sm:col-span-2">
              <dt className="text-ink-soft">Kapparot pour</dt>
              <dd className="text-ink">{names}</dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="text-ink-soft">Reçu fiscal</dt>
            <dd className="text-ink">
              {wantsReceipt
                ? `Oui — ${receiptType === "societe" ? "Société" : "Particulier"}`
                : "Non demandé"}
            </dd>
          </div>
        </dl>

        <div className="rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-ink">
          <strong className="font-semibold">Important :</strong> {kapparot.afterSubmitNote}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Payer {total} € maintenant
            <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn-outline"
          >
            Modifier ma demande
          </button>
        </div>
      </div>
    );
  }

  // ---------- Formulaire principal ----------
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Sélecteur nombre de personnes */}
      <div className="rounded-3xl border border-sand bg-cream-50 p-6 shadow-soft sm:p-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-bordeaux">
              Étape 1
            </p>
            <p className="mt-1 font-serif text-xl text-ink">
              Nombre de personnes
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => updatePeopleCount(nbPeople - 1)}
              disabled={nbPeople <= 1}
              aria-label="Retirer une personne"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-dark bg-cream text-ink transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Minus className="h-5 w-5" />
            </button>
            <span
              className="w-12 text-center font-serif text-3xl font-semibold text-bordeaux"
              aria-live="polite"
            >
              {nbPeople}
            </span>
            <button
              type="button"
              onClick={() => updatePeopleCount(nbPeople + 1)}
              disabled={nbPeople >= kapparot.maxPeople}
              aria-label="Ajouter une personne"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-dark bg-cream text-ink transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-baseline justify-between border-t border-sand pt-5">
          <span className="text-sm text-ink-soft">
            {nbPeople} × {kapparot.pricePerUnit} €
          </span>
          <span className="font-serif text-3xl font-semibold text-bordeaux">
            {total} €
          </span>
        </div>
      </div>

      {/* Prénoms des personnes */}
      <div className="rounded-3xl border border-sand bg-cream-50 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-bordeaux">
          Étape 2
        </p>
        <p className="mt-1 font-serif text-xl text-ink">
          Prénom{nbPeople > 1 ? "s" : ""} des dédicataires
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          La ou les personnes pour qui la kappara est accomplie.
        </p>

        <div className="mt-5 grid gap-4">
          {people.map((p, i) => (
            <div key={i} className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  required
                  placeholder={`Prénom ${nbPeople > 1 ? `n° ${i + 1}` : ""}`}
                  value={p.prenom}
                  onChange={(e) => updatePerson(i, "prenom", e.target.value)}
                  className={`${inputClass} pl-11`}
                  aria-label={`Prénom de la personne ${i + 1}`}
                />
              </div>
              <div
                className="inline-flex overflow-hidden rounded-xl border border-sand-dark"
                role="group"
                aria-label={`Genre — personne ${i + 1}`}
              >
                {[
                  { v: "H", l: "Homme" },
                  { v: "F", l: "Femme" },
                ].map((g) => (
                  <button
                    key={g.v}
                    type="button"
                    onClick={() => updatePerson(i, "genre", g.v)}
                    aria-pressed={p.genre === g.v}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${
                      p.genre === g.v
                        ? "bg-ink text-cream"
                        : "bg-cream text-ink-soft hover:bg-sand/50"
                    }`}
                  >
                    {g.l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coordonnées du donateur */}
      <div className="rounded-3xl border border-sand bg-cream-50 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-bordeaux">
          Étape 3
        </p>
        <p className="mt-1 font-serif text-xl text-ink">Vos coordonnées</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="Prénom" required>
            <input
              type="text"
              required
              value={contact.prenom}
              onChange={(e) => setContact({ ...contact, prenom: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Nom" required>
            <input
              type="text"
              required
              value={contact.nom}
              onChange={(e) => setContact({ ...contact, nom: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="E-mail" required>
            <input
              type="email"
              required
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Téléphone">
            <input
              type="tel"
              value={contact.tel}
              onChange={(e) => setContact({ ...contact, tel: e.target.value })}
              className={inputClass}
            />
          </Field>
        </div>

        {/* Reçu fiscal */}
        <div className="mt-6 border-t border-sand pt-5">
          <label className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={wantsReceipt}
              onChange={(e) => setWantsReceipt(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-sand-dark text-gold focus:ring-gold"
            />
            <span>
              Je souhaite recevoir un <strong>reçu fiscal (Cerfa)</strong>
              &nbsp;— votre don ouvre droit à une réduction d’impôt.
            </span>
          </label>

          {wantsReceipt && (
            <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Type de reçu">
              {[
                { v: "particulier", l: "Particulier" },
                { v: "societe", l: "Société" },
              ].map((t) => (
                <button
                  key={t.v}
                  type="button"
                  role="radio"
                  aria-checked={receiptType === t.v}
                  onClick={() => setReceiptType(t.v)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    receiptType === t.v
                      ? "bg-gold text-ink shadow-gold"
                      : "border border-sand-dark bg-cream text-ink-soft hover:border-gold"
                  }`}
                >
                  {t.l}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl bg-bordeaux/10 px-4 py-3 text-sm text-bordeaux"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Impossible d’envoyer votre demande ({errorMsg}). Réessayez, ou
            écrivez-nous directement.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-bordeaux self-center disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Heart className="h-4 w-4" aria-hidden="true" />
            Continuer vers le paiement ({total} €)
          </>
        )}
      </button>

      <p className="text-center text-xs text-ink-soft/70">
        En validant, vos informations nous sont envoyées, puis vous êtes
        redirigé(e) vers notre plateforme de paiement sécurisée. Aucune donnée
        bancaire n’est stockée sur ce site.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-sand-dark bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink">
      <span>
        {label} {required && <span className="text-bordeaux">*</span>}
      </span>
      {children}
    </label>
  );
}
