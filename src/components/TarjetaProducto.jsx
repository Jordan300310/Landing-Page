import { enlacePedido } from "../lib/whatsapp";
import ImagenProducto from "./ImagenProducto";
import Sello from "./Sello";
import { IconoWhatsapp } from "./iconos";

export default function TarjetaProducto({ producto, className = "" }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[12px] border-2 border-carbon bg-crema p-5 transition-shadow hover:shadow-[6px_6px_0_0_#1a1512] ${className}`}
    >
      {producto.etiqueta && (
        <Sello variante="rojo" rotacion="-6deg" className="absolute right-4 top-4 z-10 !px-2.5 !py-1 !text-[10px]">
          {producto.etiqueta}
        </Sello>
      )}
      <div className="flex justify-center py-2">
        <ImagenProducto
          tipo={producto.tipo}
          alt={producto.nombre}
          className="h-32 w-32 drop-shadow-[4px_6px_0_rgba(26,21,18,0.15)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-1 text-plato text-carbon">{producto.nombre}</h3>
      <p className="mt-1 text-sm text-carbon/70">{producto.descripcion}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-precio font-bold tabular-nums text-carbon">S/ {producto.precio}</span>
        <a
          href={enlacePedido(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-carbon px-4 py-2 text-sm font-semibold text-crema transition-colors hover:bg-rojo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
        >
          <IconoWhatsapp className="h-3.5 w-3.5" />
          Pedir
        </a>
      </div>
    </article>
  );
}
