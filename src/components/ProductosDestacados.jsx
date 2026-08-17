import { Link } from "react-router-dom";
import { obtenerDestacados } from "../data/carta";
import { enlacePedido } from "../lib/whatsapp";
import ImagenProducto from "./ImagenProducto";
import TarjetaProducto from "./TarjetaProducto";
import Sello from "./Sello";
import Reveal from "./Reveal";
import { IconoWhatsapp } from "./iconos";

const categoriaPorTipo = {
  hamburguesa: "Hamburguesas",
  broaster: "Broaster",
  papas: "Extras",
  bebida: "Bebidas",
};

export default function ProductosDestacados() {
  const [principal, ...resto] = obtenerDestacados();

  return (
    <section aria-label="Productos destacados" className="bg-crema">
      <div className="container-ancho px-4 py-seccion">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">La selección</p>
            <h2 className="mt-2 text-seccion font-display text-carbon">Lo más pedido</h2>
          </div>
          <Link to="/carta" className="text-sm font-semibold text-rojo-oscuro hover:underline">
            Ver la carta completa →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principal && (
            <Reveal
              as="article"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border-2 border-carbon bg-crema-oscura p-6 sm:col-span-2 sm:row-span-2 sm:p-8"
            >
              {principal.etiqueta && (
                <Sello variante="mostaza" rotacion="-6deg" className="absolute right-5 top-5 z-10">
                  {principal.etiqueta}
                </Sello>
              )}
              <div className="flex justify-center py-4">
                <ImagenProducto
                  tipo={principal.tipo}
                  alt={principal.nombre}
                  eager
                  className="h-44 w-44 drop-shadow-[6px_8px_0_rgba(26,21,18,0.15)] transition-transform duration-300 group-hover:scale-105 sm:h-56 sm:w-56"
                />
              </div>
              <div>
                <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">
                  {categoriaPorTipo[principal.tipo]}
                </p>
                <h3 className="mt-1 text-plato font-display text-2xl text-carbon">{principal.nombre}</h3>
                <p className="mt-1 text-cuerpo text-carbon/70">{principal.descripcion}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-precio font-bold tabular-nums text-carbon">S/ {principal.precio}</span>
                  <a
                    href={enlacePedido(principal.nombre)}
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
          )}

          {resto.map((producto, i) => (
            <Reveal key={producto.nombre} delay={i * 80}>
              <TarjetaProducto producto={producto} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
