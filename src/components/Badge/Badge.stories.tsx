import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Badge from '.'

export default {
  title: 'components/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Badge',
  type: 'info'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Badge',
  type: 'info',
  icon: FiEdit
}

export const OnClick = Template.bind({})
OnClick.args = {
  children: 'Badge',
  type: 'info',
  onClick: () => alert('click!')
}

export const OnClickIcon = Template.bind({})
OnClickIcon.args = {
  children: 'Badge',
  type: 'info',
  onClick: () => alert('click text!'),
  icon: FiEdit,
  onClickIcon: () => alert('click icon!')
}
