import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { partial } from 'ramda'
import { useFormik } from 'formik'
import { AddFranchise, Address, Contact, OpenHour } from '@avant/protos'

import Layout from '@/pages/Franchises/Save/Layout'
import { useFranchise } from '@/providers/franchises'
import { ContactType, FranchiseStatus } from '@/enums'

const FranchiseSave: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigation = useNavigate()
  const { selected, loading, get, create, update, clearSelected } =
    useFranchise()
  const [selectedContact, setSelectedContact] = useState<Contact>()
  const [selectedContactIndex, setSelectedContactIndex] = useState<
    number | undefined
  >()
  const [selectedOpenHour, setSelectedOpenHour] = useState<OpenHour>()
  const [selectedOpenHourDay, setSelectedOpenHourDay] = useState('')
  const [hourOpen, setHourModalOpen] = useState(false)
  const [selectedAddressIndex, setSelectedAddressIndex] = useState<
    number | undefined
  >()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const allDocuments = ['CNPJ']
  const allStatus = Object.values(FranchiseStatus)

  const onSubmit = (item: AddFranchise): void => {
    if (id) {
      update({ ...item, id })
      return
    }
    create(item)
  }

  const handleCancel = (): void => {
    navigation('/franchises')
  }

  const handleAddContact = (): void => {
    setSelectedContactIndex(undefined)
    setSelectedContact({ label: ContactType.EMAIL, value: '' })
    setContactModalOpen(true)
  }

  const handleSelectContact = (index: number, contact: Contact): void => {
    setSelectedContactIndex(index)
    setSelectedContact(contact)
    setContactModalOpen(true)
  }

  const handleSelectedOpenHour = (openHour: OpenHour): void => {
    setSelectedOpenHourDay(openHour?.day || '')
    setSelectedOpenHour(openHour)
    setHourModalOpen(true)
  }

  const handleAddOpenHour = (day: string) => {
    handleSelectedOpenHour({ day })
  }

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: selected,
    enableReinitialize: true,
    onSubmit
  })

  const handleSaveContact = (): void => {
    const value =
      selectedContactIndex === undefined
        ? [...(values?.contacts || []), selectedContact]
        : values.contacts?.map((item, index) =>
            index === selectedContactIndex ? selectedContact : item
          )
    setFieldValue('contacts', value)
    setContactModalOpen(false)
  }

  const handleSaveOpenHour = (): void => {
    const value = !values?.openHours?.some(
      (item) => item.day === selectedOpenHourDay
    )
      ? [...(values?.openHours || []), selectedOpenHour]
      : values.openHours?.map((item) =>
          item.day === selectedOpenHourDay ? selectedOpenHour : item
        )
    setFieldValue('openHours', value)
    setHourModalOpen(false)
  }

  const handleRemoveOpenHour = (day: string): void => {
    setFieldValue(
      'openHours',
      values.openHours?.filter((item) => item.day !== day)
    )
  }

  const handleCloseContact = (contactIndex: number): void => {
    const newContacts = values.contacts?.filter(
      (_, index) => index !== contactIndex
    )
    setFieldValue('contacts', newContacts)
    setContactModalOpen(false)
  }

  const handleAddAddress = (): void => {
    const defaultAddress: Address = {
      alias: '',
      country: '',
      district: '',
      zipCode: '',
      latitude: 0,
      number: '',
      type: '',
      city: '',
      state: '',
      street: '',
      longitude: 0,
      complement: ''
    }
    setSelectedAddressIndex(values.addresses?.length || undefined)
    setFieldValue('addresses', [...(values?.addresses || []), defaultAddress])
  }

  useEffect(() => {
    if (!id) return () => clearSelected()
    get(id)
    return () => clearSelected()
  }, [clearSelected, get, id])

  return (
    <Layout
      isUpdate={!!id}
      name={values.name}
      setName={partial(setFieldValue, ['name'])}
      document={values.document}
      setDocument={partial(setFieldValue, ['document'])}
      documentType={values.documentType}
      setDocumentType={partial(setFieldValue, ['documentType'])}
      franchisorId={values.franchisorId}
      status={values.status}
      setStatus={partial(setFieldValue, ['status'])}
      timezone={values.timezone}
      setTimezone={partial(setFieldValue, ['timezone'])}
      contacts={values.contacts}
      onAddContact={handleAddContact}
      addresses={values.addresses}
      setAddress={partial(setFieldValue, ['addresses'])}
      loading={loading}
      onSelectContact={handleSelectContact}
      selectContact={selectedContact}
      setSelectContactLabel={(label) =>
        setSelectedContact({ ...selectedContact, label })
      }
      setSelectContactValue={(value) =>
        setSelectedContact({ ...selectedContact, value })
      }
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      allDocumentTypes={allDocuments}
      allStatus={allStatus}
      contactModalOpen={contactModalOpen}
      onSaveContact={handleSaveContact}
      onDeleteContact={handleCloseContact}
      onCloseContactModal={() => setContactModalOpen(false)}
      onAddAddress={handleAddAddress}
      selectedAddress={selectedAddressIndex}
      setSelectedAddress={setSelectedAddressIndex}
      openHours={values.openHours}
      setSelectedOpenHour={handleSelectedOpenHour}
      onSaveOpenHour={handleSaveOpenHour}
      selectedOpenHour={selectedOpenHour}
      setSelectStart={(start) =>
        setSelectedOpenHour({ ...selectedOpenHour, start })
      }
      setSelectEnd={(end) => setSelectedOpenHour({ ...selectedOpenHour, end })}
      openHourModal={hourOpen}
      onCloseOpenHourModal={() => setHourModalOpen(false)}
      onAddOpenHour={handleAddOpenHour}
      onRemoveOpenHour={handleRemoveOpenHour}
    />
  )
}

export default FranchiseSave
