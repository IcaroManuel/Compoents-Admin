import styled from 'styled-components'

import Box from '@/components/Box'

export const Container = styled.section`
  margin: 20px 0;
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);

  h1 {
    text-align: center;
  }
`

export const Card = styled(Box)<{ active?: boolean }>`
  width: fit-content;
  cursor: pointer;
  transition: 0.6s;
  overflow: hidden;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.text};
`
