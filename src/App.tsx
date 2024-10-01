import { appConfig } from './configs'
import { BaseRoutes } from './routes'
import './styles/index.css'

function App() {
  document.title = appConfig.title
  return <BaseRoutes />
}

export default App
