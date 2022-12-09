import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback
} from 'react'
import { useNavigate } from 'react-router'
import { AddGroup, UpdateGroup } from '@avant/protos'

import { PageDTO } from '@/dtos/generics'
import { GroupDTO } from '@/dtos/groups/GroupDTO'
import { RSQLFilter } from '@/services'
import { groupsGateway } from '@/data'

type GroupContextType = PageDTO<GroupDTO> & {
  loading: boolean
  error: string
  selected: GroupDTO
  list: (params: RSQLFilter) => void
  get: (id: string) => void
  create: (params: AddGroup) => void
  update: (params: UpdateGroup) => void
  clearSelected: () => void
}

const GroupContext = createContext({} as GroupContextType)

export const GroupProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [data, setData] = useState<GroupDTO[]>([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [next, setNext] = useState<number | undefined>(undefined)
  const [prev, setPrev] = useState<number | undefined>(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState({} as GroupDTO)
  const navigate = useNavigate()

  const list = useCallback(async (params: RSQLFilter) => {
    setLoading(true)
    try {
      const content = await groupsGateway.list(params)
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
      const content = await groupsGateway.get(params)
      setSelected(content)
    } catch (err) {
      const error = err as Error
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const create = useCallback(
    async (params: AddGroup) => {
      setLoading(true)
      try {
        const content = await groupsGateway.create(params)
        setSelected(content)
        setLoading(false)
        navigate('/groups')
      } catch (err) {
        const error = err as Error
        setError(error.message)
        setLoading(false)
      }
    },
    [navigate]
  )

  const update = useCallback(
    async (params: UpdateGroup) => {
      setLoading(true)
      try {
        const content = await groupsGateway.update(params)
        setSelected(content)
        setLoading(false)
        navigate('/groups')
      } catch (err) {
        const error = err as Error
        setError(error.message)
        setLoading(false)
      }
    },
    [navigate]
  )

  const clearSelected = useCallback(() => {
    setSelected({} as GroupDTO)
  }, [])

  return (
    <GroupContext.Provider
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
    </GroupContext.Provider>
  )
}

export const useGroups = (): GroupContextType => useContext(GroupContext)
