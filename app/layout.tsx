// app/layout.tsx
import type { Metadata } from "next";
// 1. Importamos la fuente desde Google
import { Plus_Jakarta_Sans, Albert_Sans } from "next/font/google"; 
import "./globals.css";

// 2. Configuramos la fuente (Elige UNA de las dos opciones abajo)

// OPCIÓN A: Plus Jakarta Sans (Muy estilo Tech/Startup/SaaS)
const mainFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-main", // Nombre de la variable CSS
  display: "swap",
});

/* // OPCIÓN B: Albert Sans (Más geométrica y moderna)
const mainFont = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});
*/

export const metadata: Metadata = {
  title: "HockeyStick MX",
  description: "Consultoría estratégica para empresas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Agregamos la variable de la fuente al body */}
      <body className={`${mainFont.variable} font-sans antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}