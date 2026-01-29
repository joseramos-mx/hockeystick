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
    <section className="w-full bg-white py-20 sm:py-24 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          {eyebrow && (
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid de Logos */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => {
            const Wrapper: any = logo.href ? "a" : "div"
            
            return (
              <Wrapper
                key={logo.name}
                href={logo.href}
              
                className="group relative flex aspect-square items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-200 hover:-translate-y-1"
                aria-label={logo.name}
              >
                {/* Imagen del Logo */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  
                  className="max-h-[60%] max-w-[80%] object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </Wrapper>
            )
          })}
        </div>

      </div>
    </section>
  )
}