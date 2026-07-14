import { BOOKIA_URL, SITE_NAME, SITE_URL } from "@/lib/seo";

/** Marca editorial: Libro + Inteligencia Artificial */
export const BOOKIA_NAME = "BOOKIA";

export const ECOSYSTEM = {
  author: SITE_NAME,
  authorUrl: SITE_URL,
  bookiaName: BOOKIA_NAME,
  bookiaUrl: BOOKIA_URL,
  bookiaMeaning: "Editorial automatizada profesional",
  tagline: "Leer historias que importan. Crear la tuya con BOOKIA Publisher.",
} as const;

export const BRAND_COLORS = {
  portfolioGold: "#c9a961",
  portfolioCharcoal: "#1a1a1a",
  portfolioCream: "#fcfbfa",
  bookiaAmber: "#f59e0b",
  bookiaOrange: "#ea580c",
  bookiaSlate: "#0f172a",
} as const;
