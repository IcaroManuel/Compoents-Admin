import { DefaultTheme } from 'styled-components'
import { defaultTheme } from './default'

const light: DefaultTheme = {
  ...defaultTheme,
  name: 'Light',
  colors: {
    ...defaultTheme.colors,
    background: '#F2F2F2',
    foreground: '#FFFFFF',
    title: '#141414',
    text: '#525252',
    border: '#e3e3e3'
  }
}

export { light }
