import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";
import { site, socials, navLinks } from "@/data/content";

const socialIcons = [
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "youtube", Icon: Youtube, label: "YouTube" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "whatsapp", Icon: MessageCircle, label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      {/* Bandeau slogan */}
      <div className="border-b border-white/10">
        <div className="container-page py-10 text-center">
          <p className="font-script text-2xl italic tracking-[0.18em] text-gold-light sm:text-3xl">
            {site.slogan}
          </p>
        </div>
      </div>

      <div className="container-wide grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Identité */}
        <div className="lg:col-span-1">
          <h3 className="font-serif text-xl text-cream">{site.name}</h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-bordeaux-light">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Depuis 10 ans, nous distribuons chaque mois des colis alimentaires à
            des familles en difficulté. {site.meaning}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialIcons.map(({ key, Icon, label }) =>
              socials[key] ? (
                <a
                  key={key}
                  href={socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : null
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Plan du site">
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/faire-un-don"
                className="text-cream/70 transition-colors hover:text-gold-light"
              >
                Faire un don
              </Link>
            </li>
            <li>
              <Link
                href="/presse"
                className="text-cream/70 transition-colors hover:text-gold-light"
              >
                Presse & médias
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-cream/70">{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-cream/70 transition-colors hover:text-gold-light"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="text-cream/70 transition-colors hover:text-gold-light"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Appel au don */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-serif text-lg text-cream">Agissez avec nous</h4>
          <p className="mt-2 text-sm leading-relaxed text-cream/70">
            Votre don, même modeste, transforme le quotidien d’une famille.
          </p>
          <Link href="/faire-un-don" className="btn-gold mt-4 w-full">
            <Heart className="h-4 w-4" aria-hidden="true" />
            Faire un don
          </Link>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors hover:text-gold-light">
              Mentions légales
            </Link>
            <Link href="/mentions-legales#confidentialite" className="transition-colors hover:text-gold-light">
              Confidentialité
            </Link>
            <Link href="/contact" className="transition-colors hover:text-gold-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
