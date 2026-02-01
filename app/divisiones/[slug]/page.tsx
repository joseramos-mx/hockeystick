"use client"

import React from "react"
import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/business-data"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { CheckCircle2, Zap, ShieldCheck, ArrowRight, Activity, BarChart3, Fingerprint, Layers } from "lucide-react"
import Link from "next/link"

// --- PALETA DE COLORES DINÁMICA ---
// Definimos una paleta sofisticada para rotar entre los elementos
const colorPalette = [
  { // Azul (Índice 0)
    lightBg: "bg-blue-50", lightText: "text-blue-600", lightBorder: "border-blue-100",
    darkBg: "bg-blue-950/30", darkText: "text-blue-400", darkBorder: "border-blue-500/30", darkGlow: "shadow-blue-500/20"
  },
  { // Violeta (Índice 1)
    lightBg: "bg-violet-50", lightText: "text-violet-600", lightBorder: "border-violet-100",
    darkBg: "bg-violet-950/30", darkText: "text-violet-400", darkBorder: "border-violet-500/30", darkGlow: "shadow-violet-500/20"
  },
  { // Cian (Índice 2)
    lightBg: "bg-cyan-50", lightText: "text-cyan-600", lightBorder: "border-cyan-100",
    darkBg: "bg-cyan-950/30", darkText: "text-cyan-400", darkBorder: "border-cyan-500/30", darkGlow: "shadow-cyan-500/20"
  },
  { // Esmeralda (Índice 3)
    lightBg: "bg-emerald-50", lightText: "text-emerald-600", lightBorder: "border-emerald-100",
    darkBg: "bg-emerald-950/30", darkText: "text-emerald-400", darkBorder: "border-emerald-500/30", darkGlow: "shadow-emerald-500/20"
  },
  { // Naranja/Ámbar (Índice 4)
    lightBg: "bg-orange-50", lightText: "text-orange-600", lightBorder: "border-orange-100",
    darkBg: "bg-orange-950/30", darkText: "text-orange-400", darkBorder: "border-orange-500/30", darkGlow: "shadow-orange-500/20"
  },
];

// Función auxiliar para obtener el color basado en el índice de forma cíclica
const getColor = (i: number) => colorPalette[i % colorPalette.length];


