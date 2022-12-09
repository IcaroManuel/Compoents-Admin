import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RSQLFilter } from '@/services'

type SetRSQLFilter = (params: RSQLFilter) => void
const useFilters = (
  handleChange: SetRSQLFilter
): [RSQLFilter, SetRSQLFilter] => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [localFilter, setLocalFilter] = useState(RSQLFilter.build())

  useEffect(() => {
    handleChange(RSQLFilter.fromUri(searchParams.toString()))
  }, [handleChange, searchParams])

  const setFilter = (filter: RSQLFilter): void => {
    const { search, page, order } = filter.params
    const url = new URLSearchParams()
    url.append('search', search)
    url.append('page', String(page))
    url.append('order', order)
    setSearchParams(url)
    setLocalFilter(filter)
  }

  return [localFilter, setFilter]
}

export { useFilters }
