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
        
        {/* Header Centrado */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
             {eyebrow}
          </div>
          
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {logos.map((logo) => {
            const Wrapper: any = logo.href ? "a" : "div"
            
            return (
              <Wrapper
                key={logo.name}
                href={logo.href}
                className="group relative flex h-24 sm:h-32 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
                aria-label={logo.name}
              >
                {/* Logo Image with Grayscale Effect */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </Wrapper>
            )
          })}
        </div>
        
        {/* Bottom text (Optional trust indicator) */}
        <div className="mt-12 text-center">

        </div>

      </div>
    </section>
  )
}