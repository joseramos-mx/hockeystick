// components/Navbar.tsx
"use client"

import React, { useState } from "react"
import { Menu, Send, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-40 mx-auto w-full max-w-5xl px-4">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-[#121c3c]/70 shadow-lg backdrop-blur-xl px-4 py-2.5 transition-all duration-300 hover:border-white/20 hover:bg-[#070B1C]/80">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            {/* Asegúrate de que la ruta de la imagen sea correcta */}
            <img src="/hsmx.png" alt="HockeyStick MX" className="h-10 p-2" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-light text-white/60 tracking-widest">
            {['INICIO', "NOSOTROS",'LINEAS DE NEGOCIO', "CONTACTO"].map((item) => (
              <a key={item} href={item === "INICIO" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a 
              href="#"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
            >
              PRICING
            </a>
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-gray-100 transition-all">
              Whatsapp
              <Send className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative h-full w-[80%] max-w-sm border-l border-white/10 bg-[#070B1C] p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-white">Menú</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {['Inicio', 'Nosotros', 'Lineas de Negocio', 'Contacto'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-white/80 hover:text-white border-b border-white/5 pb-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}