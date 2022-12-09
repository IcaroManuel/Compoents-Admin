import React from 'react'

import { useAccount } from '@/providers/account'
import App from './App'
import Auth from './Auth'

const Routes: React.FC = () => {
  const { logged, loading } = useAccount()
  if (loading) return <div>Carregando...</div>
  return logged ? <App /> : <Auth />
}

export default Routes
