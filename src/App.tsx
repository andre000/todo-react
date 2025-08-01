import { Default } from './layout/default'
import { TodoList } from './features/todos/components/TodoList/TodoList'
import './styles/globals.css'

function App() {
  return (
    <Default>
      <div className='flex gap-4'>
        <TodoList title='To do' />
        <TodoList title='In progress' />
        <TodoList title='Done' />
      </div>
    </Default>
  )
}

export default App

