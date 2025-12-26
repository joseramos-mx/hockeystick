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
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Competitividad real",
      desc: "Incrementar la competitividad de MyPymes y Startups mexicanas con foco en crecimiento y expansión.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Modelos de negocio optimizados",
      desc: "Aplicar metodologías modernas para mejorar operación, ejecución y escalabilidad.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Mayor valor agregado",
      desc: "Generación de valor en producto/servicio, procesos, marca y experiencia del cliente.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Estándares internacionales",
      desc: "Fortalecer el mercado interno con estándares y buenas prácticas globales, adaptadas a México.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Competir afuera y entrar a nichos",
      desc: "Capacidad de competir en mercados internacionales y acceder a nichos especializados.",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "Ecosistema e inversión",
      desc: "Relación con clusters sectoriales y programas regionales de innovación para atraer inversión pública y privada.",
    },
  ]

  return (
    <section className="w-full px-[clamp(16px,4vw,64px)] pt-10 sm:pt-14 pb-10 sm:pb-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white">
        {/* light accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_18%,rgba(37,99,235,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_78%_22%,rgba(16,185,129,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.00)_100%)]" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12">
          {/* Header row: title left / meta+buttons right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            {/* Left */}
            <div>
              <h2 className="text-[1.9rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1] tracking-tight font-semibold text-black">
                Hacer que MyPymes y Startups mexicanas compitan con estándares globales.
              </h2>

              <p className="mt-4 max-w-2xl text-black/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                La iniciativa responde a una necesidad clara: elevar competitividad, profesionalizar la operación y
                construir una cadena de valor moderna que permita crecer en México y expandirse a mercados
                internacionales.
              </p>
            </div>

            {/* Right: subtitle + buttons */}
            <div className="lg:pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70">
                <BriefcaseBusiness className="h-4 w-4" />
                Problema que resolvemos
              </div>

              <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition">
                  Ver enfoque <ArrowRight className="h-4 w-4" />
                </button>

                <button className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black/[0.03] transition">
                  Descargar resumen
                </button>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-black/55 leading-relaxed">
                Enfoque: metodologías modernas, estándares internacionales y conexión con ecosistema (clusters,
                innovación e inversión).
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/70 backdrop-blur-sm p-5 shadow-sm hover:bg-white transition"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70">
                  {it.icon}
                  {it.title}
                </div>
                <p className="mt-4 text-sm text-black/65 leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
