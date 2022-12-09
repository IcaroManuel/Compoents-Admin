import { DefaultTheme } from 'styled-components'
import { defaultTheme } from './default'

const dark: DefaultTheme = {
  ...defaultTheme,
  name: 'Dark',
  colors: {
    ...defaultTheme.colors,
    background: '#252836',
    foreground: '#1F1D2B',
    title: '#FFFFFF',
    text: '#E0E6E9',
    border: '#393C49'
  }
}

export { dark }
