import styled, { DefaultTheme } from 'styled-components'
import { motion } from 'framer-motion'
import { transparentize } from 'polished'
import { BadgeProps } from './types'

const colors: Record<string, keyof DefaultTheme['colors']> = {
  success: 'success',
  warning: 'warning',
  danger: 'error',
  info: 'info'
}

export const Container = styled(motion.div)<
  BadgeProps & { hasOnClick?: boolean }
>`
  background-color: ${({ theme, type }) =>
    transparentize(0.8, theme.colors[colors[type]])};
  border: 1px solid ${({ theme, type }) => theme.colors[colors[type]]};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  color: ${({ theme, type }) => theme.colors[colors[type]]};
  display: grid;
  grid-template-columns: ${({ icon }) => (icon ? '1fr 30px' : '1fr')};
  font-family: ${({ theme }) => theme.fonts.text};
  padding: 0;
  align-items: center;
  cursor: ${({ hasOnClick }) => (hasOnClick ? 'pointer' : 'text')};
  width: fit-content;
`

export const Content = styled.span`
  padding: 4px 12px;
`

export const IconContainer = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  align-content: center;
`
