import { negocio } from "../data/negocio";

export function enlaceWhatsapp(mensaje, numero = negocio.whatsapp.numeros[0].numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export function enlacePedido(nombreProducto) {
  return enlaceWhatsapp(`Hola, quisiera pedir: ${nombreProducto}`);
}
