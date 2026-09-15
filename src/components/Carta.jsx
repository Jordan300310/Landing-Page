import { carta } from "../data/carta";
import FilaProducto from "./FilaProducto";
import EspacioFotos from "./EspacioFotos";
import OrnamentoCarta from "./OrnamentoCarta";
import Reveal from "./Reveal";

function agruparPorGrupo(platos) {
  const grupos = [];
  for (const plato of platos) {
    const clave = plato.grupo ?? null;
    let grupo = grupos.find((item) => item.clave === clave);
    if (!grupo) {
      grupo = { clave, platos: [] };
      grupos.push(grupo);
    }
    grupo.platos.push(plato);
  }
  return grupos;
}

export default function Carta() {
  return (
    <div className="carta-fondo overflow-hidden bg-crema">
      <header className="textura relative overflow-hidden bg-carbon text-crema">
        <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full border-[38px] border-mostaza/90" />
        <div className="absolute -bottom-20 left-[58%] h-40 w-40 rounded-full bg-rojo/80 blur-[1px]" />
        <div className="container-ancho relative px-4 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-mostaza">Menú de la casa</p>
            <h1 className="mt-3 text-hero font-display text-crema">La Carta</h1>
            <p className="mt-5 max-w-xl text-cuerpo text-crema/75">
              Antojos grandes, precios claros y todo preparado al momento. Elige el tuyo y pídelo directo por
              WhatsApp.
            </p>
          </div>

          <div className="absolute bottom-8 right-5 hidden -rotate-3 rounded-full bg-mostaza px-5 py-3 text-center text-xs font-extrabold uppercase tracking-etiqueta text-carbon shadow-[5px_5px_0_#c4161c] sm:block">
            Hecho al
            <br />
            momento
          </div>
        </div>
      </header>

      <nav
        aria-label="Categorías de la carta"
        className="sticky top-[65px] z-40 border-y border-carbon/10 bg-crema/95 backdrop-blur sm:top-[73px]"
      >
        <div className="container-ancho flex gap-2 overflow-x-auto px-4 py-3">
          {carta.map(({ id, titulo }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full border-2 border-carbon px-4 py-1.5 text-sm font-semibold text-carbon transition-colors hover:bg-carbon hover:text-crema focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
            >
              {titulo}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-ancho space-y-20 px-4 py-seccion sm:space-y-28">
        {carta.map(({ id, titulo, imagenes, platos }, indice) => {
          const tieneFotos = imagenes.some((imagen) => (typeof imagen === "string" ? imagen : imagen?.src));
          const fotoALaIzquierda = indice % 2 === 1;

          return (
            <section key={id} id={id} className="relative scroll-mt-36">
              <OrnamentoCarta
                indice={indice}
                className={`pointer-events-none absolute top-1/2 hidden h-32 w-32 -translate-y-1/2 text-mostaza/[0.18] xl:block ${
                  fotoALaIzquierda ? "-right-36 rotate-12" : "-left-36 -rotate-12"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute -top-10 -z-0 font-display text-[7rem] leading-none text-carbon/[0.045] sm:text-[10rem] ${
                  fotoALaIzquierda ? "right-0" : "left-0"
                }`}
              >
                {String(indice + 1).padStart(2, "0")}
              </span>

              <div
                className={`relative grid items-center gap-5 ${
                  tieneFotos
                    ? fotoALaIzquierda
                      ? "lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-0"
                      : "lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-0"
                    : ""
                }`}
              >
                {tieneFotos && fotoALaIzquierda && (
                  <EspacioFotos imagenes={imagenes} titulo={titulo} indice={indice} lado="izquierda" />
                )}

                <Reveal
                  className={`carta-panel relative z-10 rounded-[22px] border-2 border-carbon bg-crema-oscura shadow-[7px_7px_0_#1a1512] ${
                    !tieneFotos ? (fotoALaIzquierda ? "lg:ml-auto lg:w-[82%]" : "lg:w-[82%]") : ""
                  }`}
                >
                  <div className="menu-liston relative border-b-2 border-carbon bg-rojo px-5 py-5 text-crema sm:px-7">
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-crema/40 px-3 py-1 text-[10px] font-bold uppercase tracking-etiqueta text-crema/75">
                      {platos.length} opciones
                    </span>
                    <p className="font-hand text-xl leading-none text-mostaza">Para darte el gusto</p>
                    <h2 className="mt-1 max-w-[75%] text-[clamp(1.7rem,4vw,2.6rem)] font-display leading-[1.05]">
                      {titulo}
                    </h2>
                  </div>

                  <div className="px-5 sm:px-7">
                    {agruparPorGrupo(platos).map(({ clave, platos: platosDelGrupo }) => (
                      <div key={clave ?? "sin-grupo"}>
                        {clave && (
                          <p className="pt-4 text-[11px] font-semibold uppercase tracking-etiqueta text-rojo-oscuro">
                            {clave}
                          </p>
                        )}
                        {platosDelGrupo.map((plato) => (
                          <FilaProducto key={plato.nombre} producto={plato} />
                        ))}
                      </div>
                    ))}
                  </div>
                </Reveal>

                {tieneFotos && !fotoALaIzquierda && (
                  <EspacioFotos imagenes={imagenes} titulo={titulo} indice={indice} lado="derecha" />
                )}
              </div>

              {indice < carta.length - 1 && (
                <div aria-hidden="true" className="separador-carta mt-20 sm:mt-28">
                  <span>✦</span>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
