"use client"

import React from "react"
import {
  TrendingUp,
  ShieldCheck,
  Layers,
  Target,
  Network,
  BriefcaseBusiness,
  Globe2,
} from "lucide-react"
// 1. IMPORTAR HOOK
import { useLanguage } from "../context/Languagecontext"

export function ProblemSection() {
  // 2. USAR HOOK
  const { t } = useLanguage()

  // 3. DEFINIR ITEMS CON TRADUCCIONES
  const items = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t.problem.items.competitivenessTitle,
      desc: t.problem.items.competitivenessDesc,
      colors: {
        text: "text-blue-500",
        glow: "bg-blue-500",
        border: "group-hover:border-blue-500/40",
        gradient: "from-blue-500/10"
      }
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: t.problem.items.modelsTitle,
      desc: t.problem.items.modelsDesc,
      colors: {
        text: "text-violet-500",
        glow: "bg-violet-500",
        border: "group-hover:border-violet-500/40",
        gradient: "from-violet-500/10"
      }
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t.problem.items.valueTitle,
      desc: t.problem.items.valueDesc,
      colors: {
        text: "text-pink-500",
        glow: "bg-pink-500",
        border: "group-hover:border-pink-500/40",
        gradient: "from-pink-500/10"
      }
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: t.problem.items.standardsTitle,
      desc: t.problem.items.standardsDesc,
      colors: {
        text: "text-emerald-500",
        glow: "bg-emerald-500",
        border: "group-hover:border-emerald-500/40",
        gradient: "from-emerald-500/10"
      }
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: t.problem.items.nicheTitle,
      desc: t.problem.items.nicheDesc,
      colors: {
        text: "text-cyan-500",
        glow: "bg-cyan-500",
        border: "group-hover:border-cyan-500/40",
        gradient: "from-cyan-500/10"
      }
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: t.problem.items.ecosystemTitle,
      desc: t.problem.items.ecosystemDesc,
      colors: {
        text: "text-amber-500",
        glow: "bg-amber-500",
        border: "group-hover:border-amber-500/40",
        gradient: "from-amber-500/10"
      }
    },
  ]

  return (
    <section className="relative w-full bg-[#04080c] py-24 sm:py-32 overflow-hidden text-white selection:bg-blue-500/30">
      
      <div className="relative container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-400">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            <span>{t.problem.badge}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-6">
            {t.problem.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.problem.titlePart2}</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
            {t.problem.description}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative p-8 rounded-[2rem] border border-white/5 bg-[#0d131b] overflow-hidden transition-all duration-500 hover:shadow-2xl ${item.colors.border}`}
            > 
              <div className="relative z-10 flex flex-col items-start h-full">
                
                {/* Icono con Glow */}
                <div className="mb-6 relative">
                   <div className={`absolute -inset-4 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-20 ${item.colors.glow}`}></div>
                   <div className={`relative h-10 w-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${item.colors.text}`}>
                     {item.icon}
                   </div>
                </div>
                
                <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-white/90">
                  {item.title}
                </h3>
                
                <p className="text-base text-slate-500 font-light leading-relaxed transition-colors group-hover:text-slate-400">
                  {item.desc}
                </p>

                {/* Decoración */}
                <div className={`absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-white/5 transition-colors duration-500 group-hover:${item.colors.glow.replace('bg-', 'bg-')}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}