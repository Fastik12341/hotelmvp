import { createContext, useContext, useState } from 'react'
import translations from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('hotelLanguage') || 'ru'
  })

  const changeLanguage = (newLang) => {
    setLang(newLang)
    localStorage.setItem('hotelLanguage', newLang)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}