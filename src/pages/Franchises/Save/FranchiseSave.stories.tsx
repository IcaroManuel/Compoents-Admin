import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout, { AddFranchiseProps } from './Layout'
import { FranchiseStatus } from '@/enums'

export default {
  title: 'pages/Franchisers/Save',
  component: Layout
} as ComponentMeta<React.JSXElementConstructor<AddFranchiseProps>>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

const defaultProps: AddFranchiseProps = {
  allDocumentTypes: ['CNPJ'],
  allStatus: Object.values(FranchiseStatus),
  contactModalOpen: false,
  isUpdate: false,
  loading: false,
  onAddAddress: () => undefined,
  onAddContact: () => undefined,
  onCancel: () => undefined,
  onCloseContactModal: () => undefined,
  onDeleteContact: () => undefined,
  onSaveContact: () => undefined,
  onSelectContact: () => undefined,
  onSubmit: () => undefined,
  setAddress: () => undefined,
  setDocument: () => undefined,
  setDocumentType: () => undefined,
  setName: () => undefined,
  setSelectContactLabel: () => undefined,
  setSelectContactValue: () => undefined,
  setSelectedAddress: () => undefined,
  setStatus: () => undefined,
  setTimezone: () => undefined,
  onAddOpenHour: () => undefined,
  onSaveOpenHour: () => undefined,
  setSelectedOpenHour: () => undefined,
  setSelectEnd: () => undefined,
  setSelectStart: () => undefined,
  onCloseOpenHourModal: () => undefined,
  onRemoveOpenHour: () => undefined,
  openHourModal: false
}

export const Default = Template.bind({})

Default.args = defaultProps

export const WithContacts = Template.bind({})

WithContacts.args = {
  ...defaultProps,
  contacts: [
    { label: 'facebook', value: 'facebook' },
    { label: 'whatsapp', value: 'whatsapp' }
  ]
}

export const WithAdress = Template.bind({})

WithAdress.args = {
  ...defaultProps,
  addresses: [
    {
      alias: '',
      city: 'Goiânia',
      complement: '',
      country: 'Brasil',
      district: '',
      latitude: '',
      longitude: '',
      number: '446',
      state: 'GO',
      street: 'Rua L 14',
      type: 'Corporação',
      zipCode: '74630-310'
    },
    {
      alias: '',
      city: 'Japeri',
      complement: '',
      country: 'Brasil',
      district: '',
      latitude: '',
      longitude: '',
      number: '256',
      state: 'RJ',
      street: 'Travessa São José',
      type: 'Corporação',
      zipCode: '26445-101'
    }
  ]
}
