export const negocio = {
  nombre: "Sr. Pan",
  frase: "Comida rápida",

  direccion: "Calle 1 #11, Puente Piedra 15116, Lima",
  referencia: "",
  distrito: "Puente Piedra",
  ciudad: "Lima",
  coordenadas: {
    lat: -11.9237775,
    lng: -77.0832314,
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=-11.9237775,-77.0832314",

  horario: {
    apertura: "18:00",
    cierre: "00:00",
    dias: "Viernes a miércoles",
    diasCerrados: [4],
    texto: "Viernes a miércoles, 6:00 p.m. – 12:00 a.m. · Jueves cerrado",
  },

  whatsapp: {
    numeros: [
      { etiqueta: "Línea 1", numero: "51971539116" },
      { etiqueta: "Línea 2", numero: "51975844566" },
    ],
  },
  telefonoFijo: null,

  instagram: "https://www.instagram.com/sr_pan_/",
  facebook: "https://www.facebook.com/profile.php?id=61593051195868",

  delivery: {
    disponible: true,
    zonas: [],
  },
  appsDelivery: [],
  metodosPago: ["Yape", "Plin", "Efectivo"],

  logo: {
    usar: true,
    src: "/logo.png",
    alt: "Logo de Sr. Pan",
  },
};
