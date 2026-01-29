"use client"

import React from "react"
import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/business-data"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { CheckCircle2, Zap, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const service = getServiceBySlug(slug)

  if (!service) {
    return notFound()
  }

  // Mapeo simple de slug a nombre de archivo de logo (Ajusta según tus archivos reales)
  // Si tienes los archivos en public/, la ruta sería /unicornio.png, etc.
  const logoMap: Record<string, string> = {
    "hockeystick-mx": "/hsmxb.png", // Ajusta nombre
    "aceleradora-exponencial": "/logos/agileinnovation.png", // Ejemplo
    "incubadora-exponencial": "/logos/job shop.png", // Ejemplo
    "empresas-unicornio": "/logos/unicornio.png",
    "fondos-y-ma": "/logos/angel.png",
    "universidad-hockeystick": "/logos/universidad.png",
    "mkt-digital-hub": "/logos/digitalhub.png",
    "swat": "/logos/swat.png",

  }

  const logoSrc = logoMap[slug] || "/job shop.png" // Fallback

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 sm:pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 blur-[100px] rounded-full mix-blend-multiply" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 blur-[100px] rounded-full mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700 font-bold mb-6 shadow-sm">
            Línea de Negocio
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            {service.title}
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {service.shortDesc}
          </p>
          <Link href="contacto">
          <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-bold hover:bg-slate-800 hover:ring-4 hover:ring-slate-200 transition-all">
            Consultar disponibilidad 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </Link>
          
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: LOGO DISPLAY (Contenedor de Logos) --- */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">

                {/* Contenedor del Logo */}
                <div className="relative h-24 w-full max-w-[200px] sm:max-w-[250px] flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {/* Usamos img estándar para evitar problemas con Image de Next si no está configurado */}
                    <img 
                        src={logoSrc} 
                        alt={`${service.title} Logo`}
                        className="h-full w-auto object-contain drop-shadow-sm" 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* --- QUE ES & QUE RESUELVE (Grid Split) --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Columna Izquierda: Qué es */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                   <HelpCircle className="h-6 w-6" />
                </div>
                ¿Qué es?
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p>{service.whatIs}</p>
              </div>
            </div>

            {/* Columna Derecha: Qué resuelve */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <Zap className="h-6 w-6" />
                </div>
                ¿Qué resuelve?
              </h2>
              <ul className="space-y-4">
                {service.whatItSolves.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- DIFERENCIADORES --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">¿Qué nos distingue?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.differentiators.map((diff, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{diff.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VENTAJAS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Ventajas Competitivas</h2>
             <div className="grid gap-4">
                {service.advantages.map((adv, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-slate-300 transition-all">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs shrink-0 border border-green-200">
                      {i + 1}
                    </div>
                    <span className="text-slate-700 font-medium text-lg">{adv}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* --- CÓMO FUNCIONA --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-20 text-slate-900">Cómo Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 z-0" />
            
            {service.howItWorks.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-blue-600 font-bold text-xl mb-6 shadow-md ring-1 ring-slate-200">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GARANTÍA --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10 sm:p-16 text-center relative overflow-hidden shadow-sm">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
             <div className="inline-flex p-4 rounded-full bg-white text-blue-600 mb-8 shadow-sm">
                <ShieldCheck className="h-10 w-10" />
             </div>
             
             <h2 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">Garantía de Resultados</h2>
             <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
               "{service.guarantee}"
             </p>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="group rounded-2xl border border-slate-200 bg-slate-50 transition-colors hover:bg-white hover:border-slate-300">
                <div className="p-6 font-semibold text-slate-900 text-lg">{faq.question}</div>
                <div className="px-6 pb-6 text-slate-600 border-t border-slate-200/50 pt-4 mt-1 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}