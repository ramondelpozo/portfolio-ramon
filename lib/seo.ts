import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ramondelpozorott.es";

export const SITE_NAME = "Ramón del Pozo Rott";

export const SITE_DESCRIPTION =
  "Escritor español de novelas de suspense, thriller histórico y literatura infantil. Descubre El Bosque que Calla, Límite de Control y más obras de Ramón del Pozo Rott.";

export const BOOKIA_URL =
  process.env.NEXT_PUBLIC_BOOKIA_URL ?? "https://editorial-ten-roan.vercel.app/";

export const AUTHOR = {
  name: "Ramón del Pozo Rott",
  email: "info@ramondelpozorott.es",
  jobTitle: "Escritor",
  description:
    "Escritor de narrativa contemporánea, thriller y literatura infantil creativa.",
  image: "/autor/autor-oficina.png",
  sameAs: [
    "https://www.facebook.com/RamondelPozoRott",
    "https://www.instagram.com/ramon.delpozo.rott/",
    "https://x.com/delPozoRott",
    "https://www.linkedin.com/in/ram%C3%B3n-de-pozo-rott-335b58335",
    "https://www.youtube.com/@delpozorottramon",
    "https://www.amazon.es/stores/author/B0DLLJLYZR/",
  ],
};

export const DEFAULT_KEYWORDS = [
  "Ramón del Pozo Rott",
  "escritor español",
  "novelas de suspense",
  "thriller histórico",
  "literatura infantil",
  "El Bosque que Calla",
  "Límite de Control",
  "libros Ramón del Pozo Rott",
  "autor español",
  "narrativa contemporánea",
  "BOOKIA",
  "escribir un libro",
];

export const HOME_KEYWORDS = [
  ...DEFAULT_KEYWORDS,
  "novela española",
  "thriller tecnológico",
  "denuncia social",
  "cuentos infantiles",
  "libros de misterio",
  "escritor de thriller",
];

export const OG_IMAGE = {
  url: "/bookia/hero-all.png",
  width: 1200,
  height: 630,
  alt: "Ramón del Pozo Rott y BOOKIA — Ecosistema literario: leer y escribir novelas",
};

export const OG_IMAGE_AUTHOR = {
  url: "/banner/Banner-Facebook.webp",
  width: 1200,
  height: 630,
  alt: "El Bosque que Calla — Thriller histórico de Ramón del Pozo Rott",
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  image = OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: typeof OG_IMAGE;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Ramón del Pozo Rott | Escritor de Novelas de Suspense y Literatura Infantil",
  description:
    "Web oficial de Ramón del Pozo Rott: thriller histórico, suspense psicológico y literatura infantil. Lee El Bosque que Calla y Límite de Control. Crea tu libro con BOOKIA.",
  path: "/",
  keywords: HOME_KEYWORDS,
});

export const SITE_ROUTES = [
  "/",
  "/biografia",
  "/blog",
  "/blog/faq",
  "/blog/el-proceso-creativo-el-bosque-que-calla",
  "/blog/escribir-thrillers-era-digital",
  "/blog/bookia-publisher-primer-libro",
  "/contacto",
  "/libros",
  "/libros/el-bosque-que-calla",
  "/libros/limite-de-control",
  "/libros/tras-las-huellas-del-pasado",
  "/libros/inmunidad-diplomatica",
  "/libros/mascotas-en-el-olvido",
  "/libros/la-mujer-infiltrada",
  "/libros/la-cuidadora",
  "/libros/ojos-de-lobo",
  "/libros/se-vende-derecho-a-una-vivienda",
  "/libros/sekou-raices-de-libertad",
  "/libros/literatura-infantil",
  "/privacidad",
  "/cookies",
  "/aviso-legal",
  "/mapa-sitio",
] as const;

export function getHomeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      url: SITE_URL,
      email: AUTHOR.email,
      jobTitle: AUTHOR.jobTitle,
      description: AUTHOR.description,
      image: absoluteUrl(AUTHOR.image),
      sameAs: AUTHOR.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Ramón del Pozo Rott | Escritor de Novelas de Suspense y Literatura Infantil",
      description:
        "Web oficial de Ramón del Pozo Rott: thriller histórico, suspense psicológico y literatura infantil. Lee El Bosque que Calla y Límite de Control. Crea tu libro con BOOKIA.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: "es-ES",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "El Bosque que Calla",
      author: { "@id": `${SITE_URL}/#person` },
      bookFormat: "https://schema.org/EBook",
      genre: ["Thriller histórico", "Suspense psicológico"],
      url: absoluteUrl("/libros/el-bosque-que-calla"),
      inLanguage: "es-ES",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "Límite de Control",
      author: { "@id": `${SITE_URL}/#person` },
      bookFormat: "https://schema.org/EBook",
      genre: ["Thriller tecnológico"],
      url: absoluteUrl("/libros/limite-de-control"),
      inLanguage: "es-ES",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BOOKIA",
      applicationCategory: "WritingApplication",
      operatingSystem: "Web",
      url: BOOKIA_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Prólogo, sinopsis y 3 capítulos gratis",
      },
      creator: { "@id": `${SITE_URL}/#person` },
      image: absoluteUrl("/bookia/hero-all.png"),
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BOOKIA_URL}#organization`,
      name: "BOOKIA",
      url: BOOKIA_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      parentOrganization: { "@id": `${SITE_URL}/#person` },
      sameAs: [BOOKIA_URL, SITE_URL],
    },
  ];
}
