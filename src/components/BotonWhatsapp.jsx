import { useEffect, useRef, useState } from "react";
import { negocio } from "../data/negocio";
import { enlaceWhatsapp } from "../lib/whatsapp";
import { IconoWhatsapp } from "./iconos";

export default function BotonWhatsapp({
  mensaje,
  className,
  children,
  alinear = "right",
  hacia = "abajo",
  envolturaClassName = "",
}) {
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef(null);

  useEffect(() => {
    if (!abierto) return;

    function alClicFuera(evento) {
      if (contenedorRef.current && !contenedorRef.current.contains(evento.target)) {
        setAbierto(false);
      }
    }
    function alEscape(evento) {
      if (evento.key === "Escape") setAbierto(false);
    }

    document.addEventListener("mousedown", alClicFuera);
    document.addEventListener("keydown", alEscape);
    return () => {
      document.removeEventListener("mousedown", alClicFuera);
      document.removeEventListener("keydown", alEscape);
    };
  }, [abierto]);

  return (
    <div ref={contenedorRef} className={`relative inline-block ${envolturaClassName}`}>
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-haspopup="true"
        className={`w-full ${className}`}
      >
        {children}
      </button>

      {abierto && (
        <div
          role="menu"
          className={`absolute z-30 w-56 rounded-[12px] border-2 border-carbon bg-crema p-2 shadow-[4px_4px_0_0_#1a1512] ${
            alinear === "right" ? "right-0" : "left-0"
          } ${hacia === "arriba" ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          <p className="px-2 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-etiqueta text-carbon/50">
            Elegí a quién escribir
          </p>
          {negocio.whatsapp.numeros.map((linea) => (
            <a
              key={linea.numero}
              role="menuitem"
              href={enlaceWhatsapp(mensaje, linea.numero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="flex items-center gap-2 rounded-[8px] px-2 py-2 text-sm font-semibold text-carbon transition-colors hover:bg-rojo hover:text-blanco focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo-oscuro"
            >
              <IconoWhatsapp className="h-4 w-4 shrink-0" />
              {linea.etiqueta} · {linea.numero.slice(-9, -6)} {linea.numero.slice(-6, -3)} {linea.numero.slice(-3)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
