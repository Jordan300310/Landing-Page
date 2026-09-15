export const carta = [
  {
    id: "salchipapas",
    titulo: "Salchipapas",
    imagenes: ["/salchipapa-1.png", "/salchipapa-2.png"],
    platos: [
      { nombre: "Salchipapa Simple", descripcion: "Hot dog de ternera", precio: 10 },
      { nombre: "Salchipapa Mediana", descripcion: "Doble hot dog", precio: 12.5 },
      { nombre: "Salchipapa Especial", descripcion: "Doble hot dog, huevo, queso y jamón", precio: 15 },
      {
        nombre: "Salchimix",
        descripcion: "Hot dog, chorizo, huevo, jamón, queso y pechuga a la plancha",
        precio: 22,
      },
    ],
  },
  {
    id: "broaster",
    titulo: "Pollo Broaster",
    imagenes: ["/pollo-broaster-1.png", "/pollo-broaster-2.png"],
    platos: [
      { nombre: "Alita", descripcion: "", precio: 11 },
      { nombre: "Pierna", descripcion: "", precio: 12 },
      { nombre: "Muslo", descripcion: "", precio: 12 },
      { nombre: "Pecho", descripcion: "", precio: 14 },
    ],
  },
  {
    id: "sandwiches",
    titulo: "Sándwiches",
    imagenes: ["/hamburguesa-1.png", "/hamburguesa-2.png"],
    platos: [
      { nombre: "Hamburguesa Clásica", descripcion: "Carne casera de 100 g", precio: 8, grupo: "Hamburguesas" },
      {
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, huevo, queso y jamón",
        precio: 11,
        grupo: "Hamburguesas",
      },
      {
        nombre: "Hamburguesa Royal Especial",
        descripcion: "Carne, huevo, doble jamón y queso",
        precio: 13,
        grupo: "Hamburguesas",
      },
      {
        nombre: "Hamburguesa a lo Pobre",
        descripcion: "Carne, huevo y plátano",
        precio: 11,
        grupo: "Hamburguesas",
      },
      {
        nombre: "Sándwich de Pollo Deshilachado",
        descripcion: "",
        precio: 8,
        grupo: "Pollo deshilachado",
      },
      {
        nombre: "Pollo Deshilachado Especial",
        descripcion: "Pollo deshilachado, jamón, huevo y queso",
        precio: 11,
        grupo: "Pollo deshilachado",
      },
      { nombre: "Sándwich de Chorizo", descripcion: "", precio: 8, grupo: "Chorizo" },
      {
        nombre: "Tradicional",
        descripcion: "Chorizo, huevo, queso y jamón",
        precio: 11,
        grupo: "Chorizo",
      },
      {
        nombre: "Sándwich de Filete de Pollo",
        descripcion: "A la plancha",
        precio: 8.5,
        grupo: "Filete de pollo",
      },
      {
        nombre: "Filete Especial",
        descripcion: "Filete de pollo, jamón, huevo y queso",
        precio: 12,
        grupo: "Filete de pollo",
      },
      {
        nombre: "Completo",
        descripcion: "Pollo deshilachado, huevo, queso y hot dog",
        precio: 13,
        grupo: "Otros",
      },
      { nombre: "Sándwich de Hot Dog de Ternera", descripcion: "", precio: 8, grupo: "Otros" },
    ],
  },
  {
    id: "filetes",
    titulo: "Filetes a la Plancha",
    imagenes: ["/filete-pollo-1.png", "/filete-pollo-2.png"],
    platos: [
      { nombre: "Filete de Pollo", descripcion: "", precio: 12 },
      { nombre: "Filete Especial", descripcion: "Filete de pollo, huevo, queso y jamón", precio: 15 },
    ],
  },
  {
    id: "conos",
    titulo: "Conos al Paso",
    imagenes: ["/salchicono-1.png", "/salchicono-2.png"],
    platos: [
      { nombre: "Choricono", descripcion: "", precio: 9.5 },
      { nombre: "Salchicono", descripcion: "", precio: 8.5 },
      { nombre: "Cono de Nuggets", descripcion: "", precio: 10.5 },
    ],
  },
  {
    id: "nuggets",
    titulo: "Nuggets de Pollo",
    imagenes: ["/nuggets-1.png", "/nuggets-2.png"],
    platos: [
      { nombre: "7 Nuggets de Pollo", descripcion: "Con papas fritas y ensalada", precio: 13.5 },
      { nombre: "Salchinuggets", descripcion: "Hot dog y nuggets de pollo", precio: 16 },
    ],
  },
  {
    id: "bebidas",
    titulo: "Bebidas",
    imagenes: [{ src: "/bebida-1.jpg", ajuste: "contain" }, "/bebida-2.png"],
    platos: [
      { nombre: "Gordita", descripcion: "Botella de vidrio", precio: 5 },
      { nombre: "Inca Kola 1L", descripcion: "Botella de vidrio", precio: 7 },
      { nombre: "Gaseosa 1½L", descripcion: "Botella de vidrio", precio: 9 },
      { nombre: "Gaseosa Personal", descripcion: "Botella de vidrio", precio: 2.5 },
      { nombre: "Agua Mineral", descripcion: "", precio: 2.5 },
      { nombre: "Café", descripcion: "", precio: 3.5 },
      { nombre: "Infusión", descripcion: "", precio: 2.5 },
    ],
  },
  {
    id: "jugos",
    titulo: "Jugos",
    imagenes: ["/jugos.jpg"],
    platos: [
      { nombre: "Jugo de Papaya", descripcion: "", precio: 7 },
      { nombre: "Jugo de Piña", descripcion: "", precio: 7 },
      { nombre: "Jugo Mixto", descripcion: "", precio: 7.5 },
      { nombre: "Jugo Surtido", descripcion: "", precio: 7.5 },
      { nombre: "Plátano con Leche", descripcion: "", precio: 10 },
      { nombre: "Fresa con Leche", descripcion: "", precio: 10 },
      { nombre: "Mango con Leche", descripcion: "", precio: 10 },
      { nombre: "Jugo Especial", descripcion: "", precio: 10 },
    ],
  },
  {
    id: "chicha",
    titulo: "Chicha Morada",
    imagenes: ["/chicha-morada.jpg"],
    platos: [
      { nombre: "Chicha Morada Jarra", descripcion: "1 litro", precio: 9 },
      { nombre: "Chicha Morada ½ Litro", descripcion: "", precio: 4.5 },
      { nombre: "Chicha Morada Vaso", descripcion: "", precio: 2.5 },
    ],
  },
  {
    id: "postres",
    titulo: "Postres",
    imagenes: ["/postres.jpg"],
    platos: [
      { nombre: "Gelatina", descripcion: "", precio: 2 },
      { nombre: "Flan", descripcion: "", precio: 3.5 },
      { nombre: "Gelatina con Flan", descripcion: "", precio: 3 },
      { nombre: "Carlota", descripcion: "", precio: 4 },
      { nombre: "Empanada", descripcion: "", precio: 3.5 },
      { nombre: "Keke de Naranja", descripcion: "", precio: 3 },
      { nombre: "Keke de Piña", descripcion: "", precio: 3 },
    ],
  },
  {
    id: "promociones",
    titulo: "Promociones de Alitas",
    imagenes: ["/promociones-alitas.jpg"],
    platos: [
      {
        nombre: "Combo de Alitas BBQ",
        descripcion: "6 alitas BBQ, hamburguesa clásica y papas fritas",
        precio: 29.99,
        etiqueta: "Combo",
      },
      {
        nombre: "Alitas Acevichadas",
        descripcion: "6 alitas acevichadas y papas fritas",
        precio: 22.99,
        etiqueta: "Combo",
      },
      {
        nombre: "Alitas Picantes",
        descripcion: "6 alitas picantes y 2 vasos de chicha morada",
        precio: 26.99,
        etiqueta: "Combo",
      },
    ],
  },
];

export function obtenerSeccion(id) {
  return carta.find((seccion) => seccion.id === id);
}

export function obtenerPromociones() {
  return obtenerSeccion("promociones")?.platos ?? [];
}
