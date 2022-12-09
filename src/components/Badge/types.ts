import React from 'react'
import { IconBaseProps } from 'react-icons'

export type BadgeType = 'success' | 'warning' | 'danger' | 'info'

export type BadgeProps = {
  type: BadgeType
  icon?: React.ComponentType<IconBaseProps>
  children?: React.ReactNode
  onClick?: () => void
  onClickIcon?: () => void
}
