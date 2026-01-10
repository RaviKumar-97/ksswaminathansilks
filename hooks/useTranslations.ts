'use client'

import { useLanguage } from '../contexts/LanguageContext'
import en from '../messages/en.json'
import ta from '../messages/ta.json'

const translations = { en, ta } as const

export function useTranslations() {
  const { lang } = useLanguage()
  return translations[lang]
}