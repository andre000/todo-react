# Todos Store

This folder contains a React Context–based store for managing your application's todo list. It provides a fully typed reducer, context/provider, and a custom hook for clean and easy state management.

## File Structure

- `types.ts`
  Defines domain models and types:
  - `Todo`: shape of a todo item
  - `TodoStatus`: union of possible statuses
  - `TodosState`: structure of store state
  - `TodosAction`: all action variants
  - `TodosContextValue`: context value shape

- `reducer.ts`
  Contains:
  - `initialState`: starting state
  - `todosReducer`: pure reducer handling `add`, `remove`, and `update` actions
  - Action creator helpers: `addTodo`, `removeTodo`, `updateTodo`

- `context.ts`
  Creates and exports:
  - `TodosContext`: a React Context for state & dispatch

- `provider.tsx`
  Implements:
  - `TodosProvider`: uses `useReducer` to wire `todosReducer` and exposes context values to children

- `useTodos.ts`
  Exports a custom hook that:
  - Consumes `TodosContext`
  - Throws if used outside provider
  - Returns `todos` list and action dispatch helpers (`add`, `remove`, `update`)

- `index.ts`
  Barrel file re-exporting all store exports for easy imports.

## Usage

Wrap your app (or a subtree) with the provider:

```tsx
import { TodosProvider } from './store/todos'

function App() {
  return (
    <TodosProvider>
      <YourUI />
    </TodosProvider>
  );
}
```

Within any component:

```tsx
import { useTodos } from './store/todos'

function TodoList() {
  const { todos, add, remove, update } = useTodos();

  // render and modify todos...
}
```

## Benefits

- **Isolation**: The store is self-contained—state and actions live together.
- **Type Safety**: Strong typing for state, actions, and context.
- **Extensibility**: Easily add new actions or state fields.
- **Performance**: React Context with reducer pattern scales well for simple to medium complexity.
