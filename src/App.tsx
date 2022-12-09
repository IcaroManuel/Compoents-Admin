import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './i18n'
import Routes from './routes'
import AppProvider from './providers'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
