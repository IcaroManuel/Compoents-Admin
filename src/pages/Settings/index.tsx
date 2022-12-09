import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '@/pages/Settings/Layout'
import { useThemeProvider } from '@/providers/theme'

const Settings: React.FC = () => {
  const { i18n } = useTranslation()
  const { theme, changeTheme } = useThemeProvider()
  const handleChangeLanguage = async (language: string) => {
    localStorage.setItem('@avant/language', language)
    await i18n.changeLanguage(language)
  }
  return (
    <Layout
      language={i18n.language}
      setLanguage={handleChangeLanguage}
      theme={theme}
      setTheme={changeTheme}
    />
  )
}

export default Settings
