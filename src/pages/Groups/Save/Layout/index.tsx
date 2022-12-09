import React from 'react'
import { useTranslation } from 'react-i18next'
import { AddGroup } from '@avant/protos'

import Box from '@/components/Box'
import FormRow from '@/components/FormRow'
import Input from '@/components/Input'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Title from '@/components/Text/Title'
import Select from '@/components/Select'

import { FranchiseDTO } from '@/dtos/franchises/FranchiseDTO'
import { StringSet } from '@/utils/types'

import { CloseIcon, Container, FranchiseItem, FranchiseList } from './styles'

export type GroupsSaveProps = AddGroup & {
  setName: StringSet
  franchiseOptions: FranchiseDTO[]
  franchises: FranchiseDTO[]
  searchFranchise: string
  setSearchFranchise: StringSet
  onSelectFranchise: StringSet
  removeFranchise: (id: string) => void
  loading: boolean
  isUpdate: boolean
  onSubmit: () => void
  onCancel: () => void
}
const Layout: React.FC<GroupsSaveProps> = ({
  name,
  setName,
  loading,
  isUpdate,
  franchises,
  franchiseOptions,
  searchFranchise,
  setSearchFranchise,
  removeFranchise,
  onSelectFranchise,
  onSubmit,
  onCancel
}) => {
  const { t } = useTranslation()
  const type = isUpdate ? 'update' : 'add'
  const options = franchiseOptions.map((item) => ({
    value: item.id,
    label: item.name
  }))
  return (
    <Container>
      <Title bold>{t(`pages.generics.${type}.title`)}</Title>
      <Box>
        <FormRow>
          <Input
            label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormRow>

        <Text bold>{t('pages.franchises.title')}</Text>

        <Select
          label="name"
          value={undefined}
          options={options}
          onChange={(e) => e?.value && onSelectFranchise(e.value)}
          inputValue={searchFranchise}
          onInputChange={setSearchFranchise}
        />

        <FranchiseList>
          {franchises.map((item) => (
            <FranchiseItem key={item.id}>
              <Text>{item.name}</Text>
              <CloseIcon onClick={() => removeFranchise(item.id)} />
            </FranchiseItem>
          ))}
        </FranchiseList>

        <FormRow>
          <Button onClick={onCancel}>{t('button.cancel')}</Button>
          <Button onClick={onSubmit} disabled={loading} primary>
            {t('button.submit')}
          </Button>
        </FormRow>
      </Box>
    </Container>
  )
}

export default Layout
