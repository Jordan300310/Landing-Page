import Reveal from "./Reveal";
import { IconoFuego, IconoPorcion, IconoUbicacion } from "./iconos";

const beneficios = [
  {
    Icono: IconoFuego,
    titulo: "Preparado al momento",
    descripcion: "Cada pedido se cocina cuando lo pides, no antes. Nada de bandejas esperando bajo luz.",
  },
  {
    Icono: IconoPorcion,
    titulo: "Porciones contundentes",
    descripcion: "Para el hambre de verdad: carne generosa, presas grandes y papas que no se quedan cortas.",
  },
  {
    Icono: IconoUbicacion,
    titulo: "Sabor local",
    descripcion: "Del barrio para el barrio, en Puente Piedra. Sin vueltas, sin letra chica.",
  },
];

export default function PorQueSrPan() {
  return (
    <section id="nosotros" aria-label="Por qué Sr. Pan" className="bg-crema-oscura">
      <div className="container-ancho px-4 py-seccion">
        <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">Nosotros</p>
        <h2 className="mt-2 text-seccion font-display text-carbon">¿Por qué Sr. Pan?</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {beneficios.map(({ Icono, titulo, descripcion }, i) => (
            <Reveal key={titulo} delay={i * 100}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-carbon bg-crema text-rojo-oscuro">
                <Icono className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-plato font-semibold text-carbon">{titulo}</h3>
              <p className="mt-2 text-cuerpo text-carbon/70">{descripcion}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
