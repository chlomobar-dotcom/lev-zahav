"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Loader2, ExternalLink, ImageOff } from "lucide-react";

/**
 * Lightbox plein écran d'un album année.
 *
 *  • Affiche la couverture (planche photo de la brochure) + les photos
 *    uploadées via l'espace admin pour cette année.
 *  • Navigation clavier (←/→/Esc), tap/swipe sur mobile (basique via boutons).
 *  • Fermeture au clic hors de l'image ou via le bouton ✕.
 */
export default function GalleryLightbox({ album, onClose }) {
  // album : { year, cover, summary }
  const [photos, setPhotos] = useState(null);
  const [index, setIndex] = useState(0); // 0 = cover, 1..n = uploaded

  useEffect(() => {
    if (!album) return;
    let cancelled = false;
    fetch(`/api/photos?year=${album.year}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setPhotos(data.photos || []);
      })
      .catch(() => !cancelled && setPhotos([]));
    return () => {
      cancelled = true;
    };
  }, [album]);

  // Liste finale : couverture en première position
  const items = album
    ? [
        { url: album.cover, isCover: true, alt: `Album ${album.year}` },
        ...(photos || []).map((p) => ({ url: p.url, isCover: false, alt: "" })),
      ]
    : [];

  const total = items.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (!album) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [album, next, prev, onClose]);

  if (!album) return null;
  const current = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Album ${album.year}`}
      className="fixed inset-0 z-[200] flex flex-col bg-ink/95 backdrop-blur-md"
    >
      {/* Barre supérieure */}
      <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-cream sm:px-8">
        <div className="flex flex-col leading-tight">
          <span className="text-[0.7rem] uppercase tracking-wider text-gold-light">
            Album {album.year}
          </span>
          <span className="font-serif text-base sm:text-lg">{album.summary}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-cream/60 sm:inline">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer l'album"
            className="rounded-full bg-white/10 p-2 text-cream transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Image principale */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-6 sm:px-12">
        {photos === null ? (
          <Loader2 className="h-10 w-10 animate-spin text-cream/60" />
        ) : (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Photo précédente"
              disabled={total <= 1}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-cream transition hover:bg-white/20 disabled:opacity-30 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative h-full max-h-[78vh] w-full max-w-5xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.url}
                alt={current.alt}
                className="mx-auto h-full max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
                loading="eager"
              />
              {current.isCover && (
                <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-3 py-1 text-xs font-semibold text-ink shadow-card">
                  Planche officielle
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Photo suivante"
              disabled={total <= 1}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-cream transition hover:bg-white/20 disabled:opacity-30 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Pellicule de vignettes en bas */}
      {photos !== null && total > 1 && (
        <footer className="border-t border-white/10 px-4 py-3 sm:px-8">
          <ul className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1">
            {items.map((it, i) => (
              <li key={`${it.url}-${i}`} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à la photo ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`relative h-14 w-14 overflow-hidden rounded-md transition sm:h-16 sm:w-16 ${
                    i === index ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.url} alt="" className="h-full w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </footer>
      )}

      {photos !== null && photos.length === 0 && (
        <p className="border-t border-white/10 px-4 py-3 text-center text-xs text-cream/70 sm:px-8">
          <ImageOff className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
          Aucune photo additionnelle uploadée pour cette année — la planche
          officielle de l'album ci-dessus regroupe les moments forts.
        </p>
      )}

      {album.photosUrl && (
        <a
          href={album.photosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-t border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-gold-light hover:bg-white/10"
        >
          Ouvrir l'album externe complet
          <ExternalLink className="ml-1.5 inline h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
