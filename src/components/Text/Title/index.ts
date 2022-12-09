import styled from 'styled-components'

export type TextProps = {
  bold?: boolean
  size?: 'small' | 'medium' | 'large'
}
export default styled.h1<TextProps>`
  font-size: ${({ theme }) => theme.sizes.fontTitle};
  color: ${({ theme }) => theme.colors.title};
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`
