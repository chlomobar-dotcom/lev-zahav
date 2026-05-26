"use client";
import { useEffect, useState, useCallback } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, Upload, Trash2, Calendar, Loader2, ExternalLink, Home } from "lucide-react";

const MOIS = [
  { value: "01", label: "Janvier" },
  { value: "02", label: "Février" },
  { value: "03", label: "Mars" },
  { value: "04", label: "Avril" },
  { value: "05", label: "Mai" },
  { value: "06", label: "Juin" },
  { value: "07", label: "Juillet" },
  { value: "08", label: "Août" },
  { value: "09", label: "Septembre" },
  { value: "10", label: "Octobre" },
  { value: "11", label: "Novembre" },
  { value: "12", label: "Décembre" },
];

function currentYear() {
  return String(new Date().getFullYear());
}
function currentMonth() {
  return String(new Date().getMonth() + 1).padStart(2, "0");
}

export default function AdminDashboard() {
  const [year, setYear] = useState(currentYear());
  const [month, setMonth] = useState(currentMonth());
  const [files, setFiles] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/photos?year=${year}&month=${month}`);
      const data = await res.json();
      setPhotos(data.photos || []);
    } catch (e) {
      setMessage({ type: "error", text: "Impossible de charger les photos." });
    } finally {
      setLoading(false);
    }
  }, [year, month]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function handleUpload(e) {
    e.preventDefault();
    if (files.length === 0) {
      setMessage({ type: "error", text: "Sélectionnez au moins une photo." });
      return;
    }
    setUploading(true);
    setMessage(null);
    try {
      const form = new FormData();
      form.append("year", year);
      form.append("month", month);
      for (const f of files) form.append("files", f);

      const res = await fetch("/api/photos/admin", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");

      setMessage({
        type: "success",
        text: `${data.uploaded.length} photo(s) ajoutée(s) à ${MOIS.find((m) => m.value === month).label} ${year}.`,
      });
      setFiles([]);
      e.target.reset();
      refresh();
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(url) {
    if (!confirm("Supprimer définitivement cette photo ?")) return;
    try {
      const res = await fetch("/api/photos/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error("Suppression impossible");
      setPhotos((p) => p.filter((x) => x.url !== url));
    } catch (e) {
      setMessage({ type: "error", text: e.message });
    }
  }

  const years = [];
  for (let y = new Date().getFullYear() + 1; y >= 2015; y--) years.push(String(y));

  return (
    <div className="min-h-screen bg-cream">
      {/* Barre supérieure admin */}
      <header className="sticky top-0 z-10 border-b border-ink/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={36} height={36} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-ink">Espace administrateur</span>
              <span className="text-[0.7rem] uppercase tracking-wider text-bordeaux">LEV ZAHAV</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/80 hover:bg-ink/5"
            >
              <Home className="h-3.5 w-3.5" />
              Voir le site
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-cream hover:bg-ink-light"
            >
              <LogOut className="h-3.5 w-3.5" />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
        <h1 className="font-serif text-3xl font-semibold text-ink">Gestion des photos</h1>
        <p className="mt-1 text-sm text-ink/60">
          Uploadez les photos de la distribution du mois. Elles apparaîtront automatiquement
          dans la galerie publique du site.
        </p>

        {/* Formulaire d'upload */}
        <form
          onSubmit={handleUpload}
          className="mt-8 grid gap-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft sm:grid-cols-[1fr,1fr,2fr]"
        >
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Année</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-ink/15 bg-cream/40 px-3 py-2">
              <Calendar className="h-4 w-4 text-ink/40" />
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-transparent text-sm text-ink outline-none"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Mois</label>
            <div className="mt-1.5 rounded-lg border border-ink/15 bg-cream/40 px-3 py-2">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-transparent text-sm text-ink outline-none"
              >
                {MOIS.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">
              Photos à ajouter
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
              className="mt-1.5 block w-full text-sm text-ink file:mr-3 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:text-xs file:font-semibold file:text-ink hover:file:bg-gold-dark hover:file:text-cream"
            />
            <p className="mt-1 text-[0.7rem] text-ink/50">
              JPG, PNG, WebP — 10 Mo max par fichier. Sélection multiple possible.
            </p>
          </div>

          <div className="sm:col-span-3 flex items-center justify-between gap-4">
            {files.length > 0 && (
              <p className="text-sm text-ink/70">
                {files.length} fichier{files.length > 1 ? "s" : ""} prêt{files.length > 1 ? "s" : ""} à envoyer
              </p>
            )}
            <button type="submit" disabled={uploading || files.length === 0} className="btn-gold ml-auto disabled:opacity-60">
              {uploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Ajouter à la galerie
                </>
              )}
            </button>
          </div>
        </form>

        {message && (
          <div
            role="alert"
            className={`mt-5 rounded-lg px-4 py-3 text-sm ${
              message.type === "success"
                ? "bg-gold/15 text-ink"
                : "bg-bordeaux/10 text-bordeaux"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Galerie de l'année/mois sélectionné */}
        <section className="mt-10">
          <header className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl font-semibold text-ink">
              Photos de {MOIS.find((m) => m.value === month).label} {year}
            </h2>
            <span className="text-xs text-ink/50">{photos.length} photo{photos.length > 1 ? "s" : ""}</span>
          </header>

          {loading ? (
            <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
              <Loader2 className="h-4 w-4 animate-spin" /> Chargement…
            </div>
          ) : photos.length === 0 ? (
            <p className="mt-6 rounded-lg border border-dashed border-ink/15 bg-white/50 p-8 text-center text-sm text-ink/50">
              Aucune photo pour ce mois. Utilisez le formulaire ci-dessus pour en ajouter.
            </p>
          ) : (
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {photos.map((p) => (
                <li
                  key={p.url}
                  className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.url}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 opacity-0 transition group-hover:opacity-100">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/90 p-1.5 text-ink hover:bg-white"
                      title="Voir en grand"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <button
                      onClick={() => handleDelete(p.url)}
                      className="rounded-full bg-bordeaux p-1.5 text-cream hover:bg-bordeaux-dark"
                      title="Supprimer"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
