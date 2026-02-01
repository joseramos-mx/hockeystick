"use client"

import React, { useMemo, useState } from "react"
import { ArrowRight, Layers, Layout, Zap, Users, Lightbulb, TrendingUp, MonitorPlay, Star } from "lucide-react"
import Link from "next/link"

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
  const items: BusinessLine[] = useMemo(
    () => [
      {
        id: "hockeystick-mx",
        label: "GENERAL",
        title: "HockeyStick MX",
        description:
          "Socio estratégico para incrementar la competitividad de MyPymes y Startups mediante detección de oportunidades.",
        image: "lineas/compass real.png",
        meta: "Estrategia • Consultoría",
        icon: Layout, 
      },
      {
        id: "aceleradora-exponencial",
        label: "ACELERACIÓN",
        title: "Aceleradora Exponencial",
        description:
          "Diseño de modelos de negocio ágiles (Lean Startup, Growth Hacking) para exponencializar procesos y ventas.",
        image: "lineas/cohete.png", 
        meta: "Scale-up • Agilidad",
        icon: TrendingUp, 
      },
      {
        id: "incubadora-exponencial",
        label: "INCUBACIÓN",
        title: "Incubadora Exponencial",
        description:
          "Transformamos ideas en negocios rentables. Desarrollo de Prototipo, MVP y lanzamiento con método GROW.",
        image: "lineas/ajedrez.png",
        meta: "Startups • MVP",
        icon: Lightbulb, 
      },
      {
        id: "empresas-unicornio",
        label: "UNICORNIOS",
        title: "Empresas Unicornio",
        description:
          "Modelos de escalamiento masivo para competir en ecosistemas exponenciales y construcción de ExO.",
        image: "/unicornio2.png",
        meta: "Escalamiento • ExO",
        icon: Zap, 
      },
      {
        id: "fondos-y-ma",
        label: "FONDOS & M&A",
        title: "Fondos de Inversión",
        description:
          "Estructuración financiera para levantar capital (Angel/VC), fusiones y adquisiciones.",
        image: "lineas/toro.png",
        meta: "Capital • Finanzas",
        icon: Layers, 
      },
      {
        id: "universidad-hockeystick",
        label: "EDUCACIÓN",
        title: "Universidad HockeyStick",
        description:
          "Formación disruptiva para el ecosistema emprendedor. Labs y Workshops para desarrollar habilidades reales.",
        image: "lineas/cerebro.png",
        meta: "Formación • Workshops",
        icon: Users, 
      },
      {
        id: "mkt-digital-hub",
        label: "DIGITAL HUB",
        title: "MKT Digital & Hub",
        description:
          "Transformación digital 4.0/5.0, automatización de procesos y marketing exponencial.",
        image: "lineas/math.png",
        meta: "Tech 4.0 • Automatización",
        icon: MonitorPlay, 
      },
      {
        id: "PMO-PMP-agile",
        label: "PMO & AGILE",
        title: "Agile Office",
        description:
          "Oficina de gestión de proyectos ágiles para asegurar la ejecución impecable de la estrategia.",
        image: "lineas/compass.png",
        meta: "Gestión • Ejecución",
        icon: Star, 
      },
    ],
    []
  )

  const [activeId, setActiveId] = useState(items[0]!.id)
  const active = items.find((x) => x.id === activeId) ?? items[0]!

  return (
    <section className="w-full bg-white py-16 sm:py-24 selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
           <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 mb-6">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              Ecosistema Integral
            </div>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
             Nuestras Líneas de Negocio
           </h2>
           <p className="text-lg text-slate-500 font-light leading-relaxed">
             Un ecosistema de soluciones interconectadas, diseñadas para acompañar cada etapa del ciclo de vida de tu empresa.
           </p>
        </div>

        {/* CAMBIO CLAVE DE UI/UX: 
            items-start (en lugar de stretch) permite que la tarjeta izquierda 
            tenga solo la altura necesaria, eliminando el espacio blanco al fondo.
        */}
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
            
            {/* Content Content - Padding ajustado para ser más compacto */}
            <div className="p-8 flex flex-col relative">
              
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 mb-5 uppercase">
                  <active.icon className="h-3 w-3" />
                  <span>{active.meta}</span>
                </div>

                <div className="overflow-hidden min-h-[140px]">
                  <h3 key={active.title + "title"} className="text-2xl sm:text-3xl font-medium text-slate-900 mb-3 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                    {active.title}
                  </h3>
                  
                  <p key={active.title + "desc"} className="text-base sm:text-lg text-slate-500 font-light leading-relaxed animate-in slide-in-from-bottom-3 duration-500 fade-in fill-mode-backwards delay-75">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-3 animate-in fade-in duration-700 delay-150 mt-6">
                <Link href={`/divisiones/${active.id}`}>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
                      Explorar división <ArrowRight className="h-4 w-4" />
                    </button>
                </Link>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors">
                  Agendar llamada
                </button>
              </div>
              
            </div>
          </div>

          {/* RIGHT: NAVIGATION LIST */}
          {/* CAMBIO: Altura fija (h-[520px]) para mantener consistencia y scroll, evitando que la página salte */}
          <div className="flex flex-col h-[520px] bg-slate-50/50 rounded-[2rem] border border-slate-100 overflow-hidden sticky top-8">
            <div className="p-5 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm flex items-center justify-between sticky top-0 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Selecciona una división</span>
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