"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// === DATOS DE LOS LIBROS ORGANIZADOS POR SECCIÓN ===
const BOOKS_BY_SECTION = [
  {
    id: "s1",
    num: "01",
    title: "Thriller histórico / Drama / Suspense psicológico",
    books: [
      {
        id: "bosque",
        img: "/libros/el-bosque-que-calla.png",
        badge: "Thriller histórico",
        title: "EL BOSQUE QUE CALLA",
        sub: "La verdad que nadie podía decir",
        desc: "Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota. Este libro no busca consolarte. Busca que no olvides.",
        amazon: "",
        prox: true
      }
    ]
  },
  {
    id: "s2",
    num: "02",
    title: "Thriller tecnológico / Filosófico",
    books: [
      {
        id: "limite",
        img: "/libros/limite-de-control.webp",
        badge: "Thriller tecnológico",
        title: "LÍMITE DE CONTROL",
        sub: "Hasta dónde ayudar sin decidir",
        desc: "En un Madrid donde cada segundo puede predecirse, Álex Vega se enfrenta a la línea más difícil: salvar vidas sin perder su libertad.",
        amazon: "https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ",
        prox: false
      }
    ]
  },
  {
    id: "s3",
    num: "03",
    title: "Thriller y suspense",
    books: [
      { id: "ojos", img: "/libros/ojos-de-lobo.png", badge: "Thriller psicológico", title: "OJOS DE LOBO", sub: "Entre sombras y traición", desc: "Un accidente en Osaka. Una mentira enterrada. Cuando Lena descubre que sus padres fueron asesinados, se convierte en el siguiente objetivo.", amazon: "https://www.amazon.es/OJOS-LOBO-Entre-Sombras-Traici%C3%B3n/dp/B0G52NVBVF", prox: false },
      { id: "cuidadora", img: "/libros/la-cuidadora.webp", badge: "Thriller gótico", title: "LA CUIDADORA", sub: "Recuerda su nombre… o será el tuyo", desc: "Una mansión aislada en los Picos de Europa. Claudia acepta el trabajo buscando empezar de nuevo. Lo que encuentra es algo muy distinto.", amazon: "https://www.amazon.es/cuidadora-Recuerda-nombre-ser%C3%A1-tuyo/dp/B0FTVF3RM1", prox: false },
      { id: "infiltrada", img: "/libros/la-mujer-infiltrada.png", badge: "Thriller conspirativo", title: "LA MUJER INFILTRADA", sub: "Nadie sabe quién la controla", desc: "Una mentira. Una misión. Un juego donde confiar es morir. Claudia descubre que ha sido elegida para algo mucho más peligroso.", amazon: "https://www.amazon.es/mujer-Infiltrada-Nadie-qui%C3%A9n-controla/dp/B0FPLJNYJ5", prox: false },
      { id: "limpiador", img: "/libros/el-limpiador.jpg", badge: "Thriller oscuro", title: "EL LIMPIADOR", sub: "Lo que un hombre oculta", desc: "Jack es invisible: padre distante, marido ausente. Hasta que alguien entra en su casa y deja un mensaje. No fue un robo. Fue un error.", amazon: "https://www.amazon.es/CLEANER-EL-LIMPIADOR-Hombre-Oculta/dp/B0FKYH81JG", prox: false },
      { id: "refugio", img: "/libros/El-ultimo-refugio.jpg", badge: "Thriller survival", title: "EL ÚLTIMO REFUGIO", sub: "Un refugio oculto. Un pasado oscuro. Un enemigo silencioso", desc: "Gabriel Orta, exmilitar, se esconde en una cabaña perdida en la montaña. Cuando Celia llega herida, su aislamiento termina para siempre.", amazon: "https://www.amazon.es/El-%C3%BAltimo-refugio-oculto-silencioso/dp/B0FJ57N3MB", prox: false },
      { id: "marea", img: "/libros/la-marea-no-olvida.jpg", badge: "Thriller psicológico", title: "LA MAREA NO OLVIDA", sub: "Una isla. Un secreto. Ninguna salida", desc: "Elena huye de su pasado… pero en esa isla remota descubre que no se puede escapar de todo. Alguien los ha reunido por una razón.", amazon: "https://www.amazon.es/Marea-No-Olvida-secreto-Ninguna/dp/B0FGW6DCJ7", prox: false }
    ]
  },
  {
    id: "s4",
    num: "04",
    title: "Novela social y denuncia",
    books: [
      { id: "millones", img: "/libros/millones-perdidos.png", badge: "Ensayo político", title: "100.000 MILLONES PERDIDOS", sub: "La historia de cómo España malgastó tu futuro", desc: "Entre 2018 y 2025, España perdió 100.000 millones. No fue un error: fue burocracia, ineficiencia y corrupción que hipotecaron una generación.", amazon: "https://www.amazon.es/100-000-MILLONES-PERDIDOS-Historia-Malgast%C3%B3/dp/B0FWRL8ZJX", prox: false },
      { id: "bajo", img: "/libros/bajo-el-cielo.webp", badge: "Denuncia social", title: "BAJO EL CIELO", sub: "El problema de los sin hogar", desc: "Revela la verdad sobre el sinhogarismo: no es una elección, sino el resultado de un sistema que falla. Con testimonios reales y soluciones concretas.", amazon: "https://www.amazon.es/Bajo-Cielo-Problema-los-hogar/dp/B0FG27KYXF", prox: false },
      { id: "tiempo", img: "/libros/tiempo-de-respetar.jpg", badge: "Denuncia social", title: "TIEMPO DE RESPETAR", sub: "La dignidad como derecho en la vejez", desc: "Denuncia el abandono y la discriminación hacia las personas mayores. Un llamado a la empatía y a la acción.", amazon: "https://www.amazon.es/TIEMPO-RESPETAR-DIGNIDAD-Reivindicaciones-urgentes/dp/B0FD712ZST", prox: false },
      { id: "tierra", img: "/libros/tierra-herida.jpg", badge: "Denuncia social", title: "TIERRA HERÍDA", sub: "Cuando la naturaleza golpea y el sistema falla", desc: "Terremotos, incendios, inundaciones. Historias de quienes perdieron todo y de un sistema que a veces abandona en lugar de proteger.", amazon: "https://www.amazon.es/Tierra-Herida-Cuando-Naturaleza-Sistema/dp/B0F3C7QL8F", prox: false },
      { id: "inmunidad", img: "/libros/inmunidad-diplomatica.jpg", badge: "Testimonio", title: "INMUNIDAD DIPLOMÁTICA", sub: "¿Límite o licencia para el abuso?", desc: "Veinticinco años en el mundo diplomático enfrentando acoso, discriminación y un despido injusto. Un grito de justicia e igualdad.", amazon: "https://www.amazon.es/Inmunidad-diplom%C3%A1tica-Ram%C3%B3n-pozo-Rott/dp/B0DTJ2D2QF", prox: false },
      { id: "mascotas", img: "/libros/mascotas-en-el-olvido.jpg", badge: "Bienestar animal", title: "MASCOTAS EN EL OLVIDO", sub: "Por el bienestar animal", desc: "Un homenaje al amor incondicional con nuestras mascotas y una llamada de atención sobre el abandono y la irresponsabilidad.", amazon: "https://www.amazon.es/Mascotas-olvido-RAM%C3%93N-POZO-ROTT/dp/8410975378", prox: false },
      { id: "vende", img: "/libros/se-vende-derecho-vivienda.jpg", badge: "Denuncia social", title: "SE VENDE", sub: "Derecho a una vivienda", desc: "Analiza la crisis habitacional, los precios inasequibles y los desahucios. Un llamado a exigir soluciones que pongan a las personas primero.", amazon: "https://www.amazon.es/SE-VENDE-Derecho-Vivienda-Pol%C3%ADticas/dp/B0DP37DJW1", prox: false }
    ]
  },
  {
    id: "s5",
    num: "05",
    title: "Drama y superación",
    books: [
      { id: "invierno", img: "/libros/el-invierno-que-nos-unio.png", badge: "Drama", title: "EL INVIERNO QUE NOS UNIÓ", sub: "Cuando la adversidad fortalece los lazos humanos", desc: "Una madre desesperada. Su hijo enfermo. 48 horas para salvarlo. Atrapados en una tormenta, una historia de solidaridad y coraje.", amazon: "https://www.amazon.es/invierno-que-nos-uni%C3%B3-adversidad/dp/B0FMNNYVQT", prox: false },
      { id: "rostros", img: "/libros/rostros-de-cristales.jpg", badge: "Drama", title: "ROSTROS DE CRISTALES", sub: "Identidad, aceptación y la fuerza de ser uno mismo", desc: "Martín lucha por encontrar su lugar en un mundo lleno de prejuicios. Una historia sobre autodescubrimiento y autenticidad.", amazon: "https://www.amazon.es/Rostros-Cristales-Ram%C3%B3n-Pozo-Rott/dp/B0DRDJHR6S", prox: false },
      { id: "huellas", img: "/libros/tras-las-huellas-del-pasado.jpg", badge: "Superación", title: "TRAS LAS HUELLAS DEL PASADO", sub: "Desafíos y decisiones en la búsqueda de un nuevo destino", desc: "Un joven marcado por la pérdida, la adicción y los desafíos de crecer entre dos culturas. Una historia inspiradora de resiliencia y esperanza.", amazon: "https://www.amazon.es/TRAS-LAS-HUELAS-DEL-PASADO/dp/B0DLGSCG8X", prox: false }
    ]
  }
];

