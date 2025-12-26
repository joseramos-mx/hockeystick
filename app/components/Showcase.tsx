"use client"

import React, { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"

type BusinessLine = {
  id: string
  label: string
  title: string
  description: string
  image: string
  meta?: string
}

export function BusinessShowcase() {
  const items: BusinessLine[] = useMemo(
    () => [
      {
        id: "proyecto",
        label: "PROYECTO",
        title: "Desarrollo de Proyectos",
        description:
          "Convertimos ideas en ejecución: planificación, estructura, entregables y seguimiento para lograr resultados medibles.",
        image: "/investment.png",
        meta: "Línea de negocio • Entrega rápida",
      },
      {
        id: "programa",
        label: "PROGRAMA",
        title: "Programas de Crecimiento",
        description:
          "Implementamos metodologías modernas para escalar operación, ventas y estandarización interna sin fricción.",
        image: "/investment.png",
        meta: "Crecimiento • Metodología",
      },
      {
        id: "implante",
        label: "IMPLANTE",
        title: "Implantes Estratégicos",
        description:
          "Intervenimos áreas clave para elevar performance: procesos, métricas, propuesta de valor y comercialización.",
        image: "/investment.png",
        meta: "Optimización • KPI",
      },
      {
        id: "iguala",
        label: "IGUALA",
        title: "Igualas y Acompañamiento",
        description:
          "Soporte continuo para institucionalizar procesos y mantener mejora permanente con foco en utilidades.",
        image: "/investment.png",
        meta: "Retainer • Soporte",
      },
      {
        id: "workshop",
        label: "WORKSHOP",
        title: "Workshops de Ejecución",
        description:
          "Sesiones intensivas para alinear equipo, priorizar roadmap y activar acciones en 1–3 días.",
        image: "/investment.png",
        meta: "Intensivo • 1–3 días",
      },
      {
        id: "lab",
        label: "LAB",
        title: "Laboratorio de Innovación",
        description:
          "Diseñamos, probamos y validamos iniciativas con enfoque de innovación aplicada y resultados.",
        image: "/investment.png",
        meta: "Innovación • Validación",
      },
      {
        id: "jobshop",
        label: "JOB SHOP",
        title: "Job Shop Operativo",
        description:
          "Ejecutamos tareas críticas: documentación, sistemas, funnels, automatización y entregables listos.",
        image: "/investment.png",
        meta: "Ejecución • Entregables",
      },
      {
        id: "empowerment",
        label: "EMPOWERMENT",
        title: "Empowerment Empresarial",
        description:
          "Elevamos capacidades del equipo con frameworks claros para operar mejor y tomar mejores decisiones.",
        image: "/investment.png",
        meta: "Equipo • Capacitación",
      },
      {
        id: "coach",
        label: "COACH",
        title: "Business Coaching & Co-Active",
        description:
          "Acompañamiento estratégico para líderes: claridad, decisiones, ejecución y disciplina operativa.",
        image: "/investment.png",
        meta: "Liderazgo • Coaching",
      },
    ],
    []
  )

  const [activeId, setActiveId] = useState(items[0]!.id)
  const active = items.find((x) => x.id === activeId) ?? items[0]!

  return (
    <section className="w-full px-[clamp(16px,4vw,64px)] mt-10 sm:mt-14 mb-10 sm:mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-stretch">
        {/* MAIN PANEL */}
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm h-[420px] lg:h-[560px]">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${active.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_30%_20%,rgba(255,255,255,0.10),transparent_60%)]" />

          <div className="relative h-full p-6 sm:p-10 flex flex-col justify-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
                {active.meta ?? "Línea de negocio"}
              </div>

              <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                {active.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
                {active.description}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition">
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition">
                  Agendar llamada
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: SCROLL CONTAINER */}
<div className="rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden h-[520px] lg:h-[560px] flex flex-col min-h-0">
  {/* Header fixed */}
  <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 shrink-0">
    <div className="text-sm font-semibold text-black">Líneas de negocio</div>
    <div className="text-xs text-black/50">{items.length}</div>
  </div>

  {/* Scroll area */}
  <div className="flex-1 min-h-0 overflow-y-auto p-4 pb-10 space-y-4">
    {items.map((it) => {
      const isActive = it.id === activeId
      return (
        <button
          key={it.id}
          onClick={() => setActiveId(it.id)}
          className={[
            "relative w-full text-left rounded-[1.5rem] overflow-hidden border transition focus:outline-none",
            "focus:ring-2 focus:ring-black/15",
            isActive ? "border-black/20" : "border-black/10 hover:border-black/20",
            isActive ? "min-h-[132px]" : "min-h-[104px]",
          ].join(" ")}
          aria-pressed={isActive}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${it.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

          <div className="relative p-4 sm:p-5">
            <div className="text-[11px] uppercase tracking-wider text-white/70">{it.label}</div>
            <div className="mt-1 text-lg sm:text-xl font-semibold text-white leading-tight">{it.title}</div>
            {isActive && (
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-3">
                {it.description}
              </p>
            )}
          </div>

          {isActive && <div className="absolute inset-0 ring-1 ring-white/25" />}
        </button>
      )
    })}
  </div>
</div>

      </div>
    </section>
  )
}
