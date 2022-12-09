import React, { createContext, ReactNode, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { GenericSet } from '@/utils/types'
import { light, dark } from '@/styles/themes'
import GlobalStyle from '@/styles/global'

const allThemes = { light, dark }
export type ThemeValue = keyof typeof allThemes
type ThemeContextType = {
  theme: ThemeValue
  changeTheme: GenericSet<ThemeValue>
}

const ThemeContext = createContext({} as ThemeContextType)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeValue>(
    '@avant/theme',
    'dark'
  )
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        changeTheme: setCurrentTheme
      }}
    >
      <StyledThemeProvider theme={allThemes[currentTheme]}>
        {children}
        <GlobalStyle />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeProvider = (): ThemeContextType => useContext(ThemeContext)
