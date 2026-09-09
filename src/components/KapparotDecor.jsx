/**
 * Ornement décoratif pour la page Kapparot :
 *   • Étoile de David centrale
 *   • Filets dorés flanqués du caractère hébreu חי (« Haï » — vivant)
 *   • Deux fines branches d'olivier symétriques
 *
 * Rendu sobre, gravé, sans illustration figurative.
 */
export default function KapparotDecor() {
  return (
    <div
      className="relative mx-auto flex max-w-2xl items-center justify-center"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,162,75,0.12)_0%,transparent_70%)]" />

      <svg
        viewBox="0 0 500 160"
        role="img"
        className="relative w-full max-w-[30rem] text-gold-dark"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Étoile de David centrée en haut */}
        <g
          transform="translate(250 30)"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          opacity="0.9"
          strokeLinejoin="round"
        >
          <polygon points="0,-16 14,8 -14,8" />
          <polygon points="0,16 14,-8 -14,-8" />
        </g>

        {/* Filets horizontaux flanquant חי */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.55" fill="none">
          <line x1="50" y1="90" x2="205" y2="90" />
          <line x1="295" y1="90" x2="450" y2="90" />
          {/* Petits ronds en fin de filet */}
          <circle cx="50" cy="90" r="2" fill="currentColor" />
          <circle cx="450" cy="90" r="2" fill="currentColor" />
        </g>
        <text
          x="250"
          y="100"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="30"
          fill="currentColor"
          opacity="0.95"
        >
          חי
        </text>

        {/* Branches d'olivier — courbes symétriques */}
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        >
          {/* Branche gauche */}
          <path d="M60 145 Q130 120 210 130" />
          <g fill="currentColor" opacity="0.7">
            <ellipse cx="80" cy="139" rx="5" ry="2.4" transform="rotate(-20 80 139)" />
            <ellipse cx="110" cy="131" rx="5" ry="2.4" transform="rotate(-18 110 131)" />
            <ellipse cx="140" cy="127" rx="5" ry="2.4" transform="rotate(-15 140 127)" />
            <ellipse cx="170" cy="128" rx="5" ry="2.4" transform="rotate(-10 170 128)" />
          </g>

          {/* Branche droite */}
          <path d="M440 145 Q370 120 290 130" />
          <g fill="currentColor" opacity="0.7">
            <ellipse cx="420" cy="139" rx="5" ry="2.4" transform="rotate(20 420 139)" />
            <ellipse cx="390" cy="131" rx="5" ry="2.4" transform="rotate(18 390 131)" />
            <ellipse cx="360" cy="127" rx="5" ry="2.4" transform="rotate(15 360 127)" />
            <ellipse cx="330" cy="128" rx="5" ry="2.4" transform="rotate(10 330 128)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
