"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

type InvestmentTeaserCardProps = {
  title?: string
  description?: string
  imageSrc?: string
  href?: string
  compact?: boolean
}

export function InvestmentTeaserCard({
  title = "¡Haz tu investment teaser!",
  description = "Un teaser claro y visual para presentar tu proyecto a inversionistas.",
  imageSrc = "/investment.png", // Asegúrate de tener esta imagen o cámbiala
  href = "#",
  compact = true,
}: InvestmentTeaserCardProps) {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl hover:border-white/20 transition-all duration-300 w-[240px] sm:w-[280px]"
      aria-label={title}
    >
      {/* 1. Imagen Arriba (Top) */}
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay sutil para que el texto resalte si la imagen es clara */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. Contenido Abajo (Bottom) */}
      <div className="relative p-4 pt-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-white leading-tight mb-1">
              {title}
            </h3>
            <p className="text-xs text-slate-300 leading-snug line-clamp-3">
              {description}
            </p>
          </div>
          
          {/* Flecha */}
          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/90 group-hover:bg-emerald-500 transition-colors">
            <ArrowRight className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}