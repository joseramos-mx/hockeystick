import Image from "next/image";
import HeroSection from "./components/Hero";
import { PartnerSection } from "./components/Partner";
import { ProblemSection } from "./components/Resolve";
import { BusinessShowcase } from "./components/Showcase";
import { FooterDark } from "./components/Footer";
import { LogoGrids } from "./components/Grid";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-white font-sans">
     <HeroSection/>
     <PartnerSection/>
     <ProblemSection/>
     
     <BusinessShowcase/>
     <LogoGrids
  eyebrow="Clientes satisfechos"
  title="Empresas que confían en nosotros"
  logos={[
    { name: "GrayGridss", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconss", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIs", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsq", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsq", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIq", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsf", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsf", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIf", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsr", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsr", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIr", src: "/logoipsum-414.svg", href: "#" },
    
    // agrega los que quieras...
  ]}
  theme="light"
/>
<LogoGrids
  eyebrow="Nuestros Formadores"
  title="Nuestra capacitación está respaldada por"
  logos={[
    { name: "GrayGridss", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconss", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIs", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsq", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsq", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIq", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsf", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsf", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIf", src: "/logoipsum-414.svg", href: "#" },
        { name: "GrayGridsr", src: "/logoipsum-414.svg", href: "#" },
    { name: "Lineiconsr", src: "/logoipsum-414.svg", href: "#" },
    { name: "Ayro UIr", src: "/logoipsum-414.svg", href: "#" },
    
    // agrega los que quieras...
  ]}
  theme="light"
/>
     <FooterDark/>
    </div>
  );
}
