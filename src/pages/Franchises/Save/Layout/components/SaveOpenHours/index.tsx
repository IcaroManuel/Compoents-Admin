import React from 'react'
import { AddOpenHour } from '@avant/protos'
import { range, propEq } from 'ramda'
import { useTranslation } from 'react-i18next'

import Select from '@/components/Select'
import FormRow from '@/components/FormRow'
import Button from '@/components/Button'
import Modal, { ModalProps } from '@/components/Modal'
import { StringSet } from '@/utils/types'

type SaveContactProps = ModalProps &
  AddOpenHour & {
    setStart: StringSet
    setEnd: StringSet
    onSubmit: () => void
  }
const SaveOpenHours: React.FC<SaveContactProps> = ({
  isOpen,
  onClose,
  start,
  setStart,
  end,
  setEnd,
  onSubmit
}) => {
  const { t } = useTranslation()
  const allHours = range(0, 24).reduce(
    (acc, item) => [
      ...acc,
      `${item}:00`.padStart(5, '0'),
      `${item}:30`.padStart(5, '0')
    ],
    [] as string[]
  )
  const allHoursOptions = allHours.map((hour) => ({ label: hour, value: hour }))
  const selectedStart = allHoursOptions.find(propEq('value', start))
  const selectedEnd = allHoursOptions.find(propEq('value', end))
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Select
        label="start"
        options={allHoursOptions}
        value={selectedStart}
        onChange={(e) => e?.value && setStart(e.value)}
      />
      <Select
        label="end"
        options={allHoursOptions}
        value={selectedEnd}
        onChange={(e) => e?.value && setEnd(e.value)}
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

export default SaveOpenHours
