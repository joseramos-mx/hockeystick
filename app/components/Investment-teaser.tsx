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
  description = "Un teaser claro y visual para presentar tu proyecto a inversionistas: narrativa, estructura y diseño profesional listo para compartir.",
  imageSrc = "/investment.png",
  href = "#",
  compact = true,
}: InvestmentTeaserCardProps) {
  return (
    <a
      href={href}
      className={[
        "group relative block overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/2 backdrop-blur-xl shadow-2xl hover:border-white/20 transition",
        compact ? "w-[92vw] max-w-[520px]" : "w-[92vw] max-w-[980px]",
      ].join(" ")}
      aria-label={title}
    >
      <div className="flex items-stretch">
        {/* Left image */}
        <div
          className={[
            "relative shrink-0",
            compact ? "w-[96px] sm:w-[120px]" : "w-[140px] sm:w-[180px] md:w-[220px]",
          ].join(" ")}
        >
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
        </div>

        {/* Right content */}
        <div className={["flex-1 min-w-0", compact ? "bg-black/[0.2]" : "bg-black/10"].join(" ")}>
          <div className={["flex items-center gap-3", compact ? "p-3 sm:p-4" : "p-5 sm:p-7"].join(" ")}>
            {/* Text */}
            <div className="min-w-0 pr-1">
              <h3 className={compact ? "text-base sm:text-lg font-semibold" : "text-xl sm:text-2xl md:text-3xl font-semibold"}>
                {title}
              </h3>

              <p
                className={[
                  "mt-1 text-white/80 leading-relaxed",
                  compact ? "text-xs sm:text-sm line-clamp-2" : "text-sm sm:text-base md:text-lg line-clamp-3",
                ].join(" ")}
              >
                {description}
              </p>
            </div>

            {/* Arrow */}
            <div className="ml-auto flex items-center justify-center">
              <div className={["rounded-full transition", compact ? "p-2 group-hover:bg-white/5" : "p-3 sm:p-4 group-hover:bg-white/5"].join(" ")}>
                <ArrowRight className={compact ? "h-6 w-6 sm:h-7 sm:w-7 text-white/90" : "h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/90"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -inset-20 bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent_65%)]" />
      </div>
    </a>
  )
}
