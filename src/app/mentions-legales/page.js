import PageHero from "@/components/PageHero";
import { site } from "@/data/content";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales et politique de confidentialité de l'association LEV ZAHAV.",
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Mentions légales"
        showSlogan={false}
      />

      <section className="container-page py-16 sm:py-20">
        {/* 👉 Personnalisez ce contenu avec vos informations officielles. */}
        <div className="prose-section mx-auto flex max-w-3xl flex-col gap-10 text-ink-soft">
          <Block title="Éditeur du site">
            <p>{site.legalName}</p>
            <p>Adresse : {site.address}</p>
            <p>
              E-mail :{" "}
              <a className="text-bordeaux underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>Téléphone : {site.phoneDisplay}</p>
            <p>N° RNA : {site.rna} {/* REMPLACER par votre n° officiel */}</p>
          </Block>

          <Block title="Hébergement">
            <p>
              {/* REMPLACER par les informations de votre hébergeur */}
              Nom de l’hébergeur, adresse et contact à compléter.
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L’ensemble des contenus présents sur ce site (textes, images,
              logos) est, sauf mention contraire, la propriété de {site.name}.
              Toute reproduction sans autorisation est interdite.
            </p>
          </Block>

          <Block title="Confidentialité (RGPD)" id="confidentialite">
            <p>
              Les informations recueillies via nos formulaires sont utilisées
              uniquement pour répondre à vos demandes et assurer le suivi de
              l’association. Conformément à la réglementation, vous disposez d’un
              droit d’accès, de rectification et de suppression de vos données en
              nous écrivant à {site.email}.
            </p>
            <p>{/* REMPLACER / compléter avec votre politique détaillée. */}</p>
          </Block>

          <Block title="Reçus fiscaux">
            <p>
              Les dons effectués au profit de {site.name} peuvent ouvrir droit à
              une réduction d’impôt selon la législation en vigueur. Un reçu
              fiscal est délivré pour chaque don.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, id, children }) {
  return (
    <div id={id} className="flex flex-col gap-3 scroll-mt-28">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      {children}
    </div>
  );
}
