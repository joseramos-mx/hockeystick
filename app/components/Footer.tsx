"use client"

import React from "react"
import { Instagram, Linkedin, Twitter, Send, MapPin, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    // IMPORTANTE: 'pb-24' añade espacio extra abajo para que el botón flotante no tape nada
    <footer className="relative w-full bg-[#050505] text-white overflow-hidden pt-20 pb-3 border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-red-900/10 blur-[128px] pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-8">
        
        {/* TOP SECTION: CTA & CONTACT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* Left: Headline & Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              ¿Listo para escalar tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                siguiente nivel?
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-md">
              Hablemos sobre cómo podemos estructurar, optimizar y potenciar tu operación. Sin compromisos.
            </p>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <Mail className="h-4 w-4" />
                    </div>
                    <span>contacto@hockeystick.mx</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <MapPin className="h-4 w-4" />
                    </div>
                    <span>CDMX, México</span>
                </div>
            </div>
          </div>

          {/* Right: Simple Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-white/50">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Tu nombre" 
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-white/50">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="tucorreo@empresa.com" 
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-white/50">Mensaje</label>
                  <textarea 
                    id="message"
                    rows={3}
                    placeholder="Cuéntanos brevemente sobre tu proyecto..." 
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
              </div>

              <button type="button" className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3.5 text-sm font-bold hover:bg-gray-200 transition-all active:scale-[0.98]">
                Enviar Mensaje
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                 {/* Asegúrate de que esta imagen exista en /public/hsmx.png */}
                 <div className="flex items-center justify-start font-bold text-white">
                    <img src="/hsmx.png" alt="HockeyStick MX" className="h-8 w-auto object-contain" />
                 </div>            
              </div>

             <div className="flex gap-4">
               {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white hover:text-black transition-all">
                   <Icon className="h-4 w-4" />
                 </a>
               ))}  
             </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {["Nosotros", "Carreras", "Blog", "Contacto"].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
             <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {["Privacidad", "Términos", "Cookies"].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: COPYRIGHT & POWERED BY RMS */}
        <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-8 pt-8 border-t border-white/5">
          <p className="text-xs text-white/40 order-2 md:order-1">
            &copy; {new Date().getFullYear()} HockeyStick MX. Todos los derechos reservados.
          </p>

          <a 
            href="https://www.rmsindustries.io" 
            target="_blank"
            className="group order-1 md:order-2 flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 transition-colors hover:bg-white/5"
          >
            <span className="text-[10px] uppercase tracking-wider text-white/40 group-hover:text-white/60 transition-colors">
              Powered by
            </span>
            <span className="flex items-center justify-center">
              {/* Asegúrate de que esta imagen exista en /public/rms.svg */}
              <img src="/rms.svg" alt="RMS" className="h-8 w-8 opacity-80 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
          </a>
        </div>

      </div>
    </footer>
  )
}