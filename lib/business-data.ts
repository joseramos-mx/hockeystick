// lib/business-data.ts

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
  }
  
  export const servicesData: BusinessService[] = [
    {
      slug: "hockeystick-mx",
      title: "HockeyStick MX",
      shortDesc: "Socio estratégico para incrementar la competitividad y el valor de MyPymes & Startups.",
      heroImage: "/bg.png",
      whatIs: "Es un socio clave en cada empresa para desarrollar Proyectos, Programas, Implantes, Igualas, Workshops, Labs o Coaching. Apoyamos en la detección de áreas de oportunidad para incrementar el valor de la empresa, institucionalizar procesos y aumentar ventas y utilidades.",
      whatItSolves: [
        "Incrementar la competitividad de MyPymes y Startups mexicanas.",
        "Aplicar modelos de negocios optimizados con metodologías modernas.",
        "Generación de mayor valor agregado y fortalecimiento con estándares internacionales.",
        "Capacidad de competir en mercados internacionales y acceso a nichos especializados.",
        "Atracción de inversión pública y privada."
      ],
      differentiators: [
        { title: "Adaptabilidad y Supervivencia", desc: "Nuevas técnicas probadas y adaptadas a nuestro país y economía para cada sector." },
        { title: "Especialistas de Alto Nivel", desc: "Capacidad invaluable de nuestros especialistas en cada área." },
        { title: "Alianzas Estratégicas", desc: "Colaboración con las mejores instituciones públicas y privadas." },
        { title: "Experiencia Certificada", desc: "Conocimiento comprobado en diferentes esquemas de especialización." }
      ],
      advantages: [
        "Conciencia del estado actual de la empresa en un ambiente globalizado.",
        "Identificación de áreas potenciales de la empresa.",
        "Calificación comparativa frente a empresas trasnacionales.",
        "Desarrollo de Benchmarking e Indicadores de Gestión.",
        "Acompañamiento integral en cada etapa."
      ],
      howItWorks: [
        { step: "01", title: "Incubación", desc: "Estructura y Forma (Startups)." },
        { step: "02", title: "Aceleración", desc: "Reestructura y Nueva Forma (Scale-ups)." },
        { step: "03", title: "Digital Hub", desc: "Control de Ventas y Utilidades (Tecnología 4.0)." },
        { step: "04", title: "Angel & VC", desc: "Fondos, Financiamientos y Expansión o Venta (M&A)." }
      ],
      faqs: [
        { question: "¿Qué es HockeyStick?", answer: "Es una firma de consultoría estratégica que impulsa el crecimiento exponencial." },
        { question: "¿Hay garantía?", answer: "Sí, garantizamos Ventas, Utilidades y Dividendos." },
        { question: "¿Cuánto cuesta todo?", answer: "Los costos varían según el programa o intervención (Proyecto, Iguala, Implant, etc.)." }
      ],
      guarantee: "Garantizamos Ventas, Utilidades y Dividendos."
    },
    {
      slug: "aceleradora-exponencial",
      title: "Aceleradora Exponencial",
      shortDesc: "Diseño de modelos de negocio ágiles para escalar utilidades y expansión.",
      heroImage: "/bg.png",
      whatIs: "Es diseñar modelos de negocios que ya están en marcha o que vienen de su etapa de incubación con técnicas ágiles para exponencializar procesos internos, administración de ingresos, administración financiera y optimización del personal. Utilizamos metodologías, técnicas y herramientas de alto impacto como Design Thinking, Lean Startup, Growth Hacking y SCRUM.",
      whatItSolves: [
        "Identificamos capacidades y potencialidades internas y externas.",
        "Incentivamos oportunidades de crecimiento, desarrollo y expansión.",
        "Detectamos barreras administrativas, financieras y tecnológicas.",
        "Controlamos e incrementamos utilidades y ventas.",
        "Estructuramos y dotamos de bases estratégicas a la compañía."
      ],
      differentiators: [
        { title: "Certificaciones Internacionales", desc: "Técnicas de agilidad y metodologías para finanzas y ventas." },
        { title: "Método Grow & Growth Hacking", desc: "Enfoque científico para el crecimiento rápido." },
        { title: "27+ Años de Experiencia", desc: "Dominio en control financiero, producción y canales de suministro." },
        { title: "Alianza CcyC", desc: "Acceso a más de 1500 investigadores y especialistas tecnológicos." }
      ],
      advantages: [
        "Especialistas certificados a nivel internacional.",
        "Procesos ágiles y menos burocráticos.",
        "Entrenamiento con especialistas Co-Active.",
        "Valuación de tangibles e intangibles (aumento de valor).",
        "Institucionalización de procesos y Gobierno Corporativo.",
        "Preparación para escalabilidad."
      ],
      howItWorks: [
        { step: "01", title: "DAEE", desc: "Diagnóstico de Aceleración Exponencial: Definición, Planeación, Ejecución y Entrega." },
        { step: "02", title: "PIAEE", desc: "Programa Integral de Aceleración Empresarial Exponencial." },
        { step: "03", title: "IMPLANT", desc: "Acompañamiento de especialista dentro de la organización." },
        { step: "04", title: "WORKLAB", desc: "Talleres y Laboratorios para implementación de procesos y tecnologías." }
      ],
      faqs: [
        { question: "¿Si soy una MIPYME soy candidato?", answer: "Sí, nuestros programas se adaptan al nivel de madurez de tu negocio." },
        { question: "¿Es caro?", answer: "Es una inversión con retorno medible en utilidades y valor de empresa." },
        { question: "¿Si estoy quebrando puedo participar?", answer: "Podemos realizar un diagnóstico para evaluar la viabilidad del rescate." }
      ],
      guarantee: "Entregamos un negocio estructurado, con procesos institucionalizados, control de ingresos/egresos, optimización de personal y perfil atractivo para inversionistas. Logramos por contrato aumento de ventas, utilidades y valor de la empresa."
    },
    {
      slug: "incubadora-exponencial",
      title: "Incubadora Exponencial",
      shortDesc: "De la idea al negocio rentable: Incubación y estructuración de startups.",
      heroImage: "/bg.png",
      whatIs: "Incubación y estructuración de startups y Mypymes. Desarrollo de la Idea, Prototipo, Prueba de Concepto, MVP y puesta en marcha de la versión 1.0. Incluye búsqueda de socios, plan de negocios (Canvas), Matriz de lanzamiento e I+D+i.",
      whatItSolves: [
        "Resuelve el arranque de un proyecto de inversión desde una idea.",
        "Aplica procesos ágiles de Lean Startup.",
        "Materializa la idea en un proyecto viable de inversión empresarial.",
        "Exponencializa el proyecto para cubrir necesidades de mercado.",
        "Evita la mortandad de emprendedores."
      ],
      differentiators: [
        { title: "Método GROW", desc: "Metodología propietaria para crecimiento estructurado." },
        { title: "Técnicas de Agilidad", desc: "Para Prototipo, MVP y Prueba de Concepto." },
        { title: "Acompañamiento Empowerment", desc: "Soporte constante utilizando técnicas de Job Shop." },
        { title: "Innovación I+D+i", desc: "Integrada desde la creación del negocio." }
      ],
      advantages: [
        "Técnicas y herramientas de crecimiento exponencial certificadas internacionalmente.",
        "Especialistas certificados en dichas herramientas.",
        "Énfasis en certificación de logros de resultados.",
        "Propuesta de valor real en el mercado."
      ],
      howItWorks: [
        { step: "01", title: "Incubación Online", desc: "100% en línea, 6 meses, mentoría profesional." },
        { step: "02", title: "Incubación Semipresencial", desc: "Con especialista Lean-Startup certificado, 8hrs/mes por 6 meses." },
        { step: "03", title: "Empowerment", desc: "Acompañamiento especialista en todo el viaje." },
        { step: "04", title: "Workshops", desc: "Técnicas de Job Shop según las necesidades del emprendimiento." }
      ],
      faqs: [
        { question: "¿Es caro el programa de incubación?", answer: "Ofrecemos opciones flexibles online y semipresenciales." },
        { question: "¿Qué gano yo?", answer: "Un negocio rentable y estructurado desde el inicio." },
        { question: "¿Garantizan los resultados?", answer: "Sí, garantizamos la entrega de un negocio en marcha." }
      ],
      guarantee: "Entregamos un negocio en marcha a partir de una IDEA, 100% rentable, sólido y líquido, con alcances puntuales para el siguiente nivel empresarial, control financiero y de utilidades."
    },
    {
      slug: "empresas-unicornio",
      title: "Empresas Unicornio",
      shortDesc: "Modelos de escalamiento para competir en el ecosistema exponencial.",
      heroImage: "/bg.png",
      whatIs: "Diseño de modelos de negocio capaces de competir con empresas unicornio. Utilizamos metodologías de la Universidad de Wharton (Pensilvania) y herramientas ágiles para exponencializar el escalamiento, revisando el encaje de mercado (Product-Market Fit).",
      whatItSolves: [
        "Auditoría del modelo de negocio para supervivencia del unicornio.",
        "Detección de barreras cognitivas, financieras y tecnológicas.",
        "Resolución de errores comunes en el camino a ser unicornio.",
        "Estructuración con metodología de construcción de unicornios."
      ],
      differentiators: [
        { title: "Certificaciones Wharton & Cambridge", desc: "Técnicas de universidades de prestigio y metodologías de disrupción." },
        { title: "Método ExO", desc: "Metodología específica para la construcción de Organizaciones Exponenciales." },
        { title: "Experiencia Startup", desc: "Historial probado en el medio exponencial." },
        { title: "Alianzas de Ecosistema", desc: "Conexiones clave para el desarrollo exponencial." }
      ],
      advantages: [
        "Especialistas certificados internacionalmente en exponencialidad.",
        "Transformación a empresa con procesos internacionales.",
        "Valuación de tangibles e intangibles para incrementar valor.",
        "Institucionalización y Gobierno Corporativo.",
        "Preparación para escalabilidad a exponencialidad."
      ],
      howItWorks: [
        { step: "01", title: "DSEE", desc: "Diagnóstico de la Startup Empresarial Exponencial." },
        { step: "02", title: "PISEE", desc: "Programa Integral de Startup Empresarial Exponencial." },
        { step: "03", title: "IMPLANT", desc: "Acompañamiento para implementación garantizada de escalabilidad." },
        { step: "04", title: "WORKLAB", desc: "Talleres y Laboratorios de exponencialidad." }
      ],
      faqs: [
        { question: "¿Si soy una MIPYME soy candidato?", answer: "Analizamos tu potencial de escalabilidad para ver si calificas al programa Unicornio." },
        { question: "¿Quiénes pueden participar?", answer: "Startups con alto potencial de crecimiento rápido." },
        { question: "¿Es caro?", answer: "Es una inversión estratégica para lograr valoraciones altas." }
      ],
      guarantee: "Entregamos una Startup estructurada en clientes, gestión interna y management. Alineación de recursos para consolidación unicornio, aumento de ventas, utilidades y valor de empresa por contrato."
    },
    {
      slug: "fondos-y-ma",
      title: "Fondos de Inversión y M&A",
      shortDesc: "Estructuración financiera para levantar capital, fusiones o adquisiciones.",
      heroImage: "/bg.png",
      whatIs: "Estructuración y modelado de negocios para que Fondos Ángel o VC apoyen proyectos de arranque o expansión. Asesoría por especialistas CFA para M&A (Fusiones y Adquisiciones), Crowdfunding, financiamientos bancarios/Fintech o fondos de gobierno. Análisis de información financiera para escalamiento.",
      whatItSolves: [
        "Acercar proyectos de inversión a fondos (Angel/VC).",
        "Resolver temas de fondeo privado y gubernamental.",
        "Implementar estructuras certificables para aprobación de créditos/inversión.",
        "Transformación a través de metodología de registro de datos financieros."
      ],
      differentiators: [
        { title: "Especialistas CFA", desc: "Expertos certificados en el ramo emprendedor y capital privado." },
        { title: "Fondo Propio", desc: "Acceso al fondo Angel y VC del cluster HockeyStick MX." },
        { title: "Estrategias Disruptivas", desc: "Prácticas ágiles para la realización de fondos de inversión." }
      ],
      advantages: [
        "Certificación y aprobación internacional CFA.",
        "Especialistas del sector financiero mexicano.",
        "Metodologías financieras enfocadas en crecimiento."
      ],
      howItWorks: [
        { step: "01", title: "PBEFFI", desc: "Búsqueda Ejecutiva de Fondeo por Fondos de Inversión." },
        { step: "02", title: "PBEFTyG", desc: "Búsqueda Ejecutiva de Fondeo Tradicional y de Gobierno." },
        { step: "03", title: "PFFDHS", desc: "Programa de Fondeo por Fondo Disruptivo de HockeyStick." },
        { step: "04", title: "PCEM&AQ", desc: "Consultoría para Compra, Fusión o Quiebre (M&A)." }
      ],
      faqs: [
        { question: "No conozco los fondos de inversión", answer: "Nosotros te educamos y guiamos en el proceso." },
        { question: "¿Estos programas dan resultados?", answer: "Sí, preparamos tu empresa para que sea financieramente atractiva y viable." }
      ],
      guarantee: "Entregamos una empresa preparada financieramente para ser auditada, comprada, fusionada o lista para expansión. Lista para participar en programas nacionales e internacionales."
    },
    {
      slug: "universidad-hockeystick",
      title: "Universidad HockeyStick",
      shortDesc: "Formación disruptiva para empresarios y el ecosistema emprendedor.",
      heroImage: "/bg.png",
      whatIs: "Espacio de enseñanza, capacitación y formación para el ecosistema emprendedor. Modelos disruptivos que forman mejores empresarios y personas, enfocados en la generación de riqueza y el mejor desempeño empresarial.",
      whatItSolves: [
        "Necesidad de capacitación lúdica y divertida.",
        "Desarrollo de habilidades empresariales para competir en un entorno cambiante.",
        "Dotar de conocimiento de valor estructurado al ecosistema."
      ],
      differentiators: [
        { title: "Certificaciones Internacionales", desc: "Especialistas de talla mundial." },
        { title: "Modelos Disruptivos", desc: "Educación no tradicional." },
        { title: "Red de Alianzas", desc: "Gobierno, instituciones internacionales y universidades." }
      ],
      advantages: [
        "Metodologías y herramientas internacionales.",
        "Especialistas Co-Active y entrenadores de negocios certificados.",
        "Incremento del valor del ecosistema emprendedor.",
        "Capacitación institucionalizada de manera divertida."
      ],
      howItWorks: [
        { step: "01", title: "WorkLabs", desc: "Laboratorios de trabajo práctico." },
        { step: "02", title: "Diplomados", desc: "Formación académica estructurada." },
        { step: "03", title: "Campamentos", desc: "Retiros Ecro Expansivos." },
        { step: "04", title: "Hubs & Clusters", desc: "Conexión con el ecosistema." }
      ],
      faqs: [
        { question: "¿Si no tengo conocimiento puedo participar?", answer: "Sí, tenemos programas para todos los niveles." },
        { question: "¿Es caro?", answer: "Ofrecemos opciones accesibles para democratizar el conocimiento." }
      ],
      guarantee: "Garantizamos la obtención del conocimiento y la implementación de todas las herramientas aprendidas."
    },
    {
      slug: "mkt-digital-hub",
      title: "MKT Digital & Digital Hub",
      shortDesc: "Transformación digital 4.0, automatización y marketing exponencial.",
      heroImage: "/bg.png",
      whatIs: "Hub de tecnología que dota a las Mypymes y Startups de marketing digital exponencial y estructura digital 4.0/5.0. Incluye semi-automatización o automatización completa para crecimiento, control de ventas y utilidades, aumentando el valor de la compañía.",
      whatItSolves: [
        "Ventas en tiempos difíciles mediante omnicanalidad.",
        "Aprovechamiento y optimización de infraestructura tecnológica actual.",
        "Presencia de marca en buscadores, redes y displays.",
        "Transformación digital 4.0 para supervivencia y crecimiento."
      ],
      differentiators: [
        { title: "Especialistas Tecnológicos", desc: "Expertos nacionales y extranjeros en infraestructura digital." },
        { title: "Método Exponencial", desc: "Metodología propia desarrollada con 27 años de experiencia." },
        { title: "Semi-automatización", desc: "Procesos financieros y de ventas en la nube." },
        { title: "Experiencia Probada", desc: "Implementación exitosa en la mayoría de clientes." }
      ],
      advantages: [
        "Empresa digital con presencia en nuevos mercados y economías.",
        "Adaptación de productos/servicios para canales digitales.",
        "Incremento de ventas y presencia digital (trabajo anual).",
        "Estructura tecnológica lista para T4.0 sin importar el tamaño."
      ],
      howItWorks: [
        { step: "01", title: "PIMEEDET", desc: "Proyecto Integral de Marketing Exponencial y Estructura Tecnológica." },
        { step: "02", title: "SAPICVU", desc: "Semi-automatización de procesos para control de venta y utilidades." },
        { step: "03", title: "PET 4.0/5.0", desc: "Proyecto Empresarial de Transformación Digital." },
        { step: "04", title: "LABS", desc: "Laboratorios de implementación exponencial de tecnologías." }
      ],
      faqs: [
        { question: "¿Es caro automatizar?", answer: "Adaptamos la tecnología a tu presupuesto y necesidades." },
        { question: "¿Hacer marketing digital es automatizar?", answer: "No, el marketing es solo una parte; la automatización abarca procesos internos." },
        { question: "¿Qué necesito?", answer: "Un diagnóstico de tu infraestructura actual para trazar la ruta 4.0." }
      ],
      guarantee: "Entregamos un negocio automatizado o semi-automatizado en procesos internos, utilidades y ventas. Perfil atractivo para inversionistas e implementación de nuevas tecnologías de marketing exponencial."
    }
  ];
  
  export function getServiceBySlug(slug: string) {
    return servicesData.find((service) => service.slug === slug);
  }