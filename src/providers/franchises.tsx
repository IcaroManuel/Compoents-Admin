import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback
} from 'react'
import { useNavigate } from 'react-router'
import { AddFranchise, UpdateFranchise } from '@avant/protos'

import { PageDTO } from '@/dtos/generics'
import { FranchiseDTO } from '@/dtos/franchises/FranchiseDTO'
import { RSQLFilter } from '@/services'
import { franchisesGateway } from '@/data'

type FranchiseContextType = PageDTO<FranchiseDTO> & {
  loading: boolean
  error: string
  selected: FranchiseDTO
  list: (params: RSQLFilter) => void
  get: (id: string) => void
  create: (params: AddFranchise) => void
  update: (params: UpdateFranchise) => void
  clearSelected: () => void
}

const FranchiseContext = createContext({} as FranchiseContextType)

export const FranchiseProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [data, setData] = useState<FranchiseDTO[]>([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [next, setNext] = useState<number | undefined>(undefined)
  const [prev, setPrev] = useState<number | undefined>(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState({} as FranchiseDTO)
  const navigate = useNavigate()

  const list = useCallback(async (params: RSQLFilter) => {
    setLoading(true)
    try {
      const content = await franchisesGateway.list(params)
      setData(content.data)
      setTotal(content.total)
      setPage(content.page)
      setNext(content.next)
      setPrev(content.prev)
    } catch (err) {
      const error = err as Error
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const get = useCallback(async (params: string) => {
    setLoading(true)
    try {
      const content = await franchisesGateway.get(params)
      setSelected(content)
    } catch (err) {
      const error = err as Error
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const create = useCallback(
    async (params: AddFranchise) => {
      setLoading(true)
      try {
        const content = await franchisesGateway.create(params)
        setSelected(content)
        setLoading(false)
        navigate('/franchises')
      } catch (err) {
        const error = err as Error
        setError(error.message)
        setLoading(false)
      }
    },
    [navigate]
  )

  const update = useCallback(
    async (params: UpdateFranchise) => {
      setLoading(true)
      try {
        const content = await franchisesGateway.update(params)
        setSelected(content)
        setLoading(false)
        navigate('/franchises')
      } catch (err) {
        const error = err as Error
        setError(error.message)
        setLoading(false)
      }
    },
    [navigate]
  )

  const clearSelected = useCallback(() => {
    setSelected({} as FranchiseDTO)
  }, [])

  return (
    <FranchiseContext.Provider
      value={{
        data,
        error,
        loading,
        list,
        total,
        page,
        next,
        prev,
        selected,
        get,
        create,
        update,
        clearSelected
      }}
    >
      {children}
    </FranchiseContext.Provider>
  )
}

export const useFranchise = (): FranchiseContextType =>
  useContext(FranchiseContext)
