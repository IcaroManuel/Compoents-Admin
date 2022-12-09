import styled from 'styled-components'

export type ButtonProps = {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}
export default styled.button<ButtonProps>`
  display: flex;
  column-gap: 10px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  background-color: ${({ theme, primary }) =>
    !primary ? 'transparent' : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme, size }) =>
    !size || size === 'medium'
      ? theme.sizes.fontMedium
      : size === 'small'
      ? theme.sizes.fontSmall
      : theme.sizes.fontLarge};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.background : theme.colors.primary};
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding: 0.8rem;
  margin: 0.5rem 0;
  justify-content: center;
  text-align: center;
`
