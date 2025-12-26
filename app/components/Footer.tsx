"use client"

import React, { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import MetallicPaint, { parseLogoImage } from "./MetallicPaint"

type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

export function FooterDark() {
  const [mounted, setMounted] = useState(false)
  const [imageData, setImageData] = useState<ImageData | null>(null)

  // ✅ Debe existir en /public
  const logoUrl = "/hsmxb.svg"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let alive = true

    async function loadDefaultImage() {
      try {
        const response = await fetch(logoUrl)
        if (!response.ok) throw new Error(`Failed to fetch logo: ${response.status}`)

        const blob = await response.blob()
        const file = new File([blob], "hsmxb.svg", { type: blob.type })

        const parsedData = await parseLogoImage(file)
        if (alive) setImageData(parsedData?.imageData ?? null)
      } catch (err) {
        console.error("Error loading default image:", err)
        if (alive) setImageData(null)
      }
    }

    loadDefaultImage()

    return () => {
      alive = false
    }
  }, [mounted, logoUrl])

  const columns: FooterColumn[] = [
    {
      title: "PRODUCTO",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "PLATAFORMA",
      links: [
        { label: "Servicios", href: "#" },
        { label: "Metodología", href: "#" },
      ],
    },
    {
      title: "SOPORTE",
      links: [
        { label: "Docs", href: "#" },
        { label: "Contacto", href: "#" },
      ],
    },
    {
      title: "COMPAÑÍA",
      links: [
        { label: "About", href: "#" },
        { label: "Privacidad", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-[#050505] text-white">
      <div className="px-[clamp(16px,4vw,64px)] py-12 sm:py-16">
        <div className="border border-white/10 bg-white/[0.03] overflow-hidden rounded-[2rem]">
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full border border-white/15 bg-white/5 grid place-items-center">
                <span className="text-sm font-semibold">H</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60">
                Hockeystick MX
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="px-6 sm:px-8 py-8 sm:py-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {columns.map((col) => (
                  <div key={col.title}>
                    <div className="text-[11px] uppercase tracking-wider text-white/45">
                      {col.title}
                    </div>
                    <ul className="mt-4 space-y-3">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href} className="text-sm text-white/75 hover:text-white transition">
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8">
              <div className="w-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-wider text-white/45">
                  Mascot / Marca
                </div>

                <div className="mt-4 relative w-full aspect-square rounded-2xl overflow-hidden bg-black/20">
                  {mounted && imageData ? (
                    <MetallicPaint
                      imageData={imageData}
                      params={{
                        edge: 2,
                        patternBlur: 0.005,
                        patternScale: 2,
                        refraction: 0.015,
                        speed: 0.3,
                        liquid: 0.07,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-xs text-white/55">
                      {mounted ? "Cargando…" : "Inicializando…"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-5 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/45">
              © {new Date().getFullYear()} Hockeystick MX
            </div>

            <div className="flex items-center gap-4 text-white/55">
              <a href="#" className="hover:text-white transition" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
