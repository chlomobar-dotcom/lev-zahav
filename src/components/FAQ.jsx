"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faq } from "@/data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Tout ce que vous voulez savoir"
          subtitle="Don, reçu fiscal, bénévolat, distribution, contact."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sand rounded-3xl border border-sand bg-cream">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif text-lg text-ink">{item.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
