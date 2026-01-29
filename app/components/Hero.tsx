"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Navbar } from "../components/Navbar" 
import { InvestmentTeaserCard } from "./Investment-teaser"
import BlurText from "./BlurText"
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import Link from "next/link"

// 1. DEFINIMOS TUS LOGOS LOCALES
// Asegúrate de que estos nombres coincidan exactamente con tus archivos en /public
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
    <div className={`fixed z-50 bottom-6 right-6 transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {isOpen ? (
        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#1A1F36] text-white/70 shadow-lg transition hover:bg-white hover:text-black"
          >
            <span className="text-sm">✕</span>
          </button>
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#070B1C]/90 shadow-2xl backdrop-blur-md">
            <InvestmentTeaserCard compact />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-red-600/80 px-4 py-3 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:border-white/20 hover:bg-red-500"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-orange-200 to-orange-400 text-black shadow-inner">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="text-left">
            <p className="text-xs font-medium text-white/90">Oportunidad de Inversión</p>
            <p className="text-[10px] text-white/50">Click para ver detalles</p>
          </div>
        </button>
      )}
    </div>
  )
}

export default function ModernHeroSplit() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#090d1d] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-[-10%] top-20 -z-10 h-[300px] w-[300px] rounded-full bg-red-900/20 blur-[200px]"></div>
        <div className="absolute right-[-5%] top-40 -z-10 h-[500px] w-[500px] rounded-full bg-rose-600/15 blur-[300px]"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-20 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              <div className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10">
                <span className="relative flex h-2.5 w-2.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>

              <div className="mb-6 relative">
                <BlurText
                  text="Soluciones para MyPymes"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]"
                />
              </div>

              <p className="mb-10 max-w-xl text-lg text-white/60 leading-relaxed">
                Transformamos tu negocio.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-base font-bold text-black transition-all hover:bg-gray-100 hover:scale-105 active:scale-95">
                  Empezar Ahora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <Link href="#clientes">
                <button className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/25">
                  Ver Casos de Éxito
                </button>
                </Link>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="relative lg:ml-auto w-full max-w-[600px] lg:max-w-none perspective-1000">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 opacity-50 blur-[80px] -z-10 rounded-full transition-all duration-500 group-hover:opacity-70"></div>
               
               <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0C1021]/50 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-rotate-1 hover:shadow-blue-500/20 lg:rotate-2 lg:skew-y-1">
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#050505]/40 via-transparent to-white/5 pointer-events-none"></div>
                  <img
                    src="/bg.png" 
                    alt="App Interface" 
                    className="h-auto w-full object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
                  />
               </div>
            </div>
          </div>

          {/* Social Proof */}
<div className="mt-24 lg:mt-32 border-t border-white/5 pt-10">
  <p className="text-left text-sm font-semibold text-white/40 mb-6 uppercase tracking-widest">
    NUESTROS ALIADOS ESTRATEGICOS
  </p>
  <div className="relative flex w-full overflow-hidden mask-gradient-x">
    {/* Agregamos el gap directamente al Marquee si el componente lo permite via props */}
    <Marquee className="[--duration:40s] [--gap:5rem]"> 
      <MarqueeContent>
        {/* Unimos los logos y los duplicamos para asegurar que el scroll sea infinito y el gap se respete */}
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
          <MarqueeItem key={index} className="mx-10 md:mx-12"> {/* FORZAMOS EL ESPACIO AQUÍ */}
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 md:h-12 w-auto opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
</div>

        </div>
      </main>

      <DismissibleInvestmentTeaser />
    </div>
  )
}