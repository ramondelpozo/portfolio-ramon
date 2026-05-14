"use client";

import { useEffect, useRef, useState } from "react";

interface Book {
  img: string;
  badge: string;
  title: string;
  sub: string;
  desc: string;
  prox: boolean;
  amazon: string;
}

const CL_BOOKS: Book[] = [
  {
    img: "/libros/sekou-raices-de-libertad.png",
    badge: "Estreno · Próximamente 2026",
    title: "Sekou Raíces de Libertad",
    sub: "Próxima publicación",
    desc: "Una nueva obra en camino. Pronto disponible en todas las plataformas.",
    prox: true,
    amazon: ""
  },
  {
    img: "/libros/el-bosque-que-calla.png",
    badge: "Estreno · Próximamente 2026",
    title: "El Bosque que Calla",
    sub: "La verdad que nadie podía decir",
    desc: "Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota. Este libro no busca consolarte. Busca que no olvides.",
    prox: true,
    amazon: ""
  },
  {
    img: "/libros/limite-de-control.webp",
    badge: "Disponible ahora",
    title: "Límite de Control",
    sub: "Hasta dónde puedes ayudar antes de que alguien decida por ti",
    desc: "Un thriller psicológico que explora los límites del control, la manipulación y la lealtad. Una historia que atrapa desde la primera página.",
    prox: false,
    amazon: "https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ"
  },
  {
    img: "/libros/ojos-de-lobo.png",
    badge: "Disponible ahora",
    title: "Ojos de Lobo",
    sub: "Entre sombras y traición",
    desc: "Cuando las sombras ocultan más que la oscuridad y la traición lleva el rostro de quien menos lo esperas. Suspense y secretos en cada página.",
    prox: false,
    amazon: "https://www.amazon.es/OJOS-LOBO-Entre-Sombras-Traici%C3%B3n/dp/B0G52NVBVF"
  },
  {
    img: "/libros/la-cuidadora.webp",
    badge: "Disponible ahora",
    title: "La Cuidadora",
    sub: "Recuerda que su nombre pronto será tuyo",
    desc: "Una historia oscura sobre identidad, obsesión y los peligrosos límites entre cuidar y poseer. Perturbadora e hipnótica.",
    prox: false,
    amazon: "https://www.amazon.es/cuidadora-Recuerda-nombre-ser%C3%A1-tuyo/dp/B0FTVF3RM1"
  },
];

