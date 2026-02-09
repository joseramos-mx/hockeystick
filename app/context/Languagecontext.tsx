"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { translations } from '@/lib/translations' // Importamos el archivo

type Language = 'es' | 'en'

// Definimos el tipo basado en tu archivo de traducciones
type TranslationsType = typeof translations.es

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: TranslationsType // Aquí está la magia: 't' contendrá todos los textos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  // 't' será el objeto completo de español o inglés según el estado
  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage error')
  return context
}