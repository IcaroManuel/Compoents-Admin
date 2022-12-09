import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiX, FiEdit, FiTrash, FiPlus } from 'react-icons/fi'
import { partial, propEq } from 'ramda'
import { AddFranchise, Address, Contact, OpenHour } from '@avant/protos'

import Badge from '@/components/Badge'
import Box from '@/components/Box'
import Title from '@/components/Text/Title'
import Text from '@/components/Text'
import Input from '@/components/Input'
import FormRow from '@/components/FormRow'
import Button from '@/components/Button'
import Select from '@/components/Select'
import { GenericSet, StringSet } from '@/utils/types'
import { WeekDay } from '@/enums'

import SaveAddress from './components/Address'
import SaveContact from './components/Contact'
import SaveOpenHours from './components/SaveOpenHours'
import { Card } from './components/Address/styles'
import {
  Container,
  SocialNetworks,
  ListSocialNetwork,
  ListAddress,
  AddAddressIcon,
  ListWeekDay,
  WeekRow,
  WeekRowButton
} from './styles'

export type AddFranchiseProps = AddFranchise & {
  setName: StringSet
  setDocument: StringSet
  setStatus: StringSet
  setDocumentType: StringSet
  setTimezone: StringSet
  setAddress: GenericSet<Address[]>
  setSelectedOpenHour: (openHour: OpenHour) => void
  selectedOpenHour?: OpenHour
  openHourModal: boolean
  onCloseOpenHourModal: () => void
  onSaveOpenHour: () => void
  onAddOpenHour: StringSet
  setSelectStart: StringSet
  setSelectEnd: StringSet
  onRemoveOpenHour: StringSet
  selectContact?: Contact
  onSelectContact: (index: number, contact: Contact) => void
  setSelectContactLabel: StringSet
  setSelectContactValue: StringSet
  selectedAddress?: number
  setSelectedAddress: (index?: number) => void
  isUpdate: boolean
  loading: boolean
  contactModalOpen: boolean
  onCloseContactModal: () => void
  allDocumentTypes: string[]
  allStatus: string[]
  onAddContact: () => void
  onSaveContact: () => void
  onDeleteContact: (index: number) => void
  onSubmit: () => void
  onCancel: () => void
  onAddAddress: () => void
}
const Layout: React.FC<AddFranchiseProps> = ({
  name,
  setName,
  document,
  setDocument,
  documentType,
  setDocumentType,
  timezone,
  setTimezone,
  status,
  setStatus,
  contacts,
  selectContact,
  onSelectContact,
  onAddContact,
  openHours,
  setSelectedOpenHour,
  selectedOpenHour,
  openHourModal,
  onCloseOpenHourModal,
  onSaveOpenHour,
  onAddOpenHour,
  setSelectStart,
  setSelectEnd,
  onRemoveOpenHour,
  loading,
  allDocumentTypes,
  allStatus,
  isUpdate,
  addresses,
  setAddress,
  contactModalOpen,
  setSelectContactLabel,
  setSelectContactValue,
  onSaveContact,
  onDeleteContact,
  onSubmit,
  onCancel,
  onCloseContactModal,
  onAddAddress,
  selectedAddress,
  setSelectedAddress
}) => {
  const { t } = useTranslation()
  const type = isUpdate ? 'update' : 'add'
  const allDocumentTypeOptions = allDocumentTypes.map((item) => ({
    label: item,
    value: item
  }))
  const allStatusOptions = allStatus.map((item) => ({
    label: t(`franchises.status.${item}`),
    value: item
  }))
  const selectedStatus = allStatusOptions.find(propEq('value', status))
  const selectedDocumentType = allDocumentTypeOptions.find(
    propEq('value', documentType)
  )
  const allWeekDays = Object.values(WeekDay)
  return (
    <Container>
      <Title bold>{t(`pages.generics.${type}.title`)}</Title>
      <Box>
        <Input
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormRow>
          <Input
            label="document"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />

          <Select
            label="documentType"
            value={selectedDocumentType}
            options={allDocumentTypeOptions}
            onChange={(item) => item?.value && setDocumentType(item?.value)}
          />
        </FormRow>

        <FormRow>
          <Input
            label="timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            required
          />

          <Select
            label="status"
            value={selectedStatus}
            options={allStatusOptions}
            onChange={(item) => item?.value && setStatus(item?.value)}
            required
          />
        </FormRow>

        <SocialNetworks>
          <Text bold>{t('label.socialNetworks')}</Text>

          <ListSocialNetwork>
            {!contacts?.length && (
              <Text>{t('pages.franchises.noSocialNetworks')}</Text>
            )}
            {contacts?.map((contact, index) => (
              <Badge
                type="info"
                key={String(index)}
                onClick={() => onSelectContact(index, contact)}
                icon={FiX}
                onClickIcon={() => onDeleteContact(index)}
              >
                {contact.label}
              </Badge>
            ))}
            <Badge type="success" onClick={onAddContact}>
              {!contacts?.length ? t('button.add') : '+'}
            </Badge>
          </ListSocialNetwork>
        </SocialNetworks>

        <Text bold>{t('label.openHours')}</Text>

        <ListWeekDay>
          {allWeekDays.map((dayName) => {
            const item = openHours?.find((item) => item?.day === dayName)
            return (
              <Box key={dayName}>
                <Text>{t(`label.weekDays.${dayName}`)}</Text>
                {item && (
                  <FormRow>
                    <Text size="small">
                      {item.start}-{item.end}
                    </Text>
                  </FormRow>
                )}
                {!item ? (
                  <WeekRow>
                    <WeekRowButton onClick={() => onAddOpenHour(dayName)}>
                      <FiPlus />
                    </WeekRowButton>
                  </WeekRow>
                ) : (
                  <WeekRow>
                    <WeekRowButton onClick={() => setSelectedOpenHour(item)}>
                      <FiEdit />
                    </WeekRowButton>

                    <WeekRowButton
                      onClick={() => onRemoveOpenHour(item?.day || '')}
                    >
                      <FiTrash />
                    </WeekRowButton>
                  </WeekRow>
                )}
              </Box>
            )
          })}
        </ListWeekDay>

        <Text bold>{t('label.addresses')}</Text>

        <ListAddress>
          {addresses?.map((address, currentIndex) => {
            const setField = (field: keyof Address, value: string) =>
              setAddress(
                addresses?.map((item, index) =>
                  index !== currentIndex ? item : { ...item, [field]: value }
                ) || []
              )
            const onRemove = () =>
              setAddress(addresses.filter((_, index) => index !== currentIndex))
            return (
              <SaveAddress
                key={String(currentIndex)}
                alias={address.alias}
                setAlias={partial(setField, ['alias'])}
                type={address.type}
                setType={partial(setField, ['type'])}
                zipCode={address.zipCode}
                setZipCode={partial(setField, ['zipCode'])}
                street={address.street}
                setStreet={partial(setField, ['street'])}
                complement={address.complement}
                setComplement={partial(setField, ['complement'])}
                number={address.number}
                setNumber={partial(setField, ['number'])}
                district={address.district}
                setDistrict={partial(setField, ['district'])}
                city={address.city}
                setCity={partial(setField, ['city'])}
                state={address.state}
                setState={partial(setField, ['state'])}
                country={address.country}
                setCountry={partial(setField, ['country'])}
                longitude={address.longitude}
                setLongitude={partial(setField, ['longitude'])}
                latitude={address.latitude}
                setLatitude={partial(setField, ['latitude'])}
                onRemove={onRemove}
                isOpen={selectedAddress === currentIndex}
                onClose={() => setSelectedAddress(undefined)}
                onOpen={() => setSelectedAddress(currentIndex)}
                index={currentIndex}
              />
            )
          })}
          <Card onClick={onAddAddress}>
            <AddAddressIcon />
          </Card>
        </ListAddress>

        <FormRow>
          <Button onClick={onCancel}>{t('button.cancel')}</Button>
          <Button onClick={onSubmit} disabled={loading} primary>
            {t('button.submit')}
          </Button>
        </FormRow>
      </Box>

      <SaveContact
        isOpen={contactModalOpen}
        onClose={onCloseContactModal}
        label={selectContact?.label}
        setLabel={setSelectContactLabel}
        value={selectContact?.value}
        setValue={setSelectContactValue}
        onSubmit={onSaveContact}
      />
      <SaveOpenHours
        isOpen={openHourModal}
        onClose={onCloseOpenHourModal}
        onSubmit={onSaveOpenHour}
        start={selectedOpenHour?.start}
        setStart={setSelectStart}
        end={selectedOpenHour?.end}
        setEnd={setSelectEnd}
      />
    </Container>
  )
}

export default Layout
