"use client"

import React, { useMemo, useState } from "react"
import { ArrowRight, ChevronRight, Layers, Layout, Zap, Users, Lightbulb, Cog, TrendingUp, MonitorPlay, Star } from "lucide-react"
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
          "Socio estratégico para incrementar la competitividad de MyPymes y Startups mediante detección de oportunidades, aumento de valor y alianzas estratégicas.",
        image: "lineas/compass real.png", // Usando tu imagen de agileinnovation
        meta: "Estrategia • Consultoría",
        icon: Layout, 
      },
      {
        id: "aceleradora-exponencial",
        label: "ACELERACIÓN",
        title: "Aceleradora Exponencial",
        description:
          "Diseño de modelos de negocio ágiles (Lean Startup, Growth Hacking) para exponencializar procesos, ventas y utilidades.",
        image: "lineas/cohete.png", 
        meta: "Scale-up • Agilidad",
        icon: TrendingUp, 
      },
      {
        id: "incubadora-exponencial",
        label: "INCUBACIÓN",
        title: "Incubadora Exponencial",
        description:
          "Transformamos ideas en negocios rentables.  Desarrollo de Prototipo, MVP y lanzamiento con acompañamiento 'Empowerment' y método GROW.",
        image: "lineas/ajedrez.png",
        meta: "Startups • MVP",
        icon: Lightbulb, 
      },
      {
        id: "empresas-unicornio",
        label: "UNICORNIOS",
        title: "Empresas Unicornio",
        description:
          "Modelos de escalamiento masivo para competir en ecosistemas exponenciales, usando metodologías de Wharton y construcción de Organizaciones Exponenciales (ExO). ",
        image: "/upscalemedia-transformed.png",
        meta: "Escalamiento • ExO",
        icon: Zap, 
      },
      {
        id: "fondos-y-ma",
        label: "FONDOS & M&A",
        title: "Fondos de Inversión y M&A",
        description:
          "Estructuración financiera para levantar capital (Angel/VC), fusiones y adquisiciones.  Preparamos tu empresa para ser auditada e invertida.",
        image: "lineas/toro.png",
        meta: "Capital • Finanzas",
        icon: Layers, 
      },
      {
        id: "universidad-hockeystick",
        label: "EDUCACIÓN",
        title: "Universidad HockeyStick",
        description:
          "Formación disruptiva para el ecosistema emprendedor.  Diplomados, Labs y Workshops lúdicos para desarrollar habilidades empresariales reales.",
        image: "lineas/cerebro.png",
        meta: "Formación • Workshops",
        icon: Users, 
      },
      {
        id: "mkt-digital-hub",
        label: "DIGITAL HUB",
        title: "MKT Digital & Digital Hub",
        description:
          "Transformación digital 4.0/5.0 y automatización de procesos.  Marketing exponencial para ventas omnicanal y control de utilidades.",
        image: "lineas/math.png",
        meta: "Tech 4.0 • Automatización",
        icon: MonitorPlay, 
      },
      {
        id: "PMO-PMP-agile",
        label: "PMO & PMP Office",
        title: "Agile Office",
        description:
          "Transformación digital 4.0/5.0 y automatización de procesos.  Marketing exponencial para ventas omnicanal y control de utilidades.",
        image: "lineas/compass.png",
        meta: "Tech 4.0 • Automatización",
        icon: Star, 
      },
    ],
    []
  )

  const [activeId, setActiveId] = useState(items[0]!.id)
  const active = items.find((x) => x.id === activeId) ?? items[0]!

  return (
    <section className="w-full bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
             Nuestras Líneas de Negocio
           </h2>
           <p className="text-lg text-slate-600">
             Soluciones flexibles diseñadas para cada etapa de crecimiento de tu empresa.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-8 items-stretch h-[600px] lg:h-[650px]">
          
          {/* LEFT: MAIN PREVIEW PANEL */}
          <div className="relative group overflow-hidden rounded-3xl bg-slate-900 shadow-2xl h-full flex flex-col justify-end transition-all duration-500">
            
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${active.image})` }}
            />
            
            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
            
            {/* Content Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md mb-6">
                <active.icon className="h-3.5 w-3.5" />
                {active.meta}
              </div>

              <div className="overflow-hidden">
                <h3 key={active.title + "title"} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-in slide-in-from-bottom-4 duration-500 fade-in">
                  {active.title}
                </h3>
                
                <p key={active.title + "desc"} className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8 animate-in slide-in-from-bottom-6 duration-700 fade-in fill-mode-backwards delay-100">
                  {active.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-in fade-in duration-1000 delay-200">
                <Link href={`/divisiones/${active.id}`}>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-200 transition-colors">
                  Explorar servicio <ArrowRight className="h-4 w-4" />
                </button>
                </Link>
                <Link href="/contacto">
                <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Agendar llamada
                </button>
                </Link>
                
              </div>
            </div>
          </div>

          {/* RIGHT: NAVIGATION LIST */}
          <div className="flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Selecciona una opción</span>            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
              {items.map((item) => {
                const isActive = activeId === item.id
                const Icon = item.icon

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                      isActive
                        ? "bg-slate-900 border-slate-900 shadow-lg scale-[1.02]"
                        : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-white" : "text-slate-700"}`}>
                           {item.title}
                        </div>
                        <div className={`text-xs truncate transition-colors ${isActive ? "text-slate-400" : "text-slate-400"}`}>
                           {item.label}
                        </div>
                      </div>

                      {isActive && (
                         <ChevronRight className="h-4 w-4 text-white animate-in slide-in-from-left-2 fade-in" />
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