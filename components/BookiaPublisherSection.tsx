"use client";

import { useState } from "react";
import Image from "next/image";
import { BOOKIA_URL } from "@/lib/seo";

export default function BookiaPublisherSection() {
  const [activeTab, setActiveTab] = useState<"crear" | "mejorar">("crear");

  return (
    <section
      id="bookia"
      className="relative py-20 bg-gradient-to-b from-slate-100 via-white to-amber-50/30 border-y border-slate-200/80"
      aria-labelledby="bookia-heading"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-br from-amber-400/10 via-orange-400/5 to-transparent blur-[120px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container-premium max-w-6xl mx-auto reveal-on-scroll relative">
        <div className="w-full flex justify-center mb-10 px-2">
          <div className="relative rounded-3xl overflow-hidden border border-slate-900/10 shadow-2xl bg-slate-950 p-1.5 w-full max-w-5xl transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src="/bookia/hero-all.png"
              alt="BOOKIA Publisher — Donde tus historias cobran vida"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-6 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-800 text-xs font-black tracking-widest uppercase shadow-sm">
            ✨ Tu historia merece ser un libro
          </div>

          <h2
            id="bookia-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Si tienes una historia,{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              ya tienes un libro
            </span>
            .
          </h2>

          <p className="text-lg md:text-xl text-slate-700 font-medium">
            No es una herramienta para escribir. Es una editorial automatizada.
          </p>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Partes de una idea: el motor editorial genera arquitectura, capítulos coherentes, sinopsis
            comercial y exportación en PDF y Word. Pagas solo lo que activas, con el precio visible en
            todo momento.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto pt-8 px-2">
          <div className="bg-slate-200/60 p-1.5 rounded-2xl flex max-w-md mx-auto border border-slate-300/60 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("crear")}
              className={`flex-1 py-3.5 text-sm md:text-base font-bold rounded-xl transition-all ${
                activeTab === "crear"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              ✍️ Crear desde cero
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mejorar")}
              className={`flex-1 py-3.5 text-sm md:text-base font-bold rounded-xl transition-all ${
                activeTab === "mejorar"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              🚀 Pulir mi manuscrito
            </button>
          </div>

          <p className="text-center text-slate-600 text-sm md:text-base leading-relaxed px-2">
            {activeTab === "crear"
              ? "Cuéntanos tu idea. En minutos tendrás tres capítulos iniciales gratis completos. Prólogo y sinopsis al cerrar el manuscrito — listos para revisar, mejorar y descargar."
              : "¿Ya tienes el manuscrito? Súbelo en Word o texto. Lo estructuramos, corregimos y preparamos como un libro profesional en segundos."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={BOOKIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:opacity-95 transition-all shadow-lg text-base md:text-lg"
            >
              Crear desde cero →
            </a>
            <a
              href={BOOKIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all text-base md:text-lg"
            >
              Pulir mi manuscrito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
