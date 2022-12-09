import React from 'react'
import { FiClock, FiHome, FiSettings, FiUsers } from 'react-icons/fi'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'components/Sidebar',
  component: Menu,
  parameters: {
    layout: 'full'
  }
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { path: '/', isActive: true, Icon: FiHome },
    { path: '/schedule', isActive: false, Icon: FiClock },
    { path: '/users', isActive: false, Icon: FiUsers },
    { path: '/settings', isActive: false, Icon: FiSettings }
  ]
}

export const Settings = Template.bind({})
Settings.args = {
  items: [
    { path: '/', isActive: false, Icon: FiHome },
    { path: '/schedule', isActive: false, Icon: FiClock },
    { path: '/users', isActive: false, Icon: FiUsers },
    { path: '/settings', isActive: true, Icon: FiSettings }
  ]
}
