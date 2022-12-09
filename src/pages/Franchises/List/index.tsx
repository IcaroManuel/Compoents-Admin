import React from 'react'
import { useNavigate } from 'react-router'

import { useFranchise } from '@/providers/franchises'
import { useFilters } from '@/hooks/useFilters'

import Layout from './Layout'

const FranchisesList: React.FC = () => {
  const { data, list, loading, total, page } = useFranchise()
  const [filter, setFilter] = useFilters(list)
  const navigate = useNavigate()
  return (
    <Layout
      data={data}
      loading={loading}
      total={total}
      page={page}
      filter={filter}
      setFilter={setFilter}
      onAdd={() => navigate('/franchises/add')}
    />
  )
}

export default FranchisesList
