import { LoginParamsDTO, LoginResultDTO, UserDTO } from '@/dtos/users'
import { api } from '@/services'
import { GenericHttpResource } from './GenericHttpResource'

class UsersGateway extends GenericHttpResource<UserDTO> {
  constructor() {
    super('/users')
  }

  async login(params: LoginParamsDTO): Promise<LoginResultDTO> {
    const { data } = await api.post<LoginResultDTO>('/sessions', params)
    return data
  }
}

const usersGateway = new UsersGateway()

export { usersGateway }
