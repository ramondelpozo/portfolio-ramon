import { BOOKIA_URL, SITE_NAME, SITE_URL } from "@/lib/seo";

export const ECOSYSTEM = {
  author: SITE_NAME,
  authorUrl: SITE_URL,
  bookiaName: "BOOKIA Publisher",
  bookiaUrl: BOOKIA_URL,
  tagline: "Leer historias que importan. Escribir la tuya con BOOKIA.",
} as const;

export const BRAND_COLORS = {
  portfolioGold: "#c9a961",
  portfolioCharcoal: "#1a1a1a",
  portfolioCream: "#fcfbfa",
  bookiaAmber: "#f59e0b",
  bookiaOrange: "#ea580c",
  bookiaSlate: "#0f172a",
} as const;
