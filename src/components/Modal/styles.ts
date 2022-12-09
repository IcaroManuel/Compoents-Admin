import styled from 'styled-components'
import { motion } from 'framer-motion'

import Box from '@/components/Box'

export const Container = styled(motion.div)`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Content = styled(Box)`
  background-color: ${({ theme }) => theme.colors.foreground};
  width: 50vw;
  padding: 1em;
  border: ${({ theme }) => theme.colors.border} 1px solid;
`
