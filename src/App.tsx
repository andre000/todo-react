import { useState } from 'react'
import './styles/globals.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className='text-4xl font-bold'>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
