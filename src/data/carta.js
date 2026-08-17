export const carta = {
  hamburguesas: [
    {
      nombre: "Hamburguesa Clásica",
      descripcion: "Carne, queso, lechuga, tomate y salsas de la casa",
      precio: 12,
      destacado: false,
      tipo: "hamburguesa",
      etiqueta: null,
    },
    {
      nombre: "Hamburguesa Doble",
      descripcion: "Doble carne, doble queso y tocino crocante",
      precio: 18,
      destacado: true,
      tipo: "hamburguesa",
      etiqueta: "Más pedido",
    },
    {
      nombre: "Hamburguesa BBQ",
      descripcion: "Carne, cebolla caramelizada y salsa BBQ",
      precio: 16,
      destacado: false,
      tipo: "hamburguesa",
      etiqueta: "Nuevo",
    },
  ],
  broaster: [
    {
      nombre: "Broaster 2 presas",
      descripcion: "Dos presas apanadas con papas fritas",
      precio: 15,
      destacado: false,
      tipo: "broaster",
      etiqueta: null,
    },
    {
      nombre: "Broaster 4 presas",
      descripcion: "Cuatro presas apanadas, papas y ensalada",
      precio: 26,
      destacado: true,
      tipo: "broaster",
      etiqueta: "Combo",
    },
    {
      nombre: "Alitas broaster (8 u.)",
      descripcion: "Ocho alitas apanadas crocantes",
      precio: 20,
      destacado: true,
      tipo: "broaster",
      etiqueta: null,
    },
  ],
  combos: [],
  bebidas: [
    {
      nombre: "Chicha morada 500ml",
      descripcion: "Vaso grande, bien fría",
      precio: 5,
      destacado: true,
      tipo: "bebida",
      etiqueta: null,
    },
    { nombre: "Gaseosa personal", descripcion: "355ml", precio: 5, destacado: false, tipo: "bebida", etiqueta: null },
    {
      nombre: "Limonada 500ml",
      descripcion: "Vaso grande",
      precio: 6,
      destacado: false,
      tipo: "bebida",
      etiqueta: null,
    },
  ],
  extras: [
    {
      nombre: "Papas fritas",
      descripcion: "Porción individual, crocantes",
      precio: 8,
      destacado: false,
      tipo: "papas",
      etiqueta: null,
    },
    {
      nombre: "Salsa adicional",
      descripcion: "A elección",
      precio: 2,
      destacado: false,
      tipo: "papas",
      etiqueta: null,
    },
    {
      nombre: "Adicional de queso",
      descripcion: "Por unidad",
      precio: 3,
      destacado: false,
      tipo: "papas",
      etiqueta: null,
    },
  ],
};

export function obtenerDestacados() {
  return Object.values(carta)
    .flat()
    .filter((plato) => plato.destacado);
}
