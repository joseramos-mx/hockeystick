"use client"

import React from "react"

type Logo = {
  name: string
  src: string
  href?: string
}

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  logos: Logo[]
}

export function LogoGrids({
  eyebrow = "Nuestros Aliados",
  title,
  subtitle,
  logos,
}: Props) {
  return (
    <section className="w-full bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Minimalista */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          {eyebrow && (
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-6">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4 leading-[1.1]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid de Logos "Architectural" */}
        {/* Gap muy fino para limpieza visual */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
          {logos.map((logo) => {
            const Wrapper: any = logo.href ? "a" : "div"
            const wrapperProps = logo.href ? { href: logo.href, target: "_blank", rel: "noopener noreferrer" } : {}
            
            return (
              <Wrapper
                key={logo.name}
                {...wrapperProps}
                className="group relative flex aspect-[3/2] items-center justify-center bg-white p-8 transition-colors duration-500 hover:bg-slate-50/50"
                aria-label={logo.name}
              >
                {/* Imagen del Logo */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-[50%] max-w-[70%] object-contain transition-all duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </Wrapper>
            )
          })}
        </div>

        {/* Nota al pie opcional para cerrar la sección */}
        <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-light">
                Empresas que confían en nuestra metodología para escalar.
            </p>
        </div>

      </div>
    </section>
  )
}