export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const service = getServiceBySlug(slug)

  if (!service) {
    return notFound()
  }

  const logoMap: Record<string, string> = {
    "hockeystick-mx": "/hsmxb.png", 
    "aceleradora-exponencial": "/logos/agileinnovation.png",
    "incubadora-exponencial": "/logos/job shop.png",
    "empresas-unicornio": "/logos/unicornio.png",
    "fondos-y-ma": "/logos/angel.png",
    "universidad-hockeystick": "/logos/universidad.png",
    "mkt-digital-hub": "/logos/digitalhub.png",
    "swat": "/logos/swat.png",
  }

  const logoSrc = logoMap[slug] || "/job shop.png"

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* --- 1. HERO SECTION (Logo Protagonista) --- */}
      <section className="relative pt-32 pb-16 sm:pt-40 lg:pb-32 overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-8">
               <Layers className="h-3.5 w-3.5 text-blue-500" />
               Solución Especializada
            </div>
            
            {/* Título Principal */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
              {service.title}
            </h1>
            
            {/* Descripción */}
            <p className="text-xl sm:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              {service.shortDesc}
            </p>

            {/* --- LOGO PROTAGONISTA CON "HALO" --- */}
            <div className="relative flex justify-center mb-16 group">
                {/* El "Halo" de luz detrás del logo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-indigo-50 to-cyan-100 blur-[80px] opacity-70 rounded-full transform scale-150 z-0 pointer-events-none group-hover:scale-175 transition-transform duration-700" />
                
                {/* El contenedor del logo tipo "Glassmorphism" */}
                <div className="relative z-10 h-32 sm:h-40 w-auto p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] ring-1 ring-white/60 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                    <img 
                        src={logoSrc} 
                        alt={`${service.title} Logo`}
                        className="h-full w-auto object-contain drop-shadow-sm" 
                    />
                </div>
            </div>

            <Link href="/contacto">
              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#020408] text-white px-8 py-4 text-sm font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                Consultar disponibilidad 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM & THE SOLUTION --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Columna Izquierda: Editorial (Qué es) */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-medium text-slate-900 mb-8 flex items-center gap-3">
                <Activity className="h-7 w-7 text-blue-600" />
                El desafío actual
              </h2>
              <div className="prose prose-lg prose-slate text-slate-500 font-light leading-relaxed">
                 <p>{service.whatIs}</p>
                 <p className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-medium text-slate-700">
                    Muchas empresas se estancan aquí. Nosotros proponemos un enfoque radicalmente diferente basado en datos y ejecución rápida.
                 </p>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Oscura (Solución) */}
            <div className="relative rounded-[2.5rem] bg-[#0A0F1D] p-8 sm:p-12 text-white overflow-hidden shadow-2xl shadow-blue-900/20">
               {/* Decoración interna */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="relative z-10">
                  <h2 className="text-2xl font-medium mb-10 flex items-center gap-3">
                    <Zap className="h-7 w-7 text-yellow-400 fill-yellow-400/20" />
                    Lo que resolvemos
                  </h2>
                  <ul className="space-y-6">
                    {service.whatItSolves.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors duration-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-300 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-300 font-light text-lg leading-snug group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. DIFERENCIADORES (Colores Distintos) --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-medium text-slate-900 mb-4">Factor Diferencial</h2>
             <p className="text-slate-500 font-light">¿Por qué las empresas líderes eligen esta solución?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.differentiators.map((diff, i) => {
              const colors = getColor(i); // Obtenemos colores según el índice
              return (
              <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Barra de color superior */}
                <div className={`absolute top-0 left-0 w-full h-1 ${colors.lightBg.replace('bg-', 'bg-gradient-to-r from-')} via-white to-white`} />
                
                {/* Número con color dinámico */}
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 font-bold text-lg border transition-colors ${colors.lightBg} ${colors.lightText} ${colors.lightBorder} group-hover:scale-110`}>
                  0{i + 1}
                </div>
                <h3 className="font-medium text-xl mb-3 text-slate-900">{diff.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{diff.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* --- 4. VENTAJAS (Colores Distintos en Iconos) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                 <h2 className="text-3xl font-medium text-slate-900 mb-6 leading-tight">Ventajas Competitivas Inmediatas</h2>
                 <p className="text-slate-500 font-light leading-relaxed mb-8">
                   Al implementar {service.title}, tu organización accede a beneficios diseñados para la escalabilidad y la eficiencia operativa.
                 </p>
                 <div className="h-1 w-20 bg-slate-100 rounded-full"></div>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.advantages.map((adv, i) => {
                  const colors = getColor(i); // Colores dinámicos
                  return (
                  <div key={i} className="group flex items-center gap-5 p-5 rounded-[1.5rem] border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300">
                    {/* Icono con color dinámico */}
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${colors.lightBg} ${colors.lightText} group-hover:scale-110 transition-transform`}>
                       <BarChart3 className="h-5 w-5" />
                    </div>
                    <span className="text-slate-700 font-medium text-base">{adv}</span>
                  </div>
                )})}
              </div>
           </div>
        </div>
      </section>

      {/* --- 5. CÓMO FUNCIONA (Oscuro con Colores Neón Distintos) --- */}
      <section className="py-32 bg-[#020408] text-white relative overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl font-medium text-center mb-24 text-white">Metodología de Implementación</h2>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {/* Línea conectora (Visible solo en desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/10 z-0" />
            
            {service.howItWorks.map((step, i) => {
               const colors = getColor(i); // Colores oscuros dinámicos
               return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                {/* Círculo del paso con glow de color */}
                <div className={`h-20 w-20 rounded-full flex items-center justify-center font-bold text-2xl mb-8 transition-all duration-500 border backdrop-blur-md shadow-lg group-hover:scale-110 ${colors.darkBg} ${colors.darkBorder} ${colors.darkText} ${colors.darkGlow}`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{step.title}</h3>
                <p className="text-sm text-slate-400 max-w-[220px] mx-auto font-light leading-relaxed">{step.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* --- 6. GARANTÍA & FAQ --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Garantía */}
          <div className="rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border border-blue-100/50 p-10 sm:p-20 text-center relative overflow-hidden mb-24 shadow-sm">
             <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
             <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
                 <div className="inline-flex p-4 rounded-2xl bg-white text-blue-600 mb-8 shadow-md shadow-blue-900/5 ring-1 ring-blue-50">
                    <ShieldCheck className="h-10 w-10" />
                 </div>
                 <h2 className="text-2xl font-bold mb-8 text-slate-900">Nuestra Promesa</h2>
                 <p className="text-2xl sm:text-3xl text-slate-800 font-medium leading-relaxed italic style={{ textWrap: 'balance' }}">
                   {service.guarantee}
                 </p>
             </div>
          </div>

          {/* FAQ Minimalista */}
          <div className="max-w-3xl mx-auto">
             <h2 className="text-2xl font-medium text-center mb-12 text-slate-900">Preguntas Frecuentes</h2>
             <div className="space-y-4">
               {service.faqs.map((faq, i) => (
                 <details key={i} className="group rounded-2xl border border-slate-200 bg-white open:bg-slate-50/50 open:border-slate-300 transition-all duration-300">
                   <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 select-none">
                     {faq.question}
                     <span className="ml-4 shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-open:bg-blue-100 group-open:text-blue-600 group-open:rotate-45 transition-all duration-300">
                       <Fingerprint className="h-4 w-4" />
                     </span>
                   </summary>
                   <div className="px-6 pb-8 text-slate-600 font-light leading-relaxed animate-in slide-in-from-top-2">
                     {faq.answer}
                   </div>
                 </details>
               ))}
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}