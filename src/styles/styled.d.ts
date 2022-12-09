import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    sizes: {
      borderRadius: string
      fontSmall: string
      fontMedium: string
      fontLarge: string
      fontTitle: string
    }
    colors: {
      primary: string
      background: string
      foreground: string
      title: string
      text: string
      error: string
      border: string
      hovered: string
      success: string
      warning: string
      danger: string
      info: string
    }
    fonts: {
      text: string
    }
  }
}
