"use client"

import React from "react"
import { ArrowRight, CheckCircle2, Sparkles, Layers, Target, TrendingUp } from "lucide-react"

export function PartnerSection() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      
      {/* Background Decor: Un patrón de grid muy sutil para dar textura sin ensuciar */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Narrative */}
          <div className="flex flex-col justify-center">
            
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
              <Sparkles className="h-3.5 w-3.5 fill-blue-700/20" />
              Socio estratégico
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Un socio clave para desarrollar y escalar.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Convertimos ideas en ejecución real. Detectamos áreas de oportunidad,
              elevamos el valor del negocio y estructuramos procesos para aumentar ventas
              y utilidades de forma medible.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3057fb] px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#2546d6] hover:shadow-blue-500/30 hover:-translate-y-0.5">
                Agenda una llamada <ArrowRight className="h-4 w-4" />
              </button>

              <button className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900">
                Ver metodología
              </button>
            </div>
          </div>

          {/* Right Column: "Menu" of Services (Card visual) */}
          <div className="relative rounded-3xl border border-gray-200 bg-gray-50/50 p-8 sm:p-10 backdrop-blur-sm lg:mt-4">
             {/* Decorative gradient blur behind the card */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Construimos contigo
                </h3>
                <div className="h-px flex-1 bg-gray-200 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "Proyecto / Programa",
                "Implante Estratégico",
                "Iguala Mensual",
                "Workshop Intensivo",
                "Lab / Job Shop",
                "Empowerment Corp",
                "Co-Active Managing",
                "Business Coach",
              ].map((item) => (
                <div key={item} className="group flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                    <CheckCircle2 className="h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 italic">
                *Adaptamos el acompañamiento al objetivo y etapa de madurez actual de tu empresa.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards: Value Proposition */}
        <div className="mt-20 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <ValueCard
                    icon={<Target className="h-5 w-5 text-blue-600" />}
                    title="Detección de Oportunidades"
                    description="Diagnóstico práctico para descubrir cuellos de botella, fugas de capital y las palancas exactas de crecimiento."
                />
                <ValueCard
                    icon={<Layers className="h-5 w-5 text-purple-600" />}
                    title="Procesos Institucionales"
                    description="Estandarizamos y documentamos operaciones para que tu negocio escale sin depender de una sola persona."
                />
                <ValueCard
                    icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                    title="Rentabilidad y Valor"
                    description="Optimización financiera orientada a resultados: mejor propuesta de valor, ejecución pulida y métricas claras."
                />
            </div>
        </div>

      </div>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.02),0px_8px_16px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0px_4px_8px_rgba(0,0,0,0.04),0px_12px_24px_rgba(0,0,0,0.04)] hover:border-gray-200">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">
        {description}
      </p>
    </div>
  )
}