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
  logos: Logo[]
  theme?: "light" | "dark"
}

export function LogoGrids({
  eyebrow = "Partners",
  title,
  logos,
  theme = "light",
}: Props) {
  const isDark = theme === "dark"

  return (
    <section className={isDark ? "bg-[#050505] text-white" : "bg-white text-black"}>
      {/* ✅ contenedor centrado con max 800px */}
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-10 sm:py-14">
        {/* ✅ desktop: 50/50, texto arriba; mobile: todo centrado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:items-start items-center text-center lg:text-left">
          {/* Left text */}
          <div className="self-start">
            <div
              className={
                isDark
                  ? "text-xs uppercase tracking-wider text-white/55"
                  : "text-xs uppercase tracking-wider text-black/50"
              }
            >
              {eyebrow}
            </div>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight">
              {title}
            </h3>
          </div>

          {/* Right logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-9 gap-y-7">
            {logos.map((l) => {
              const Wrapper: any = l.href ? "a" : "div"
              return (
                <Wrapper
                  key={l.name}
                  href={l.href}
                  className="opacity-80 hover:opacity-100 transition"
                  aria-label={l.name}
                  title={l.name}
                >
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-6 sm:h-7 w-auto object-contain"
                    style={{

                    }}
                    loading="lazy"
                  />
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
