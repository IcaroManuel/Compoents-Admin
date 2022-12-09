import React from 'react'
import { useTranslation } from 'react-i18next'
import { propEq } from 'ramda'

import { Contact } from '@avant/protos'
import Modal, { ModalProps } from '@/components/Modal'
import Select from '@/components/Select'
import Input from '@/components/Input'
import Button from '@/components/Button'
import FormRow from '@/components/FormRow'
import { ContactType } from '@/enums'
import { StringSet } from '@/utils/types'

type SaveContactProps = ModalProps &
  Contact & {
    setLabel: StringSet
    setValue: StringSet
    onSubmit: () => void
  }
const SaveContact: React.FC<SaveContactProps> = ({
  isOpen,
  onClose,
  label,
  setLabel,
  value,
  setValue,
  onSubmit
}) => {
  const { t } = useTranslation()
  const allContactType = Object.values(ContactType).map((contactType) => ({
    label: contactType,
    value: contactType
  }))
  const selectedContactType = allContactType.find(propEq('value', label))
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Select
        label="contactType"
        options={allContactType}
        value={selectedContactType}
        onChange={(e) => e?.value && setLabel(e.value)}
      />
      <Input
        label="contactValue"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <FormRow>
        <Button onClick={onClose}>{t('button.cancel')}</Button>
        <Button primary onClick={onSubmit}>
          {t('button.submit')}
        </Button>
      </FormRow>
    </Modal>
  )
}

export default SaveContact
