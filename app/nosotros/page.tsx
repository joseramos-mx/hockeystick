"use client"

import React from "react"
import { Play } from "lucide-react"
// Asumiendo que tienes estos componentes ya creados en sus archivos:
import { Navbar } from "../components/Navbar" // Asegúrate de importar tu Navbar
import { Footer } from "../components/Footer" // Asegúrate de importar tu Footer
import BlurText from "../components/BlurText" // Si quieres usar el efecto de texto

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white text-white font-sans selection:bg-blue-500/30">
      
      {/* Background Gradients (Mismo estilo que Home para continuidad) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* 1. Header / Navbar */}
      {/* Nota: Si ya tienes el Navbar en tu layout.tsx, borra esta línea */}
      <Navbar/>
      <main className="relative z-10 pt-32 pb-20 sm:pt-40">
        <div className="container mx-auto px-6 lg:px-8">
          
          {/* 2. Sección Principal: Título + Video */}
          <div className="mx-auto max-w-5xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-black/70 backdrop-blur-md mb-6">
              <span>Sobre Nosotros</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-8">
              No somos una agencia. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Somos aceleradores.
              </span>
            </h1>

            {/* VIDEO CONTAINER */}
            <div className="relative mt-12 w-full aspect-video rounded-3xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden group">
              {/* Glow detrás del video */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              {/* Video Placeholder o Iframe */}
              <div className="relative h-full w-full bg-black flex items-center justify-center">
                {/* Aquí iría tu tag <video> o <iframe> real. 
                    Ejemplo con imagen poster y botón play falso: */}
                <img 
                    src="/bg.png" // Usa una imagen tuya aquí
                    alt="Video Cover" 
                    className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay oscuro */}
                
                <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black">
                    <Play className="h-8 w-8 ml-1 fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Sección de Texto (Manifiesto) */}
          <div className="mx-auto max-w-3xl mt-24 sm:mt-32">
            <div className="prose prose-lg prose-invert mx-auto">
              <h3 className="text-2xl font-semibold text-black mb-6">
                La historia detrás de HSMX
              </h3>
              
              <p className="text-lg text-black/70 leading-relaxed mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non inventore temporibus illo maxime, amet itaque odit culpa impedit quod perferendis ipsum ullam! Numquam tenetur illo culpa ipsa, quam sunt.              </p>

              <p className="text-lg text-black/70 leading-relaxed mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non inventore temporibus illo maxime, amet itaque odit culpa impedit quod perferendis ipsum ullam! Numquam tenetur illo culpa ipsa, quam sunt.              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-10 italic text-xl text-black font-medium bg-white/5 rounded-r-xl">
                "lorem"
              </blockquote>

              <p className="text-lg text-black/70 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente non inventore temporibus illo maxime, amet itaque odit culpa impedit quod perferendis ipsum ullam! Numquam tenetur illo culpa ipsa, quam sunt.              </p>
            </div>
            
            {/* Firma o Cierre */}
            <div className="mt-16 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src="https://placehold.co/100x100" alt="Fundador" className="h-full w-full object-cover"/>
                </div>
                <div>
                    <div className="text-black font-semibold">El equipo de HockeyStick MX</div>
                    <div className="text-sm text-black/50">CDMX</div>
                </div>
            </div>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      {/* Nota: Si ya tienes el Footer en tu layout.tsx, borra esta línea */}
      <Footer />
      
    </div>
  )
}