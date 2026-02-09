"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
// 1. IMPORTAR HOOK
import { useLanguage } from "../context/Languagecontext"

// Ya no necesitamos importar Testimonial de business-data porque usamos el tipo inferido de la traducción o uno local simple.

export function Testimonials() {
  // 2. USAR HOOK
  const { t } = useLanguage()
  
  // 3. OBTENER DATOS DEL DICCIONARIO
  const data = t.testimonials.items

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Lógica del Autoplay
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextStep()
    }, 5000)
    return () => clearInterval(timer)
  }, [index, isPaused])

  if (!data || data.length === 0) return null

  const nextStep = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1 === data.length ? 0 : prev + 1))
  }

  const prevStep = () => {
    setDirection(-1)
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    })
  }

  return (
    <section className="py-16 sm:py-24 bg-slate-50 overflow-hidden relative selection:bg-blue-100 selection:text-blue-900">
      
      {/* Decoración de Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-blue-100/40 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Compacto (TRADUCIDO) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 sm:mb-12 max-w-5xl mx-auto text-center sm:text-left">
          <div className="mb-6 sm:mb-0">
             <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-2">
              {t.testimonials.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-light">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Controles Superiores (Solo Desktop) */}
          <div className="hidden md:flex gap-2">
              <button onClick={prevStep} className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button onClick={nextStep} className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">
                <ArrowRight className="h-4 w-4" />
              </button>
          </div>
        </div>

        {/* ÁREA DE ANIMACIÓN RESPONSIVE */}
        <div 
          className="relative h-[600px] sm:h-[500px] md:h-[380px] lg:h-[350px] w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 40 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0 w-full px-1"
            >
              {/* CARD PRINCIPAL */}
              <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-10 gap-6 sm:gap-8 md:gap-12 group hover:border-blue-100 transition-colors duration-500">
                
                {/* IMAGEN */}
                <div className="relative shrink-0 mx-auto md:mx-0 mt-4 md:mt-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative z-10 group-hover:shadow-md transition-all duration-500">
                      <img 
                        src={data[index].image} 
                        alt={data[index].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-3 -right-3 w-full h-full rounded-2xl bg-blue-50 -z-10 group-hover:bg-blue-100 transition-colors duration-500 hidden sm:block" />
                </div>

                {/* CONTENIDO */}
                <div className="flex-1 flex flex-col justify-center h-full text-center md:text-left w-full">
                  
                  {/* Cita */}
                  <div className="relative mb-4 sm:mb-6 flex-1 flex flex-col justify-center">
                    <Quote className="hidden md:block absolute -top-4 -left-6 h-8 w-8 text-blue-100 transform -scale-x-100" />
                    <blockquote className="text-base sm:text-lg md:text-xl font-light text-slate-700 leading-relaxed italic line-clamp-6 md:line-clamp-none">
                      "{data[index].quote}"
                    </blockquote>
                  </div>

                  {/* Footer de la Card */}
                  <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-slate-900">{data[index].author}</p>
                      <p className="text-[10px] sm:text-xs text-blue-600 font-medium tracking-wide uppercase mt-0.5">{data[index].role}</p>
                    </div>

                    {/* Indicador de Posición (Puntos) */}
                    <div className="flex gap-1.5">
                      {data.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setIndex(idx)} 
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === index ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200 hover:bg-blue-300"}`}
                          aria-label={`Ir al testimonio ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Controles Móbiles */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
           <button onClick={prevStep} className="p-3 rounded-full bg-white shadow-sm border border-slate-100 text-slate-600 active:scale-95 transition-transform">
             <ArrowLeft className="h-5 w-5" />
           </button>
           <button onClick={nextStep} className="p-3 rounded-full bg-blue-600 shadow-md shadow-blue-200 text-white active:scale-95 transition-transform">
             <ArrowRight className="h-5 w-5" />
           </button>
        </div>

      </div>
    </section>
  )
}