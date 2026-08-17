import { useState } from "react";
import { imagenes } from "../data/imagenes";
import {
  IlustracionHamburguesa,
  IlustracionBroaster,
  IlustracionPapas,
  IlustracionBebida,
} from "./ilustraciones/Comida";

const ilustraciones = {
  hamburguesa: IlustracionHamburguesa,
  broaster: IlustracionBroaster,
  papas: IlustracionPapas,
  bebida: IlustracionBebida,
};

export default function ImagenProducto({ tipo, alt, className, eager = false }) {
  const [fallo, setFallo] = useState(false);
  const rutaFoto = imagenes[tipo];
  const Ilustracion = ilustraciones[tipo] ?? IlustracionHamburguesa;

  if (rutaFoto && !fallo) {
    return (
      <img
        src={rutaFoto}
        alt={alt}
        loading={eager ? undefined : "lazy"}
        className={className}
        onError={() => setFallo(true)}
      />
    );
  }

  return <Ilustracion className={className} aria-label={alt} role="img" />;
}
