"use client"

import React, { useRef } from "react"
import { Play, ArrowRight, Target, Users, Zap, Award, ChevronDown } from "lucide-react"
import { Navbar } from "../components/Navbar" 
import { Footer } from "../components/Footer" 

export default function AboutPage() {
  const videoSectionRef = useRef<HTMLDivElement>(null)

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    // Base blanca limpia
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      <Navbar />

      <main className="relative z-10 pt-24 pb-20 sm:pt-32">
        
        {/* --- 1. HERO SECTION (Minimalista & Editorial) --- */}
        <div className="container mx-auto px-6 lg:px-12 mb-24 lg:mb-32">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
             <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-8">
               Nuestra Esencia
             </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
              No somos una agencia. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
                Somos aceleradores.
              </span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mt-12">
                <p className="text-xl sm:text-2xl text-slate-500 max-w-2xl leading-relaxed font-light">
                  Transformamos el potencial de MyPymes y Startups en resultados exponenciales medibles a través de una metodología propietaria.
                </p>

                <button 
                  onClick={scrollToVideo}
                  className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:text-blue-600 self-center lg:self-auto"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all group-hover:scale-110 group-hover:border-blue-200 group-hover:shadow-md">
                     <Play className="h-5 w-5 fill-slate-900 transition-colors group-hover:fill-blue-600" />
                  </div>
                  <span>Ver Manifiesto</span>
                </button>
            </div>
          </div>
        </div>

        {/* --- 2. VIDEO / IMAGEN PRINCIPAL (Cinemático) --- */}
        <div ref={videoSectionRef} className="w-full flex justify-center mb-32 px-4 sm:px-6 lg:px-12">
            <div className="relative w-full max-w-[1400px] aspect-video sm:aspect-[21/9] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group bg-slate-100">
                {/* Imagen */}
                <img 
                  src="/bg.png" 
                  alt="HockeyStick MX Team" 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                
                {/* Overlay Gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Play Button Overlay (Solo visible en hover para limpieza, o siempre visible sutilmente) */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                </div>
            </div>
        </div>

        {/* --- 3. HISTORIA & MISIÓN (Layout Asimétrico) --- */}
        <section className="container mx-auto px-6 lg:px-12 mb-32 lg:mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left: Stats Grid */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {/* Stat 1 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] flex flex-col items-start justify-between aspect-square transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 border border-transparent hover:border-slate-100">
                            <span className="text-4xl sm:text-5xl font-medium text-blue-600">27+</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-auto">Años de <br/>Experiencia</span>
                        </div>
                        {/* Stat 2 (Dark) */}
                        <div className="bg-[#020408] p-6 sm:p-8 rounded-[2rem] flex flex-col items-start justify-between aspect-square shadow-2xl text-white mt-8 lg:mt-12">
                            <span className="text-4xl sm:text-5xl font-medium text-white">10x</span>
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest mt-auto">ROI <br/>Promedio</span>
                        </div>
                        {/* Stat 3 */}
                        <div className="bg-white p-6 sm:p-8 rounded-[2rem] flex flex-col items-start justify-between aspect-square border border-slate-200 shadow-sm lg:-mt-12">
                             <Target className="h-8 w-8 text-slate-900" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-auto">Resultados <br/>Tangibles</span>
                        </div>
                         {/* Stat 4 */}
                        <div className="bg-blue-50 p-6 sm:p-8 rounded-[2rem] flex flex-col items-start justify-between aspect-square border border-blue-100">
                             <Users className="h-8 w-8 text-blue-600" />
                            <span className="text-xs font-bold text-blue-600/60 uppercase tracking-widest mt-auto">Red de <br/>Mentores</span>
                        </div>
                    </div>
                </div>

                {/* Right: Narrative */}
                <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10 lg:sticky lg:top-24">
                    <h3 className="text-3xl sm:text-4xl font-medium text-slate-900 mb-8 leading-tight">
                        La historia detrás del <br/> crecimiento exponencial.
                    </h3>
                    
                    <div className="prose prose-lg prose-slate text-slate-500 font-light">
                        <p className="mb-6">
                            HockeyStick MX nació de una observación crítica: muchas empresas en México tienen productos increíbles, pero carecen de la estructura para escalar. <strong className="font-medium text-slate-900">No les falta talento, les falta metodología.</strong>
                        </p>
                        <p className="mb-8">
                            Fundada por expertos con más de 27 años en la industria, decidimos crear un ecosistema donde la consultoría estratégica, la tecnología y el capital se encuentran.
                        </p>
                        
                        <div className="relative pl-8 py-2 mb-10">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
                            <p className="text-xl sm:text-2xl font-medium text-slate-900 italic leading-relaxed">
                                "Nuestro objetivo no es solo asesorar, es intervenir para garantizar que la curva de crecimiento se convierta en un palo de hockey."
                            </p>
                        </div>
                        
                        <p>
                            Hoy, somos el socio estratégico de Startups que buscan convertirse en Unicornios y de PyMES que desean institucionalizarse y expandirse globalmente.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 4. NUESTROS PILARES (Tarjetas Limpias) --- */}
        <section className="bg-slate-50/50 py-24 sm:py-32 border-y border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 mb-6">¿Por qué somos diferentes?</h2>
                    <p className="text-lg text-slate-500 font-light max-w-2xl">
                        No seguimos el manual tradicional de consultoría. Creamos nuestras propias reglas basadas en metodologías exponenciales y agilidad real.
                    </p>
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
                        <div key={idx} className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        
      </main>

      <Footer />
    </div>
  )
}