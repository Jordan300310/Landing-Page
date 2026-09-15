import { useEffect, useState } from "react";
import { negocio } from "../data/negocio";
import { IconoUbicacion, IconoReloj, IconoWhatsapp, IconoCheck } from "../components/iconos";
import { estaAbierto } from "../lib/horario";
import BotonWhatsapp from "../components/BotonWhatsapp";

export default function UbicacionPage() {
  const [abierto, setAbierto] = useState(() => estaAbierto(negocio.horario));
  const [estadoMapa, setEstadoMapa] = useState("cargando");

  useEffect(() => {
    const intervalo = setInterval(() => setAbierto(estaAbierto(negocio.horario)), 60_000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const limite = setTimeout(() => setEstadoMapa((actual) => (actual === "cargando" ? "error" : actual)), 7000);
    return () => clearTimeout(limite);
  }, []);

  const mapaEmbebidoUrl = `https://www.google.com/maps?q=${negocio.coordenadas.lat},${negocio.coordenadas.lng}&output=embed`;

  return (
    <section aria-label="Ubicación" className="bg-crema">
      <div className="container-ancho px-4 py-seccion">
        <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">Visítanos</p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <h1 className="text-seccion font-display text-carbon">Ubicación</h1>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-sm font-semibold ${
              abierto ? "border-carbon bg-mostaza text-carbon" : "border-carbon/30 bg-crema-oscura text-carbon/60"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${abierto ? "bg-carbon" : "bg-carbon/40"}`} />
            {abierto ? "Abierto ahora" : "Cerrado ahora"}
          </span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[12px] border-2 border-carbon bg-crema-oscura p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <IconoUbicacion className="h-6 w-6 shrink-0 text-rojo-oscuro" />
              <div>
                <p className="text-plato font-semibold text-carbon">{negocio.direccion}</p>
                {negocio.referencia && <p className="mt-1 text-cuerpo text-carbon/70">{negocio.referencia}</p>}
                <p className="mt-1 text-cuerpo text-carbon/70">
                  {negocio.distrito}, {negocio.ciudad}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-t border-carbon/15 pt-6">
              <IconoReloj className="h-6 w-6 shrink-0 text-rojo-oscuro" />
              <p className="text-cuerpo text-carbon">{negocio.horario.texto}</p>
            </div>

            <div className="mt-6 flex items-start gap-3 border-t border-carbon/15 pt-6">
              <IconoCheck className="h-6 w-6 shrink-0 text-rojo-oscuro" />
              <p className="text-cuerpo text-carbon">
                {negocio.delivery.disponible ? "Delivery y recojo en tienda" : "Recojo en tienda"} · Pagos con{" "}
                {negocio.metodosPago.join(", ")}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={negocio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-rojo px-6 py-3 font-semibold text-blanco transition-colors hover:bg-rojo-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
              >
                Cómo llegar
              </a>
              <BotonWhatsapp
                mensaje="Hola, quisiera hacer una consulta"
                alinear="left"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-carbon px-6 py-3 font-semibold text-carbon transition-colors hover:bg-carbon hover:text-crema focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro"
              >
                <IconoWhatsapp className="h-4 w-4" />
                Consultar por WhatsApp
              </BotonWhatsapp>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[12px] border-2 border-carbon">
            {estadoMapa !== "listo" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-crema-oscura p-6 text-center">
                {estadoMapa === "cargando" ? (
                  <p className="text-sm text-carbon/60">Cargando el mapa…</p>
                ) : (
                  <>
                    <IconoUbicacion className="h-8 w-8 text-rojo-oscuro" />
                    <p className="max-w-xs text-sm text-carbon/70">
                      No pudimos mostrar el mapa aquí. Usa el botón "Cómo llegar" para verlo directo en Google Maps.
                    </p>
                  </>
                )}
              </div>
            )}
            <iframe
              title={`Mapa de ubicación de ${negocio.nombre}`}
              src={mapaEmbebidoUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setEstadoMapa("listo")}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
