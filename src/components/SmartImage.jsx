"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Image « intelligente » :
 *  - affiche l'image si `src` est renseigné ET se charge correctement ;
 *  - sinon, affiche un placeholder élégant (dégradé doré + libellé).
 *
 * 👉 Pour mettre vos vraies photos : déposez-les dans /public/images/...
 *    puis renseignez le chemin dans src/data/content.js.
 */
export default function SmartImage({
  src,
  alt = "",
  label = "Photo à venir",
  className = "",
  imgClassName = "",
  priority = false,
  children,
  overlayClassName = "",
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className="placeholder-grad flex h-full w-full items-center justify-center"
          role="img"
          aria-label={alt || label}
        >
          <div className="flex flex-col items-center gap-2 px-4 text-center text-gold-dark/70">
            <ImageIcon className="h-7 w-7" strokeWidth={1.4} aria-hidden="true" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>
        </div>
      )}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      {children}
    </div>
  );
}
