"use client"

import React from "react"
import { ArrowRight, CheckCircle2, Sparkles, Layers, Target } from "lucide-react"

export function PartnerSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden backdrop-blur-xl">
        {/* subtle background split like hero */}
       

        <div className="relative p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-black/70">
                <Sparkles className="h-4 w-4" />
                Socio estratégico
              </div>

              <h2 className="mt-5 text-[1.9rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1] tracking-tight font-semibold text-black">
                Un socio clave para desarrollar, institucionalizar y escalar.
              </h2>

              <p className="mt-4 max-w-2xl text-black/75 text-sm sm:text-base lg:text-lg leading-relaxed">
                Acompañamos a cada empresa para convertir ideas en ejecución real: detectamos áreas de oportunidad,
                elevamos el valor del negocio y estructuramos procesos para aumentar ventas, utilidades y valor de
                mercado.
              </p>

              {/* CTA row */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3057fb] text-white px-6 py-3 text-sm font-medium hover:bg-[#203cb3] transition">
                  Agenda una llamada <ArrowRight className="h-4 w-4" />
                </button>

                <button className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-black/90 hover:bg-white/10 transition">
                  Ver metodología
                </button>
              </div>
            </div>

            {/* Right: “What we can build” list */}
            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 backdrop-blur-xl p-5">
              <div className="text-xs uppercase tracking-wider text-black/55">
                Construimos contigo
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-black/80">
                {[
                  "Proyecto / Programa",
                  "Implante",
                  "Iguala",
                  "Workshop",
                  "Lab / Job Shop",
                  "Empowerment",
                  "Co-Active",
                  "Business Coach",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-black/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-black/60">
                *Adaptamos el acompañamiento al objetivo y madurez de tu empresa.
              </div>
            </div>
          </div>

          {/* Bottom: value cards */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <ValueCard
              icon={<Target className="h-5 w-5" />}
              title="Detección de oportunidades"
              description="Diagnóstico práctico para descubrir cuellos de botella, pérdidas de valor y palancas de crecimiento."
            />
            <ValueCard
              icon={<Layers className="h-5 w-5" />}
              title="Procesos institucionalizados"
              description="Estandarizamos y documentamos para que tu negocio escale sin depender de una sola persona."
            />
            <ValueCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Más ventas y utilidades"
              description="Optimización orientada a resultados: propuesta de valor, ejecución, seguimiento y métricas."
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
    <div className="rounded-[1.5rem] border border-white/10 bg-black/[0.04] backdrop-blur-xl p-5 hover:bg-black/[0.06] transition">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-black/75">
        {icon}
        {title}
      </div>
      <p className="mt-4 text-sm text-black/70 leading-relaxed">{description}</p>
    </div>
  )
}
