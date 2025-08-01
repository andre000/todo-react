import { Title } from '../components/Title'

export function Default({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl p-6">
        <Title className="mb-6 mx-auto w-full">
          Todo App
        </Title>
        <div className="max-w-4xl w-full mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
