# Features Directory

The `src/features` folder contains domain-specific feature modules (or "feature slices"). Each feature is self-contained, encapsulating its API calls, UI components, state management hooks, types, and utility functions.

## Folder Structure Example

```plaintext
src/features/
├── todos/               # Example feature slice for todo functionality
│   ├── api/             # Network requests and data fetching
│   ├── components/      # Feature-specific presentational components
│   ├── context/         # React Context providers or selectors (optional)
│   ├── hooks/           # Custom React hooks for business logic
│   ├── types/           # TypeScript type definitions and interfaces
│   └── utils/           # Utility functions and helpers
```

## Feature Slice Conventions

- **Encapsulation**: Keep all feature-related code within its own directory.
- **Barrel Exports**: Use `index.ts` files to re-export modules for cleaner imports.
- **Type Safety**: Define feature-specific types in `types/`, and reference them in API, hooks, and components.
- **Isolation**: Avoid cross-feature dependencies; share common logic via `src/hooks` or `src/utils` if needed.
- **Naming**: Use PascalCase for components and hooks (e.g., `useTodos`, `TodoList`), and camelCase for functions and variables.

## Adding a New Feature Slice

1. Create a new folder under `src/features/` named after the feature (e.g., `user`).
2. Inside the feature folder, add subdirectories: `api`, `components`, `hooks`, `types`, and `utils`.
3. Implement API functions in `api/` (e.g., `userApi.ts`).
4. Create UI components in `components/`, with a barrel `index.ts`.
5. Write custom hooks in `hooks/` to encapsulate logic and state.
6. Define TypeScript interfaces and types in `types/`.
7. Add any pure utility functions in `utils/`.
8. Optionally, add context providers in `context/` if the feature needs React Context.

## Usage Example

Import feature exports via barrel files:

```ts
import { fetchTodos } from 'src/features/todos/api';
import { useTodos } from 'src/features/todos/hooks';
import { TodoList } from 'src/features/todos/components/TodoList';
```

## Best Practices

- Separate data fetching (API) from UI concerns (components) and business logic (hooks).
- Keep components as pure and presentational as possible; delegate data management to hooks.
- Leverage React Query or similar libraries in `api/` for caching and state management.
- Maintain consistent file naming and folder organization across all feature slices.
- Write tests alongside feature code (e.g., `__tests__` folders or `*.test.tsx` files).

---

*This README provides guidance on the feature-driven architecture of the project. For shared utilities and global hooks, refer to `src/hooks` and `src/utils` at the root level.*
