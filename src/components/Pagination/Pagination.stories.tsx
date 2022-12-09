import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from '.'

export default {
  title: 'components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  page: 1,
  total: 20
}

export const Secondary = Template.bind({})
Secondary.args = {
  page: 2,
  total: 40
}

export const PrimaryWithNext = Template.bind({})
PrimaryWithNext.args = {
  page: 1,
  total: 400
}

export const SecondaryWithNextAndPrev = Template.bind({})
SecondaryWithNextAndPrev.args = {
  page: 2,
  total: 400
}
