import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { formatCnpj } from '@/utils'
import { BaseEntityDTO } from '@/dtos/generics'
import { RSQLFilter } from '@/services'

import Table, { GenericTableProps } from '.'

type Entity = BaseEntityDTO & {
  name: string
  document: string
}

export default {
  title: 'components/Generics/Table',
  component: Table
} as ComponentMeta<React.JSXElementConstructor<GenericTableProps<Entity>>>

const Template: ComponentStory<
  React.JSXElementConstructor<GenericTableProps<Entity>>
> = (args) => <Table {...args} />

const defaultProps: GenericTableProps<Entity> = {
  title: 'Franquias',
  loading: false,
  columns: [
    { Header: 'Nome', accessor: 'name' },
    {
      Header: 'CNPJ',
      accessor: 'document',
      Cell: ({ value }) => <>{formatCnpj(value)}</>
    },
    {
      Header: 'Detalhes',
      accessor: 'id',
      Cell: ({ value }) => (
        <a href={`/edit/${value}`}>
          <FiEdit size="18px" />
        </a>
      )
    }
  ],
  data: [
    {
      id: 'd0183f90-a038-4c69-aedd-5ec228985a42',
      name: 'Lorenzo e Tereza Restaurante ME',
      document: '07078428000104',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8bef2594-a3bb-4481-a8d0-10081a258d18',
      name: 'Ester e Giovanna Eletrônica Ltda',
      document: '00068892000162',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '09bbd8d5-9b3e-4624-8207-b1184c6a7b7c',
      name: 'Alexandre e Isis Telecomunicações Ltda',
      document: '84649157000132',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '32a2960a-d8b0-4159-81e4-eaff8cfdb118',
      name: 'Sara e Leandro Corretores Associados Ltda',
      document: '72544589000108',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  total: 4,
  page: 1,
  filter: RSQLFilter.build(),
  setFilter: () => undefined
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
