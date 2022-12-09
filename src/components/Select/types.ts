import { Props } from 'react-select'
import { CommonProps } from '@/components/Input/types'

export type SelectOption = {
  label: string
  value: string
}

export interface SelectComponentProps<T extends boolean = false>
  extends CommonProps,
    Props<SelectOption, T> {}
