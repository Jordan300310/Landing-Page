import { negocio } from "../data/negocio";
import { IconoReloj, IconoMoto, IconoBilletera, IconoUbicacion } from "./iconos";

const items = [
  { Icono: IconoReloj, etiqueta: "Horario", valor: negocio.horario.texto },
  {
    Icono: IconoMoto,
    etiqueta: "Atención",
    valor: negocio.delivery.disponible ? "Delivery y recojo en tienda" : "Recojo en tienda",
  },
  { Icono: IconoBilletera, etiqueta: "Pagos", valor: negocio.metodosPago.join(" · ") },
  { Icono: IconoUbicacion, etiqueta: "Zona", valor: `${negocio.distrito}, ${negocio.ciudad}` },
];

export default function FranjaDeDatos() {
  return (
    <section aria-label="Datos rápidos" className="border-y-2 border-carbon bg-carbon">
      <div className="container-ancho grid grid-cols-2 gap-x-6 gap-y-5 px-4 py-6 sm:grid-cols-4 sm:divide-x sm:divide-crema/15 sm:py-5">
        {items.map(({ Icono, etiqueta, valor }) => (
          <div key={etiqueta} className="flex items-start gap-2.5 sm:pl-6 sm:first:pl-0">
            <Icono className="mt-0.5 h-5 w-5 shrink-0 text-mostaza" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-etiqueta text-crema/60">{etiqueta}</p>
              <p className="mt-0.5 text-sm font-semibold text-crema">{valor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