const NAV_LINKS = [
  { label: "Thriller histórico", href: "#s1" },
  { label: "Thriller tecnológico", href: "#s2" },
  { label: "Thriller y suspense", href: "#s3" },
  { label: "Novela social", href: "#s4" },
  { label: "Drama y superación", href: "#s5" }
];

export default function LibrosPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  // Cerrar lightbox con Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (img: string, alt: string) => {
    setLightboxImg(img);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#1a1714] font-sans">
      
      {/* === HEADER === */}
      <header className="text-center py-16 px-4 border-b border-[rgba(0,0,0,0.09)] bg-white">
        <p className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#8b4c2a] mb-3">
          Ramón del Pozo Rott
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-normal mb-2">
          Catálogo de Obras
        </h1>
        <p className="text-[0.92rem] text-[#7a7470] max-w-xl mx-auto">
          Thriller, denuncia social y novela de superación
        </p>
      </header>

      {/* === NAV PILLS === */}
      <nav className="flex flex-wrap justify-center gap-2 py-4 bg-white border-b border-[rgba(0,0,0,0.09)] px-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#7a7470] no-underline px-4 py-1.5 border border-[rgba(0,0,0,0.09)] rounded-full bg-[#f7f5f2] hover:text-[#8b4c2a] hover:border-[#8b4c2a] hover:bg-[#fff8f5] transition-all"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* === SECCIONES DE LIBROS === */}
      {BOOKS_BY_SECTION.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-4 max-w-7xl mx-auto border-t border-[rgba(0,0,0,0.09)]">
          <div className="mb-8">
            <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#8b4c2a] block mb-1">
              Sección {section.num}
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-normal italic">
              {section.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {section.books.map((book) => (
              <article key={book.id} className="group flex flex-col bg-white border border-[rgba(0,0,0,0.09)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:border-[rgba(0,0,0,0.2)]">
                
                {/* Imagen con zoom y badge */}
                <div 
                  className="relative aspect-[2/3] bg-[#efecea] overflow-hidden cursor-zoom-in"
                  onClick={() => openLightbox(book.img, book.title)}
                >
                  <Image
                    src={book.img}
                    alt={book.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  
                  {/* Badge de género */}
                  <span className="absolute top-2 left-2 text-[0.6rem] font-medium tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-white/88 text-[#8b4c2a] border border-[rgba(139,76,42,0.25)] backdrop-blur-sm">
                    {book.badge}
                  </span>
                  
                  {/* Icono de zoom */}
                  <span className="absolute bottom-2 right-2 w-6.5 h-6.5 rounded-full bg-white/82 border border-[rgba(0,0,0,0.12)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3.5 h-3.5 stroke-[#1a1714]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </span>
                </div>

                {/* Info del libro */}
                <div className="p-4 flex flex-col flex-1 gap-1">
                  <h3 className="font-serif text-base font-semibold leading-tight">{book.title}</h3>
                  <p className="text-[0.76rem] text-[#7a7470] italic leading-tight">{book.sub}</p>
                  <p className="text-[0.8rem] text-[#b0a89f] leading-relaxed line-clamp-3 flex-1 mt-0.5">
                    {book.desc}
                  </p>
                  
                  {/* Botón */}
                  {book.prox ? (
                    <a href="#" className="inline-flex items-center justify-center gap-1.5 mt-2 px-4 py-1.5 rounded-full text-[0.72rem] font-medium tracking-[0.06em] uppercase no-underline bg-transparent text-[#8b4c2a] border border-[rgba(139,76,42,0.35)] hover:bg-[rgba(139,76,42,0.06)] transition-all self-start">
                      Próximamente
                    </a>
                  ) : (
                    <a 
                      href={book.amazon} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 mt-2 px-4 py-1.5 rounded-full text-[0.72rem] font-medium tracking-[0.06em] uppercase no-underline bg-[#2d6a4f] text-[#d4f0e4] hover:bg-[#1f4f39] hover:scale-102 transition-all self-start"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                      Comprar
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* === FOOTER === */}
      <footer className="text-center py-8 px-4 border-t border-[rgba(0,0,0,0.09)] text-[0.78rem] text-[#b0a89f] tracking-[0.05em] bg-white">
        <p>© 2026 Ramón del Pozo Rott &nbsp;·&nbsp; Todos los derechos reservados</p>
      </footer>

      {/* === LIGHTBOX MODAL === */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[1000] bg-[rgba(0,0,0,0.78)] flex items-center justify-center p-8 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button 
            className="fixed top-5 right-6 text-3xl text-white/80 bg-none border-none cursor-pointer hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Cerrar"
          >
            &times;
          </button>
          <Image
            src={lightboxImg}
            alt={lightboxAlt}
            width={400}
            height={600}
            className="max-w-[min(400px,90vw)] max-h-[88vh] object-contain rounded-lg shadow-[0_24px_70px_rgba(0,0,0,0.45)] cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}




