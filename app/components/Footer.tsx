"use client"

import React from "react"
import { Instagram, Linkedin, Twitter, Send, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    // Se usa 'relative' y 'bg-[#020408]' para el color base
    <footer className="relative w-full bg-[#020408] text-white overflow-hidden pt-24 pb-12 border-t border-white/5">
      
      {/* 1. RESTAURADO: Background Glows (Brillos de fondo) */}
    

      {/* 2. Contenedor con z-index relativo para estar ENCIMA del fondo */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        
        {/* TOP SECTION: CTA & CONTACT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          
          {/* Left: Headline & Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              ¿Listo para escalar tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                siguiente nivel?
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-md font-light">
              Hablemos sobre cómo podemos estructurar, optimizar y potenciar tu operación. Sin compromisos.
            </p>
            
            <div className="flex flex-col gap-6">
                <a href="mailto:contacto@hockeystick.mx" className="group flex items-center gap-4 text-sm text-slate-300 hover:text-white transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                        <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium">contacto@hockeystick.mx</span>
                </a>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <span className="font-medium">CDMX, México</span>
                </div>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <div className="relative">
            {/* Glow específico detrás del formulario */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-[2rem] blur-2xl -z-10" />
            
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0A0F1D]/80 p-8 sm:p-10 backdrop-blur-md shadow-2xl">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Tu nombre" 
                      className="w-full rounded-xl border border-white/10 bg-[#050A15] px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-blue-500/50 focus:bg-[#081020] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="correo@empresa.com" 
                      className="w-full rounded-xl border border-white/10 bg-[#050A15] px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-blue-500/50 focus:bg-[#081020] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Mensaje</label>
                    <textarea 
                      id="message"
                      rows={3}
                      placeholder="Cuéntanos brevemente sobre tu proyecto..." 
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#050A15] px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-blue-500/50 focus:bg-[#081020] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                </div>

                <button type="button" className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-4 text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                  Enviar Mensaje
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                 {/* Logo Placeholder */}
                 <img src="/hsmx.png" alt="HockeyStick MX" className="h-8 w-auto brightness-0 invert" />
              </Link>
              <p className="text-sm text-slate-500 mb-6 max-w-xs font-light">
                Impulsando el ecosistema emprendedor con estrategias de alto impacto y tecnología de vanguardia.
              </p>

             <div className="flex gap-3">
               {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                   <Icon className="h-4 w-4" />
                 </a>
               ))}  
             </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              {["Nosotros", "Casos de Éxito", "Carreras", "Blog"].map(link => (
                <li key={link}><Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300">-</span>{link}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Soluciones</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              {["Consultoría", "Aceleración", "Incubación", "Fondos"].map(link => (
                <li key={link}><Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300">-</span>{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              {["Privacidad", "Términos", "Cookies"].map(link => (
                <li key={link}><Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1 group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300">-</span>{link}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: COPYRIGHT & POWERED BY RMS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 pb-8 md:pb-0">
          
          {/* IZQUIERDA: Powered by RMS */}
          <a 
            href="https://www.rmsindustries.io" 
            target="_blank"
            className="group order-2 md:order-1 flex items-center gap-3 rounded-full border border-white/5 bg-[#050A15] pr-5 pl-2 py-1.5 transition-all hover:border-white/10 hover:bg-[#081020]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-400">
               {/* Logo invertido para que se vea bien sobre fondo naranja/oscuro */}
               <img src="/rms.svg" alt="RMS" className="h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity invert brightness-0" />
            </div>
            <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold leading-none mb-0.5">Powered by</span>
                <span className="text-[10px] font-bold text-slate-300 group-hover:text-white leading-none">RMS Industries</span>
            </div>
          </a>

          {/* DERECHA: Copyright */}
          <p className="text-xs text-slate-600 font-medium order-1 md:order-2 md:text-right md:pr-24">
            &copy; {new Date().getFullYear()} HockeyStick MX. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  )
}