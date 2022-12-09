import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout, { GroupsSaveProps } from './Layout'

export default {
  title: 'pages/Groups/Save',
  component: Layout
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

const defaultProps: GroupsSaveProps = {
  isUpdate: false,
  loading: false,
  franchiseOptions: [],
  franchises: [],
  onSelectFranchise: () => undefined,
  removeFranchise: () => undefined,
  searchFranchise: '',
  setSearchFranchise: () => undefined,
  setName: () => undefined,
  onCancel: () => undefined,
  onSubmit: () => undefined
}

export const Default = Template.bind({})

Default.args = defaultProps

export const WithContent = Template.bind({})

WithContent.args = {
  ...defaultProps,
  name: 'Group 1'
}

export const Loading = Template.bind({})

Loading.args = {
  ...defaultProps,
  name: 'Group 1',
  loading: true
}

export const Update = Template.bind({})

Update.args = {
  ...defaultProps,
  name: 'Group 1',
  isUpdate: true
}
