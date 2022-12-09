import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resources } from './locales'

i18next.use(initReactI18next).init({
  resources: resources,
  lng: localStorage.getItem('@avant/language') || 'ptBr',
  fallbackLng: 'ptBr',
  interpolation: {
    escapeValue: false
  }
})

export { i18next }
