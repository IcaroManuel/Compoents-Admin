import React from 'react'
import { FiBriefcase, FiList } from 'react-icons/fi'
import { Route, Routes } from 'react-router-dom'

import FranchisesList from '@/pages/Franchises/List'
import FranchisesSave from '@/pages/Franchises/Save'
import GroupsList from '@/pages/Groups/List'
import GroupsSave from '@/pages/Groups/Save'
import Settings from '@/pages/Settings'
import Sidebar, { MenuItem } from '@/components/Sidebar'
import { useAccount } from '@/providers/account'

import { Container, MainContent } from './styles'

const App: React.FC = () => {
  const { logout } = useAccount()

  const items: MenuItem[] = [
    { Icon: FiBriefcase, isActive: true, path: '/franchises' },
    { Icon: FiList, isActive: false, path: '/groups' }
  ]

  return (
    <Container>
      <Sidebar items={items} onLogout={logout} />
      <MainContent>
        <Routes>
          <Route path="/" element={<FranchisesList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/franchises" element={<FranchisesList />} />
          <Route path="/franchises/add" element={<FranchisesSave />} />
          <Route path="/franchises/edit/:id" element={<FranchisesSave />} />
          <Route path="/groups" element={<GroupsList />} />
          <Route path="/groups/add" element={<GroupsSave />} />
          <Route path="/groups/edit/:id" element={<GroupsSave />} />
        </Routes>
      </MainContent>
    </Container>
  )
}

export default App
