import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RSQLFilter } from '@/services'

import Layout, { FranchisesProps } from './Layout'

export default {
  title: 'pages/Franchisers/List',
  component: Layout
} as ComponentMeta<React.JSXElementConstructor<FranchisesProps>>

const Template: ComponentStory<React.JSXElementConstructor<FranchisesProps>> = (
  args
) => <Layout {...args} />

const defaultProps: FranchisesProps = {
  loading: false,
  data: [
    {
      id: 'd0183f90-a038-4c69-aedd-5ec228985a42',
      name: 'Lorenzo e Tereza Restaurante ME',
      status: 'open',
      document: '07078428000104',
      timezone: 'America/Brasilia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8bef2594-a3bb-4481-a8d0-10081a258d18',
      name: 'Ester e Giovanna Eletrônica Ltd',
      document: '00068892000162',
      status: 'open',
      timezone: 'America/Brasilia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '09bbd8d5-9b3e-4624-8207-b1184c6a7b7c',
      name: 'Alexandre e Isis Telecomunicações Ltd',
      document: '84649157000132',
      status: 'open',
      timezone: 'America/Brasilia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '32a2960a-d8b0-4159-81e4-eaff8cfdb118',
      name: 'Sara e Leandro Corretores Associados Ltd',
      document: '72544589000108',
      status: 'open',
      timezone: 'America/Brasilia',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  total: 4,
  page: 1,
  filter: RSQLFilter.build(),
  setFilter: () => undefined,
  onAdd: () => undefined
}

export const Default = Template.bind({})
Default.args = defaultProps

export const NoData = Template.bind({})
NoData.args = {
  ...defaultProps,
  data: []
}

export const Loading = Template.bind({})
Loading.args = {
  ...defaultProps,
  data: [],
  loading: true
}
