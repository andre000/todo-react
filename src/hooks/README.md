# Hooks Directory

This folder (`src/hooks`) contains shared custom React hooks that encapsulate reusable logic across the application. Hooks here are global in scope and can be used by any component or feature slice.

## Current Hooks

- **useDarkMode.ts**: Manages theme state (dark/light) based on system preferences and manual override. Returns the current theme and a toggle function.

## Naming & File Conventions

- **File Name**: Must start with `use` (e.g., `useFetch.ts`, `useAuth.ts`). Use camelCase matching the hook name.
- **Hook Name**: Must start with `use` and use PascalCase after the prefix (e.g., `useDarkMode`).
- **Exports**: Prefer named exports for hooks. Example:
  ```ts
  export function useDarkMode() { ... }
  ```

## Usage

Import hooks directly from their file:

```ts
import { useDarkMode } from 'src/hooks/useDarkMode';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <div data-theme={theme}>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}
```

## Adding a New Hook

1. Create a new file under `src/hooks/` named `useYourHook.ts`.
2. Implement the hook logic, returning state values and/or handler functions.
3. Export the hook as a named export.
4. Write unit tests using React Testing Library’s `renderHook` utility in a parallel `__tests__` folder or adjacent `useYourHook.test.ts`.
5. Document the purpose, parameters, and return values with JSDoc comments.

## Best Practices

- Keep hooks focused on a single responsibility (e.g., data fetching, theme management, form handling).
- Avoid side effects outside React’s lifecycle: use `useEffect`, `useLayoutEffect`, and cleanup functions correctly.
- Use TypeScript generics for reusable hooks (e.g., `useFetch<T>`).
- Ensure hooks are pure where possible and memoize callbacks with `useCallback`.
- Handle errors and loading states gracefully in data-fetching hooks.
- Adhere to React’s Rules of Hooks: only call hooks at the top level and inside React functions.

---

*For feature-specific hooks, prefer placing them inside the respective feature slice under `src/features/[featureName]/hooks/`.*
