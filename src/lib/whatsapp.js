import { negocio } from "../data/negocio";

export function enlaceWhatsapp(mensaje) {
  return `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

export function enlacePedido(nombreProducto) {
  return enlaceWhatsapp(`Hola, quisiera pedir: ${nombreProducto}`);
}
