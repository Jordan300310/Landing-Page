import { enlacePedido } from "../lib/whatsapp";
import Sello from "./Sello";
import { IconoWhatsapp } from "./iconos";

function formatearPrecio(precio) {
  return Number.isInteger(precio) ? `${precio}` : precio.toFixed(2);
}

export default function FilaProducto({ producto }) {
  return (
    <div className="grupo-plato flex items-center gap-3 py-4 sm:gap-4">
      <div className="min-w-0 flex-1">
        <div className="flex items-end gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <p className="text-[1.05rem] font-bold leading-snug text-carbon sm:text-[1.12rem]">{producto.nombre}</p>
            {producto.etiqueta && (
              <Sello variante="mostaza" rotacion="-4deg" className="!px-2 !py-0.5 !text-[10px]">
                {producto.etiqueta}
              </Sello>
            )}
          </div>
          <span aria-hidden="true" className="mb-1 min-w-3 flex-1 border-b-2 border-dotted border-carbon/25" />
          <span className="shrink-0 text-lg font-extrabold tabular-nums text-rojo-oscuro sm:text-xl">
            S/ {formatearPrecio(producto.precio)}
          </span>
        </div>
        {producto.descripcion && <p className="mt-0.5 text-sm text-carbon/60">{producto.descripcion}</p>}
      </div>

      <a
        href={enlacePedido(producto.nombre)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pedir ${producto.nombre} por WhatsApp`}
        className="boton-pedir group inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-carbon bg-carbon p-2.5 text-sm font-bold text-crema shadow-[3px_3px_0_#e3a62f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-rojo hover:shadow-[4px_5px_0_#e3a62f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rojo-oscuro focus-visible:ring-offset-2 sm:px-4 sm:py-2.5"
      >
        <IconoWhatsapp className="h-4 w-4 transition-transform duration-200 group-hover:rotate-[-8deg] group-hover:scale-110" />
        <span className="hidden sm:inline">Pedir</span>
      </a>
    </div>
  );
}
