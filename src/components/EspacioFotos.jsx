import Reveal from "./Reveal";

function normalizarFoto(imagen) {
  return typeof imagen === "string" ? { src: imagen } : imagen;
}

export default function EspacioFotos({ imagenes = [], titulo, indice = 0, lado = "derecha" }) {
  const fotos = imagenes.map(normalizarFoto).filter((foto) => foto?.src);
  const principal = fotos[0];
  const secundaria = indice % 3 === 0 ? fotos[1] : null;
  const mensajes = ["Recién hecho", "Favorito", "Buen provecho", "Con cariño"];

  if (!principal) return null;

  return (
    <Reveal
      delay={120}
      className={`relative z-20 mx-auto w-[88%] max-w-sm lg:w-full ${
        lado === "izquierda" ? "lg:order-first lg:-mr-10" : "order-first lg:order-none lg:-ml-10"
      }`}
    >
      <div className={`foto-carta ${lado === "izquierda" ? "-rotate-2" : "rotate-2"}`}>
        <div className="relative rounded-[30px_80px_34px_70px] border-2 border-carbon/80 bg-mostaza p-2 shadow-[8px_8px_0_#c4161c]">
          <img
            src={principal.src}
            alt={`${titulo} — una de las favoritas`}
            loading="lazy"
            className={`aspect-[5/4] w-full rounded-[24px_72px_28px_62px] bg-white ${
              principal.ajuste === "contain" ? "object-contain" : "object-cover"
            }`}
          />
          <span className="sello-foto absolute -right-3 -top-3 grid h-16 w-16 rotate-12 place-items-center rounded-full border-2 border-carbon bg-crema px-1 text-center text-[9px] font-black uppercase leading-tight tracking-wide text-rojo">
            {mensajes[indice % mensajes.length]}
          </span>
        </div>
      </div>

      {secundaria && (
        <div
          className={`absolute -bottom-10 hidden h-28 w-28 overflow-hidden rounded-full border-[5px] border-crema bg-white shadow-[4px_4px_0_#1a1512] sm:block ${
            lado === "izquierda" ? "-left-5" : "-right-5"
          }`}
        >
          <img
            src={secundaria.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={`h-full w-full ${secundaria.ajuste === "contain" ? "object-contain" : "object-cover"}`}
          />
        </div>
      )}
    </Reveal>
  );
}
