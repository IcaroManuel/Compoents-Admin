import styled from 'styled-components'

export default styled.div`
  display: grid;
  padding: 1rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
`
