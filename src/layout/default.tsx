import { useDarkMode } from '../hooks/useDarkMode';
import { Title } from '../components/Title'

export function Default({ children }: React.PropsWithChildren) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center md:items-center items-start py-6 md:py-0 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-6">
        <div className="flex justify-between items-center">
          <Title className="mb-6 mx-auto w-full dark:text-white">
            Todo App
          </Title>

          <div className="actions">
            <button onClick={toggleDarkMode} className="cursor-pointer text-2xl">
              {isDarkMode ? '☀' : '🌙'}
            </button>
          </div>
        </div>
        <div className="max-w-4xl w-full mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
