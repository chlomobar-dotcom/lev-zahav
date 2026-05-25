"use client";

import { useState } from "react";
import { Images, PlayCircle, ExternalLink, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SmartImage from "./SmartImage";
import { galleryYears } from "@/data/content";

export default function GalleryYears() {
  const [active, setActive] = useState("all");

  const years = galleryYears.map((y) => y.year);
  const filtered =
    active === "all"
      ? galleryYears
      : galleryYears.filter((y) => y.year === active);

  return (
    <div>
      {/* Filtres par année */}
      <div
        className="flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="Filtrer la galerie par année"
      >
        <FilterButton
          active={active === "all"}
          onClick={() => setActive("all")}
        >
          Toutes
        </FilterButton>
        {years.map((year) => (
          <FilterButton
            key={year}
            active={active === year}
            onClick={() => setActive(year)}
          >
            {year}
          </FilterButton>
        ))}
      </div>

      {/* Grille de cartes */}
      <motion.div layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article
              key={item.year}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-sand bg-cream shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <div className="relative">
                <SmartImage
                  src={item.cover}
                  alt={`LEV ZAHAV en ${item.year}`}
                  label={`Couverture ${item.year}`}
                  className="aspect-[4/3]"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 font-serif text-sm font-semibold text-cream backdrop-blur">
                  {item.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                  {item.summary}
                </p>

                <div className="flex flex-col gap-2">
                  {item.photos ? (
                    <a
                      href={item.photos}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-light"
                    >
                      <Images className="h-4 w-4" aria-hidden="true" />
                      Voir l’album photo
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>
                  ) : (
                    <SoonButton icon={Images}>Album photo à venir</SoonButton>
                  )}

                  {item.video ? (
                    <a
                      href={item.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-bordeaux/30 px-4 py-2.5 text-sm font-semibold text-bordeaux transition-colors hover:bg-bordeaux hover:text-cream"
                    >
                      <PlayCircle className="h-4 w-4" aria-hidden="true" />
                      Voir la vidéo
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>
                  ) : (
                    <SoonButton icon={PlayCircle}>Vidéo à venir</SoonButton>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-gold text-ink shadow-gold"
          : "border border-sand-dark bg-cream text-ink-soft hover:border-gold hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function SoonButton({ icon: IconCmp, children }) {
  return (
    <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-sand-dark px-4 py-2.5 text-sm font-medium text-ink-soft/60">
      <Clock className="h-4 w-4" aria-hidden="true" />
      {children}
    </span>
  );
}
