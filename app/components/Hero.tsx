"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight, Menu, X, Send, Sparkles, ChevronRight } from "lucide-react"
import { InvestmentTeaserCard } from "./Investment-teaser"
import BlurText from "./BlurText"
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"

// --- Componente: Navbar Flotante (Glassmorphism) ---
const Navbar = ({ onOpenMenu }: { onOpenMenu: () => void }) => (
  <nav className="fixed top-4 left-0 right-0 z-40 mx-auto w-full max-w-5xl px-4">
    <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-[#121c3c]/70 shadow-lg backdrop-blur-xl px-4 py-2.5 transition-all duration-300 hover:border-white/20 hover:bg-[#070B1C]/80">
      
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <img src="/hsmx.png" alt="HockeyStick MX" className="h-10 p-2" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-light text-white/60 tracking-widest">
        {['INICIO', "NOSOTROS",'LINEAS DE NEGOCIO', "CONTACTO"].map((item) => (
          <a key={item} href="#" className="hover:text-white transition-colors duration-200">
            {item}
          </a>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <a 
          href="#"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
        >
          PRICING
        </a>
        <button className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-gray-100 transition-all">
          Whatsapp
          <Send className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </button>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
          onClick={onOpenMenu}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
  </nav>
)

// --- Componente: Teaser de Inversión (Optimizado) ---
function DismissibleInvestmentTeaser({ defaultOpen = true }: { defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isVisible, setIsVisible] = useState(false)

  // Efecto de entrada suave
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
            <X className="h-4 w-4" />
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

// --- Página Principal ---
export default function ModernHeroSplit() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#090d1d] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Gradients & Grid (Estilo Linear/Framer) - Mantenemos el fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Movemos las luces para que coincidan con el nuevo layout */}
        <div className="absolute left-[-10%] top-20 -z-10 h-[300px] w-[300px] rounded-full bg-red-900/20 blur-[200px]"></div>
        <div className="absolute right-[-5%] top-40 -z-10 h-[500px] w-[500px] rounded-full bg-rose-600/15 blur-[300px]"></div>
      </div>

      <Navbar onOpenMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Drawer Overlay (Mismo código anterior) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative h-full w-[80%] max-w-sm border-l border-white/10 bg-[#070B1C] p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold">Menú</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {['Inicio', 'Servicios', 'Casos de Éxito', 'Contacto'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-white/80 hover:text-white border-b border-white/5 pb-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-20 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-6 lg:px-8">
          
          {/* NUEVO LAYOUT: Grid de 2 Columnas */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
            
            {/* COLUMNA IZQUIERDA: Texto y CTAs */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              
              {/* Pill Badge (Alineado a la izquierda) */}
              <div className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10">
                <span className="relative flex h-2.5 w-2.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>

              {/* H1 - Más grande y alineado a la izquierda */}
              <div className="mb-6 relative">
                <BlurText
                  text="Soluciones para MyPymes"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]"
                  // Opcional: Si quieres el gradiente de texto de nuevo, usa esto:
                  // className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50 leading-[1.1]"
                />
              </div>

              {/* Subheadline */}
              <p className="mb-10 max-w-xl text-lg text-white/60 leading-relaxed">
                Transformamos tu negocio lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                <span className="text-white/90 font-medium block mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </p>

              {/* CTA Buttons (Alineados a la izquierda) */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-base font-bold text-black transition-all hover:bg-gray-100 hover:scale-105 active:scale-95">
                  Empezar Ahora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/25">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>

            {/* COLUMNA DERECHA: Imagen Flotante (Sin marco de navegador) */}
            <div className="relative lg:ml-auto w-full max-w-[600px] lg:max-w-none perspective-1000">
               {/* Glow Effect más fuerte detrás de la imagen */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 opacity-50 blur-[80px] -z-10 rounded-full transition-all duration-500 group-hover:opacity-70"></div>

               {/* Contenedor de la imagen con efecto 3D sutil */}
               {/* Nota la clase 'group' y las transformaciones en hover */}
               <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0C1021]/50 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-rotate-1 hover:shadow-blue-500/20 lg:rotate-2 lg:skew-y-1">
                  
                  {/* Un overlay sutil sobre la imagen para integrarla mejor */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#050505]/40 via-transparent to-white/5 pointer-events-none"></div>
                  
                  <img
                    src="/bg.png" 
                    alt="App Interface Showcasing Dashboard" 
                    className="h-auto w-full object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
                    // Asegúrate de que tu imagen /bg.png sea de alta calidad
                  />
               </div>
            </div>
          </div>

          {/* Social Proof (Footer del Hero) */}
          <div className="mt-24 lg:mt-32 border-t border-white/5 pt-10">
            <p className="text-left text-sm font-semibold text-white/40 mb-6 uppercase tracking-widest">
              NUESTROS ALIADOS ESTRATEGICOS
            </p>
            <div className="relative flex w-full overflow-hidden mask-gradient-x">
                <Marquee className="[--duration:40s] [--gap:3rem]">
                  <MarqueeContent>
                    {new Array(8).fill(null).map((_, index) => (
                      <MarqueeItem key={index}>
                         <img
                          src={`https://placehold.co/140x50/000000/FFFFFF/png?text=Partner+${index+1}`}
                          alt="Client Logo"
                          className="h-10 w-auto opacity-30 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
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