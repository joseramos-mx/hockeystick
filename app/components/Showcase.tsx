"use client"

import React, { useMemo, useState, useEffect } from "react"
import { ArrowRight, Layers, Layout, Zap, Users, Lightbulb, TrendingUp, MonitorPlay, Star } from "lucide-react"
import Link from "next/link"
// 1. IMPORTAR HOOK
import { useLanguage } from "../context/Languagecontext"

type BusinessLine = {
  id: string
  label: string
  title: string
  description: string
  image: string
  meta?: string
  icon: React.ElementType
}

export function BusinessShowcase() {
  // 2. USAR HOOK
  const { t } = useLanguage()

  // 3. DEFINIR ITEMS CON TRADUCCIONES
  const items: BusinessLine[] = useMemo(
    () => [
      {
        id: "hockeystick-mx",
        label: t.businessShowcase.items.hockey.label,
        title: t.businessShowcase.items.hockey.title,
        description: t.businessShowcase.items.hockey.desc,
        image: "lineas/compass real.png",
        meta: t.businessShowcase.items.hockey.meta,
        icon: Layout, 
      },
      {
        id: "aceleradora-exponencial",
        label: t.businessShowcase.items.accelerator.label,
        title: t.businessShowcase.items.accelerator.title,
        description: t.businessShowcase.items.accelerator.desc,
        image: "lineas/cohete.png", 
        meta: t.businessShowcase.items.accelerator.meta,
        icon: TrendingUp, 
      },
      {
        id: "incubadora-exponencial",
        label: t.businessShowcase.items.incubator.label,
        title: t.businessShowcase.items.incubator.title,
        description: t.businessShowcase.items.incubator.desc,
        image: "lineas/ajedrez.png",
        meta: t.businessShowcase.items.incubator.meta,
        icon: Lightbulb, 
      },
      {
        id: "empresas-unicornio",
        label: t.businessShowcase.items.unicorns.label,
        title: t.businessShowcase.items.unicorns.title,
        description: t.businessShowcase.items.unicorns.desc,
        image: "/unicornio2.png",
        meta: t.businessShowcase.items.unicorns.meta,
        icon: Zap, 
      },
      {
        id: "fondos-y-ma",
        label: t.businessShowcase.items.funds.label,
        title: t.businessShowcase.items.funds.title,
        description: t.businessShowcase.items.funds.desc,
        image: "lineas/toro.png",
        meta: t.businessShowcase.items.funds.meta,
        icon: Layers, 
      },
      {
        id: "universidad-hockeystick",
        label: t.businessShowcase.items.university.label,
        title: t.businessShowcase.items.university.title,
        description: t.businessShowcase.items.university.desc,
        image: "lineas/cerebro.png",
        meta: t.businessShowcase.items.university.meta,
        icon: Users, 
      },
      {
        id: "mkt-digital-hub",
        label: t.businessShowcase.items.hub.label,
        title: t.businessShowcase.items.hub.title,
        description: t.businessShowcase.items.hub.desc,
        image: "lineas/math.png",
        meta: t.businessShowcase.items.hub.meta,
        icon: MonitorPlay, 
      },
      {
        id: "PMO-PMP-agile",
        label: t.businessShowcase.items.pmo.label,
        title: t.businessShowcase.items.pmo.title,
        description: t.businessShowcase.items.pmo.desc,
        image: "lineas/compass.png",
        meta: t.businessShowcase.items.pmo.meta,
        icon: Star, 
      },
      {
        id: "swat",
        label: t.businessShowcase.items.swat.label,
        title: t.businessShowcase.items.swat.title,
        description: t.businessShowcase.items.swat.desc,
        image: "lineas/compass.png",
        meta: t.businessShowcase.items.swat.meta,
        icon: Star, 
      },
      {
        id: "ISO",
        label: t.businessShowcase.items.calidad.label,
        title: t.businessShowcase.items.calidad.title,
        description: t.businessShowcase.items.calidad.desc,
        image: "lineas/compass.png",
        meta: t.businessShowcase.items.calidad.meta,
        icon: Star, 
      }
    ],
    [t] // Dependencia importante: recalcula cuando cambia 't'
  )

  const [activeId, setActiveId] = useState(items[0]!.id)
  
  // Buscar el item activo actual
  const active = items.find((x) => x.id === activeId) ?? items[0]!

  return (
    <section className="w-full bg-white py-16 sm:py-24 selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 mb-6">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              {t.businessShowcase.badge}
            </div>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
             {t.businessShowcase.title}
           </h2>
           <p className="text-lg text-slate-500 font-light leading-relaxed">
             {t.businessShowcase.description}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-8 items-start">
          
          {/* LEFT: MAIN PREVIEW PANEL */}
          <div className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 h-auto transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60">
            
            {/* Image Banner */}
            <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${active.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            
            {/* Content Content */}
            <div className="p-8 flex flex-col relative">
              
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 mb-5 uppercase">
                  <active.icon className="h-3 w-3" />
                  <span>{active.meta}</span>
                </div>

                <div className="overflow-hidden min-h-[140px]">
                  {/* Usamos keys únicas basadas en titulo + idioma para reiniciar animaciones */}
                  <h3 key={active.title} className="text-2xl sm:text-3xl font-medium text-slate-900 mb-3 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                    {active.title}
                  </h3>
                  
                  <p key={active.description} className="text-base sm:text-lg text-slate-500 font-light leading-relaxed animate-in slide-in-from-bottom-3 duration-500 fade-in fill-mode-backwards delay-75">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-3 animate-in fade-in duration-700 delay-150 mt-6">
                <Link href={`/divisiones/${active.id}`}>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
                      {t.businessShowcase.btnExplore} <ArrowRight className="h-4 w-4" />
                    </button>
                </Link>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors">
                  {t.businessShowcase.btnSchedule}
                </button>
              </div>
              
            </div>
          </div>

          {/* RIGHT: NAVIGATION LIST */}
          <div className="flex flex-col h-[520px] bg-slate-50/50 rounded-[2rem] border border-slate-100 overflow-hidden sticky top-8">
            <div className="p-5 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm flex items-center justify-between sticky top-0 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t.businessShowcase.listHeader}</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
              {items.map((item) => {
                const isActive = activeId === item.id
                const Icon = item.icon

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative w-full text-left p-3.5 rounded-xl transition-all duration-300 border border-transparent ${
                      isActive
                        ? "bg-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border-slate-100 scale-[1.02]"
                        : "hover:bg-white hover:border-slate-100 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isActive 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                        : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium truncate transition-colors ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                           {item.title}
                        </div>
                        <div className={`text-[10px] font-medium tracking-wide truncate transition-colors mt-0.5 ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                           {item.label}
                        </div>
                      </div>

                      {isActive && (
                         <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-in zoom-in duration-300 mr-1" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}