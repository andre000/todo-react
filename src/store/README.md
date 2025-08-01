# Store Directory

The `src/store` folder contains global state management logic for the application. State is organized into feature-specific slices, each implemented with React Context, reducers, and custom hooks.

## Folder Structure Example

```plaintext
src/store/
└── todos/               # Todo feature slice
    ├── context.ts       # React Context and default values
    ├── provider.tsx     # Context Provider component
    ├── reducer.ts       # Reducer function handling state transitions
    ├── types.ts         # State and action type definitions
    ├── useTodos.ts      # Custom hook for consuming store
    └── index.ts         # Barrel exports
```

## Conventions

- **Slice Directory**: Each slice (feature) lives in its own folder under `src/store/`.
- **context.ts**: Defines `createContext` for state and dispatch.
- **provider.tsx**: Implements a provider component that sets up the reducer and context.
- **reducer.ts**: Contains the reducer function with action handlers.
- **types.ts**: TypeScript interfaces and action type enums for the slice.
- **useXxx.ts**: Named `use<FeatureName>` hook that wraps `useContext` for ease of use.
- **index.ts**: Re-export context, provider, reducer, types, and hooks for simpler imports.

## Usage

1. Wrap your application (or specific subtree) with the provider in `src/layout/default.tsx` or `src/main.tsx`:

   ```tsx
   // ...existing imports...
   import { TodosProvider } from 'src/store/todos';

   function AppLayout({ children }: { children: React.ReactNode }) {
     return (
       <TodosProvider>
         {/* ...other providers or components... */}
         {children}
       </TodosProvider>
     );
   }
   ```

2. Consume state and dispatch actions using the custom hook:

   ```tsx
   import { useTodos } from 'src/store/todos';

   function TodoList() {
     const { todos, dispatch } = useTodos();
     // ... render list and dispatch actions ...
   }
   ```

## Adding a New Store Slice

1. Create a new folder under `src/store/` with the feature name.
2. Add the following files:
   - `context.ts`
   - `provider.tsx`
   - `reducer.ts`
   - `types.ts`
   - `use<FeatureName>.ts`
   - `index.ts`
3. Implement logic following the conventions above.
4. Export your provider and hook in `index.ts`.
5. Add tests for the reducer and hook in a parallel `__tests__` folder or adjacent `*.test.ts` files.

## Best Practices

- Keep reducers pure and handle state immutably.
- Use discriminated unions for action types in TypeScript.
- Memoize context values if necessary to avoid unnecessary re-renders.
- Split large slices into smaller reducers if complexity grows.
- Keep UI concerns separate by using hooks for state logic and components for presentation.
