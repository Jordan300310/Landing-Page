const dibujos = [
  <>
    <path d="M60 94c-19 0-31-13-31-30 0-14 9-23 18-34 1 12 8 16 12 22 6-9 7-18 4-29 17 12 29 27 29 43 0 16-13 28-32 28Z" />
    <path d="M60 86c-9 0-15-6-15-14 0-7 5-12 10-18 1 7 5 9 7 13 4-5 5-10 4-16 8 7 14 14 14 22 0 7-8 13-20 13Z" />
  </>,
  <>
    <path d="M25 54c3-18 16-28 35-28s32 10 35 28H25Z" />
    <path d="M21 59h78l-7 12H29L21 59Z" />
    <path d="M28 77h64c-2 13-13 19-32 19s-30-6-32-19Z" />
    <path d="m44 38 2 2m14-6 2 2m14 4 2 2" />
  </>,
  <>
    <path d="M35 32 45 75M52 25l4 49m16-44-5 45m21-36-9 40" />
    <path d="M26 70h68l-9 27H35L26 70Z" />
    <path d="M31 78h58" />
  </>,
];

export default function OrnamentoCarta({ indice, className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {dibujos[indice % dibujos.length]}
      <path d="m17 33 5 2m73-14 3-5M18 91l-4 3m88-13 5 2" />
    </svg>
  );
}
