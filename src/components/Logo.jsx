import Link from "next/link";
import { site } from "@/data/content";

/**
 * Logo de l'association : un cœur doré stylisé + le nom + le slogan officiel.
 *
 * 👉 Pour utiliser votre vrai logo : remplacez le <svg> ci-dessous par
 *    <img src="/images/logo.svg" alt="LEV ZAHAV" className="h-11 w-auto" />
 *    (déposez le fichier dans /public/images/logo.svg).
 */
export default function Logo({ light = false, withSlogan = true }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.name} — Accueil`}
    >
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-gold transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-ink"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 20.7l-1.45-1.32C5.4 14.74 2 11.66 2 7.9 2 5.1 4.2 3 6.95 3c1.54 0 3.04.72 4.05 1.86C12.01 3.72 13.5 3 15.05 3 17.8 3 20 5.1 20 7.9c0 3.76-3.4 6.84-8.55 11.49L12 20.7z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-semibold tracking-wide ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`text-[0.62rem] font-medium uppercase tracking-[0.18em] ${
            light ? "text-cream/70" : "text-bordeaux"
          }`}
        >
          {site.tagline}
        </span>
        {withSlogan && (
          <span
            className={`mt-0.5 font-script text-[0.78rem] italic tracking-[0.12em] ${
              light ? "text-gold-light" : "text-gold-dark"
            }`}
          >
            {site.slogan}
          </span>
        )}
      </span>
    </Link>
  );
}
