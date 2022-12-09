import { api } from '@/services/api'
import { UserDTO } from '@/dtos/users'

class AuthService {
  static setToken(token: string): void {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  static async profile(): Promise<UserDTO> {
    const { data } = await api.get('/profile')
    return data
  }
}

export { AuthService }
