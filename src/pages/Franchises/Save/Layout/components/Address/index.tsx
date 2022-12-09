import React from 'react'
import { FiTrash, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Address } from '@avant/protos'

import Input from '@/components/Input'
import FormRow from '@/components/FormRow'
import Modal from '@/components/Modal'
import Text from '@/components/Text'
import { StringSet } from '@/utils/types'
import { Card, Header, Icon } from './styles'

type AddressProps = Address & {
  setAlias: StringSet
  setType: StringSet
  setZipCode: StringSet
  setStreet: StringSet
  setComplement: StringSet
  setNumber: StringSet
  setDistrict: StringSet
  setCity: StringSet
  setState: StringSet
  setCountry: StringSet
  setLongitude: StringSet
  setLatitude: StringSet
  index: number
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onRemove: () => void
}
const SaveAddress: React.FC<AddressProps> = ({
  alias,
  setAlias,
  type,
  setType,
  zipCode,
  setZipCode,
  street,
  setStreet,
  complement,
  setComplement,
  number,
  setNumber,
  district,
  setDistrict,
  city,
  setCity,
  state,
  setState,
  country,
  setCountry,
  longitude,
  setLongitude,
  latitude,
  setLatitude,
  onRemove,
  isOpen,
  onClose,
  onOpen,
  index
}) => {
  const { t } = useTranslation()
  return (
    <div>
      <Card onClick={onOpen}>
        <Text bold>
          {alias ? alias : `${t('pages.franchises.address')} ${index + 1}`}
        </Text>
        <Text>{street}</Text>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Header>
          <Icon onClick={onRemove} error>
            <FiTrash />
          </Icon>
          <Icon onClick={onClose}>
            <FiX />
          </Icon>
        </Header>
        <FormRow>
          <Input
            label="addressAlias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />
          <Input
            label="addressType"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </FormRow>

        <Input
          label="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

        <Input
          label="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <FormRow>
          <Input
            label="complement"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
          <Input
            label="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormRow>

        <FormRow>
          <Input
            label="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
          <Input
            label="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </FormRow>

        <FormRow>
          <Input
            label="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <Input
            label="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </FormRow>

        <FormRow>
          <Input
            label="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
          <Input
            label="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </FormRow>
      </Modal>
    </div>
  )
}

export default SaveAddress
