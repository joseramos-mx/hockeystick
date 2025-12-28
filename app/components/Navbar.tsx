"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

type NavItem = { label: string; href: string }
type DropItem = { title: string; slug: string }

const businessLines: DropItem[] = [
  { title: "HockeyStick MX", slug: "hockeystick-mx" },
  { title: "Aceleradora", slug: "aceleradora-exponencial" },
  { title: "Incubadora", slug: "incubadora-exponencial" },
  { title: "Empresas Unicornio", slug: "empresas-unicornio" },
  { title: "Fondos y M&A", slug: "fondos-y-ma" },
  { title: "Universidad", slug: "universidad-hockeystick" },
  { title: "MKT Digital & Hub", slug: "mkt-digital-hub" },
]

export function Navbar() {
  const pathname = usePathname()

  const nav: NavItem[] = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/#contacto" },
    ],
    []
  )

  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileLinesOpen, setMobileLinesOpen] = useState(true)

  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropOpen(false)
  }, [pathname])

  // ESC close
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

  // Focus close button on open
  useEffect(() => {
    if (mobileOpen) closeBtnRef.current?.focus()
  }, [mobileOpen])

  // Lock scroll on open
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const onDropEnter = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current)
    setDropOpen(true)
  }

  const onDropLeave = () => {
    dropTimer.current = setTimeout(() => setDropOpen(false), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="border-b border-white/10 bg-black opacity-90 backdrop-blur-lg">
        <div className="mx-auto h-16 max-w-7xl px-4 p-3 sm:px-6 lg:px-8">
          {/* 3 columnas: izquierda logo | centro links | derecha cta+menu */}
          <div className="relative flex h-16 items-center">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <img
                  className="h-8 w-auto object-contain invert brightness-0"
                  src="/hsmx.png"
                  alt="HSMX"
                />
              </Link>

              <button
    ref={closeBtnRef}
    type="button"
    className="rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
    aria-label="Cerrar menú"
    onClick={() => setMobileOpen(false)}
  >
    <X className="h-6 w-6" />
  </button>
            </div>

            {/* Center: Desktop links (true centered with absolute) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-8">
              <Link
                href={nav[0].href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {nav[0].label}
              </Link>

              <Link
                href={nav[1].href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
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
                  className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  Líneas de Negocio
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={[
                    "absolute left-1/2 mt-3 w-64 -translate-x-1/2 rounded-xl",
                    "bg-[#141416] p-2 shadow-2xl ring-1 ring-white/10",
                    "transition-all duration-150 origin-top",
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
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      onClick={() => setDropOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={nav[2].href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {nav[2].label}
              </Link>
            </div>

            {/* Right: CTA + Mobile Menu button */}
            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-bold text-black hover:bg-gray-100 transition"
              >
                Contacto
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="Abrir menú"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#09090b] ring-1 ring-white/10">
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2">
                <img
                  className="h-8 w-auto invert brightness-0"
                  src="/hsmx.png"
                  alt="HSMX"
                />
                <span className="text-sm font-bold text-white">HSMX</span>
              </Link>

              <button
                ref={closeBtnRef}
                type="button"
                className="rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-6 py-6">
              <div className="space-y-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-white/90 hover:bg-black/10 transition"
                  onClick={() => setMobileLinesOpen((v) => !v)}
                  aria-expanded={mobileLinesOpen}
                >
                  Líneas de Negocio
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${mobileLinesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileLinesOpen && (
                  <div className="mt-1 space-y-1 rounded-lg border border-white/10 bg-white/5 p-2">
                    {businessLines.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/lineas-de-negocio/${item.slug}`}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href="/contacto"
                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-base font-bold text-black hover:bg-gray-100 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
