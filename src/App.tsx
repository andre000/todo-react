import { Default } from './layout/default'
import { TodoList } from './features/todos/components/TodoList'
import './styles/globals.css'
import { TodosProvider } from './store/todos'

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");

  return (
    <TodosProvider>
      <Default>
        <div className='flex gap-4 flex-col items-center md:flex-row md:justify-between'>
          <TodoList title='To do' status='todo' />
          <TodoList title='In progress' status='in-progress' />
          <TodoList title='Done' status='done' />
        </div>
      </Default>
    </TodosProvider>
  )
}

export default App

