import { BaseEntityDTO } from '../generics'

type GroupDTO = BaseEntityDTO & {
  name: string
  franchiseIds: string[]
}

export type { GroupDTO }
