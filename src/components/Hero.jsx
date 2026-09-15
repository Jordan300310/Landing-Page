import { Link } from "react-router-dom";
import { negocio } from "../data/negocio";
import { IconoWhatsapp, IconoReloj, IconoBilletera } from "./iconos";
import { IlustracionHamburguesa } from "./ilustraciones/Comida";
import Sello from "./Sello";
import BotonWhatsapp from "./BotonWhatsapp";

const botonFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-crema">
      <div className="container-ancho grid gap-10 px-4 py-12 sm:py-16 lg:min-h-[82vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-6 lg:py-20">
        <div className="relative z-10 lg:pr-6">
          <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-rojo-oscuro">
            Comida rápida hecha al momento
          </p>

          <h1 className="mt-3 text-hero font-display text-carbon">
            El sabor <span className="text-rojo">que sí llena</span>
          </h1>

          <p className="mt-5 max-w-md text-cuerpo text-carbon/80">
            Tus antojos favoritos, recién preparados y con mucho sabor. Sin vueltas: pides por WhatsApp y lo
            tienes listo para disfrutar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <BotonWhatsapp
              mensaje="Hola, quiero hacer un pedido"
              alinear="left"
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-rojo px-7 py-3.5 font-semibold text-blanco shadow-[4px_4px_0_0_#1a1512] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1a1512] ${botonFoco}`}
            >
              <IconoWhatsapp className="h-5 w-5" />
              Pedir por WhatsApp
            </BotonWhatsapp>

            <Link
              to="/carta"
              className={`inline-flex items-center justify-center rounded-full border-2 border-carbon px-7 py-3.5 font-semibold text-carbon transition-colors hover:bg-carbon hover:text-crema ${botonFoco}`}
            >
              Ver la carta
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-carbon/15 pt-6 text-sm text-carbon/70">
            <li className="flex items-center gap-2">
              <IconoReloj className="h-4 w-4 text-rojo-oscuro" />
              {negocio.horario.texto}
            </li>
            <li className="flex items-center gap-2">
              <IconoBilletera className="h-4 w-4 text-rojo-oscuro" />
              {negocio.metodosPago.join(" · ")}
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative isolate w-fit">
            <div className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rojo" />

            <Sello variante="mostaza" rotacion="-9deg" className="absolute left-2 top-2 z-20 sm:left-6 sm:top-6">
              Hecho al
              <br />
              momento
            </Sello>

            <Sello variante="crema" rotacion="7deg" className="absolute bottom-6 right-2 z-20 sm:bottom-10 sm:right-4">
              Producto
              <br />
              popular
            </Sello>

            <IlustracionHamburguesa
              titleId="hero-hamburguesa"
              className="relative z-10 h-64 w-64 drop-shadow-[10px_14px_0_rgba(26,21,18,0.18)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
