import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/content";

/**
 * Logo de l'association : mains dorées qui élèvent deux cœurs.
 *
 * 👉 Pour utiliser votre vrai logo officiel : remplacez simplement le fichier
 *    /public/images/logo.svg (ou logo.png) — aucune modification du code requise.
 */
export default function Logo({ light = false, withSlogan = true }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.name} — Accueil`}
    >
      <span className="logo-mark relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-visible">
        <Image
          src="/images/logo.png"
          alt=""
          width={96}
          height={96}
          priority
          className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
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
