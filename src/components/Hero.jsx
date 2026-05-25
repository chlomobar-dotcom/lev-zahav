"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";
import { hero, site } from "@/data/content";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Décor lumineux discret */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-sand/50 blur-3xl" />

      <div className="container-wide grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Texte */}
        <div className="relative z-10">
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}>
            <span className="eyebrow">
              <span className="gold-rule" aria-hidden="true" />
              {site.tagline} · 10 ans
            </span>
          </motion.div>

          {/* Nom + slogan avec animation douce au chargement */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="mt-4"
          >
            <p className="font-serif text-xl text-bordeaux sm:text-2xl">
              {site.name} — {site.tagline}
            </p>
            <p className="slogan mt-1 animate-slogan-in text-lg sm:text-xl">
              {site.slogan}
            </p>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-6 font-serif text-3xl leading-[1.15] text-ink text-balance sm:text-4xl md:text-[2.9rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href={hero.primaryCta.href} className="btn-gold">
              <Heart className="h-4 w-4" aria-hidden="true" />
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-outline">
              {hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          {/* 👉 Image principale : /public/images/hero.jpg */}
          <SmartImage
            src={hero.image}
            alt="Bénévoles de LEV ZAHAV lors d'une distribution"
            label="Photo · accueil"
            priority
            className="aspect-[4/5] rounded-[2rem] shadow-card"
            overlayClassName="bg-gradient-to-t from-ink/30 to-transparent"
          />

          {/* Carte flottante slogan */}
          <div className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-sand bg-cream/95 p-5 shadow-card backdrop-blur sm:-left-8">
            <p className="font-script text-lg italic leading-snug text-gold-dark">
              {site.slogan}
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              {site.meaning}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
