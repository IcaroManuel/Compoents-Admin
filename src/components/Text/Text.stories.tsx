import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '.'

export default {
  title: 'components/Text',
  component: Text,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Bold = Template.bind({})
Bold.args = {
  bold: true,
  children: 'Text'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Text'
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Text'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Text'
}
