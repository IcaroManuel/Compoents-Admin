import styled, { DefaultTheme } from 'styled-components'

type SizeType = 'small' | 'medium' | 'large'
type ThemeSize = keyof DefaultTheme['sizes']
export type TextProps = {
  bold?: boolean
  size?: SizeType
  error?: boolean
}
const sizes: Record<SizeType, ThemeSize> = {
  large: 'fontLarge',
  medium: 'fontMedium',
  small: 'fontSmall'
}
export default styled.p<TextProps>`
  font-size: ${({ theme, size = 'medium' }) =>
    theme.sizes[sizes[!size ? 'medium' : size]]};
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.text};
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  padding-bottom: 4px;
`
