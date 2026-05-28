import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTADonation from "@/components/CTADonation";
import SmartImage from "@/components/SmartImage";
import { Newspaper, Radio, Tv, PlayCircle, ExternalLink, Mail, Inbox } from "lucide-react";
import { pressItems, site } from "@/data/content";

export const metadata = {
  title: "Presse & médias",
  description:
    "Ils parlent de LEV ZAHAV — La Banque du Cœur : articles, reportages et interventions sur l'association.",
};

const TYPE_META = {
  article: { icon: Newspaper, label: "Article" },
  radio: { icon: Radio, label: "Radio" },
  tv: { icon: Tv, label: "Reportage TV" },
  video: { icon: PlayCircle, label: "Vidéo" },
};

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function PressePage() {
  const items = [...pressItems].sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  return (
    <>
      <PageHero
        eyebrow="Ils en parlent"
        title="Presse & médias"
        subtitle="Articles, reportages et interventions consacrés à LEV ZAHAV — La Banque du Cœur."
      />

      <section className="container-wide py-16 sm:py-20">
        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              const meta = TYPE_META[item.type] || TYPE_META.article;
              const Icon = meta.icon;
              return (
                <li
                  key={`${item.url || item.title}-${i}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-sand bg-cream shadow-soft transition hover:shadow-card"
                >
                  {item.image && (
                    <SmartImage
                      src={item.image}
                      alt={item.title}
                      label={item.source}
                      className="aspect-[4/3]"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-dark">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {meta.label}
                      {item.date && (
                        <>
                          <span aria-hidden="true">·</span>
                          <time dateTime={item.date}>{formatDate(item.date)}</time>
                        </>
                      )}
                    </div>
                    <h2 className="font-serif text-lg font-semibold text-ink">
                      {item.title}
                    </h2>
                    {item.source && (
                      <p className="text-xs font-medium text-bordeaux">
                        {item.source}
                      </p>
                    )}
                    {item.excerpt && (
                      <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                        {item.excerpt}
                      </p>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ink underline decoration-gold underline-offset-4 hover:text-bordeaux"
                      >
                        Découvrir
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <PressContact />
      </section>

      <CTADonation />
    </>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-dashed border-sand-dark bg-cream-50 p-12 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
        <Inbox className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="font-serif text-2xl text-ink">Bientôt en ligne</h2>
      <p className="text-base leading-relaxed text-ink-soft">
        Les articles, reportages et interventions consacrés à notre action seront
        rassemblés ici au fil de leur publication. Vous êtes journaliste,
        rédacteur ou réalisateur·ice ?
      </p>
      <Link
        href="/contact"
        className="btn-bordeaux"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Nous contacter
      </Link>
    </div>
  );
}

function PressContact() {
  return (
    <aside className="mt-16 rounded-3xl bg-ink p-8 text-cream sm:p-10">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Espace presse
          </p>
          <h3 className="mt-2 font-serif text-2xl">
            Vous écrivez sur notre action ?
          </h3>
          <p className="mt-3 text-cream/70">
            Nous mettons volontiers à votre disposition photos en haute définition,
            chiffres clés et témoignages. Écrivez-nous à{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-gold-light underline decoration-gold/40 underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
        <a href={`mailto:${site.email}`} className="btn-gold whitespace-nowrap">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Contacter la presse
        </a>
      </div>
    </aside>
  );
}
