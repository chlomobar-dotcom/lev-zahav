"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Lock, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { navLinks, kapparot } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/60 bg-cream/90 backdrop-blur-md shadow-soft"
          : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container-wide flex items-center gap-4 py-3"
        aria-label="Navigation principale"
      >
        <Logo withSlogan />

        {/* Navigation bureau — centré, espaces resserrés pour 7 entrées */}
        <ul className="ml-auto hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                    active
                      ? "text-bordeaux after:w-full"
                      : "text-ink-soft hover:text-ink after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:ml-4">
          {/* Espace admin : icône seule sur écrans intermédiaires, texte complet sur grand écran */}
          <Link
            href="/admin"
            aria-label="Espace administrateur"
            title="Espace administrateur"
            className="hidden items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/70 transition hover:border-ink/30 hover:text-ink md:inline-flex"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden 2xl:inline">Espace administrateur</span>
          </Link>
          {kapparot?.enabled && (
            <Link
              href="/kapparot"
              className="hidden items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-ink md:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Kapparot
            </Link>
          )}
          <Link href="/faire-un-don" className="btn-gold hidden whitespace-nowrap sm:inline-flex">
            <Heart className="h-4 w-4" aria-hidden="true" />
            Faire un don
          </Link>

          {/* Bouton menu mobile (affiché jusqu'à xl maintenant) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full p-2 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-sand/60 bg-cream transition-[max-height] duration-300 xl:hidden ${
          open ? "max-h-[34rem]" : "max-h-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-sand/60 text-bordeaux"
                      : "text-ink-soft hover:bg-sand/40 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          {kapparot?.enabled && (
            <li className="mt-2">
              <Link
                href="/kapparot"
                className="flex items-center justify-center gap-2 rounded-xl border border-gold/50 bg-gold/10 px-4 py-3 text-base font-semibold text-gold-dark hover:bg-gold hover:text-ink"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Kapparot en ligne
              </Link>
            </li>
          )}
          <li className={kapparot?.enabled ? "" : "mt-2"}>
            <Link href="/faire-un-don" className="btn-gold w-full">
              <Heart className="h-4 w-4" aria-hidden="true" />
              Faire un don
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-ink/15 px-4 py-2.5 text-xs font-medium text-ink/70 hover:bg-sand/30"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Espace administrateur
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
