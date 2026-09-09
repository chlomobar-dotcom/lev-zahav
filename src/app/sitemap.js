import { site } from "@/data/content";

// Génère automatiquement /sitemap.xml pour le référencement (SEO).
export default function sitemap() {
  const routes = [
    "",
    "/notre-histoire",
    "/nos-actions",
    "/kapparot",
    "/galerie",
    "/temoignages",
    "/presse",
    "/faire-un-don",
    "/devenir-benevole",
    "/contact",
    "/mentions-legales",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/faire-un-don" ? 0.9 : 0.7,
  }));
}
