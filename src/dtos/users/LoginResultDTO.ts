import { UserDTO } from './UserDTO'

type LoginResultDTO = {
  user: UserDTO
  token: string
  expiresIn: string
}

export type { LoginResultDTO }
