import { Layout, TrendingUp, Lightbulb, Zap, Layers, Users, MonitorPlay, Star } from "lucide-react"

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

// Data en Español (La que ya tenías)
const servicesEs: BusinessService[] = [
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

// Data en Inglés
const servicesEn: BusinessService[] = [
  {
    slug: "hockeystick-mx",
    title: "HockeyStick MX",
    shortDesc: "Strategic partner to increase competitiveness and value for SMEs & Startups.",
    heroImage: "/bg.png",
    whatIs: "A key partner for every company to develop Projects, Programs, Implants, Retainers, Workshops, Labs, or Coaching. We support the detection of opportunity areas to increase company value and institutionalize processes.",
    whatItSolves: [
      "Increase competitiveness of Mexican SMEs and Startups.",
      "Apply optimized business models with modern methodologies.",
      "Generate greater added value and strengthening with international standards.",
      "Ability to compete in international markets.",
      "Attraction of public and private investment."
    ],
    differentiators: [
      { title: "Adaptability", desc: "Proven techniques adapted to the Mexican economy." },
      { title: "Specialists", desc: "Invaluable capacity of expert consultants in each area." },
      { title: "Alliances", desc: "Collaboration with the best public and private institutions." },
      { title: "Certification", desc: "Proven knowledge in specialization schemes." }
    ],
    advantages: [
      "Awareness of current status in a globalized environment.",
      "Identification of potential company areas.",
      "Benchmarking against transnationals.",
      "Development of Benchmarking and Management Indicators.",
      "Comprehensive accompaniment at every stage."
    ],
    howItWorks: [
      { step: "01", title: "Incubation", desc: "Structure and Form for Startups." },
      { step: "02", title: "Acceleration", desc: "Restructuring and New Form for Scale-ups." },
      { step: "03", title: "Digital Hub", desc: "Sales and Utility Control with 4.0 Technology." },
      { step: "04", title: "Angel & VC", desc: "Funds, Financing, and Expansion or Sale." }
    ],
    faqs: [
      { question: "What does HockeyStick do?", answer: "We are a firm that intervenes in detecting opportunities to increase profits and market value." },
      { question: "Is there a guarantee?", answer: "Yes, we guarantee Sales, Profits, and Dividends." }
    ],
    guarantee: "We guarantee Sales, Profits, and Dividends.",
    testimonials: [
      {
        quote: "Thanks to HockeyStick we managed to attract the private investment we needed to expand nationwide.",
        author: "Ricardo Mendoza",
        role: "Founder, TechGrow MX",
        image: "https://i.pravatar.cc/150?u=1"
      }
    ]
  },
  {
    slug: "aceleradora-exponencial",
    title: "Exponential Accelerator",
    shortDesc: "Design of agile business models to scale profits and expansion.",
    heroImage: "/bg.png",
    whatIs: "We design ongoing business models with agile techniques to exponentialize internal processes, financial administration, and personnel optimization using methodologies such as Design Thinking and Lean Startup.",
    whatItSolves: [
      "Identify internal/external capabilities and potentials.",
      "Incentivize growth and expansion opportunities.",
      "Detect administrative and technological barriers.",
      "Control and increase profits and sales.",
      "Structure corporate strategic bases."
    ],
    differentiators: [
      { title: "Agile Methodologies", desc: "Use of SCRUM, Lean Startup, and Growth Hacking." },
      { title: "Experience", desc: "Over 27 years mastering supply and sales channels." },
      { title: "Technological Alliance", desc: "Access to researchers from the City of Knowledge." }
    ],
    advantages: [
      "Internationally certified specialists.",
      "Agile and less bureaucratic processes.",
      "Valuation of tangible and intangible assets.",
      "Establishment of Corporate Governance.",
      "Total preparation for massive scalability."
    ],
    howItWorks: [
      { step: "01", title: "DAEE", desc: "Acceleration Diagnosis: Definition and Planning." },
      { step: "02", title: "PIAEE", desc: "Comprehensive Business Acceleration Program." },
      { step: "03", title: "IMPLANT", desc: "Accompaniment of a specialist within your organization." },
      { step: "04", title: "WORKLAB", desc: "Workshops for guaranteed implementation of new processes." }
    ],
    faqs: [
      { question: "Is it for SMEs?", answer: "Yes, we adapt the acceleration program to the company's maturity level." },
      { question: "Can I participate if I'm failing?", answer: "We can perform a diagnosis to evaluate rescue viability." }
    ],
    guarantee: "We deliver a structured business with institutionalized processes and income control to achieve profits.",
    testimonials: [
      {
        quote: "The IMPLANT program changed our operational culture. We are now much more efficient and profitable.",
        author: "Sofía Galván",
        role: "COO, Grupo Dental Pro",
        image: "https://i.pravatar.cc/150?u=2"
      }
    ]
  },
  {
    slug: "incubadora-exponencial",
    title: "Exponential Incubator",
    shortDesc: "From idea to profitable business: Incubation and structuring of startups.",
    heroImage: "/bg.png",
    whatIs: "Incubation of Startups and SMEs from idea development, prototype, and MVP to the launch of version 1.0 with partner search and launch matrix.",
    whatItSolves: [
      "Solves project startup from an idea.",
      "Materializes ideas into viable investment projects.",
      "Exponentializes projects for market needs.",
      "Prevents early entrepreneur mortality."
    ],
    differentiators: [
      { title: "GROW Method", desc: "Proprietary methodology for structured growth." },
      { title: "Accompaniment", desc: "Constant Empowerment using Job Shop techniques." }
    ],
    advantages: [
      "Certified growth tools.",
      "Specialists focused on achieving results.",
      "Real value proposition validated in the market."
    ],
    howItWorks: [
      { step: "01", title: "Idea & Plan", desc: "Initial structuring and Canvas model." },
      { step: "02", title: "Prototyping", desc: "MVP development and proof of concept." },
      { step: "03", title: "Launch", desc: "Launch of profitable version 1.0." }
    ],
    faqs: [
      { question: "What do I get?", answer: "A profitable, solid, and liquid business from its creation." }
    ],
    guarantee: "We deliver a 100% profitable, solid, and liquid ongoing business starting from an idea.",
    testimonials: [
      {
        quote: "I arrived with an idea and left with a company operating and billing. The GROW method works.",
        author: "Marco Aurelio",
        role: "Founder, Acadee",
        image: "https://i.pravatar.cc/150?u=3"
      }
    ]
  },
  {
    slug: "empresas-unicornio",
    title: "Unicorn Companies",
    shortDesc: "Scaling models to compete in the exponential ecosystem.",
    heroImage: "/bg.png",
    whatIs: "Design of business models capable of competing with unicorn companies using Wharton University methodologies and Exponential Organizations (ExO) tools.",
    whatItSolves: [
      "Audit of business model for survival.",
      "Detection of cognitive and technological barriers.",
      "Resolution of common errors in massive scaling."
    ],
    differentiators: [
      { title: "Wharton & Cambridge", desc: "Techniques from the best universities in the world." },
      { title: "ExO Method", desc: "Structure for building exponential organizations." }
    ],
    advantages: [
      "Transformation to international processes.",
      "Preparation for exponential scalability.",
      "Alignment of resources for market consolidation."
    ],
    howItWorks: [
      { step: "01", title: "DSEE", desc: "Diagnosis of the Exponential Startup." },
      { step: "02", title: "PISEE", desc: "Comprehensive Exponential Startup Program." },
      { step: "03", title: "Scale", desc: "Guaranteed implementation of scalability." }
    ],
    faqs: [
      { question: "Who can participate?", answer: "Startups with high potential seeking massive market valuations." }
    ],
    guarantee: "We deliver a Startup structured in clients, management, and leadership for unicorn consolidation.",
    testimonials: [
      {
        quote: "Wharton's vision applied to our local market allowed us to see scaling opportunities we previously ignored.",
        author: "Elena Vasquez",
        role: "CEO, InnovaHealth",
        image: "https://i.pravatar.cc/150?u=4"
      }
    ]
  },
  {
    slug: "fondos-y-ma",
    title: "Investment Funds & M&A",
    shortDesc: "Financial structuring to raise capital, mergers, or acquisitions.",
    heroImage: "/bg.png",
    whatIs: "Structuring of business models for Angel or Venture Capital fund support. Advisory by CFA specialists for mergers, acquisitions (M&A), and Crowdfunding strategies.",
    whatItSolves: [
      "Connect investment projects to private capital.",
      "Solve government and private funding issues.",
      "Implement certifiable structures for credit approval."
    ],
    differentiators: [
      { title: "CFA Specialists", desc: "Certified experts in private equity." },
      { title: "Own Fund", desc: "Access to HockeyStick MX's own investment cluster." }
    ],
    advantages: [
      "International certification of financial viability.",
      "Financial methodologies focused 100% on growth."
    ],
    howItWorks: [
      { step: "01", title: "Search", desc: "Executive search for funding by investment funds." },
      { step: "02", title: "Strategy", desc: "Business consulting for purchase or merger (M&A)." }
    ],
    faqs: [
      { question: "Do you deliver results?", answer: "We prepare the company to be financially attractive and auditable for any investor." }
    ],
    guarantee: "We deliver a company financially prepared to be audited, bought, or merged.",
    testimonials: [
      {
        quote: "The financial transparency we achieved allowed us to close our first seed round in record time.",
        author: "Daniel Orozco",
        role: "CFO, Fintech Solutions",
        image: "https://i.pravatar.cc/150?u=5"
      }
    ]
  },
  {
    slug: "universidad-hockeystick",
    title: "HockeyStick University",
    shortDesc: "Disruptive training for entrepreneurs and the ecosystem.",
    heroImage: "/bg.png",
    whatIs: "Teaching and training space with disruptive models focused on wealth generation and better business performance.",
    whatItSolves: [
      "Need for playful and practical training.",
      "Development of skills for changing environments.",
      "Providing structured value knowledge to the ecosystem."
    ],
    differentiators: [
      { title: "Playful", desc: "Fun education but with international rigor." },
      { title: "Alliance Network", desc: "Connection with national and international universities." }
    ],
    advantages: [
      "Certified specialist trainers.",
      "Institutionalization of corporate training."
    ],
    howItWorks: [
      { step: "01", title: "WorkLabs", desc: "Practical and intensive work laboratories." },
      { step: "02", title: "Diplomas", desc: "High-level disruptive academic training." }
    ],
    faqs: [
      { question: "Who can participate?", answer: "Any member of the entrepreneurial ecosystem seeking growth." }
    ],
    guarantee: "We guarantee the acquisition of knowledge and the implementation of all learned tools.",
    testimonials: [
      {
        quote: "It's not typical classroom theory. Here you come to apply tools that you use the next day in your business.",
        author: "Patricia Luviano",
        role: "Entrepreneur, Textile Sector",
        image: "https://i.pravatar.cc/150?u=6"
      }
    ]
  },
  {
    slug: "mkt-digital-hub",
    title: "MKT Digital & Digital Hub",
    shortDesc: "Digital transformation 4.0, automation, and exponential marketing.",
    heroImage: "/bg.png",
    whatIs: "Technological hub that provides exponential marketing and 4.0/5.0 digital structure to automate financial and sales processes.",
    whatItSolves: [
      "Omnichannel sales in digital environments.",
      "Optimization of current technological infrastructure.",
      "Digital transformation for competitive survival."
    ],
    differentiators: [
      { title: "Tech Specialists", desc: "Experts in digital infrastructure and automation." },
      { title: "27+ Experience", desc: "Sales methodologies developed for nearly three decades." }
    ],
    advantages: [
      "Presence in new digital markets.",
      "Measurable increase in online sales.",
      "Automated technological structure."
    ],
    howItWorks: [
      { step: "01", title: "PIMEEDET", desc: "Comprehensive digital marketing and technology project." },
      { step: "02", title: "SAPICVU", desc: "Semi-automation of internal processes and profits." }
    ],
    faqs: [
      { question: "Is automating expensive?", answer: "It is an investment that pays for itself with efficiency and profit control." }
    ],
    guarantee: "We deliver an automated business in internal processes, profits, and sales.",
    testimonials: [
      {
        quote: "We went from depending on physical sales to having a constant flow of qualified leads through digital channels.",
        author: "Jorge Nava",
        role: "Commercial Manager, RMS Zahn",
        image: "https://i.pravatar.cc/150?u=7"
      }
    ]
  }
];

// Objeto contenedor
export const servicesData = {
  es: servicesEs,
  en: servicesEn
}

// Helper actualizado para pedir idioma
export function getServiceBySlug(slug: string, lang: 'es' | 'en' = 'es') {
  return servicesData[lang].find((service) => service.slug === slug);
}