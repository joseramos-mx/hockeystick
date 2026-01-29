"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Send, MapPin, Mail, CheckCircle2, AlertTriangle } from "lucide-react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: conecta aquí tu endpoint (API Route / Server Action / Formspree)
    // Por ahora solo simula envío exitoso:
    setStatus("success")
    setTimeout(() => setStatus("idle"), 3500)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background glows */}


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Navbar/>
        {/* Header */}
        <div className="pt-28 pb-10">


          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
            Hablemos de tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              siguiente nivel
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Déjanos tus datos y un mensaje breve. Respondemos lo antes posible.
          </p>
        </div>

        {/* Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-20">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="text-xl font-semibold">Información</h2>
              <p className="mt-3 text-white/60">
                Para cotizaciones, alianzas o dudas generales.
              </p>

              <div className="mt-8 flex flex-col gap-4">
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

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Tiempos de respuesta
              </h3>
              <p className="mt-3 text-white/60">
                Usualmente respondemos en <span className="text-white/80 font-semibold">24–48 hrs</span>.
              </p>
              <p className="mt-2 text-white/40 text-sm">
                Si es urgente, manda un mensaje breve con “URGENTE” al inicio.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
                <p className="mt-2 text-white/60 text-sm">
                  Solo lo esencial. Nosotros te guiamos.
                </p>
              </div>

              {/* Status */}
              {status !== "idle" && (
                <div
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                    status === "success"
                      ? "bg-green-500/10 text-green-300 border border-green-500/20"
                      : "bg-red-500/10 text-red-300 border border-red-500/20",
                  ].join(" ")}
                >
                  {status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Enviado
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-4 w-4" /> Error
                    </>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-wider text-white/50"
                  >
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-wider text-white/50"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tucorreo@empresa.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-xs font-medium uppercase tracking-wider text-white/50"
                >
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-white/50"
                >
                  Mensaje
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos brevemente sobre tu proyecto..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3.5 text-sm font-bold hover:bg-gray-200 transition-all active:scale-[0.98]"
              >
                Enviar Mensaje
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs text-white/40">
                Al enviar aceptas que te contactemos por email. No hacemos spam.
              </p>
              
            </form>
          </div>
        </section>
        
      </div>
    </main>
  )
}
