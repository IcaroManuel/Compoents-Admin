import React from 'react'
import { useNavigate } from 'react-router'

import { useGroups } from '@/providers/groups'
import { useFilters } from '@/hooks/useFilters'

import Layout from './Layout'

const GroupsList: React.FC = () => {
  const { data, list, loading, total, page } = useGroups()
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
      onAdd={() => navigate('/groups/add')}
    />
  )
}

export default GroupsList
