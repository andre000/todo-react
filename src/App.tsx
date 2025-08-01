import { Default } from './layout/default'
import { TodoList } from './features/todos/components/TodoList/TodoList'
import './styles/globals.css'
import { TodosProvider } from './store/todos'

function App() {
  return (
    <TodosProvider>
      <Default>
        <div className='flex gap-4'>
          <TodoList title='To do' />
          <TodoList title='In progress' />
          <TodoList title='Done' />
        </div>
      </Default>
    </TodosProvider>
  )
}

export default App

