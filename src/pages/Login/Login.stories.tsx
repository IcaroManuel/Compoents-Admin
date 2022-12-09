import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Login from './Layout'

export default {
  title: 'pages/Login',
  component: Login,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const Default = Template.bind({})

export const WithContent = Template.bind({})
WithContent.args = {}
