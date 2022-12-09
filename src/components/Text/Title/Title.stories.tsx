import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from '.'

export default {
  title: 'components/Title',
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Bold = Template.bind({})
Bold.args = {
  bold: true,
  children: 'Title'
}

export const Normal = Template.bind({})
Normal.args = {
  bold: false,
  children: 'Title'
}
