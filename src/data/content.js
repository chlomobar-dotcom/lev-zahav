// =============================================================================
//  LEV ZAHAV — La Banque du Cœur
//  FICHIER DE CONTENU CENTRAL
// -----------------------------------------------------------------------------
//  C'est ICI que vous modifiez TOUT le contenu du site sans toucher au design :
//    • coordonnées et liens (don, réseaux sociaux, WhatsApp)
//    • chiffres clés
//    • montants de dons
//    • témoignages
//    • frise chronologique
//    • années de la galerie (+ liens photos/vidéos externes)
//    • FAQ, partenaires, etc.
//
//  👉 Cherchez les balises « REMPLACER » pour repérer ce qui doit être
//     personnalisé avec vos vraies informations.
// =============================================================================

// -----------------------------------------------------------------------------
// INFOS GÉNÉRALES DE L'ASSOCIATION
// -----------------------------------------------------------------------------
export const site = {
  name: "LEV ZAHAV",
  fullName: "LEV ZAHAV — La Banque du Cœur",
  tagline: "La Banque du Cœur",
  slogan: "ENSEMBLE NOUS SOMMES LA VIE", // Slogan officiel, affiché partout
  meaning: "« LEV ZAHAV » signifie « cœur d’or ».",
  description:
    "Depuis 10 ans, l’association LEV ZAHAV distribue chaque mois des colis alimentaires à des familles en difficulté. Bien plus que des colis : de la dignité, du soutien et du cœur.",

  // Adresse réelle du site (utilisée pour le SEO : sitemap, balises Open Graph)
  url: "https://levzahav.fr",

  email: "levzahav770@gmail.com",
  phone: "+33 7 54 46 66 26",
  phoneDisplay: "07 54 46 66 26",
  address: "112 avenue de Paris, 94300 Vincennes, France",

  // Numéro WhatsApp au format international SANS le « + » ni espaces
  whatsapp: "33754466626",
  whatsappMessage:
    "Bonjour LEV ZAHAV, je vous contacte depuis votre site internet.",

  legalName: "Association LEV ZAHAV (loi 1901)",
  rna: "W942006058",
};

// -----------------------------------------------------------------------------
// RÉSEAUX SOCIAUX (REMPLACER par vos liens — laissez "" pour masquer une icône)
// -----------------------------------------------------------------------------
export const socials = {
  facebook: "https://facebook.com/levzahav",
  instagram: "https://instagram.com/levzahav",
  youtube: "",
  linkedin: "",
  whatsapp: `https://wa.me/${site.whatsapp}`,
};

// -----------------------------------------------------------------------------
// LIEN DE DON PRINCIPAL
//   REMPLACER par votre lien de don (HelloAsso, PayPal, Stripe, virement...)
//   Ce lien est utilisé par TOUS les boutons « Faire un don » du site.
// -----------------------------------------------------------------------------
export const donation = {
  url: "https://www.allodons.fr/levzahav",
  ribLabel: "Don par virement (RIB)",
  iban: "FR76 3008 7338 5400 0213 1240 180",
  bic: "CMCIFRPP",
  taxNote:
    "Votre don ouvre droit à une réduction d’impôt de 66 % (ou 75 % dans le cadre du dispositif Coluche, dans la limite légale). Un reçu fiscal vous est envoyé automatiquement.",
};

// -----------------------------------------------------------------------------
// NAVIGATION (ordre du menu)
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre histoire", href: "/notre-histoire" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Galerie", href: "/galerie" },
  { label: "Devenir bénévole", href: "/devenir-benevole" },
  { label: "Contact", href: "/contact" },
];

// -----------------------------------------------------------------------------
// HERO (page d'accueil)
// -----------------------------------------------------------------------------
export const hero = {
  title:
    "Depuis 10 ans, LEV ZAHAV distribue bien plus que des colis : de la dignité, du soutien et du cœur.",
  subtitle:
    "Chaque mois, La Banque du Cœur accompagne des familles en difficulté grâce à des distributions alimentaires régulières.",
  primaryCta: { label: "Faire un don", href: "/faire-un-don" },
  secondaryCta: { label: "Découvrir nos actions", href: "/nos-actions" },
  // REMPLACER : image de fond du hero -> /public/images/hero.jpg
  image: "/images/hero.jpg",
};

