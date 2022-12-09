import { InputHTMLAttributes, ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface CommonProps {
  label?: string
  required?: boolean
  error?: string
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CommonProps {
  icon?: ComponentType<IconBaseProps>
}
