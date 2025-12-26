"use client"

import React, { useState } from "react"
import { ArrowRight, Menu, X, Send, Sparkles } from "lucide-react"
import { InvestmentTeaserCard } from "./Investment-teaser"
import BlurText from "./BlurText";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

type FloatingTeaserProps = {
  defaultOpen?: boolean
}

export function DismissibleInvestmentTeaser({ defaultOpen = true }: FloatingTeaserProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6">
      {open ? (
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-2 -right-2 z-10 inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 backdrop-blur px-2.5 py-2 shadow-sm hover:bg-white transition"
            aria-label="Hide investment teaser"
          >
            <X className="h-4 w-4 text-black/70" />
          </button>

          {/* Your card */}
          <InvestmentTeaserCard compact />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="
            group inline-flex items-center gap-2
            rounded-full border border-black/10 bg-white/90 backdrop-blur
            px-4 py-2.5 shadow-sm
            hover:bg-white transition
          "
          aria-label="Show investment teaser"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-black/80">
            Investment Teaser
          </span>
          <span className="text-xs text-black/50 hidden sm:inline">
            Mostrar
          </span>
        </button>
      )}
    </div>
  )
}

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function FloatingInvestmentTeaser() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6">
          <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6">
      <InvestmentTeaserCard
        title="¡Haz tu investment teaser!"
        description="Un teaser claro y visual para presentar tu proyecto a inversionistas: narrativa, estructura y diseño profesional listo para compartir."
        imageSrc="/investment.png"
        href="#"
      />
    </div>
    </div>
  )
}

export default function HeroFullWidthWithFloatingTeaser() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#070B1C] text-white font-sans">


      {/* Navbar */}
      <header className="pt-6">
        <nav className="w-full px-[clamp(16px,4vw,64px)]">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="text-base md:text-lg font-semibold tracking-tight">
                <img src="hsmx.png" alt="" className="h-7"/>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a className="hover:text-white transition" href="#">Inicio</a>
              <a className="hover:text-white transition" href="#">Nosotros</a>
              <a className="hover:text-white transition" href="#">Servicios</a>
              <a className="hover:text-white transition" href="#">Contacto</a>
            </div>

            <button className="hidden sm:inline-flex rounded-full border border-white/25 bg-green-500/20 px-5 py-2 text-sm text-white/90 hover:bg-green-500/50 transition">
            <Send className="h-4 w-4 mt-0.5 mr-2 items-center"/>
              Whatsapp
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-3 top-3 w-[min(92vw,420px)] rounded-3xl border border-white/10 bg-[#070B1C]/95 backdrop-blur-xl p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Menu</div>
              <button
                className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {["Properties", "Neighborhoods", "About", "Buy / Sell"].map((t) => (
                <a
                  key={t}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-white/85 hover:bg-white/5 hover:text-white transition"
                >
                  {t}
                </a>
              ))}
            </div>

            <button className="mt-4 w-full rounded-2xl border border-white/25 bg-white/10 py-3 text-sm font-medium hover:bg-white/15 transition">
              Contact us
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <main className="pt-8">
        <section className="w-full h-screen">
          <div className="relative overflow-hidden backdrop-blur-xl">

            <div className="relative p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-10 items-center">
                <div>
                  <BlurText
  text="Soluciones para MyPymes"
  delay={10}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-7xl mb-8"
/>

                  <p className="mt-5 max-w-xl text-white/75 text-sm sm:text-base lg:text-lg">
                    Landing pages, sitios web y sistemas que convierten. Diseño premium, implementación rápida y
                    enfoque a resultados.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition">
                      Empezar ahora <ArrowRight className="h-4 w-4" />
                    </button>

                    <button className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
                      Ver casos
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-6 bg-[radial-gradient(closest-side,rgba(136,165,255,0.22),transparent_65%)]" />
                  <div className="relative mx-auto aspect-[16/9] w-full max-w-[820px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img
                      src="/bg.png"
                      alt="Visual"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="flex size-full items-center justify-center bg-[#070B1C] pt-10">
                <Marquee>
                  <MarqueeFade side="left" />
                  <MarqueeFade side="right" />
                  <MarqueeContent>
                    {new Array(10).fill(null).map((_, index) => (
                      <MarqueeItem className="h-32 w-32" key={index}>
                        <img
                          alt={`Placeholder ${index}`}
                          className="overflow-hidden rounded-full"
                          src={`https://placehold.co/64x64?random=${index}`}
                        />
                      </MarqueeItem>
                    ))}
                  </MarqueeContent>
                </Marquee>
            </div>
            </div>
          </div>
        </section>
      </main>

      <DismissibleInvestmentTeaser />
    </div>
  )
}