// -----------------------------------------------------------------------------
// CHIFFRES CLÉS  (modifiez librement valeurs et libellés)
// -----------------------------------------------------------------------------
export const stats = [
  { value: "10", suffix: " ans", label: "d’engagement" },
  { value: "1", suffix: "/mois", label: "distribution chaque mois" },
  { value: "+500", suffix: "", label: "familles aidées" },
  { value: "+60", suffix: "", label: "bénévoles mobilisés toute l’année" },
];

// -----------------------------------------------------------------------------
// MISSION
// -----------------------------------------------------------------------------
export const mission = {
  eyebrow: "Notre mission",
  title: "Redonner de la dignité, un colis à la fois",
  text: [
    "LEV ZAHAV — « cœur d’or » — est née d’une conviction simple : personne ne devrait avoir à choisir entre se nourrir et vivre dignement.",
    "Chaque mois, nos bénévoles préparent et distribuent des colis alimentaires à des familles fragilisées. Au-delà de l’aide matérielle, nous offrons une présence, une écoute et un sourire.",
    "Notre force, c’est l’unité : donateurs, bénévoles et partenaires avancent ensemble, avec cœur, autour d’une même idée — ensemble nous sommes la vie.",
  ],
  points: [
    "Une aide alimentaire régulière et fiable",
    "Un accompagnement humain, sans jugement",
    "Une totale transparence sur l’usage des dons",
  ],
  // REMPLACER : /public/images/mission.jpg
  image: "/images/mission.jpg",
};

// -----------------------------------------------------------------------------
// COMMENT ÇA MARCHE ? (4 étapes)
// -----------------------------------------------------------------------------
export const howItWorks = {
  eyebrow: "Comment ça marche ?",
  title: "Du don au sourire d’une famille",
  steps: [
    {
      icon: "HeartHandshake",
      title: "Collecte des dons",
      text: "Dons financiers, collectes alimentaires et soutien de partenaires nous permettent d’agir chaque mois.",
    },
    {
      icon: "ShoppingBasket",
      title: "Achat & récupération de denrées",
      text: "Nous achetons et récupérons des denrées de qualité, en limitant le gaspillage alimentaire.",
    },
    {
      icon: "Package",
      title: "Préparation des colis",
      text: "Nos bénévoles préparent avec soin des colis équilibrés, adaptés aux besoins de chaque foyer.",
    },
    {
      icon: "Truck",
      title: "Distribution aux familles",
      text: "Chaque mois, les colis sont remis aux familles dans un climat de respect et de bienveillance.",
    },
  ],
};

// -----------------------------------------------------------------------------
// FRISE CHRONOLOGIQUE « 10 ans de cœur »
// -----------------------------------------------------------------------------
export const timeline = [
  { year: "2015", title: "La première distribution", text: "Quelques bénévoles, une poignée de colis et beaucoup de cœur : LEV ZAHAV voit le jour." },
  { year: "2017", title: "Un rythme mensuel", text: "Les distributions deviennent régulières : une chaque mois, sans exception." },
  { year: "2019", title: "100 familles accompagnées", text: "Le réseau de bénévoles s’étoffe et l’impact grandit dans le quartier." },
  { year: "2020", title: "Présents pendant la crise", text: "Face à la pandémie, l’association renforce ses distributions pour les plus isolés." },
  { year: "2022", title: "De nouveaux partenaires", text: "Commerces, entreprises et fondations rejoignent l’aventure." },
  { year: "2024", title: "Des locaux dédiés", text: "Un espace pour préparer et stocker les colis dans de meilleures conditions." },
  { year: "2025", title: "10 ans d’engagement", text: "Une décennie de solidarité, des centaines de familles soutenues, et toujours le même cœur." },
];

