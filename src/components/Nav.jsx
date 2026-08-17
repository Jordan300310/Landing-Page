import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { negocio } from "../data/negocio";
import { IconoWhatsapp, IconoMenu, IconoCerrar } from "./iconos";

const enlaceFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rojo-oscuro";

const enlaces = [
  { to: "/", etiqueta: "Inicio", fin: true },
  { to: "/carta", etiqueta: "Carta" },
  { to: "/#nosotros", etiqueta: "Nosotros" },
  { to: "/ubicacion", etiqueta: "Ubicación" },
];

function claseEnlace({ isActive }) {
  return `font-semibold rounded ${enlaceFoco} ${
    isActive ? "text-rojo" : "text-carbon/80 hover:text-rojo-oscuro"
  }`;
}

export default function Nav() {
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const alScrollear = () => setConScroll(window.scrollY > 8);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  useEffect(() => {
    setMenuAbierto(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        conScroll ? "border-carbon/10 bg-crema shadow-[0_2px_0_0_rgba(26,21,18,0.06)]" : "border-transparent bg-crema/95"
      }`}
    >
      <div className="container-ancho flex items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className={`shrink-0 rounded-full ${enlaceFoco}`}>
          <img
            src={negocio.logo.src}
            alt={negocio.logo.alt}
            width="48"
            height="48"
            loading="lazy"
            className="h-11 w-11 rounded-full border-2 border-carbon sm:h-12 sm:w-12"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 sm:flex">
          {enlaces.map((enlace) =>
            enlace.to.includes("#") ? (
              <Link
                key={enlace.etiqueta}
                to={enlace.to}
                className={`font-semibold rounded text-carbon/80 hover:text-rojo-oscuro ${enlaceFoco}`}
              >
                {enlace.etiqueta}
              </Link>
            ) : (
              <NavLink key={enlace.etiqueta} to={enlace.to} end={enlace.fin} className={claseEnlace}>
                {enlace.etiqueta}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={negocio.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden shrink-0 items-center gap-2 rounded-full bg-rojo px-4 py-2 text-sm font-semibold text-blanco transition-colors hover:bg-rojo-oscuro sm:inline-flex ${enlaceFoco}`}
          >
            <IconoWhatsapp className="h-4 w-4" />
            Pedir por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-carbon text-carbon sm:hidden ${enlaceFoco}`}
          >
            {menuAbierto ? <IconoCerrar className="h-5 w-5" /> : <IconoMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={`overflow-hidden border-t border-carbon/10 bg-crema transition-[max-height] duration-300 ease-out sm:hidden ${
          menuAbierto ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Principal móvil" className="flex flex-col gap-1 px-4 py-4">
          {enlaces.map((enlace) =>
            enlace.to.includes("#") ? (
              <Link
                key={enlace.etiqueta}
                to={enlace.to}
                className={`rounded-[12px] px-3 py-3 text-lg font-semibold text-carbon ${enlaceFoco}`}
              >
                {enlace.etiqueta}
              </Link>
            ) : (
              <NavLink
                key={enlace.etiqueta}
                to={enlace.to}
                end={enlace.fin}
                className={({ isActive }) =>
                  `rounded-[12px] px-3 py-3 text-lg font-semibold ${enlaceFoco} ${
                    isActive ? "bg-rojo/10 text-rojo" : "text-carbon"
                  }`
                }
              >
                {enlace.etiqueta}
              </NavLink>
            ),
          )}
          <a
            href={negocio.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rojo px-4 py-3 text-base font-semibold text-blanco ${enlaceFoco}`}
          >
            <IconoWhatsapp className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
