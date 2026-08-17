import { carta } from "../data/carta";
import TarjetaProducto from "./TarjetaProducto";
import Reveal from "./Reveal";

const categorias = [
  { clave: "hamburguesas", titulo: "Hamburguesas" },
  { clave: "broaster", titulo: "Broaster" },
  { clave: "combos", titulo: "Combos" },
  { clave: "bebidas", titulo: "Bebidas" },
  { clave: "extras", titulo: "Extras" },
];

export default function Carta() {
  const categoriasConPlatos = categorias
    .map(({ clave, titulo }) => ({ clave, titulo, platos: carta[clave] ?? [] }))
    .filter(({ platos }) => platos.length > 0);

  return (
    <div className="bg-crema">
      <div className="container-ancho px-4 pb-6 pt-12 sm:pt-16">
        <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">Menú</p>
        <h1 className="mt-2 text-seccion font-display text-carbon">La Carta</h1>
        <p className="mt-3 max-w-md text-cuerpo text-carbon/70">
          Todo hecho al momento. Toca "Pedir" en cualquier plato y te llevamos directo a WhatsApp con el pedido
          listo para confirmar.
        </p>
      </div>

      <nav
        aria-label="Categorías de la carta"
        className="sticky top-[65px] z-40 border-y border-carbon/10 bg-crema/95 backdrop-blur sm:top-[73px]"
      >
        <div className="container-ancho flex gap-2 overflow-x-auto px-4 py-3">
          {categoriasConPlatos.map(({ clave, titulo }) => (
            <a
              key={clave}
              href={`#${clave}`}
              className="shrink-0 rounded-full border-2 border-carbon px-4 py-1.5 text-sm font-semibold text-carbon transition-colors hover:bg-carbon hover:text-crema focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
            >
              {titulo}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-ancho space-y-14 px-4 py-seccion">
        {categoriasConPlatos.map(({ clave, titulo, platos }) => (
          <section key={clave} id={clave} className="scroll-mt-36">
            <h2 className="text-seccion font-display text-rojo">{titulo}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {platos.map((plato, i) => (
                <Reveal key={plato.nombre} delay={Math.min(i, 4) * 60}>
                  <TarjetaProducto producto={plato} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
