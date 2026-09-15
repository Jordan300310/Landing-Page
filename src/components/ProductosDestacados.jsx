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
              className="group relative flex flex-col overflow-hidden rounded-[16px] border-2 border-carbon bg-crema transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_8px_0_0_#1a1512]"
            >
              <Sello variante="mostaza" rotacion="-6deg" className="absolute right-4 top-4 z-10 !px-2.5 !py-1 !text-[10px]">
                {producto.etiqueta}
              </Sello>

              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-carbon bg-crema-oscura">
                {producto.imagen ? (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImagenProducto
                      tipo="broaster"
                      alt={producto.nombre}
                      className="h-32 w-32 drop-shadow-[4px_6px_0_rgba(26,21,18,0.15)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-carbon/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <h3 className="text-plato font-semibold text-carbon">{producto.nombre}</h3>
                <p className="mt-1 text-sm text-carbon/70">{producto.descripcion}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="text-precio font-extrabold tabular-nums text-rojo-oscuro">S/ {producto.precio}</span>
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
