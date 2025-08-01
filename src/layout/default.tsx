export function Default({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {children}
    </div>
  );
}