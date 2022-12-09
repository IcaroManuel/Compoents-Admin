import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import { useEffectOnce, useLocalStorage } from 'usehooks-ts'

import { UserDTO } from '@/dtos/users'
import { keycloak, keycloakProviderInitConfig } from '@/utils/auth'
import { AuthService } from '@/lib/auth'

type AccountContextType = {
  user: UserDTO
  token: string
  expiresIn: string
  loading: boolean
  error: string
  logged: boolean
  initialized: boolean
  login: () => void
  logout: () => void
}

const AccountContext = createContext({} as AccountContextType)

export const AccountProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useLocalStorage<UserDTO>('@avant/user', {} as UserDTO)
  const [expiresIn, setExpiresIn] = useLocalStorage('@avant/expiresIn', '')
  const [error, setError] = useState('')
  const [token, setToken] = useLocalStorage('@avant/token', '')
  const [initialized, setInitialized] = useState(true)
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)

  const onInit = useCallback(
    async (auth: boolean) => {
      setLoading(false)
      setInitialized(true)
      setLogged(auth)
      setToken(keycloak.token as string)
      setExpiresIn(new Date((keycloak.tokenParsed?.exp || 0) * 1000).toString())

      if (!auth) return
      AuthService.setToken(keycloak.token as string)
      const data = await AuthService.profile()
      setUser(data)
    },
    [setExpiresIn, setToken, setUser]
  )

  const onCatchKeycloak = useCallback((error: { error: string }) => {
    setLoading(false)
    setInitialized(true)
    setLogged(false)
    setError(error.error)
  }, [])

  useEffectOnce(() => {
    if (logged) return
    keycloak
      .init(keycloakProviderInitConfig)
      .then(onInit)
      .catch(onCatchKeycloak)
  })

  return (
    <AccountContext.Provider
      value={{
        logged,
        initialized,
        user,
        error,
        loading,
        token,
        expiresIn,
        login: keycloak.login,
        logout: keycloak.logout
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = (): AccountContextType => useContext(AccountContext)
