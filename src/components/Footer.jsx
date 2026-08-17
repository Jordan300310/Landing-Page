import { Link } from "react-router-dom";
import { negocio } from "../data/negocio";
import { IconoInstagram, IconoFacebook, IconoWhatsapp } from "./iconos";

const enlaceFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mostaza rounded";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-crema/80">
      <div className="container-ancho grid gap-10 px-4 py-14 sm:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link to="/" className={`inline-flex items-center gap-2 ${enlaceFoco}`}>
            <img
              src={negocio.logo.src}
              alt={negocio.logo.alt}
              width="40"
              height="40"
              loading="lazy"
              className="h-10 w-10 rounded-full border-2 border-crema/40"
            />
            <span className="text-plato font-display text-lg text-crema">{negocio.nombre}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-crema/60">
            Hamburguesas y pollo broaster hechos al momento, en Puente Piedra. Pide directo por WhatsApp.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-etiqueta text-crema/40">Navegación</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className={`hover:text-crema ${enlaceFoco}`}>
              Inicio
            </Link>
            <Link to="/carta" className={`hover:text-crema ${enlaceFoco}`}>
              Carta
            </Link>
            <Link to="/#nosotros" className={`hover:text-crema ${enlaceFoco}`}>
              Nosotros
            </Link>
            <Link to="/ubicacion" className={`hover:text-crema ${enlaceFoco}`}>
              Ubicación
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-etiqueta text-crema/40">Contacto</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a
              href={negocio.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 hover:text-crema ${enlaceFoco}`}
            >
              <IconoWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={negocio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 hover:text-crema ${enlaceFoco}`}
            >
              <IconoInstagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={negocio.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 hover:text-crema ${enlaceFoco}`}
            >
              <IconoFacebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-etiqueta text-crema/40">Visítanos</p>
          <div className="mt-3 space-y-1 text-sm text-crema/70">
            <p>{negocio.direccion}</p>
            <p>{negocio.horario.texto}</p>
            <p className="pt-2 text-crema/50">Pagos: {negocio.metodosPago.join(" · ")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-crema/10">
        <p className="container-ancho px-4 py-4 text-xs text-crema/40">
          © {anio} {negocio.nombre} · Puente Piedra, Lima
        </p>
      </div>
    </footer>
  );
}
