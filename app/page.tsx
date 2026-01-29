import Image from "next/image";
import { PartnerSection } from "./components/Partner";
import { ProblemSection } from "./components/Resolve";
import { BusinessShowcase } from "./components/Showcase";
import { Footer } from "./components/Footer";
import { LogoGrids } from "./components/Grid";
import ModernHeroSplit from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-white font-sans">
      <ModernHeroSplit/>
      <PartnerSection/>
      <ProblemSection/>
      <BusinessShowcase/>

      {/* SECCIÓN DE TESTIMONIOS GENERALES */}
      <Testimonials 
        data={[
          {
            quote: "Pasamos de tener solo una idea a un negocio en marcha 100% rentable y sólido bajo el método GROW. ",
            author: "Jorge Carballar",
            role: "Dinamita Post",
            image: "people/persona3.jpeg"
          },
          {
            quote: "Muy agradecido. Una experiencia diferente un cambio de ideas, de paradigmas. Un proceso de crecimiento de los colaboradores y del negocio. Una inyección necesaria de energías.",
            author: "Dr. Felipe de Jesús Ramos",
            role: "Fundador de Central Médica Santa Ana y RG Servicios Médicos Integrales",
            image: "people/ramos.jpg"
          },
          {
            quote: "Este programa fue una verdadera revelación, destacando el valor de los valores como la responsabilidad, el respeto y la justicia en el entorno laboral. Aprendí a ser autosuficiente y, al mismo tiempo, a abrirme emocionalmente para trabajar en equipo, ya que las emociones son igual de importantes que los numeros en los negocios. Estos valores, junto con las habilidades adquiridas, me han preparado para liderar con empatía y eficiencia, aspectos cruciales para el éxito en cualquier colaboración.",
            author: "Ing. José Ramos",
            role: "Fundador y CEO de RMS Innovation",
            image: "people/joseramos.jpg"
          },
          {
            quote: "Hockeystick ha sido un verdadero impulsor para el Clan del Diente. Su asesoría sobre empresas ha sido invaluable, ayudándonos a trazar un camino claro hacia el éxito. Gracias a su experiencia y apoyo, hemos podido superar obstáculos y alcanzar nuestros objetivos de crecimiento de manera sorprendente. Su compromiso y dedicación son realmente impresionantes, y estamos agradecidos por tenerlos como socios en nuestro viaje empresarial.",
            author: "Jorge Arguello González",
            role: "Fundador del Clan del Diente y conferencista internacional",
            image: "people/arguello.webp" 
          },
          {
            quote: "Me di cuenta que navegaba sin ningún rumbo o propósito y pensé esto debe de cambiar ya tengo un “porque” necesito a alguien que me ayude con el “cómo” y me platicaron de este entrenamiento y aquí estamos ya tenemos una visión, unas metas, proyectos bien estructurados y sobretodo con una asesoría y mentoria para lograr los objetivos establecidos y mi negocio realmente hoy si está creciendo.",
            author: "TPD. Jorge Flores Simental",
            role: "Dueño fundador del laboratorio Dental Flores",
            image: "people/jorgeflores.jpeg" 
          },

        ]} 
      />

      <section id="clientes">
        <LogoGrids
          eyebrow="Confianza"
          title="Empresas que impulsamos"
          subtitle="Colaboramos con organizaciones líderes para transformar sus sectores."
          logos={[
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



          ]}
        />
      </section>

      <LogoGrids
        eyebrow="Nuestros Formadores"
        title="Nuestra capacitación está respaldada por"
        logos={[
          { name: "Harvard", src: "/formadores/HARVARD.svg" },
          { name: "Cambridge", src: "/formadores/CAMBRIDGE.png" },
          { name: "IPN", src: "/formadores/IPN.webp" },
          { name: "ITAM", src: "/formadores/ITAM.svg" },
          { name: "nasa", src: "/formadores/nasa.jpg" },
          { name: "ods", src: "/formadores/ods.png" },
          { name: "Pachuca", src: "/formadores/pachuca.png" },
          { name: "onudi", src: "/formadores/onudi.png" },
          { name: "onu", src: "/formadores/onu.jpg" },
          { name: "iasp", src: "/formadores/iasp.png" },
        ]}
      />
      
      <Footer/>
    </div>
  );
}