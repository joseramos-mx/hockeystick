"use client"

import React from "react"
import {
  ArrowRight,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Layers,
  Target,
  Network,
  BriefcaseBusiness,
} from "lucide-react"

export function ProblemSection() {
  const items = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitividad real",
      desc: "Elevamos el nivel de PyMEs y Startups mexicanas para que dejen de sobrevivir y empiecen a liderar.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Modelos optimizados",
      desc: "Implementamos metodologías ágiles que mejoran la operación, ejecución y permiten la escalabilidad.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Valor agregado",
      desc: "Transformamos productos y servicios genéricos en experiencias de marca de alto valor percibido.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Estándares globales",
      desc: "Fortalecemos el mercado interno adoptando las mejores prácticas internacionales, adaptadas a México.",
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Acceso a nichos",
      desc: "Preparamos a la empresa para competir fuera de la caja y entrar en mercados especializados.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Ecosistema e inversión",
      desc: "Conectamos con clusters clave y programas de innovación para atraer capital inteligente.",
    },
  ]

  return (
    <section className="relative w-full bg-slate-50 py-24 sm:py-32">
      
      {/* Background Shapes: Manchas de color muy sutiles para romper el blanco plano */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          
          {/* Left: Headline */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-blue-600" />
              Nuestra Misión
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Hacemos que México compita con <span className="text-blue-600">estándares globales.</span>
            </h2>
          </div>

          {/* Right: Description & CTA */}
          <div className="lg:pl-10">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Respondemos a una urgencia clara: profesionalizar la operación y construir una cadena de valor moderna que permita crecer localmente y expandirse internacionalmente.
            </p>
            
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-start rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-100"
            >
              {/* Icon Box */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                {item.icon}
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-base text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}