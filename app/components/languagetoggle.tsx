"use client"

import React from 'react'
import { useLanguage } from '../context/Languagecontext'

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold backdrop-blur-md transition-all hover:bg-white/10"
      aria-label="Cambiar idioma"
    >
      <span className={`transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-white/40'}`}>
        ESP
      </span>
      <span className="text-white/20">|</span>
      <span className={`transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-white/40'}`}>
        ENG
      </span>
    </button>
  )
}