/**
 * Décoration Kapparot : un coq (poule) doré stylisé, une pile de pièces
 * marquée « 18 » (Haï), un filet d'olives et une étoile de David discrète.
 *
 * Purement décorative — aria-hidden pour ne pas polluer l'accessibilité.
 */
export default function KapparotDecor() {
  return (
    <div
      className="relative mx-auto flex max-w-3xl items-center justify-center"
      aria-hidden="true"
    >
      {/* Halo doré discret en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,162,75,0.15)_0%,transparent_65%)]" />

      <svg
        viewBox="0 0 640 320"
        role="img"
        className="relative w-full max-w-[36rem] text-gold-dark"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Filet supérieur : filet doré + étoile de David centrale */}
        <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7">
          <line x1="90" y1="30" x2="285" y2="30" />
          <line x1="355" y1="30" x2="550" y2="30" />
          {/* Étoile de David centrale */}
          <g transform="translate(320 30)">
            <polygon points="0,-14 12,7 -12,7" />
            <polygon points="0,14 12,-7 -12,-7" />
          </g>
        </g>

        {/* Branches d'olive à gauche et à droite */}
        <g stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.5" strokeLinecap="round">
          <path d="M40 260 Q80 220 120 210" />
          <ellipse cx="55" cy="245" rx="6" ry="3" transform="rotate(-30 55 245)" fill="currentColor" opacity="0.6" />
          <ellipse cx="75" cy="235" rx="6" ry="3" transform="rotate(-30 75 235)" fill="currentColor" opacity="0.6" />
          <ellipse cx="95" cy="223" rx="6" ry="3" transform="rotate(-30 95 223)" fill="currentColor" opacity="0.6" />
          <ellipse cx="115" cy="215" rx="6" ry="3" transform="rotate(-30 115 215)" fill="currentColor" opacity="0.6" />

          <path d="M600 260 Q560 220 520 210" />
          <ellipse cx="585" cy="245" rx="6" ry="3" transform="rotate(30 585 245)" fill="currentColor" opacity="0.6" />
          <ellipse cx="565" cy="235" rx="6" ry="3" transform="rotate(30 565 235)" fill="currentColor" opacity="0.6" />
          <ellipse cx="545" cy="223" rx="6" ry="3" transform="rotate(30 545 223)" fill="currentColor" opacity="0.6" />
          <ellipse cx="525" cy="215" rx="6" ry="3" transform="rotate(30 525 215)" fill="currentColor" opacity="0.6" />
        </g>

        {/* COQ (rooster) — silhouette dorée stylisée */}
        <g transform="translate(200 70)">
          {/* Grandes plumes de queue (courbes élégantes) */}
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M28 90 Q-30 40 -35 -20" />
            <path d="M32 100 Q-25 55 -18 -18" opacity="0.85" />
            <path d="M40 110 Q-15 75 -2 -8" opacity="0.7" />
            <path d="M46 122 Q0 90 15 5" opacity="0.55" />
          </g>

          {/* Corps du coq */}
          <path
            d="M55 90
               Q50 60 70 45
               Q90 30 120 35
               L130 25
               Q140 10 155 20
               L158 25
               Q168 20 173 30
               L170 40
               Q178 45 175 55
               L165 60
               Q170 75 160 82
               Q170 100 160 118
               Q180 130 175 155
               Q165 175 130 180
               L100 180
               Q65 175 55 155
               Q45 120 55 90 Z"
            fill="currentColor"
          />

          {/* Crête (rouge/bordeaux stylisée) */}
          <path
            d="M120 25
               Q125 5 132 18
               Q138 -2 146 15
               Q153 -5 160 20 Z"
            fill="#7A2233"
          />

          {/* Barbillon */}
          <path
            d="M155 50
               Q160 62 152 68
               Q158 72 152 75 Z"
            fill="#7A2233"
          />

          {/* Œil */}
          <circle cx="150" cy="35" r="3" fill="#FBF8F1" />
          <circle cx="150" cy="35" r="1.5" fill="#14233F" />

          {/* Bec */}
          <path d="M170 42 L182 44 L170 48 Z" fill="#C7A24B" />

          {/* Aile stylisée */}
          <path
            d="M90 110
               Q120 100 145 115
               Q135 140 105 145
               Q85 135 90 110 Z"
            fill="#A8842F"
          />

          {/* Pattes */}
          <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none">
            <path d="M100 180 L100 205" />
            <path d="M100 205 L92 212 M100 205 L100 214 M100 205 L108 212" />
            <path d="M140 180 L140 205" />
            <path d="M140 205 L132 212 M140 205 L140 214 M140 205 L148 212" />
          </g>
        </g>

        {/* Pile de pièces (Tsedaka) avec « 18 » */}
        <g transform="translate(470 210)">
          {/* Pièce du bas */}
          <ellipse cx="0" cy="28" rx="42" ry="9" fill="currentColor" opacity="0.9" />
          <ellipse cx="0" cy="27" rx="42" ry="9" fill="#D9BE7E" />

          {/* Pièce du milieu */}
          <ellipse cx="0" cy="14" rx="42" ry="9" fill="currentColor" opacity="0.9" />
          <ellipse cx="0" cy="13" rx="42" ry="9" fill="#D9BE7E" />

          {/* Pièce du dessus */}
          <ellipse cx="0" cy="0" rx="42" ry="9" fill="currentColor" opacity="0.9" />
          <ellipse cx="0" cy="-1" rx="42" ry="9" fill="#D9BE7E" />

          {/* « 18 » gravé sur la pièce du dessus */}
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="700"
            fill="#14233F"
          >
            18 €
          </text>

          {/* Petite étincelle */}
          <g fill="#FBF8F1" opacity="0.9">
            <circle cx="-30" cy="-20" r="1.5" />
            <circle cx="35" cy="-8" r="1" />
            <circle cx="-38" cy="10" r="1" />
          </g>
        </g>

        {/* Filet inférieur avec inscription hébraïque חי (Haï = vivant) */}
        <g stroke="currentColor" strokeWidth="1.2" opacity="0.7" fill="none">
          <line x1="90" y1="298" x2="270" y2="298" />
          <line x1="370" y1="298" x2="550" y2="298" />
        </g>
        <text
          x="320"
          y="304"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fill="currentColor"
          opacity="0.9"
        >
          חי
        </text>
      </svg>
    </div>
  );
}
