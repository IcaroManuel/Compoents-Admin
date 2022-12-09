import Keycloak from 'keycloak-js'

const keycloakConfig = JSON.parse(process.env.REACT_APP_KEYCLOAK_JSON as string)
const keycloak = new Keycloak({
  url: keycloakConfig['auth-server-url'],
  realm: keycloakConfig['realm'],
  clientId: keycloakConfig['resource']
})

const keycloakProviderInitConfig: Keycloak.KeycloakInitOptions = {
  onLoad: 'login-required'
}

export { keycloak, keycloakProviderInitConfig }
