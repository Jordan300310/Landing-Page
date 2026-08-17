const variantes = {
  rojo: "border-blanco text-blanco bg-rojo",
  mostaza: "border-carbon text-carbon bg-mostaza",
  crema: "border-carbon text-carbon bg-crema",
};

export default function Sello({ children, variante = "mostaza", rotacion = "-6deg", className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 px-3 py-1.5 text-center text-[11px] font-semibold uppercase leading-tight tracking-etiqueta shadow-[3px_3px_0_0_rgba(26,21,18,0.9)] ${variantes[variante]} ${className}`}
      style={{ transform: `rotate(${rotacion})` }}
    >
      {children}
    </span>
  );
}
