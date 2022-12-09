import React from 'react'

import { useAccount } from '@/providers/account'

import Layout from './Layout'

const Login: React.FC = () => {
  const { login, initialized } = useAccount()
  return <Layout onLogin={login} loading={!initialized} />
}

export default Login
