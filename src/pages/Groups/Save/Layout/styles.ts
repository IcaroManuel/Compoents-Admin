import styled from 'styled-components'

import Box from '@/components/Box'
import { FiX } from 'react-icons/fi'

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
export const FranchiseList = styled.div`
  display: grid;
  gap: 12px;
`

export const FranchiseItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
`

export const CloseIcon = styled(FiX)`
  cursor: pointer;
`