// -----------------------------------------------------------------------------
// « CE QUE PERMET VOTRE DON » (montants — modifiables librement)
// -----------------------------------------------------------------------------
export const donationImpact = {
  eyebrow: "Votre générosité en action",
  title: "Ce que permet votre don",
  subtitle: "Chaque euro compte. Voici concrètement ce que votre soutien rend possible.",
  tiers: [
    {
      amount: 18,
      title: "Un colis de base",
      text: "Offre un colis de produits essentiels à une famille pour la semaine.",
      highlight: false,
    },
    {
      amount: 36,
      title: "Un colis renforcé",
      text: "Permet un colis plus complet : produits frais, hygiène et essentiels.",
      highlight: true,
    },
    {
      amount: 100,
      title: "Plusieurs familles soutenues",
      text: "Aide plusieurs foyers à traverser un mois difficile, ensemble.",
      highlight: false,
    },
  ],
  freeAmountLabel: "Autre montant",
};

// -----------------------------------------------------------------------------
// TÉMOIGNAGES (anonymisés — « Notre impact humain »)
// -----------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "Chaque mois, le colis de LEV ZAHAV nous enlève un poids immense. Mais ce que je retiens, c’est le sourire des bénévoles. On se sent humain.",
    author: "Une maman accompagnée",
    role: "Famille aidée",
  },
  {
    quote:
      "Donner quelques heures par mois et voir la reconnaissance dans le regard des familles… c’est ça, le vrai sens du mot solidarité.",
    author: "Bénévole depuis 4 ans",
    role: "Bénévole",
  },
  {
    quote:
      "Grâce à cette aide, j’ai pu tenir le temps de retrouver un emploi. Aujourd’hui, je reviens — mais comme bénévole.",
    author: "Une personne accompagnée",
    role: "Ancien bénéficiaire",
  },
];

// -----------------------------------------------------------------------------
// GALERIE — LES ANNÉES « 10 ans en images »
//   Pour chaque année, renseignez :
//     • cover  : image de couverture (-> /public/images/galerie/2015.jpg)
//     • photos : lien vers l'album externe (Google Photos, Drive, etc.)
//     • video  : lien vers la vidéo (YouTube non répertorié, Vimeo...)
//   Laissez "" si vous n'avez pas (encore) le lien : le bouton sera masqué.
// -----------------------------------------------------------------------------
export const galleryYears = [
  { year: "2015", summary: "Les tout débuts : la première distribution et les premiers sourires.", cover: "/images/galerie/2015.jpg", photos: "", video: "" },
  { year: "2016", summary: "L’aventure prend forme, de nouveaux bénévoles nous rejoignent.", cover: "/images/galerie/2016.jpg", photos: "", video: "" },
  { year: "2017", summary: "Le rythme mensuel s’installe durablement.", cover: "/images/galerie/2017.jpg", photos: "", video: "" },
  { year: "2018", summary: "Plus de familles, plus de colis, toujours autant de cœur.", cover: "/images/galerie/2018.jpg", photos: "", video: "" },
  { year: "2019", summary: "Le cap des 100 familles accompagnées.", cover: "/images/galerie/2019.jpg", photos: "", video: "" },
  { year: "2020", summary: "Présents pendant la crise, pour les plus isolés.", cover: "/images/galerie/2020.jpg", photos: "", video: "" },
  { year: "2021", summary: "La solidarité se réinvente et se renforce.", cover: "/images/galerie/2021.jpg", photos: "", video: "" },
  { year: "2022", summary: "De nouveaux partenaires rejoignent l’aventure.", cover: "/images/galerie/2022.jpg", photos: "", video: "" },
  { year: "2023", summary: "Une organisation rodée au service des familles.", cover: "/images/galerie/2023.jpg", photos: "", video: "" },
  { year: "2024", summary: "Des locaux dédiés pour mieux agir.", cover: "/images/galerie/2024.jpg", photos: "", video: "" },
  { year: "2025", summary: "10 ans de cœur : une décennie de solidarité célébrée.", cover: "/images/galerie/2025.jpg", photos: "", video: "" },
];

// -----------------------------------------------------------------------------
// DEVENIR BÉNÉVOLE EN 3 ÉTAPES
// -----------------------------------------------------------------------------
export const volunteerSteps = {
  eyebrow: "Rejoignez-nous",
  title: "Devenir bénévole en 3 étapes",
  steps: [
    { icon: "FileText", title: "Vous nous écrivez", text: "Remplissez le formulaire bénévole en quelques minutes." },
    { icon: "Coffee", title: "On fait connaissance", text: "Nous échangeons sur vos disponibilités et vos envies d’aider." },
    { icon: "HandHeart", title: "Vous agissez avec nous", text: "Préparation, distribution, logistique : chacun trouve sa place." },
  ],
  missions: [
    "Préparation des colis alimentaires",
    "Accueil et distribution aux familles",
    "Collecte et logistique",
    "Communication & réseaux sociaux",
    "Aide ponctuelle lors d’événements",
  ],
};

