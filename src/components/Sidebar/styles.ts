import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/img/icon.svg'

export const Container = styled.aside`
  font-family: ${({ theme }) => theme.fonts.text};
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
  display: grid;
  grid-template-rows: 1fr 60px;
  row-gap: 30px;
  height: 100%;
  width: fit-content;
  max-width: 104px;
  background-color: ${({ theme }) => theme.colors.foreground};
`

export const MenuLogo = styled.img.attrs({ src: logoImg })`
  width: 24px;
`

export const Menu = styled.nav`
  display: grid;
  grid-gap: 30px;
  align-self: flex-start;
`

type IsActive = {
  active?: boolean
}

export const MenuItemLogo = styled(NavLink)`
  width: 55px;
  height: 55px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
`

export const MenuItem = styled(MenuItemLogo)<IsActive>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.foreground};
  color: ${({ active, theme }) =>
    active ? theme.colors.hovered : theme.colors.primary};

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.hovered};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.hovered};
  }
`
