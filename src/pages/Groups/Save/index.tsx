import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { filter, partial, equals, not } from 'ramda'
import { useFormik } from 'formik'
import { AddGroup } from '@avant/protos'
import builder from '@rsql/builder'

import { useGroups } from '@/providers/groups'
import { useFranchise } from '@/providers/franchises'
import { franchisesGateway } from '@/data'
import { RSQLFilter } from '@/services'
import { FranchiseDTO } from '@/dtos/franchises/FranchiseDTO'

import Layout from './Layout'

const FranchiseSave: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigation = useNavigate()
  const [franchiseSearch, setFranchiseSearch] = useState('')
  const [franchiseList, setFranchiseList] = useState<FranchiseDTO[]>([])
  const { selected, loading, get, create, update, clearSelected } = useGroups()
  const { data: franchiseOptions, list: listFranchise } = useFranchise()

  const onSubmit = (item: AddGroup): void => {
    if (id) {
      update({ ...item, id })
      return
    }
    create(item)
  }

  const handleCancel = (): void => {
    navigation('/groups')
  }

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: selected,
    enableReinitialize: true,
    onSubmit
  })

  const handleSelectFranchise = (id: string): void => {
    setFieldValue('franchiseIds', [...(values?.franchiseIds || []), id])
    setFranchiseSearch('')
  }

  const handleRemoveFranchise = (id: string): void => {
    setFieldValue(
      'franchiseIds',
      filter((item) => not(equals(id, item)), values?.franchiseIds || [])
    )
  }

  useEffect(() => {
    if (!id) return () => clearSelected()
    get(id)
    return () => clearSelected()
  }, [clearSelected, get, id])

  useEffect(() => {
    ;(async () => {
      if (!values?.franchiseIds?.length) {
        setFranchiseList([])
        return
      }
      const { data } = await franchisesGateway.list(
        RSQLFilter.build()
          .setSize(values?.franchiseIds?.length)
          .setOperation(builder.in('id', values?.franchiseIds))
      )
      setFranchiseList(data)
    })()
  }, [values.franchiseIds])

  useEffect(() => {
    const filter = RSQLFilter.build()
    if (franchiseSearch) {
      filter.setOperation(builder.eq('name', `*${franchiseSearch}*`))
    }
    listFranchise(filter)
  }, [franchiseSearch, listFranchise])

  return (
    <Layout
      isUpdate={!!id}
      name={values.name}
      setName={partial(setFieldValue, ['name'])}
      franchiseOptions={franchiseOptions}
      onSelectFranchise={handleSelectFranchise}
      franchises={franchiseList}
      removeFranchise={handleRemoveFranchise}
      searchFranchise={franchiseSearch}
      setSearchFranchise={setFranchiseSearch}
      loading={loading}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  )
}

export default FranchiseSave
