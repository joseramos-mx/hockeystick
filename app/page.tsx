import Image from "next/image";
import { PartnerSection } from "./components/Partner";
import { ProblemSection } from "./components/Resolve";
import { BusinessShowcase } from "./components/Showcase";
import { Footer } from "./components/Footer";
import { LogoGrids } from "./components/Grid";
import ModernHeroSplit from "./components/Hero";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-white font-sans">
     <ModernHeroSplit/>
     <PartnerSection/>
     <ProblemSection/>
     <BusinessShowcase/>
     <LogoGrids
  eyebrow="Confianza"
  title="Empresas que impulsamos"
  subtitle="Colaboramos con organizaciones líderes para transformar sus sectores."
  logos={[
    { name: "Empresa 1", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 2", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 3", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 4", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },
    { name: "Empresa 5", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 6", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 7", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 8", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },
    { name: "Empresa 9", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 10", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 11", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 12", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },

  ]}
/>
<LogoGrids
  eyebrow="Nuestros Formadores"
  title="Nuestra capacitación está respaldada por"
  logos={[
    { name: "Empresa 1", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 2", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 3", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 4", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },
    { name: "Empresa 5", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 6", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 7", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 8", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },
    { name: "Empresa 9", src: "https://placehold.co/200x80/transparent/black?text=Logo+1" },
    { name: "Empresa 10", src: "https://placehold.co/200x80/transparent/black?text=Logo+2" },
    { name: "Empresa 11", src: "https://placehold.co/200x80/transparent/black?text=Logo+3" },
    { name: "Empresa 12", src: "https://placehold.co/200x80/transparent/black?text=Logo+4" },

      ]}
/>
     <Footer/>
    </div>
  );
}
