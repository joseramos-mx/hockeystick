"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react"
import { Navbar } from "../components/Navbar" 
import { InvestmentTeaserCard } from "./Investment-teaser"
import BlurText from "./BlurText"
import Link from "next/link"

const PARTNER_LOGOS = [
  { name: "Agile Innovation", src: "clientes/rms.svg" },
  { name: "Angel", src: "clientes/acadee.png" },
  { name: "Digital Hub", src: "clientes/clan.png" },
]

function DismissibleInvestmentTeaser({ defaultOpen = true }: { defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed z-50 bottom-8 right-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      {isOpen ? (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#04080c] text-white/50 shadow-xl transition hover:bg-red-500 hover:text-white"
          >
            <span className="text-xs">✕</span>
          </button>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#04080c]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <InvestmentTeaserCard compact />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-4 rounded-full border border-white/10 bg-[#0F172A]/80 px-5 py-3 shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-blue-500/50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold tracking-wide text-white">Oportunidad de Inversión</p>
            <p className="text-[10px] uppercase tracking-widest text-blue-400/80 font-bold">Series A Open</p>
          </div>
        </button>
      )}
    </div>
  )
}

export default function ModernHeroSplit() {
  return (
    <div className="relative min-h-screen w-full bg-[#020510] text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navbar superpuesta */}
      <div className="absolute top-0 left-0 right-0 z-40">
         <Navbar />
      </div>

      <main className="flex min-h-screen flex-col lg:flex-row">
        
        {/* ================= COLUMNA IZQUIERDA (CONTENIDO) ================= */}
        <div className="relative flex w-full flex-col justify-center px-6 pt-32 pb-12 lg:w-1/2 lg:px-16 lg:pt-20 xl:px-24 bg-[#04080c] z-10">
          
          {/* Badge */}
          <div className="mb-8 inline-flex self-start items-center gap-3 rounded-full border border-green-500/20 bg-green-900/10 px-4 py-1.5 text-[13px] font-medium text-green-400">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             Disponible para nuevos proyectos
          </div>

          {/* Heading */}
          <div className="mb-8 relative z-10">
            <BlurText
              text="Soluciones para"
              delay={40}
              animateBy="words"
              direction="top"
              className="block text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-medium tracking-tight text-white leading-[1]"
            />
            {/* Palabra resaltada en azul estilo 'caja' */}
            <div className="mt-2 inline-block bg-[#0055FF] px-4 pt-1 pb-3 transform origin-left">
                 <span className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold tracking-tight text-white leading-[1]">
                    MyPymes
                 </span>
            </div>
          </div>

          {/* Subtext */}
          <p className="mb-10 max-w-md text-lg text-slate-400 leading-relaxed font-light">
            Desbloqueamos nuevos caminos para el crecimiento mezclando datos, estrategia y tecnología para mover tu negocio hacia adelante.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap items-center gap-6 relative z-10 mb-16">
             <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95">
               Empezar Ahora
               <ArrowRight className="h-4 w-4" />
             </button>
             <Link href="#clientes" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
               Ver Casos de Éxito <ChevronRight className="h-4 w-4" />
             </Link>
          </div>

          {/* ================= MINI TABLA DE LOGOS (GRID) ================= */}
          <div className="border-t border-slate-800/60 pt-8 w-full max-w-lg">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Nuestros Aliados Estratégicos
            </p>
            <div className="grid grid-cols-3 gap-8 items-center">
              {PARTNER_LOGOS.map((logo, index) => (
                <div key={index} className="flex justify-start group">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-auto max-w-[120px] object-contain opacity-40 brightness-0 invert transition-all duration-300 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= COLUMNA DERECHA (IMAGEN FULL) ================= */}
        <div className="relative h-[50vh] w-full lg:h-auto lg:min-h-screen lg:w-1/2 overflow-hidden">
           {/* Imagen de fondo */}
           <div className="absolute inset-0 bg-slate-900">
              <img
                src="/bg.png" 
                alt="Office working environment" 
                className="h-full w-full object-cover object-center opacity-80 mix-blend-overlay lg:opacity-100 lg:mix-blend-normal transition-transform duration-1000 hover:scale-105"
              />
              {/* Overlay sutil azul para unificar tonos */}
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
           </div>
        </div>

      </main>

      <DismissibleInvestmentTeaser />
    </div>
  )
}