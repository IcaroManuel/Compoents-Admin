import composeProviders from './compose'
import { FranchiseProvider } from './franchises'
import { GroupProvider } from './groups'
import { AccountProvider } from './account'
import { ThemeProvider } from './theme'

const AppProvider = composeProviders(
  ThemeProvider,
  AccountProvider,
  FranchiseProvider,
  GroupProvider
)

export default AppProvider
