import Link from "next/link";
import { Home, Heart } from "lucide-react";
import { site } from "@/data/content";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-serif text-7xl font-semibold text-gold">404</p>
      <h1 className="font-serif text-3xl text-ink">Cette page n’existe pas</h1>
      <p className="max-w-md text-ink-soft">
        Le lien est peut-être ancien ou la page a été déplacée. Revenons ensemble
        sur le bon chemin.
      </p>
      <p className="font-script text-xl italic tracking-[0.16em] text-gold-dark">
        {site.slogan}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-bordeaux">
          <Home className="h-4 w-4" aria-hidden="true" />
          Retour à l’accueil
        </Link>
        <Link href="/faire-un-don" className="btn-outline">
          <Heart className="h-4 w-4" aria-hidden="true" />
          Faire un don
        </Link>
      </div>
    </section>
  );
}
