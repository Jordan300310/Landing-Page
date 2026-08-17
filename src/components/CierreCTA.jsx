import { negocio } from "../data/negocio";
import { IconoWhatsapp } from "./iconos";
import { IlustracionBroaster } from "./ilustraciones/Comida";
import Sello from "./Sello";
import Reveal from "./Reveal";

export default function CierreCTA() {
  return (
    <section aria-label="Pedir por WhatsApp" className="textura relative overflow-hidden bg-rojo">
      <div className="container-ancho relative grid items-center gap-8 px-4 py-seccion sm:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-etiqueta font-semibold uppercase tracking-etiqueta text-crema/80">
            Directo a tu mesa
          </p>
          <h2 className="mt-2 text-seccion font-display text-blanco">¿Con hambre de verdad?</h2>
          <p className="mt-4 max-w-md text-cuerpo text-blanco/85">
            Escríbenos por WhatsApp y te confirmamos tu pedido al toque. Sin apps, sin esperas raras.
          </p>
          <a
            href={negocio.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-blanco px-8 py-4 text-lg font-semibold text-rojo shadow-[4px_4px_0_0_#1a1512] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1a1512] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-rojo focus-visible:ring-blanco"
          >
            <IconoWhatsapp className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
        </Reveal>

        <div className="relative mx-auto flex justify-center sm:justify-end">
          <Sello variante="mostaza" rotacion="8deg" className="absolute -left-2 -top-3 z-20 sm:left-auto sm:right-16">
            Recién
            <br />
            hecho
          </Sello>
          <IlustracionBroaster
            titleId="cierre-broaster"
            className="h-52 w-52 drop-shadow-[8px_10px_0_rgba(26,21,18,0.25)] sm:h-64 sm:w-64"
          />
        </div>
      </div>
    </section>
  );
}
