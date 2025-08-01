import { Default } from './layout/default'
import { TodoList } from './features/todos/components/TodoList'
import './styles/globals.css'
import { TodosProvider } from './store/todos'

function App() {
  return (
    <TodosProvider>
      <Default>
        <div className='flex gap-4'>
          <TodoList title='To do' status='todo' />
          <TodoList title='In progress' status='in-progress' />
          <TodoList title='Done' status='done' />
        </div>
      </Default>
    </TodosProvider>
  )
}

export default App

