import React from 'react'

import Box from '@/components/Box'
import Button from '@/components/Button'
import Title from '@/components/Text/Title'

import { Container } from './styles'

type LoginProps = {
  onLogin: () => void
  loading: boolean
}
const Layout: React.FC<LoginProps> = ({ onLogin, loading }) => {
  return (
    <Container>
      <Box>
        <Title as="h1" bold>
          Login
        </Title>

        <Button onClick={onLogin} disabled={loading} primary>
          Fazer Login
        </Button>
      </Box>
    </Container>
  )
}

export default Layout