export default function ColeccionLiteraria() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Abrir modal
  const openModal = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
    document.body.style.overflow = "";
  };

  // Efecto: partículas de polvo en canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.width = canvas.offsetWidth || window.innerWidth;
    let H = canvas.height = canvas.offsetHeight || 600;
    const particles: Array<{
      x: number; y: number; r: number;
      vx: number; vy: number; alpha: number; flicker: number;
    }> = [];

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      W = canvas.width = rect?.width || window.innerWidth;
      H = canvas.height = rect?.height || 600;
    };

    window.addEventListener("resize", resize);

    // Crear partículas
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        r: Math.random() * 1.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.16,
        vy: -(Math.random() * 0.22 + 0.04),
        alpha: Math.random() * 0.5 + 0.05,
        flicker: Math.random() * Math.PI * 2
      });
    }

    let animationId: number;
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() * 0.001;

      particles.forEach(p => {
        p.x += p.vx + Math.sin(t * 0.3 + p.flicker) * 0.1;
        p.y += p.vy;
        p.flicker += 0.01;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        const glow = Math.sin(t * 1.2 + p.flicker) * 0.14 + p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,200,100,${Math.max(0, Math.min(0.65, glow))})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    // Iniciar animación con retraso para que coincida con la apertura de telones
    const timeout = setTimeout(() => { draw(); }, 2500);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      clearTimeout(timeout);
    };
  }, []);

  // Efecto: cerrar modal con Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <>
      {/* Estilos scoped del widget */}
      <style jsx global>{`
        #coleccion-literaria {
          --cl-gold: #d4a84b;
          --cl-gold-light: #f0d080;
          --cl-gold-dim: #8a6830;
          --cl-crimson: #8b1a1a;
          --cl-crimson-deep: #5a0e0e;
          --cl-cream: #f5ead0;
          --cl-ink: #1a0e08;
          --cl-velvet: #1c0f0a;
          --cl-parchment: #e8d5a3;
          position: relative;
          width: 100%;
          overflow: hidden;
          font-family: var(--font-cormorant), Georgia, serif;
          background: var(--cl-ink);
          border-radius: 0;
        }
        #coleccion-literaria .cl-stage-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url('https://ramondelpozorott.es/wp-content/uploads/2026/04/teatro.jpg');
          background-size: cover; background-position: center top;
        }
        #coleccion-literaria .cl-stage-bg::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(10,5,2,0.15) 0%, rgba(5,2,0,0.5) 100%),
                      linear-gradient(to bottom, rgba(5,2,0,0.25) 0%, rgba(5,2,0,0.55) 100%);
        }
        #coleccion-literaria .cl-curtain-left,
        #coleccion-literaria .cl-curtain-right {
          position: absolute; top: 0; width: 52%; height: 100%;
          z-index: 10; overflow: hidden; pointer-events: none;
        }
        #coleccion-literaria .cl-curtain-left { left: 0; }
        #coleccion-literaria .cl-curtain-right { right: 0; }
        #coleccion-literaria .cl-curtain-left::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(to right, #6b0f0f 0px, #9b1818 18px, #6b0f0f 36px, #8b1515 54px, #5a0a0a 72px, #8b1515 90px);
        }
        #coleccion-literaria .cl-curtain-right::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(to left, #6b0f0f 0px, #9b1818 18px, #6b0f0f 36px, #8b1515 54px, #5a0a0a 72px, #8b1515 90px);
        }
        #coleccion-literaria .cl-curtain-left::after {
          content: ''; position: absolute; top: 0; right: 0; width: 40px; height: 100%;
          background: linear-gradient(to left, rgba(0,0,0,0.5), transparent);
        }
        #coleccion-literaria .cl-curtain-right::after {
          content: ''; position: absolute; top: 0; left: 0; width: 40px; height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);
        }
        #coleccion-literaria .cl-curtain-left { animation: clCurtainL 2.2s cubic-bezier(0.25,0.1,0.25,1) 0.5s forwards; }
        #coleccion-literaria .cl-curtain-right { animation: clCurtainR 2.2s cubic-bezier(0.25,0.1,0.25,1) 0.5s forwards; }
        @keyframes clCurtainL { 0% { transform: translateX(0); } 100% { transform: translateX(-88%); } }
        @keyframes clCurtainR { 0% { transform: translateX(0); } 100% { transform: translateX(88%); } }
        #coleccion-literaria .cl-fringe {
          position: absolute; bottom: 0; width: 100%; height: 32px;
          background: repeating-linear-gradient(to right, #d4a84b 0px, #d4a84b 4px, transparent 4px, transparent 10px);
          opacity: 0.8;
        }
        #coleccion-literaria .cl-floor {
          position: absolute; bottom: 0; left: 0; right: 0; height: 180px;
          background: linear-gradient(to bottom, transparent 0%, rgba(15,8,2,0.95) 100%);
          z-index: 2; pointer-events: none;
        }
        #coleccion-literaria .cl-dust {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
        }
        #coleccion-literaria .cl-marquee {
          position: relative; z-index: 5; text-align: center;
          padding: 60px 20px 20px; animation: clFadeDown 1.2s ease 2.4s both;
        }
        @keyframes clFadeDown { from { opacity: 0; transform: translateY(-25px); } to { opacity: 1; transform: translateY(0); } }
        #coleccion-literaria .cl-eyebrow {
          font-size: 10px; letter-spacing: 7px; color: var(--cl-gold-dim);
          text-transform: uppercase; margin-bottom: 10px;
        }
        #coleccion-literaria .cl-h1 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(26px, 5vw, 52px); font-weight: 900;
          color: var(--cl-gold-light); letter-spacing: 2px; line-height: 1.1; margin: 0;
          text-shadow: 0 0 40px rgba(212,168,75,0.4), 0 2px 4px rgba(0,0,0,0.8);
        }
        #coleccion-literaria .cl-h1::after {
          content: ''; display: block; width: 120px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cl-gold), transparent);
          margin: 16px auto 0; box-shadow: 0 0 12px rgba(212,168,75,0.6);
        }
        #coleccion-literaria .cl-author {
          font-family: var(--font-im-fell), serif; font-style: italic;
          font-size: 15px; color: var(--cl-parchment); opacity: 0.7;
          margin-top: 12px; letter-spacing: 1px;
        }
        #coleccion-literaria .cl-gallery-wrapper {
          position: relative; z-index: 4; width: 100%;
          padding: 20px 0 80px; animation: clFadeUp 1.2s ease 2.8s both;
        }
        @keyframes clFadeUp { from { opacity: 0; transform: translateY(35px); } to { opacity: 1; transform: translateY(0); } }
        #coleccion-literaria .cl-track {
          display: flex; gap: 24px; padding: 50px 40px 40px;
          overflow-x: auto; scrollbar-width: none;
          justify-content: center; align-items: flex-end; flex-wrap: wrap;
        }
        #coleccion-literaria .cl-track::-webkit-scrollbar { display: none; }
        #coleccion-literaria .cl-book {
          flex: 0 0 auto; width: 200px; position: relative; cursor: pointer;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
        }
        #coleccion-literaria .cl-book:hover { transform: translateY(-18px) scale(1.04); }
        #coleccion-literaria .cl-beam {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 130px; height: 420px;
          background: radial-gradient(ellipse 60px 380px at 50% 0%, rgba(255,220,120,0.18) 0%, rgba(255,200,80,0.06) 50%, transparent 100%);
          pointer-events: none; z-index: 0; opacity: 0; transition: opacity 0.5s;
        }
        #coleccion-literaria .cl-book:hover .cl-beam { opacity: 1; }
        #coleccion-literaria .cl-pool {
          position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
          width: 140px; height: 28px;
          background: radial-gradient(ellipse, rgba(255,200,80,0.25) 0%, transparent 70%);
          pointer-events: none; z-index: 0; opacity: 0; transition: opacity 0.5s;
        }
        #coleccion-literaria .cl-book:hover .cl-pool { opacity: 1; }
        #coleccion-literaria .cl-frame {
          width: 100%; height: 320px; position: relative;
          border-radius: 3px 10px 10px 3px; overflow: hidden;
          box-shadow: -6px 0 12px rgba(0,0,0,0.6), 0 30px 70px rgba(0,0,0,0.8), inset -2px 0 6px rgba(255,255,255,0.04);
          transition: box-shadow 0.45s; background: #1a100a;
        }
        #coleccion-literaria .cl-book:hover .cl-frame {
          box-shadow: -4px 0 8px rgba(0,0,0,0.6), 0 30px 70px rgba(212,168,75,0.25), 0 10px 30px rgba(0,0,0,0.9), inset -2px 0 6px rgba(255,255,255,0.04);
        }
        #coleccion-literaria .cl-spine {
          position: absolute; left: 0; top: 0; bottom: 0; width: 12px;
          background: linear-gradient(to right, #0d0704, #1f1007, #0d0704);
          z-index: 3; border-right: 1px solid rgba(212,168,75,0.2);
        }
        #coleccion-literaria .cl-img {
          position: absolute; left: 12px; right: 0; top: 0; bottom: 0;
          width: calc(100% - 12px); height: 100%;
          object-fit: cover; object-position: center; z-index: 2;
          transition: filter 0.45s;
        }
        #coleccion-literaria .cl-book:hover .cl-img { filter: brightness(1.12) saturate(1.1); }
        #coleccion-literaria .cl-pages {
          position: absolute; right: 0; top: 2px; bottom: 2px; width: 5px;
          background: repeating-linear-gradient(to bottom, #e8d5b0 0px, #e8d5b0 1px, #c8b890 2px, #c8b890 3px);
          z-index: 3; border-radius: 0 2px 2px 0;
        }
        #coleccion-literaria .cl-edge-top,
        #coleccion-literaria .cl-edge-bot {
          position: absolute; left: 12px; right: 5px; height: 4px;
          background: linear-gradient(to right, #8a6830, #d4a84b, #f0d080, #d4a84b, #8a6830);
          z-index: 3;
        }
        #coleccion-literaria .cl-edge-top { top: 0; }
        #coleccion-literaria .cl-edge-bot { bottom: 0; }
        #coleccion-literaria .cl-tag {
          position: absolute; top: 12px; left: 16px;
          background: rgba(30,15,5,0.92); color: #f0e0c0;
          font-size: 7px; letter-spacing: 2.5px; padding: 4px 9px;
          border-radius: 2px; z-index: 10; text-transform: uppercase;
          border: 1px solid var(--cl-gold-dim);
        }
        #coleccion-literaria .cl-shadow {
          position: absolute; bottom: -14px; left: 50%; transform: translateX(-50%);
          width: 150px; height: 18px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.7) 0%, transparent 70%);
          transition: all 0.45s; z-index: 0;
        }
        #coleccion-literaria .cl-book:hover .cl-shadow {
          width: 120px; opacity: 0.5; transform: translateX(-50%) scaleX(0.85);
        }
        #coleccion-literaria .cl-label {
          position: absolute; bottom: -44px; left: 50%; transform: translateX(-50%);
          width: 160px; text-align: center; opacity: 0;
          transition: opacity 0.3s, bottom 0.3s; pointer-events: none; z-index: 10;
        }
        #coleccion-literaria .cl-book:hover .cl-label { opacity: 1; bottom: -52px; }
        #coleccion-literaria .cl-label-txt {
          font-size: 11px; font-weight: 600; color: var(--cl-gold-light);
          letter-spacing: 0.5px; line-height: 1.3;
          text-shadow: 0 1px 4px rgba(0,0,0,0.9);
        }
        /* Modal */
        #coleccion-literaria .cl-modal-overlay {
          display: none; position: fixed; inset: 0;
          background: rgba(5,2,0,0.96); z-index: 99999;
          align-items: center; justify-content: center; padding: 16px;
          backdrop-filter: blur(8px);
        }
        #coleccion-literaria .cl-modal-overlay.open { display: flex; animation: clModalIn 0.35s ease; }
        @keyframes clModalIn { from { opacity: 0; } to { opacity: 1; } }
        #coleccion-literaria .cl-modal-card {
          background: #f5ead0;
          background-image: linear-gradient(135deg, #f5ead0 0%, #ede0bb 40%, #f0e5c8 100%);
          border-radius: 3px; width: 100%; max-width: 820px; max-height: 90vh;
          overflow: hidden; overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0,0,0,0.95), 0 0 0 1px rgba(180,140,60,0.4), inset 0 0 0 8px rgba(180,120,40,0.1);
          display: flex; flex-direction: row; position: relative;
          animation: clCardIn 0.45s cubic-bezier(0.34,1.2,0.64,1);
        }
        @keyframes clCardIn { from { transform: scale(0.9) translateY(16px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        #coleccion-literaria .cl-modal-card::before {
          content: ''; position: absolute; inset: 12px;
          border: 1px solid rgba(180,130,40,0.25); pointer-events: none; z-index: 10;
        }
        #coleccion-literaria .cl-mpanel {
          background: linear-gradient(160deg, #1a0e08 0%, #0d0704 100%);
          padding: 50px 28px 40px; text-align: center; min-width: 220px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        #coleccion-literaria .cl-mpanel::before {
          content: ''; position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
          width: 200px; height: 400px;
          background: radial-gradient(ellipse 100px 300px at 50% 0%, rgba(255,210,100,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        #coleccion-literaria .cl-mimg {
          max-height: 360px; max-width: 100%; object-fit: contain;
          border-radius: 2px 6px 6px 2px;
          box-shadow: -6px 0 12px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(212,168,75,0.12);
          position: relative; z-index: 1;
        }
        #coleccion-literaria .cl-minfo {
          padding: 42px 44px 46px; display: flex; flex-direction: column; flex: 1; position: relative;
        }
        #coleccion-literaria .cl-mhead {
          text-align: center; margin-bottom: 22px; padding-bottom: 16px;
          border-bottom: 1px solid rgba(140,100,30,0.28); position: relative;
        }
        #coleccion-literaria .cl-mhead::after {
          content: '✦'; position: absolute; bottom: -10px; left: 50%;
          transform: translateX(-50%); background: #f5ead0; padding: 0 8px;
          color: var(--cl-gold-dim); font-size: 11px;
        }
        #coleccion-literaria .cl-mlabel {
          font-size: 9px; letter-spacing: 5px; color: var(--cl-gold-dim);
          text-transform: uppercase; margin-bottom: 5px;
        }
        #coleccion-literaria .cl-mbadge {
          font-family: var(--font-im-fell), serif; font-style: italic;
          font-size: 12px; letter-spacing: 1px; color: var(--cl-crimson);
        }
        #coleccion-literaria .cl-mtitle {
          font-family: var(--font-playfair), serif;
          font-size: clamp(18px, 3vw, 26px); font-weight: 900;
          color: var(--cl-ink); line-height: 1.2; margin: 12px 0 7px;
        }
        #coleccion-literaria .cl-msub {
          font-family: var(--font-im-fell), serif; font-style: italic;
          font-size: 13px; color: #6b4f2a; line-height: 1.4;
        }
        #coleccion-literaria .cl-msep {
          display: flex; align-items: center; gap: 12px; margin: 18px 0;
        }
        #coleccion-literaria .cl-msep::before,
        #coleccion-literaria .cl-msep::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(140,100,30,0.35), transparent);
        }
        #coleccion-literaria .cl-msep-icon { color: var(--cl-gold-dim); font-size: 13px; }
        #coleccion-literaria .cl-mdesc {
          font-size: 16px; line-height: 1.85; color: #3d2b14; flex: 1; margin-bottom: 26px;
        }
        #coleccion-literaria .cl-btn-amazon {
          display: block; padding: 15px 28px;
          background: linear-gradient(135deg, #8b1a1a 0%, #6b0f0f 100%);
          color: #f5ead0; font-size: 13px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase; text-align: center;
          text-decoration: none; border-radius: 2px; transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(139,26,26,0.4); border: 1px solid rgba(212,168,75,0.3);
        }
        #coleccion-literaria .cl-btn-amazon:hover {
          background: linear-gradient(135deg, #a52020 0%, #7a1010 100%);
          box-shadow: 0 6px 28px rgba(139,26,26,0.6); transform: translateY(-1px);
        }
        #coleccion-literaria .cl-btn-prox {
          display: block; padding: 15px 28px; background: transparent;
          color: #6b4f2a; font-size: 13px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase; text-align: center;
          border: 1px solid rgba(140,100,30,0.35); border-radius: 2px;
        }
        #coleccion-literaria .cl-mclose {
          position: absolute; top: 16px; right: 16px;
          width: 32px; height: 32px; background: var(--cl-ink);
          border: 1px solid rgba(212,168,75,0.3); color: var(--cl-gold);
          font-size: 15px; cursor: pointer; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          z-index: 20; transition: all 0.2s; font-family: Georgia, serif;
        }
        #coleccion-literaria .cl-mclose:hover {
          background: var(--cl-crimson-deep); border-color: var(--cl-crimson);
          color: #fff; transform: rotate(90deg);
        }
        /* Responsive */
        @media (max-width: 900px) {
          #coleccion-literaria .cl-track { gap: 18px; padding: 40px 20px 30px; justify-content: flex-start; flex-wrap: nowrap; }
          #coleccion-literaria .cl-book { width: 155px; }
          #coleccion-literaria .cl-frame { height: 248px; }
          #coleccion-literaria .cl-modal-card { max-width: 96vw; }
          #coleccion-literaria .cl-mpanel { min-width: 180px; padding: 36px 20px; }
          #coleccion-literaria .cl-minfo { padding: 32px 28px 38px; }
        }
        @media (max-width: 560px) {
          #coleccion-literaria .cl-marquee { padding: 48px 16px 14px; }
          #coleccion-literaria .cl-h1 { font-size: 28px; }
          #coleccion-literaria .cl-track { gap: 14px; padding: 36px 16px 26px; flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start; }
          #coleccion-literaria .cl-book { width: 120px; }
          #coleccion-literaria .cl-frame { height: 192px; }
          #coleccion-literaria .cl-edge-top,
          #coleccion-literaria .cl-edge-bot { height: 3px; }
          #coleccion-literaria .cl-label { display: none; }
          #coleccion-literaria .cl-modal-card { flex-direction: column; max-height: 92vh; }
          #coleccion-literaria .cl-mpanel { min-width: unset; padding: 30px 16px 24px; }
          #coleccion-literaria .cl-mimg { max-height: 240px; }
          #coleccion-literaria .cl-minfo { padding: 24px 20px 30px; }
          #coleccion-literaria .cl-mdesc { font-size: 15px; }
        }
      `}</style>

      {/* Widget principal */}
      <section id="coleccion-literaria">
        {/* Fondo teatro */}
        <div className="cl-stage-bg" />

        {/* Telones */}
        <div className="cl-curtain-left"><div className="cl-fringe" /></div>
        <div className="cl-curtain-right"><div className="cl-fringe" /></div>

        {/* Suelo */}
        <div className="cl-floor" />

        {/* Partículas de polvo */}
        <canvas className="cl-dust" ref={canvasRef} id="clDust" />

        {/* Cabecera */}
        <div className="cl-marquee">
          <div className="cl-eyebrow">Temporada 2025 · 2026</div>
          <h2 className="cl-h1">Colección Literaria</h2>
          <div className="cl-author">Ramón del Pozo Rott</div>
        </div>

        {/* Galería de libros */}
        <div className="cl-gallery-wrapper">
          <div className="cl-track" ref={trackRef}>
            {CL_BOOKS.map((book, i) => (
              <div
                key={i}
                className="cl-book"
                onClick={() => openModal(book)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(book)}
              >
                <div className="cl-beam" />
                <div className="cl-frame">
                  <div className="cl-spine" />
                  {book.prox && <div className="cl-tag">Próximamente</div>}
                  <img className="cl-img" src={book.img} alt={book.title} loading="lazy" />
                  <div className="cl-pages" />
                  <div className="cl-edge-top" />
                  <div className="cl-edge-bot" />
                </div>
                <div className="cl-shadow" />
                <div className="cl-pool" />
                <div className="cl-label">
                  <div className="cl-label-txt">{book.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalOpen && selectedBook && (
          <div 
            className="cl-modal-overlay open" 
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="cl-modal-card">
              <button className="cl-mclose" onClick={closeModal} aria-label="Cerrar">✕</button>
              <div className="cl-mpanel">
                <img className="cl-mimg" src={selectedBook.img} alt={selectedBook.title} />
              </div>
              <div className="cl-minfo">
                <div className="cl-mhead">
                  <div className="cl-mlabel">Ficha del libro</div>
                  <div className="cl-mbadge">{selectedBook.badge}</div>
                </div>
                <div className="cl-mtitle">{selectedBook.title}</div>
                <div className="cl-msub">{selectedBook.sub}</div>
                <div className="cl-msep"><span className="cl-msep-icon">✦</span></div>
                <div className="cl-mdesc">{selectedBook.desc}</div>
                {selectedBook.prox ? (
                  <div className="cl-btn-prox">⧗ &nbsp; Próximamente en Amazon</div>
                ) : (
                  <a className="cl-btn-amazon" href={selectedBook.amazon} target="_blank" rel="noopener">
                    Conseguir en — Amazon ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

