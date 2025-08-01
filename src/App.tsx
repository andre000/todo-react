import { Title } from './components/Title/Title'
import { Default } from './layout/default'
import './styles/globals.css'

function App() {
  return (
    <Default>
      <Title level={1}>Todo App</Title>
    </Default>
  )
}

export default App

