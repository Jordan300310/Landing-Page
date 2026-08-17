import { Link } from "react-router-dom";
import { negocio } from "../data/negocio";

const botonFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro";

export default function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t-2 border-carbon bg-crema p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:hidden">
      <a
        href={negocio.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-1 items-center justify-center whitespace-nowrap rounded-full bg-rojo px-2 py-3 text-sm font-semibold text-blanco transition-colors hover:bg-rojo-oscuro ${botonFoco}`}
      >
        Pedir por WhatsApp
      </a>

      <Link
        to="/carta"
        className={`flex items-center justify-center whitespace-nowrap rounded-full border-2 border-carbon px-5 py-3 text-sm font-semibold text-carbon ${botonFoco}`}
      >
        Ver carta
      </Link>
    </div>
  );
}
