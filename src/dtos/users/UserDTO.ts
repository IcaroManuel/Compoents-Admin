import { UserType, DocumentType } from '@/enums'
import { BaseEntityDTO } from '../generics'

type UserDTO = BaseEntityDTO & {
  name: string
  email: string
  document: string
  documentType: DocumentType
  password: string
  type: UserType
  active: boolean
  lastLogin?: Date
}

export type { UserDTO }
