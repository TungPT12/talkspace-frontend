import { appConfig } from './configs'
import { ConfigProvider } from './contexts/ConfigProvider'
import { BaseRoutes } from './routes'
import './styles'

function App() {
  document.title = appConfig.title
  return (
    <ConfigProvider>
      <BaseRoutes />
    </ConfigProvider>
  )
}

export default App
