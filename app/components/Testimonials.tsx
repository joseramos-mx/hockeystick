"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Testimonial } from "@/lib/business-data"

export function Testimonials({ data }: { data: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header y Botones */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-left">Casos de éxito</h2>
            <p className="text-slate-600 max-w-xl text-left">
              Historias reales de empresas que transformaron su operación con nuestras metodologías exponenciales.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prevStep}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-900 hover:text-white shadow-sm active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextStep}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-900 hover:text-white shadow-sm active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ÁREA DE ANIMACIÓN */}
        {/* Aumenté la altura a 600px para acomodar textos largos */}
        <div className="relative h-[650px] md:h-[500px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl h-full"
            >
              {/* Imagen (40% ancho en desktop) */}
              <div className="md:w-2/5 h-64 md:h-full overflow-hidden shrink-0 relative">
                <img 
                  src={data[index].image} 
                  alt={data[index].author} 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Contenido (60% ancho en desktop) */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-left h-full">
                <div className="mb-4 text-blue-600">
                  <span className="text-6xl font-serif leading-none">“</span>
                </div>
                
                {/* Scroll vertical automático si el texto es muy largo */}
                <div className="overflow-y-auto pr-4 max-h-[250px] md:max-h-none scrollbar-hide">
                    <blockquote className="text-lg md:text-sm font-medium text-slate-900 leading-relaxed mb-6">
                    {data[index].quote}
                    </blockquote>
                </div>
                
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900 text-lg">{data[index].author}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">{data[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}