import { Link } from "react-router-dom";
import { obtenerPromociones } from "../data/carta";
import { enlacePedido } from "../lib/whatsapp";
import ImagenProducto from "./ImagenProducto";
import Sello from "./Sello";
import Reveal from "./Reveal";
import { IconoWhatsapp } from "./iconos";

export default function ProductosDestacados() {
  const promociones = obtenerPromociones();

  return (
    <section aria-label="Promociones" className="bg-crema">
      <div className="container-ancho px-4 py-seccion">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">
              Promociones de alitas
            </p>
            <h2 className="mt-2 text-seccion font-display text-carbon">Combos para compartir</h2>
          </div>
          <Link to="/carta" className="text-sm font-semibold text-rojo-oscuro hover:underline">
            Ver la carta completa →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {promociones.map((producto, i) => (
            <Reveal
              key={producto.nombre}
              as="article"
              delay={i * 80}
              className="group relative flex flex-col overflow-hidden rounded-[12px] border-2 border-carbon bg-crema p-5 transition-shadow hover:shadow-[6px_6px_0_0_#1a1512]"
            >
              <Sello variante="mostaza" rotacion="-6deg" className="absolute right-4 top-4 z-10 !px-2.5 !py-1 !text-[10px]">
                {producto.etiqueta}
              </Sello>

              <div className="flex justify-center py-2">
                <ImagenProducto
                  tipo="broaster"
                  alt={producto.nombre}
                  className="h-32 w-32 drop-shadow-[4px_6px_0_rgba(26,21,18,0.15)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-1 text-plato text-carbon">{producto.nombre}</h3>
              <p className="mt-1 text-sm text-carbon/70">{producto.descripcion}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-precio font-bold tabular-nums text-carbon">S/ {producto.precio}</span>
                <a
                  href={enlacePedido(producto.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-carbon px-4 py-2 text-sm font-semibold text-crema transition-colors hover:bg-rojo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
                >
                  <IconoWhatsapp className="h-3.5 w-3.5" />
                  Pedir
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
