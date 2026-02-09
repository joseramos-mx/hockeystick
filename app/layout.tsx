// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { WhatsAppFloat } from "./components/whatsappfloat";
import { LanguageProvider } from "./context/Languagecontext";

// 1. Configuración de Fuente (Plus Jakarta Sans para vibra Tech/Startup)
const mainFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-main",
  display: "swap",
});

// 2. URL Base (IMPORTANTE: Cambia esto por tu dominio real en producción)
const DOMAIN = "https://www.hockeystick.mx"; 

// 3. Configuración del Viewport (Separado en Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#020408", // Coincide con tu footer oscuro para navegadores móviles
  width: "device-width",
  initialScale: 1,
};

// 4. Metadatos Completos para SEO
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  
  // Título inteligente: "Página Actual | HockeyStick MX"
  title: {
    default: "HockeyStick MX | Aceleradora de Negocios y Consultoría Estratégica",
    template: "%s | HockeyStick MX",
  },
  
  description: "Transformamos PyMES y Startups en empresas de alto rendimiento. Consultoría estratégica, aceleración de negocios y levantamiento de capital en México.",
  
  applicationName: "HockeyStick MX",
  
  // Palabras clave para indexación
  keywords: [
    "Consultoría de negocios México",
    "Aceleradora de empresas",
    "Estrategia empresarial",
    "Crecimiento exponencial",
    "Levantamiento de capital",
    "Consultoría para PyMES",
    "Startups México",
    "RMS Industries",
    "Scale-up",
  ],

  authors: [{ name: "HockeyStick MX Team", url: DOMAIN }],
  creator: "RMS Industries",
  publisher: "HockeyStick MX",

  // Control de Robots (Crucial para que Google te vea)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Cómo te ves en Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: DOMAIN,
    title: "HockeyStick MX | Escala tu empresa al siguiente nivel",
    description: "Somos aceleradores. Descubre cómo transformamos la operación y rentabilidad de tu negocio.",
    siteName: "HockeyStick MX",
    images: [
      {
        url: "/og-image.jpg", // TODO: Crea una imagen de 1200x630px y ponla en /public
        width: 1200,
        height: 630,
        alt: "HockeyStick MX - Consultoría Estratégica",
      },
    ],
  },

  // Twitter Cards (Cómo te ves en X)
  twitter: {
    card: "summary_large_image",
    title: "HockeyStick MX | Aceleradora de Negocios",
    description: "Estrategia, tecnología y capital para escalar tu empresa.",
    images: ["/og-image.jpg"], // Usa la misma imagen
    creator: "@hockeystickmx", // Tu usuario si tienes
  },

  // Iconos
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Canonical URL (Evita contenido duplicado)
  alternates: {
    canonical: "/",
  },
};

// 5. Datos Estructurados (JSON-LD)
// Esto le dice a Google explícitamente quién eres (Organization/Consulting)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConsultingService", // O "Organization"
  "name": "HockeyStick MX",
  "image": `${DOMAIN}/hsmx.png`,
  "description": "Consultoría estratégica y aceleradora de negocios enfocada en crecimiento exponencial para PyMES y Startups en México.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "addressCountry": "MX"
  },
  "url": DOMAIN,
  "sameAs": [
    "https://www.linkedin.com/company/hockeystickmx",
    "https://twitter.com/hockeystickmx",
    "https://www.instagram.com/hockeystickmx"
  ],
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${mainFont.variable} font-sans antialiased bg-white text-slate-900`}>
      <LanguageProvider>
        {/* Inyectamos JSON-LD para Google */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
        <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}