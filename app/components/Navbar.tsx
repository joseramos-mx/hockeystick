"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Send } from "lucide-react"
import { LanguageToggle } from "./languagetoggle" // Asegúrate de que el import sea correcto (mayúsculas/minúsculas)
// 1. IMPORTAR EL HOOK
import { useLanguage } from "../context/Languagecontext"

type NavItem = { label: string; href: string }
type DropItem = { title: string; slug: string }

export function Navbar() {
  const pathname = usePathname()
  // 2. USAR EL HOOK
  const { t } = useLanguage()

  // 3. DEFINIR DATOS DENTRO DEL COMPONENTE PARA USAR 't'
  const nav: NavItem[] = useMemo(
    () => [
      { label: t.navbar.home, href: "/" },
      { label: t.navbar.about, href: "/nosotros" },
      { label: t.navbar.contact, href: "/contacto" },
    ],
    [t] // Dependencia 't' para que se actualice al cambiar idioma
  )

  const businessLines: DropItem[] = [
    { title: t.navbar.lines.hockey, slug: "hockeystick-mx" },
    { title: t.navbar.lines.accelerator, slug: "aceleradora-exponencial" },
    { title: t.navbar.lines.incubator, slug: "incubadora-exponencial" },
    { title: t.navbar.lines.unicorns, slug: "empresas-unicornio" },
    { title: t.navbar.lines.funds, slug: "fondos-y-ma" },
    { title: t.navbar.lines.university, slug: "universidad-hockeystick" },
    { title: t.navbar.lines.hub, slug: "mkt-digital-hub" },
    { title: t.navbar.lines.swat, slug: "swat" },
    { title: t.navbar.lines.calidad, slug: "calidad" },

  ]

  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileLinesOpen, setMobileLinesOpen] = useState(true)

  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Cierra todo al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false)
    setDropOpen(false)
  }, [pathname])

  // ESC para cerrar
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false)
        setDropOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Focus al botón cerrar cuando abre drawer
  useEffect(() => {
    if (mobileOpen) closeBtnRef.current?.focus()
  }, [mobileOpen])

  // Lock scroll cuando drawer está abierto
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  // Si pasas a desktop mientras está abierto, ciérralo
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const onDropEnter = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current)
    setDropOpen(true)
  }

  const onDropLeave = () => {
    dropTimer.current = setTimeout(() => setDropOpen(false), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="border-b border-white/10 bg-black/85 backdrop-blur-md w-full">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center">
              <img
                className="h-7 w-auto object-contain invert brightness-0"
                src="/hsmx.png"
                alt="HSMX"
              />
            </Link>
          </div>

          {/* Center: Desktop links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-6">
            <Link
              href={nav[0].href}
              className="text-xs font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {nav[0].label}
            </Link>

            <Link
              href={nav[1].href}
              className="text-xs font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {nav[1].label}
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={onDropEnter}
              onMouseLeave={onDropLeave}
            >
              <button
                type="button"
                onClick={() => setDropOpen((v) => !v)}
                onFocus={onDropEnter}
                onBlur={onDropLeave}
                aria-haspopup="menu"
                aria-expanded={dropOpen}
                className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors py-4"
              >
                {/* TRADUCCIÓN AQUÍ */}
                {t.navbar.businessLines}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={[
                  "absolute left-1/2 mt-0 w-56 -translate-x-1/2 rounded-b-xl rounded-t-lg",
                  "bg-[#09090b] border border-white/10 p-1 shadow-xl",
                  "transition-all duration-200 origin-top",
                  dropOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                ].join(" ")}
                role="menu"
              >
                {businessLines.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/divisiones/${item.slug}`}
                    role="menuitem"
                    className="block rounded-md px-3 py-2 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                    onClick={() => setDropOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={nav[2].href}
              className="text-xs font-medium uppercase tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {nav[2].label}
            </Link>
          </div>

          {/* Right: CTA + Mobile Menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-green-400 px-4 py-1.5 text-xs font-bold text-black hover:bg-gray-200 transition"
            >
              <Send className="h-3 w-3 mr-1.5"/> {t.navbar.cta}
            </Link>
            
            {/* Toggle de Idioma en Desktop */}
            <div className="hidden sm:block">
               <LanguageToggle />
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-[300px] bg-[#09090b] border-l border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 h-14">
              <span className="text-sm font-bold text-white tracking-widest uppercase">{t.navbar.menuTitle}</span>
              <button
                ref={closeBtnRef}
                type="button"
                className="rounded-md p-1 text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-6 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
              <div className="space-y-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition"
                    onClick={() => setMobileLinesOpen((v) => !v)}
                    aria-expanded={mobileLinesOpen}
                  >
                    {t.navbar.businessLines}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileLinesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileLinesOpen && (
                    <div className="mt-1 ml-2 space-y-0.5 border-l-2 border-white/10 pl-3">
                      {businessLines.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/divisiones/${item.slug}`}
                          className="block rounded-md px-3 py-2 text-xs font-medium text-white/60 hover:text-white transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contacto"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  <Send className="h-4 w-4"/> {t.navbar.mobileCta}
                </Link>
                
                {/* Toggle de Idioma en Mobile Menu */}
                <div className="pt-6 flex justify-center">
                    <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}