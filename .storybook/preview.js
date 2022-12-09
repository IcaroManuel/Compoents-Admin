import React from 'react'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { addParameters } from '@storybook/react'
import { withI18n } from 'storybook-addon-i18n'
import { withRouter } from 'storybook-addon-react-router-v6'

import { i18next } from '../src/i18n'
import { dark, light } from '../src/styles/themes'
import GlobalStyles from '../src/styles/global'
import { I18nProviderWrapper } from './i18n'

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}

addDecorator(withGlobalStyles)
const themes = [light, dark]
addDecorator(withThemesProvider(themes))

addParameters({
  i18n: {
    provider: I18nProviderWrapper,
    providerProps: {
      i18n: i18next
    },
    supportedLocales: ['ptBr', 'en', 'es'],
    providerLocaleKey: 'locale'
  }
})
addDecorator(withI18n)
addDecorator(withRouter)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
