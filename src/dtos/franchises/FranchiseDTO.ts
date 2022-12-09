import { BaseEntityDTO } from '../generics'

type FranchiseDTO = BaseEntityDTO & {
  name: string
  status: string
  document: string
  timezone: string
}

export type { FranchiseDTO }
