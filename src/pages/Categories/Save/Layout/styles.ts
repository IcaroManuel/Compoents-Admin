import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 16px;
  border-radius: 0 8px 8px 8px;
  input {
    background: ${({ theme }) => theme.colors.background};
  }
`
