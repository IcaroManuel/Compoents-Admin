import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout, { SettingsProps } from './Layout'

export default {
  title: 'pages/Settings',
  component: Layout,
  argTypes: {
    language: {
      options: ['ptBr', 'es', 'en'],
      control: { type: 'select' }
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<React.JSXElementConstructor<SettingsProps>>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

const defaultProps: SettingsProps = {
  language: 'ptBr',
  setLanguage: () => undefined,
  theme: 'light',
  setTheme: () => undefined
}

export const Default = Template.bind({})
Default.args = defaultProps
