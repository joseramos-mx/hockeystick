import type { Metadata } from "next";
// 1. Importar la fuente desde google
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 2. Configurar la fuente
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta", // Definimos una variable CSS para usarla en Tailwind
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Carga los pesos que necesites
});

export const metadata: Metadata = {
  title: "HSMX - Soluciones Estratégicas",
  description: "Impulsando la competitividad global de las empresas mexicanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 3. Aplicar la variable al body o html */}
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}