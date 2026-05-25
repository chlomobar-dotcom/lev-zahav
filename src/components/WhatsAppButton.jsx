"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/data/content";

/**
 * Bouton WhatsApp flottant (en bas à droite) présent sur toutes les pages.
 * 👉 Modifiez le numéro dans src/data/content.js (champ `whatsapp`).
 */
export default function WhatsAppButton() {
  if (!site.whatsapp) return null;

  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage || ""
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-card transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Écrivez-nous
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
