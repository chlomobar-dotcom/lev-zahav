import { site } from "@/data/content";

// Génère automatiquement /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mentions-legales"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
