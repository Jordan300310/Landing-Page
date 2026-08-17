export function IlustracionHamburguesa({ className, titleId }) {
  return (
    <svg viewBox="0 0 240 230" className={className} role="img" aria-labelledby={titleId}>
      {titleId && <title id={titleId}>Ilustración de una hamburguesa doble Sr. Pan</title>}
      <ellipse cx="120" cy="190" rx="88" ry="16" fill="#1a1512" opacity="0.12" />
      <path d="M40 150 Q40 178 120 178 Q200 178 200 150 L200 138 L40 138 Z" fill="#eee0c8" stroke="#1a1512" strokeWidth="5" strokeLinejoin="round" />
      <path d="M36 138 Q60 122 90 136 Q118 124 146 136 Q176 122 204 138 L204 148 L36 148 Z" fill="#8a9a5b" stroke="#1a1512" strokeWidth="4" strokeLinejoin="round" />
      <path d="M44 122 L196 122 L188 140 Q120 150 52 140 Z" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" strokeLinejoin="round" />
      <rect x="38" y="100" width="164" height="26" rx="13" fill="#7a0c10" stroke="#1a1512" strokeWidth="5" />
      <circle cx="70" cy="98" r="15" fill="#c4161c" stroke="#1a1512" strokeWidth="4" />
      <circle cx="70" cy="98" r="5" fill="#eee0c8" opacity="0.6" />
      <circle cx="170" cy="96" r="13" fill="#c4161c" stroke="#1a1512" strokeWidth="4" />
      <path d="M36 92 Q40 34 120 32 Q200 34 204 92 Z" fill="#f7eedd" stroke="#1a1512" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="90" cy="58" r="4" fill="#fff" />
      <circle cx="120" cy="46" r="4" fill="#fff" />
      <circle cx="150" cy="58" r="4" fill="#fff" />
      <circle cx="70" cy="76" r="4" fill="#fff" />
      <circle cx="170" cy="76" r="4" fill="#fff" />
      <circle cx="120" cy="72" r="4" fill="#fff" />
    </svg>
  );
}

export function IlustracionBroaster({ className, titleId }) {
  return (
    <svg viewBox="0 0 220 220" className={className} role="img" aria-labelledby={titleId}>
      {titleId && <title id={titleId}>Ilustración de una presa de pollo broaster</title>}
      <ellipse cx="110" cy="188" rx="70" ry="14" fill="#1a1512" opacity="0.12" />
      <path
        d="M92 40 C60 45 44 78 52 112 C58 138 78 150 96 158 C90 168 84 178 100 186 C112 190 118 176 122 160 C150 156 178 132 176 96 C174 60 130 34 92 40 Z"
        fill="#e3a62f"
        stroke="#1a1512"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M96 158 C90 168 84 178 100 186 C112 190 118 176 122 160" fill="#f7eedd" stroke="#1a1512" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="88" cy="72" r="4" fill="#1a1512" opacity="0.3" />
      <circle cx="112" cy="62" r="3.5" fill="#1a1512" opacity="0.3" />
      <circle cx="132" cy="84" r="4" fill="#1a1512" opacity="0.3" />
      <circle cx="80" cy="102" r="3.5" fill="#1a1512" opacity="0.3" />
      <circle cx="140" cy="112" r="4" fill="#1a1512" opacity="0.3" />
      <circle cx="104" cy="126" r="3.5" fill="#1a1512" opacity="0.3" />
      <circle cx="150" cy="60" r="3" fill="#1a1512" opacity="0.25" />
    </svg>
  );
}

export function IlustracionPapas({ className, titleId }) {
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-labelledby={titleId}>
      {titleId && <title id={titleId}>Ilustración de una porción de papas fritas</title>}
      <ellipse cx="100" cy="196" rx="60" ry="12" fill="#1a1512" opacity="0.12" />
      <rect x="66" y="30" width="10" height="110" rx="4" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" transform="rotate(-8 71 85)" />
      <rect x="92" y="18" width="11" height="122" rx="4" fill="#eee0c8" stroke="#1a1512" strokeWidth="4" />
      <rect x="118" y="30" width="10" height="110" rx="4" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" transform="rotate(8 123 85)" />
      <rect x="80" y="26" width="10" height="108" rx="4" fill="#eee0c8" stroke="#1a1512" strokeWidth="4" transform="rotate(-3 85 80)" />
      <rect x="106" y="26" width="10" height="108" rx="4" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" transform="rotate(4 111 80)" />
      <path d="M50 120 L150 120 L138 194 Q100 204 62 194 Z" fill="#c4161c" stroke="#1a1512" strokeWidth="5" strokeLinejoin="round" />
      <path d="M50 120 L150 120 L146 138 L54 138 Z" fill="#7a0c10" stroke="#1a1512" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

export function IlustracionBebida({ className, titleId }) {
  return (
    <svg viewBox="0 0 180 220" className={className} role="img" aria-labelledby={titleId}>
      {titleId && <title id={titleId}>Ilustración de una bebida bien fría</title>}
      <ellipse cx="90" cy="198" rx="50" ry="11" fill="#1a1512" opacity="0.12" />
      <path d="M46 60 L134 60 L120 192 Q90 202 60 192 Z" fill="#f7eedd" stroke="#1a1512" strokeWidth="5" strokeLinejoin="round" />
      <path d="M46 60 L134 60 L130 90 L50 90 Z" fill="#c4161c" stroke="#1a1512" strokeWidth="4" strokeLinejoin="round" />
      <rect x="38" y="46" width="104" height="18" rx="6" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" />
      <rect x="82" y="10" width="12" height="46" rx="5" fill="#e3a62f" stroke="#1a1512" strokeWidth="4" transform="rotate(8 88 33)" />
    </svg>
  );
}
