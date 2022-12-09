import React from 'react'
import { IconType } from 'react-icons'
import { FiLogOut, FiSettings } from 'react-icons/fi'

import { Container, Menu, MenuLogo, MenuItem, MenuItemLogo } from './styles'

export type MenuItem = {
  Icon: IconType
  path: string
  isActive: boolean
}
type NavMenuProps = {
  items: MenuItem[]
  onLogout: () => void
}
const NavMenu: React.FC<NavMenuProps> = ({ items, onLogout }) => {
  return (
    <Container>
      <Menu>
        <MenuItemLogo to="/">
          <MenuLogo />
        </MenuItemLogo>

        {items.map(({ Icon, path }) => (
          <MenuItem key={path} to={path}>
            <Icon size="24px" />
          </MenuItem>
        ))}
      </Menu>

      <MenuItem to="/settings">
        <FiSettings size="24px" />
      </MenuItem>

      <MenuItem onClick={onLogout} as="button">
        <FiLogOut size="24px" />
      </MenuItem>
    </Container>
  )
}

export default NavMenu
