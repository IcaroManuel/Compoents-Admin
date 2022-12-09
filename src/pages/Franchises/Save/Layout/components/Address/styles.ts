import styled from 'styled-components'
import { opacify } from 'polished'

import Box from '@/components/Box'

export const Card = styled(Box)`
  cursor: pointer;
  transition: 0.6s;
  height: 100px;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => opacify(0.2, theme.colors.primary)};
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`

export const Icon = styled.div<{ error?: boolean }>`
  width: fit-content;
  font-size: 28px;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.text};
  cursor: pointer;
`
