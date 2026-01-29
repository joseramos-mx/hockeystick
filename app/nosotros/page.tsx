"use client"

import React, { useRef } from "react" // 1. Importamos useRef
import { Play, ArrowRight, Target, Users, Zap, Award } from "lucide-react"
import { Navbar } from "../components/Navbar" 
import { Footer } from "../components/Footer" 

export default function AboutPage() {
  // 2. Creamos la referencia para la sección del video
  const videoSectionRef = useRef<HTMLDivElement>(null)

  // 3. Función para hacer scroll
  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-100 blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-100 blur-[100px] mix-blend-multiply" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 sm:pt-40">
        
        {/* --- 1. HERO SECTION --- */}
        <div className="container mx-auto px-6 lg:px-8 mb-20 lg:mb-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-8 uppercase tracking-wider">
              Nuestra Esencia
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              No somos una agencia. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Somos aceleradores.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Transformamos el potencial de MyPymes y Startups en resultados exponenciales medibles.
            </p>
            
            {/* 4. Botón con acción de Scroll */}
            <button 
                onClick={scrollToVideo}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-base font-bold text-white transition-all hover:bg-slate-800 hover:ring-4 hover:ring-slate-200"
            >
              <Play className="h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
              Ver video manifiesto
            </button>
          </div>
        </div>

        {/* --- 2. VIDEO / IMAGEN PRINCIPAL (Inmersivo) --- */}
        {/* 5. Asignamos la ref aquí y aumentamos el ancho a w-[95%] */}
        <div ref={videoSectionRef} className="w-full flex justify-center mb-32 px-2 sm:px-6">
            <div className="relative w-full max-w-[95%] xl:max-w-[1600px] aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                
                {/* Imagen/Video */}
                <img 
                    src="/bg.png" 
                    alt="HockeyStick MX Team" 
                    className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Overlay Oscuro para legibilidad */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="group/btn relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-blue-600 shadow-lg">
                        <Play className="h-10 w-10 sm:h-12 sm:w-12 ml-1 fill-current" />
                        <span className="absolute -bottom-10 sm:-bottom-12 text-sm sm:text-base font-medium opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 tracking-widest uppercase text-white drop-shadow-md">
                            Ver Manifiesto
                        </span>
                    </button>
                </div>
            </div>
        </div>

        {/* --- 3. HISTORIA & MISIÓN (Grid Layout) --- */}
        <section className="container mx-auto px-6 lg:px-8 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Texto */}
                <div className="prose prose-lg prose-slate text-slate-600">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">La historia detrás del crecimiento</h3>
                    <p>
                        HockeyStick MX nació de una observación crítica: muchas empresas en México tienen productos increíbles, pero carecen de la estructura para escalar. No les falta talento, les falta metodología.
                    </p>
                    <p>
                        Fundada por expertos con más de 27 años en la industria, decidimos crear un ecosistema donde la consultoría estratégica, la tecnología y el capital se encuentran.
                    </p>
                    <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8 not-italic bg-blue-50/50 rounded-r-xl">
                        <p className="text-xl font-medium text-slate-900">
                            "Nuestro objetivo no es solo asesorar, es intervenir para garantizar que la curva de crecimiento se convierta en un palo de hockey."
                        </p>
                    </blockquote>
                    <p>
                        Hoy, somos el socio estratégico de Startups que buscan convertirse en Unicornios y de PyMES que desean institucionalizarse y expandirse globalmente.
                    </p>
                </div>

                {/* Stats / Visuals */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center flex flex-col items-center justify-center h-64 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-5xl font-extrabold text-blue-600 mb-2">27+</span>
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Años de Experiencia</span>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center flex flex-col items-center justify-center h-64 shadow-xl text-white mt-8 lg:mt-0">
                        <span className="text-5xl font-extrabold text-white mb-2">10x</span>
                        <span className="text-sm font-bold text-white/80 uppercase tracking-wider">ROI Promedio</span>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center flex flex-col items-center justify-center h-64 shadow-sm mt-[-2rem] lg:mt-0">
                         <Target className="h-12 w-12 text-blue-600 mb-4" />
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Enfoque en Resultados</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center justify-center h-64 shadow-sm mt-8">
                         <Users className="h-12 w-12 text-slate-900 mb-4" />
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Red de Mentores</span>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 4. NUESTROS PILARES --- */}
        <section className="bg-slate-50 py-24 border-y border-slate-100">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué somos diferentes?</h2>
                    <p className="text-lg text-slate-600">No seguimos el manual tradicional de consultoría. Creamos nuestras propias reglas basadas en metodologías exponenciales.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Zap,
                            title: "Metodología Ágil",
                            desc: "Implementamos Design Thinking, Lean Startup y Growth Hacking para movernos rápido y validar hipótesis."
                        },
                        {
                            icon: Award,
                            title: "Certificación Global",
                            desc: "Nuestros procesos están respaldados por metodologías de Wharton, Cambridge y estándares internacionales."
                        },
                        {
                            icon: Target,
                            title: "Garantía de Resultados",
                            desc: "No vendemos horas de consultoría, vendemos hitos alcanzados: ventas, utilidades y valor de empresa."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- 5. CTA FINAL --- */}
        <section className="container mx-auto px-6 lg:px-8 mt-32 mb-20">
            <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden px-6 py-24 sm:px-12 sm:py-32 text-center">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                        ¿Listo para escalar tu empresa?
                    </h2>
                    <p className="text-lg text-slate-300 mb-10">
                        Hablemos sobre cómo podemos aplicar nuestra metodología en tu negocio hoy mismo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold hover:bg-blue-50 transition-colors">
                            Agendar Diagnóstico
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}