import React, { forwardRef, useId } from 'react'
import { useTranslation } from 'react-i18next'

import Text from '@/components/Text'
import { Container, TextInput, Label } from './styles'
import { InputProps } from './types'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, required, error, ...props },
  ref
) => {
  const id = useId()
  const { t } = useTranslation()
  return (
    <Container htmlFor={id}>
      {label && (
        <Label required={required}>
          {t(`label.${label}`, { defaultValue: label })}
        </Label>
      )}
      <TextInput {...props} id={id} ref={ref} />
      {error && <Text error></Text>}
    </Container>
  )
}

export default forwardRef<HTMLInputElement, InputProps>(Input)
