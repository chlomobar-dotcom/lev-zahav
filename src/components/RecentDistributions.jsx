"use client";
import { useEffect, useState } from "react";
import { Calendar, Camera } from "lucide-react";

const MOIS_LABELS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function groupByMonth(photos) {
  const groups = {};
  for (const p of photos) {
    const key = `${p.year}-${p.month}`;
    (groups[key] ||= { year: p.year, month: p.month, photos: [] }).photos.push(p);
  }
  return Object.values(groups).sort((a, b) =>
    a.year === b.year ? Number(b.month) - Number(a.month) : Number(b.year) - Number(a.year)
  );
}

export default function RecentDistributions() {
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => setGroups(groupByMonth(data.photos || [])))
      .catch(() => setGroups([]));
  }, []);

  // Tant que le chargement n'est pas terminé OU s'il n'y a aucune photo uploadée,
  // on n'affiche rien — la galerie statique reste l'expérience par défaut.
  if (!groups || groups.length === 0) return null;

  return (
    <section className="mb-16">
      <header className="mb-8 flex items-baseline justify-between gap-4">
        <div>
          <span className="eyebrow">Distributions récentes</span>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Les derniers mois en images
          </h2>
        </div>
        <span className="hidden text-xs text-ink/50 sm:inline">
          Mis à jour chaque mois par l'équipe
        </span>
      </header>

      <div className="space-y-10">
        {groups.map((g) => (
          <article key={`${g.year}-${g.month}`}>
            <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-ink">
              <Calendar className="h-4 w-4 text-gold-dark" aria-hidden="true" />
              {MOIS_LABELS[Number(g.month) - 1]} {g.year}
              <span className="ml-2 text-xs font-normal text-ink/50">
                · {g.photos.length} photo{g.photos.length > 1 ? "s" : ""}
              </span>
            </h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {g.photos.map((p) => (
                <li key={p.url} className="overflow-hidden rounded-lg bg-sand/40 shadow-soft">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.url}
                      alt=""
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <hr className="mt-12 border-sand" />
      <p className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-ink/50">
        <Camera className="h-3.5 w-3.5" aria-hidden="true" />
        10 ans en images — année par année
      </p>
    </section>
  );
}
