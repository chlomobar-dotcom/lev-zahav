# LEV ZAHAV — La Banque du Cœur

Site vitrine de l'association caritative **LEV ZAHAV** (« cœur d'or »), construit
avec **Next.js 14** (App Router) et **Tailwind CSS**.

> **Slogan officiel :** *ENSEMBLE NOUS SOMMES LA VIE*

Design épuré et lumineux (blanc, doré doux, beige, bordeaux & bleu profond),
responsive, accessible, animations discrètes au scroll, et bouton WhatsApp
flottant.

---

## 🚀 Démarrer le site

> Prérequis : **Node.js 18.18+** (téléchargeable sur https://nodejs.org).

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le site en mode développement
npm run dev
# -> ouvrez http://localhost:3000

# 3. Construire la version de production
npm run build
npm start
```

---

## ✏️ Personnaliser le contenu (l'essentiel se passe ici)

**Tout le contenu modifiable est centralisé dans un seul fichier :**

```
src/data/content.js
```

Vous y trouverez, clairement commenté, tout ce qu'il faut adapter. Cherchez le
mot **« REMPLACER »** pour repérer ce qui doit être personnalisé :

| À modifier | Où (dans `content.js`) |
|---|---|
| Coordonnées (e-mail, téléphone, adresse) | objet `site` |
| **Numéro WhatsApp** (bouton flottant) | `site.whatsapp` |
| **Lien de don** (HelloAsso, PayPal…) | `donation.url` |
| RIB / IBAN / BIC | `donation` |
| Réseaux sociaux | `socials` |
| Chiffres clés | `stats` |
| Montants de dons (18 €, 36 €, 100 €…) | `donationImpact.tiers` |
| Témoignages | `testimonials` |
| Frise chronologique | `timeline` |
| **Années de la galerie + liens photos/vidéos** | `galleryYears` |
| Étapes bénévolat | `volunteerSteps` |
| Partenaires | `partners` |
| FAQ | `faq` |
| Page « Notre histoire » | `story` |

---

## 🖼️ Ajouter vos photos et vidéos

1. **Photos du site** : déposez vos images dans `public/images/`
   (voir le guide détaillé `public/images/A_LIRE.txt`), puis indiquez le chemin
   dans `content.js`.
   - Tant qu'une image est absente, un **placeholder doré élégant** s'affiche :
     le site reste présentable immédiatement.

2. **Albums photos & vidéos** (Google Photos, Google Drive, YouTube non
   répertorié, Vimeo) : ne déposez rien dans le projet, collez simplement les
   **liens** dans `galleryYears` (champs `photos` et `video`). Les boutons
   « Voir l'album photo » et « Voir la vidéo » apparaissent automatiquement.

---

## ✉️ Rendre les formulaires fonctionnels

Les formulaires (contact, bénévole, newsletter) affichent pour l'instant un
message de confirmation **sans rien envoyer** (démo). Pour les activer, le plus
simple est un service no-code :

- **Formspree**, **Getform** ou **Tally** (aucun code serveur requis), ou
- une route API Next.js (`src/app/api/...`) qui envoie un e-mail.

Branchez votre solution dans la fonction `handleSubmit` de :
`src/components/ContactForm.jsx`, `VolunteerForm.jsx`, `Newsletter.jsx`.

---

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── layout.js            # Mise en page globale (header, footer, polices, SEO)
│   ├── page.js              # 🏠 Page d'accueil
│   ├── globals.css          # Styles & couleurs de base
│   ├── notre-histoire/
│   ├── nos-actions/
│   ├── galerie/
│   ├── faire-un-don/
│   ├── devenir-benevole/
│   ├── contact/
│   ├── mentions-legales/
│   ├── sitemap.js           # SEO : /sitemap.xml automatique
│   ├── robots.js            # SEO : /robots.txt automatique
│   └── not-found.js         # Page 404
│
├── components/              # Composants réutilisables
│   ├── Header.jsx  Footer.jsx  Logo.jsx
│   ├── Hero.jsx  Stats.jsx  Mission.jsx  HowItWorks.jsx
│   ├── Timeline.jsx  DonationImpact.jsx
│   ├── GalleryYears.jsx  GalleryPreview.jsx
│   ├── VolunteerSection.jsx  Testimonials.jsx  FAQ.jsx
│   ├── Partners.jsx  BehindScenes.jsx  Newsletter.jsx
│   ├── SloganBanner.jsx     # Section artistique (slogan cinématographique)
│   ├── CTADonation.jsx  WhatsAppButton.jsx
│   ├── ContactForm.jsx  VolunteerForm.jsx
│   ├── PageHero.jsx  SectionHeading.jsx
│   ├── AnimatedSection.jsx  SmartImage.jsx  Icon.jsx
│
└── data/
    └── content.js           # ⭐ TOUT le contenu modifiable
```

---

## 🎨 Changer les couleurs / polices

- **Couleurs** : `tailwind.config.js` → section `colors` (cream, sand, gold,
  bordeaux, ink).
- **Polices** : `src/app/layout.js` (Playfair Display pour les titres, Inter
  pour le texte, Cormorant Garamond pour le slogan).

---

## ♿ SEO & accessibilité

- Métadonnées (titre, description, Open Graph) par page.
- `sitemap.xml` et `robots.txt` générés automatiquement
  (⚠️ pensez à mettre à jour `site.url` dans `content.js`).
- HTML sémantique, libellés ARIA, navigation au clavier, lien d'évitement,
  respect de `prefers-reduced-motion`.

---

## 📦 Déploiement

Le plus simple : **Vercel** (créateur de Next.js).
1. Poussez le projet sur GitHub.
2. Importez-le sur https://vercel.com → déploiement automatique.

Avant la mise en ligne : renseignez `site.url` avec votre vraie adresse dans
`src/data/content.js`.

---

*ENSEMBLE NOUS SOMMES LA VIE.*
