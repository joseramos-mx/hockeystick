"use client"

import React from "react"
import { ArrowRight, CheckCircle2, Sparkles, Layers, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
// 1. IMPORTAR HOOK
import { useLanguage } from "../context/Languagecontext"

export function PartnerSection() {
  // 2. USAR HOOK
  const { t } = useLanguage()

  // 3. DEFINIR DATOS DENTRO DEL COMPONENTE
  const valueCards = [
    {
      icon: <Target className="h-5 w-5" />,
      title: t.partner.cards.detectionTitle,
      description: t.partner.cards.detectionDesc,
      colors: {
        icon: "text-blue-500",
        border: "group-hover:border-blue-500/30",
        gradient: "from-blue-500/10",
        textHover: "group-hover:text-blue-100"
      }
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: t.partner.cards.processTitle,
      description: t.partner.cards.processDesc,
      colors: {
        icon: "text-indigo-400",
        border: "group-hover:border-indigo-500/30",
        gradient: "from-indigo-500/10",
        textHover: "group-hover:text-indigo-100"
      }
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: t.partner.cards.valueTitle,
      description: t.partner.cards.valueDesc,
      colors: {
        icon: "text-cyan-400",
        border: "group-hover:border-cyan-500/30",
        gradient: "from-cyan-500/10",
        textHover: "group-hover:text-cyan-100"
      }
    }
  ]

  return (
    <section className="relative w-full bg-[#04080c] py-24 sm:py-32 overflow-hidden text-white selection:bg-blue-500/30">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        
        {/* Layout Dividido */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start">
          
          {/* Columna Izquierda: Narrativa */}
          <div className="flex flex-col justify-center">
            
            {/* Badge sutil */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 fill-blue-500/10" />
              {t.partner.badge}
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              {t.partner.titlePart1} <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {t.partner.titlePart2}
              </span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10 font-light">
              {t.partner.description}
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
                {t.partner.btnCall} <ArrowRight className="h-4 w-4" />
              </button>

              <Link href="/nosotros">
                <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-white hover:border-white/20">
                  {t.partner.btnMethod}
                </button>
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Menú de Servicios */}
          <div className="relative lg:mt-4">
             <div className="relative rounded-[2rem] border border-white/5 bg-[#081018] p-8 sm:p-10 transition-shadow hover:shadow-2xl hover:shadow-blue-900/5">
                
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {t.partner.menuTitle}
                    </h3>
                    <div className="h-px flex-1 bg-white/5 ml-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                  {/* Usamos el array traducido desde el hook */}
                  {t.partner.menuItems.map((item) => (
                    <div key={item} className="group/item flex items-center gap-3 transition-all duration-300 hover:translate-x-1 cursor-default">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#04080c] border border-white/5 group-hover/item:border-blue-500/30 group-hover/item:text-blue-400 text-slate-600 transition-colors">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-light text-slate-400 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-slate-600 italic font-light">
                    {t.partner.menuNote}
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Cards: Propuesta de Valor */}
        <div className="mt-24 sm:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {valueCards.map((card, idx) => (
                  <div 
                    key={idx}
                    className={`group relative rounded-2xl border border-white/5 bg-[#081018] p-8 transition-all duration-500 hover:-translate-y-1 ${card.colors.border}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.colors.gradient} via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
                    
                    <div className="relative z-10">
                      <div className={`mb-5 inline-flex items-center justify-center ${card.colors.icon} transition-transform duration-500 group-hover:scale-110`}>
                        {card.icon}
                      </div>
                      
                      <h3 className={`text-lg font-medium text-white mb-3 transition-colors duration-300 ${card.colors.textHover}`}>
                        {card.title}
                      </h3>
                      
                      <p className="text-sm text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  )
}