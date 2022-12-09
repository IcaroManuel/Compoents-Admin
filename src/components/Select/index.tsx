import React from 'react'
import ReactSelect from 'react-select'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import { Container, Label } from '@/components/Input/styles'
import { SelectComponentProps } from './types'

const Select: React.FC<SelectComponentProps> = ({
  label,
  required,
  ...props
}) => {
  const theme = useTheme()
  const { t } = useTranslation()
  return (
    <Container>
      {label && (
        <Label required={required}>
          {t(`label.${label}`, { defaultValue: label })}
        </Label>
      )}
      <ReactSelect
        {...props}
        styles={{
          singleValue: (base) => ({
            ...base,
            color: theme.colors.text
          }),
          control: (base) => ({
            ...base,
            color: theme.colors.text,
            backgroundColor: theme.colors.foreground,
            borderColor: theme.colors.border,
            padding: '4px'
          }),
          option: (base) => ({
            ...base,
            color: theme.colors.text,
            backgroundColor: theme.colors.foreground,
            margin: 0
          })
        }}
      />
    </Container>
  )
}

export default Select
