"use client"

import React from "react"
import Image from "next/image";
import { PartnerSection } from "./components/Partner";
import { ProblemSection } from "./components/Resolve";
import { BusinessShowcase } from "./components/Showcase";
import { Footer } from "./components/Footer";
import { LogoGrids } from "./components/Grid";
import ModernHeroSplit from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { useLanguage } from "./context/Languagecontext"



// --- DATOS ESTÁTICOS (LOGOS) ---
// Estos no necesitan traducción, así que los definimos fuera para limpiar el componente
const CLIENT_LOGOS = [
  { name: "merril", src: "/clientes/merril lynch.jpg" },
  { name: "baker", src: "/clientes/baker.jpeg" },
  { name: "dental flores", src: "/clientes/dentalflores.jpeg" },
  { name: "rms", src: "/clientes/rms.svg" },
  { name: "rms zahn", src: "/clientes/rmszahn.svg" },
  { name: "Netflix", src: "/clientes/netflix.webp" },
  { name: "cmsa", src: "/clientes/cmsa.webp" },
  { name: "italika", src: "/clientes/italika.svg" },
  { name: "salinas", src: "/clientes/salinas.png" },
  { name: "dinamita", src: "/clientes/dinamita.png" },
  { name: "amazon", src: "/clientes/amazon.png" },
  { name: "prime", src: "/clientes/prime.png" },
  { name: "hbo", src: "/clientes/hbo.svg" },
  { name: "disney", src: "/clientes/disneyplus.svg" },
  { name: "alta tecnica dental", src: "/clientes/altatecnica dental.png" },
  { name: "woof", src: "/clientes/woof.svg" },
  { name: "impulsa", src: "/clientes/impulsa.jpeg" },
  { name: "IAN", src: "/clientes/ian.jpeg" },
  { name: "seko", src: "/clientes/seko.png" },
  { name: "biomaussan", src: "/clientes/biomaussan.png" },
]

const FORMADORES_LOGOS = [
  { name: "Wharton", src: "/formadores/Wharton-logo.png" },
  { name: "Cambridge", src: "/formadores/CAMBRIDGE.png" },
  { name: "IPN", src: "/formadores/IPN.webp" },
  { name: "ITAM", src: "/formadores/ITAM.svg" },
  { name: "nasa", src: "/formadores/nasa.jpg" },
  { name: "ods", src: "/formadores/ods.png" },
  { name: "Pachuca", src: "/formadores/pachuca.png" },
  { name: "onudi", src: "/formadores/onudi.png" },
  { name: "onu", src: "/formadores/onu.jpg" },
  { name: "iasp", src: "/formadores/iasp.png" },
]




export default function Home() {
  const { t } = useLanguage()
  return (
    <div className=" min-h-screen items-center justify-center bg-white font-sans">
      <ModernHeroSplit/>
      <PartnerSection/>
      <ProblemSection/>
      <BusinessShowcase/>

      {/* SECCIÓN DE TESTIMONIOS GENERALES */}
      <Testimonials />

      <section id="clientes">
        <LogoGrids
          eyebrow={t.clientsSection.eyebrow}
          title={t.clientsSection.title}
          subtitle={t.clientsSection.subtitle}
          logos={CLIENT_LOGOS}
        />
      </section>

      <LogoGrids
        eyebrow={t.partnersSection.eyebrow}
        title={t.partnersSection.title}
        subtitle={t.partnersSection.subtitle}
        logos={FORMADORES_LOGOS}
      />
      
      <Footer/>
    </div>
  );
}