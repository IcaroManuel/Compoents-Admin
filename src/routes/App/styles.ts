import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template:
    'sidebar main-content' 100vh
    / auto 1fr;
  overflow: hidden;
`

export const MainContent = styled.section`
  grid-area: main-content;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  margin: 0 0.5rem;
  overflow-y: auto;
`
