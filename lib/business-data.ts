// lib/business-data.ts

export type Testimonial = {
  quote: string
  author: string
  role: string
  image: string
}

export type BusinessService = {
  slug: string
  title: string
  shortDesc: string
  heroImage: string
  whatIs: string
  whatItSolves: string[]
  differentiators: { title: string; desc: string }[]
  advantages: string[]
  howItWorks: { step: string; title: string; desc: string }[]
  faqs: { question: string; answer: string }[]
  guarantee: string
  testimonials?: Testimonial[]
}

export const servicesData: BusinessService[] = [
  {
    slug: "hockeystick-mx",
    title: "HockeyStick MX",
    shortDesc: "Socio estratégico para incrementar la competitividad y el valor de MyPymes & Startups.",
    heroImage: "/bg.png",
    whatIs: "Es un socio clave en cada empresa para desarrollar Proyectos, Programas, Implantes, Igualas, Workshops, Labs o Coaching. Apoyamos en la detección de áreas de oportunidad para incrementar el valor de la empresa e institucionalizar procesos.",
    whatItSolves: [
      "Incrementar la competitividad de MyPymes y Startups mexicanas.",
      "Aplicar modelos de negocios optimizados con metodologías modernas.",
      "Generación de mayor valor agregado y fortalecimiento con estándares internacionales.",
      "Capacidad de competir en mercados internacionales.",
      "Atracción de inversión pública y privada."
    ],
    differentiators: [
      { title: "Adaptabilidad", desc: "Técnicas probadas y adaptadas a la economía mexicana." },
      { title: "Especialistas", desc: "Capacidad invaluable de consultores expertos en cada área." },
      { title: "Alianzas", desc: "Colaboración con las mejores instituciones públicas y privadas." },
      { title: "Certificación", desc: "Conocimiento comprobado en esquemas de especialización." }
    ],
    advantages: [
      "Conciencia del estado actual en un ambiente globalizado.",
      "Identificación de áreas potenciales de la empresa.",
      "Calificación comparativa frente a trasnacionales.",
      "Desarrollo de Benchmarking e Indicadores de Gestión.",
      "Acompañamiento integral en cada etapa."
    ],
    howItWorks: [
      { step: "01", title: "Incubación", desc: "Estructura y Forma para Startups." },
      { step: "02", title: "Aceleración", desc: "Reestructura y Nueva Forma para Scale-ups." },
      { step: "03", title: "Digital Hub", desc: "Control de Ventas y Utilidades con Tecnología 4.0." },
      { step: "04", title: "Angel & VC", desc: "Fondos, Financiamientos y Expansión o Venta." }
    ],
    faqs: [
      { question: "¿Qué hace HockeyStick?", answer: "Somos una firma que interviene en la detección de oportunidades para aumentar utilidades y valor de mercado." },
      { question: "¿Hay garantía?", answer: "Sí, garantizamos Ventas, Utilidades y Dividendos." }
    ],
    guarantee: "Garantizamos Ventas, Utilidades y Dividendos.",
    testimonials: [
      {
        quote: "Gracias a HockeyStick logramos atraer la inversión privada que necesitábamos para expandirnos a nivel nacional.",
        author: "Ricardo Mendoza",
        role: "Founder, TechGrow MX",
        image: "https://i.pravatar.cc/150?u=1"
      }
    ]
  },
  {
    slug: "aceleradora-exponencial",
    title: "Aceleradora Exponencial",
    shortDesc: "Diseño de modelos de negocio ágiles para escalar utilidades y expansión.",
    heroImage: "/bg.png",
    whatIs: "Diseñamos modelos de negocios en marcha con técnicas ágiles para exponencializar procesos internos, administración financiera y optimización del personal utilizando metodologías como Design Thinking y Lean Startup.",
    whatItSolves: [
      "Identificamos capacidades y potencialidades internas/externas.",
      "Incentivamos oportunidades de crecimiento y expansión.",
      "Detectamos barreras administrativas y tecnológicas.",
      "Controlamos e incrementamos utilidades y ventas.",
      "Estructuramos bases estratégicas corporativas."
    ],
    differentiators: [
      { title: "Metodologías Ágiles", desc: "Uso de SCRUM, Lean Startup y Growth Hacking." },
      { title: "Experiencia", desc: "Más de 27 años dominando canales de suministro y ventas." },
      { title: "Alianza Tecnológica", desc: "Acceso a investigadores de la Ciudad del Conocimiento." }
    ],
    advantages: [
      "Especialistas certificados internacionalmente.",
      "Procesos ágiles y menos burocráticos.",
      "Valuación de activos tangibles e intangibles.",
      "Instauración de Gobierno Corporativo.",
      "Preparación total para escalabilidad masiva."
    ],
    howItWorks: [
      { step: "01", title: "DAEE", desc: "Diagnóstico de Aceleración: Definición y Planeación." },
      { step: "02", title: "PIAEE", desc: "Programa Integral de Aceleración Empresarial." },
      { step: "03", title: "IMPLANT", desc: "Acompañamiento de un especialista dentro de tu organización." },
      { step: "04", title: "WORKLAB", desc: "Talleres para implementación garantizada de nuevos procesos." }
    ],
    faqs: [
      { question: "¿Es para MIPYMES?", answer: "Sí, adaptamos el programa de aceleración al nivel de madurez de la empresa." },
      { question: "¿Si estoy quebrando puedo participar?", answer: "Podemos realizar un diagnóstico para evaluar viabilidad de rescate." }
    ],
    guarantee: "Entregamos un negocio estructurado con procesos institucionalizados y control de ingresos para el logro de utilidades.",
    testimonials: [
      {
        quote: "El programa IMPLANT cambió nuestra cultura operativa. Ahora somos mucho más eficientes y rentables.",
        author: "Sofía Galván",
        role: "Directora Operativa, Grupo Dental Pro",
        image: "https://i.pravatar.cc/150?u=2"
      }
    ]
  },
  {
    slug: "incubadora-exponencial",
    title: "Incubadora Exponencial",
    shortDesc: "De la idea al negocio rentable: Incubación y estructuración de startups.",
    heroImage: "/bg.png",
    whatIs: "Incubación de Startups y MyPymes desde el desarrollo de la idea, prototipo y MVP hasta la puesta en marcha de la versión 1.0 con búsqueda de socios y matriz de lanzamiento.",
    whatItSolves: [
      "Resuelve el arranque de proyectos desde una idea.",
      "Materializa ideas en proyectos viables de inversión.",
      "Exponencializa proyectos para necesidades de mercado.",
      "Evita la mortandad temprana de emprendedores."
    ],
    differentiators: [
      { title: "Método GROW", desc: "Metodología propia para crecimiento estructurado." },
      { title: "Acompañamiento", desc: "Empowerment constante utilizando técnicas de Job Shop." }
    ],
    advantages: [
      "Herramientas de crecimiento certificadas.",
      "Especialistas enfocados en logros de resultados.",
      "Propuesta de valor real validada en el mercado."
    ],
    howItWorks: [
      { step: "01", title: "Idea & Plan", desc: "Estructuración inicial y modelo Canvas." },
      { step: "02", title: "Prototipado", desc: "Desarrollo de MVP y prueba de concepto." },
      { step: "03", title: "Lanzamiento", desc: "Puesta en marcha de la versión 1.0 rentable." }
    ],
    faqs: [
      { question: "¿Qué gano yo?", answer: "Un negocio rentable, sólido y líquido desde su creación." }
    ],
    guarantee: "Entregamos un negocio en marcha 100% rentable, sólido y líquido partiendo de una idea.",
    testimonials: [
      {
        quote: "Llegué con una idea y salí con una empresa operando y facturando. El método GROW funciona.",
        author: "Marco Aurelio",
        role: "Fundador de Acadee",
        image: "https://i.pravatar.cc/150?u=3"
      }
    ]
  },
  {
    slug: "empresas-unicornio",
    title: "Empresas Unicornio",
    shortDesc: "Modelos de escalamiento para competir en el ecosistema exponencial.",
    heroImage: "/bg.png",
    whatIs: "Diseño de modelos de negocio capaces de competir con empresas unicornio usando metodologías de la Universidad de Wharton y herramientas de Organizaciones Exponenciales (ExO).",
    whatItSolves: [
      "Auditoría del modelo de negocios para supervivencia.",
      "Detección de barreras cognitivas y tecnológicas.",
      "Resolución de errores comunes en el escalamiento masivo."
    ],
    differentiators: [
      { title: "Wharton & Cambridge", desc: "Técnicas de las mejores universidades del mundo." },
      { title: "Método ExO", desc: "Estructura para construcción de organizaciones exponenciales." }
    ],
    advantages: [
      "Transformación a procesos internacionales.",
      "Preparación para escalabilidad exponencial.",
      "Alineación de recursos para consolidación de mercado."
    ],
    howItWorks: [
      { step: "01", title: "DSEE", desc: "Diagnóstico de la Startup Exponencial." },
      { step: "02", title: "PISEE", desc: "Programa Integral de Startup Exponencial." },
      { step: "03", title: "Scale", desc: "Implementación garantizada de la escalabilidad." }
    ],
    faqs: [
      { question: "¿Quiénes pueden participar?", answer: "Startups con alto potencial que busquen valoraciones de mercado masivas." }
    ],
    guarantee: "Entregamos una Startup estructurada en clientes, gestión y management para consolidación unicornio.",
    testimonials: [
      {
        quote: "La visión de Wharton aplicada a nuestro mercado local nos permitió ver oportunidades de escala que antes ignorábamos.",
        author: "Elena Vasquez",
        role: "CEO, InnovaHealth",
        image: "https://i.pravatar.cc/150?u=4"
      }
    ]
  },
  {
    slug: "fondos-y-ma",
    title: "Fondos de Inversión y M&A",
    shortDesc: "Estructuración financiera para levantar capital, fusiones o adquisiciones.",
    heroImage: "/bg.png",
    whatIs: "Estructuración de modelos de negocios para apoyo de fondos Ángel o Venture Capital. Asesoría por especialistas CFA para fusiones, adquisiciones (M&A) y estrategias de Crowdfunding.",
    whatItSolves: [
      "Acercar proyectos de inversión a capital privado.",
      "Resolver temas de fondeo gubernamental y privado.",
      "Implementar estructuras certificables para aprobación de créditos."
    ],
    differentiators: [
      { title: "Especialistas CFA", desc: "Expertos certificados en capital privado." },
      { title: "Fondo Propio", desc: "Acceso al cluster de inversión propio de HockeyStick MX." }
    ],
    advantages: [
      "Certificación internacional de viabilidad financiera.",
      "Metodologías financieras enfocadas 100% en crecimiento."
    ],
    howItWorks: [
      { step: "01", title: "Búsqueda", desc: "Localización ejecutiva de fondeo por fondos de inversión." },
      { step: "02", title: "Estrategia", desc: "Consultoría empresarial para compra o fusión (M&A)." }
    ],
    faqs: [
      { question: "¿Dan resultados?", answer: "Preparamos la empresa para que sea financieramente atractiva y auditable para cualquier inversionista." }
    ],
    guarantee: "Entregamos una empresa preparada financieramente para ser auditada, comprada o fusionada.",
    testimonials: [
      {
        quote: "La transparencia financiera que logramos nos permitió cerrar nuestra primera ronda de capital semilla en tiempo récord.",
        author: "Daniel Orozco",
        role: "CFO, Fintech Solutions",
        image: "https://i.pravatar.cc/150?u=5"
      }
    ]
  },
  {
    slug: "universidad-hockeystick",
    title: "Universidad HockeyStick",
    shortDesc: "Formación disruptiva para empresarios y el ecosistema emprendedor.",
    heroImage: "/bg.png",
    whatIs: "Espacio de enseñanza y capacitación con modelos disruptivos enfocados en la generación de riqueza y el mejor desempeño empresarial.",
    whatItSolves: [
      "Necesidad de capacitación lúdica y práctica.",
      "Desarrollo de habilidades para entornos cambiantes.",
      "Dotar de conocimiento de valor estructurado al ecosistema."
    ],
    differentiators: [
      { title: "Lúdico", desc: "Educación divertida pero con rigor internacional." },
      { title: "Red de Alianzas", desc: "Conexión con universidades nacionales e internacionales." }
    ],
    advantages: [
      "Especialistas entrenadores certificados.",
      "Institucionalización de la capacitación corporativa."
    ],
    howItWorks: [
      { step: "01", title: "WorkLabs", desc: "Laboratorios de trabajo práctico e intensivo." },
      { step: "02", title: "Diplomados", desc: "Formación académica disruptiva de alto nivel." }
    ],
    faqs: [
      { question: "¿Quién puede participar?", answer: "Cualquier integrante del ecosistema emprendedor buscando crecimiento." }
    ],
    guarantee: "Garantizamos la obtención del conocimiento y la implementación de todas las herramientas aprendidas.",
    testimonials: [
      {
        quote: "No es la típica teoría de salón. Aquí vienes a aplicar herramientas que usas al día siguiente en tu negocio.",
        author: "Patricia Luviano",
        role: "Empresaria, Sector Textil",
        image: "https://i.pravatar.cc/150?u=6"
      }
    ]
  },
  {
    slug: "mkt-digital-hub",
    title: "MKT Digital & Digital Hub",
    shortDesc: "Transformación digital 4.0, automatización y marketing exponencial.",
    heroImage: "/bg.png",
    whatIs: "Hub tecnológico que dota de marketing exponencial y estructura digital 4.0/5.0 para automatizar procesos financieros y de ventas.",
    whatItSolves: [
      "Ventas omnicanal en entornos digitales.",
      "Optimización de infraestructura tecnológica actual.",
      "Transformación digital para supervivencia competitiva."
    ],
    differentiators: [
      { title: "Tech Specialists", desc: "Expertos en infraestructura digital y automatización." },
      { title: "Experiencia 27+", desc: "Metodologías de venta desarrolladas por casi tres décadas." }
    ],
    advantages: [
      "Presencia en nuevos mercados digitales.",
      "Incremento medible de ventas on-line.",
      "Estructura tecnológica automatizada."
    ],
    howItWorks: [
      { step: "01", title: "PIMEEDET", desc: "Proyecto integral de marketing y tecnología digital." },
      { step: "02", title: "SAPICVU", desc: "Semiautomatización de procesos internos y utilidades." }
    ],
    faqs: [
      { question: "¿Es caro automatizar?", answer: "Es una inversión que se paga sola con la eficiencia y el control de utilidades." }
    ],
    guarantee: "Entregamos un negocio automatizado en procesos internos, utilidades y ventas.",
    testimonials: [
      {
        quote: "Pasamos de depender de ventas físicas a tener un flujo constante de leads calificados por canales digitales.",
        author: "Jorge Nava",
        role: "Gerente Comercial, RMS Zahn",
        image: "https://i.pravatar.cc/150?u=7"
      }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}