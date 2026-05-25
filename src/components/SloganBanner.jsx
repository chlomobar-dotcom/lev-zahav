"use client";

import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { site } from "@/data/content";

/**
 * Section artistique / émotionnelle : le slogan officiel au centre de l'écran,
 * sur une belle image (bénévoles, distribution...), avec un effet
 * cinématographique discret (léger zoom + fondu).
 *
 * 👉 Image de fond : déposez votre photo dans /public/images/slogan.jpg
 *    ou changez le chemin via la prop `image`.
 */
export default function SloganBanner({
  image = "/images/slogan.jpg",
  subtitle = "La solidarité, l’espoir et la chaleur humaine, réunis autour d’un même élan.",
}) {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-ink"
      aria-label="Slogan de l'association"
    >
      {/* Image de fond avec léger zoom cinématographique */}
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt=""
          label="Image d'ambiance"
          className="h-full w-full"
          imgClassName="animate-slow-zoom"
        />
      </div>

      {/* Voiles dégradés pour la lisibilité et l'ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(20,35,63,0.65)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative z-10 flex flex-col items-center gap-6 py-24 text-center"
      >
        <span className="gold-rule w-24" aria-hidden="true" />
        <p className="font-script text-4xl italic tracking-[0.22em] text-gold-light drop-shadow-sm sm:text-6xl md:text-7xl">
          {site.slogan}
        </p>
        {subtitle && (
          <p className="max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        <span className="gold-rule w-24" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
