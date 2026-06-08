export type BookEntry = {
  id: string;
  title: string;
  slug?: string;
  image: string;
  badge: string;
  amazon?: string;
  available: boolean;
};

export const AMAZON_AUTHOR_URL =
  "https://www.amazon.es/stores/author/B0DLLJLYZR/";

export const BOOK_CATALOG: BookEntry[] = [
  {
    id: "bosque",
    title: "El Bosque que Calla",
    slug: "el-bosque-que-calla",
    image: "/libros/el-bosque-que-calla.png",
    badge: "Thriller histórico",
    available: false,
  },
  {
    id: "limite",
    title: "Límite de Control",
    slug: "limite-de-control",
    image: "/libros/limite-de-control.webp",
    badge: "Thriller tecnológico",
    amazon: "https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ",
    available: true,
  },
  {
    id: "ojos",
    title: "Ojos de Lobo",
    slug: "ojos-de-lobo",
    image: "/libros/ojos-de-lobo.png",
    badge: "Thriller psicológico",
    amazon: "https://www.amazon.es/OJOS-LOBO-Entre-Sombras-Traici%C3%B3n/dp/B0G52NVBVF",
    available: true,
  },
  {
    id: "cuidadora",
    title: "La Cuidadora",
    slug: "la-cuidadora",
    image: "/libros/la-cuidadora.webp",
    badge: "Thriller gótico",
    amazon: "https://www.amazon.es/cuidadora-Recuerda-nombre-ser%C3%A1-tuyo/dp/B0FTVF3RM1",
    available: true,
  },
  {
    id: "infiltrada",
    title: "La Mujer Infiltrada",
    slug: "la-mujer-infiltrada",
    image: "/libros/la-mujer-infiltrada.png",
    badge: "Thriller conspirativo",
    amazon: "https://www.amazon.es/mujer-Infiltrada-Nadie-qui%C3%A9n-controla/dp/B0FPLJNYJ5",
    available: true,
  },
  {
    id: "inmunidad",
    title: "Inmunidad Diplomática",
    slug: "inmunidad-diplomatica",
    image: "/libros/inmunidad-diplomatica.jpg",
    badge: "Testimonio",
    amazon: "https://www.amazon.es/Inmunidad-diplom%C3%A1tica-Ram%C3%B3n-pozo-Rott/dp/B0DTJ2D2QF",
    available: true,
  },
  {
    id: "mascotas",
    title: "Mascotas en el Olvido",
    slug: "mascotas-en-el-olvido",
    image: "/libros/mascotas-en-el-olvido.jpg",
    badge: "Bienestar animal",
    amazon: "https://www.amazon.es/Mascotas-olvido-RAM%C3%93N-POZO-ROTT/dp/8410975378",
    available: true,
  },
  {
    id: "huellas",
    title: "Tras las Huellas del Pasado",
    slug: "tras-las-huellas-del-pasado",
    image: "/libros/tras-las-huellas-del-pasado.jpg",
    badge: "Superación",
    amazon: "https://www.amazon.es/TRAS-LAS-HUELAS-DEL-PASADO/dp/B0DLGSCG8X",
    available: true,
  },
  {
    id: "bajo",
    title: "Bajo el Cielo",
    image: "/libros/bajo-el-cielo.webp",
    badge: "Denuncia social",
    amazon: "https://www.amazon.es/Bajo-Cielo-Problema-los-hogar/dp/B0FG27KYXF",
    available: true,
  },
  {
    id: "vende",
    title: "Se Vende",
    slug: "se-vende-derecho-a-una-vivienda",
    image: "/libros/se-vende-derecho-vivienda.jpg",
    badge: "Denuncia social",
    amazon: "https://www.amazon.es/SE-VENDE-Derecho-Vivienda-Pol%C3%ADticas/dp/B0DP37DJW1",
    available: true,
  },
  {
    id: "refugio",
    title: "El Último Refugio",
    image: "/libros/El-ultimo-refugio.jpg",
    badge: "Thriller survival",
    amazon: "https://www.amazon.es/El-%C3%Altimo-refugio-oculto-silencioso/dp/B0FJ57N3MB",
    available: true,
  },
];

export const AVAILABLE_BOOKS = BOOK_CATALOG.filter((book) => book.available);

export const FEATURED_UPCOMING = BOOK_CATALOG.filter((book) => !book.available);