// -----------------------------------------------------------------------------
// « DANS LES COULISSES » (texte + images de préparation des colis)
// -----------------------------------------------------------------------------
export const behindScenes = {
  eyebrow: "Dans les coulisses",
  title: "La préparation des colis",
  text: "Avant chaque distribution, nos bénévoles trient, pèsent et assemblent des centaines de colis. Un travail minutieux, fait avec rigueur et beaucoup de bonne humeur.",
  // REMPLACER : images -> /public/images/coulisses/1.jpg ...
  images: [
    "/images/coulisses/1.jpg",
    "/images/coulisses/2.jpg",
    "/images/coulisses/3.jpg",
    "/images/coulisses/4.jpg",
  ],
};

// -----------------------------------------------------------------------------
// « ILS NOUS SOUTIENNENT » (partenaires — REMPLACER par vrais logos/noms)
//   logo : /public/images/partenaires/nom.png  (laissez "" pour afficher le nom)
// -----------------------------------------------------------------------------
export const partners = [
  { name: "Partenaire 1", logo: "", url: "" },
  { name: "Partenaire 2", logo: "", url: "" },
  { name: "Partenaire 3", logo: "", url: "" },
  { name: "Partenaire 4", logo: "", url: "" },
  { name: "Partenaire 5", logo: "", url: "" },
  { name: "Partenaire 6", logo: "", url: "" },
];

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export const faq = [
  {
    q: "Comment faire un don ?",
    a: "Vous pouvez donner en ligne en quelques clics via notre bouton « Faire un don », ou par virement bancaire. Chaque don, même modeste, fait une réelle différence.",
  },
  {
    q: "Vais-je recevoir un reçu fiscal ?",
    a: "Oui. Un reçu fiscal vous est envoyé automatiquement. Votre don ouvre droit à une réduction d’impôt selon la législation en vigueur.",
  },
  {
    q: "Comment devenir bénévole ?",
    a: "Remplissez le formulaire de la page « Devenir bénévole ». Nous vous recontactons pour faire connaissance et trouver la mission qui vous correspond.",
  },
  {
    q: "Où et quand ont lieu les distributions ?",
    a: "Une distribution est organisée chaque mois. Les dates et le lieu précis sont communiqués aux familles inscrites et sur nos réseaux sociaux.",
  },
  {
    q: "Comment être accompagné par l’association ?",
    a: "Contactez-nous via le formulaire de contact ou par téléphone. Nous étudions chaque demande avec attention et bienveillance.",
  },
  {
    q: "Comment vous contacter rapidement ?",
    a: "Le plus simple est de nous écrire sur WhatsApp via le bouton flottant, ou par e-mail. Nous répondons dès que possible.",
  },
];

// -----------------------------------------------------------------------------
// NOTRE HISTOIRE (page dédiée)
// -----------------------------------------------------------------------------
export const story = {
  eyebrow: "Notre histoire",
  title: "10 ans de cœur",
  intro:
    "Tout a commencé par un geste simple : partager. Une décennie plus tard, LEV ZAHAV est devenue une véritable Banque du Cœur, portée par une communauté unie autour d’une même valeur — la dignité de chacun.",
  paragraphs: [
    "En 2015, quelques amis décident de préparer des colis pour des familles du quartier. Le bouche-à-oreille fait le reste : très vite, les bénévoles affluent et les besoins se révèlent immenses.",
    "Au fil des années, l’association se structure, noue des partenariats et professionnalise sa logistique, sans jamais perdre son âme : l’humain d’abord.",
    "Aujourd’hui, LEV ZAHAV distribue chaque mois des centaines de colis. Mais derrière les chiffres, il y a surtout des rencontres, des sourires retrouvés et une certitude : ensemble, nous sommes la vie.",
  ],
  // REMPLACER : /public/images/histoire.jpg
  image: "/images/histoire.jpg",
};
