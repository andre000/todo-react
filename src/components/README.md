# Components Directory

This folder contains reusable, presentation-focused React components written in TypeScript. Each component lives in its own subdirectory and follows a consistent file structure and naming convention.

## Folder Structure Example

```plaintext
src/components/
├── Button/
│   ├── Button.tsx         # Component implementation (PascalCase)
│   ├── Button.types.ts    # Props and related type definitions
│   └── index.ts           # Barrel export
```

## Naming & File Conventions

- **Component Folder**: Matches the component name (PascalCase).
- **Component File**: `ComponentName.tsx` for implementation.
- **Type Definitions**: `ComponentName.types.ts` for props and interfaces.
- **Barrel Export**: `index.ts` re-exports the component for cleaner imports.
- Use **PascalCase** for component names and **camelCase** for props and variables.

## Usage

Import components from their directory:

```ts
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
```

Use them in JSX:

```jsx
<Button onClick={handleClick} variant="primary">
  Submit
</Button>
```

## Adding a New Component

1. Create a new folder under `src/components/` with the component name in PascalCase.
2. Add `ComponentName.tsx` with the React implementation as a function component.
3. Define props in `ComponentName.types.ts` using interfaces or type aliases.
4. Export from `index.ts`:
   ```ts
   export { default as ComponentName } from './ComponentName';
   ```
5. Write accompanying tests (e.g., `ComponentName.test.tsx`) in a parallel `__tests__` folder or adjacent to the component.
6. Document the component’s purpose and usage in JSDoc comments.

## Best Practices

- **Type Safety**: Use strict TypeScript settings and utility types (e.g., `Partial`, `Pick`).
- **Custom Hooks**: Extract repeatable logic into hooks under `src/hooks/`.
- **Styling**: Keep styles scoped or use CSS Modules / utility-first CSS to avoid global collisions.
- **Performance**: Memoize pure components with `React.memo`, stabilize handlers with `useCallback`, and values with `useMemo`.
- **Accessibility**: Use semantic HTML elements, proper `aria-` attributes, and ensure keyboard navigation.
- **Testing**: Use React Testing Library and Jest for unit tests and assertions.

## Resources

- React Docs: https://reactjs.org/docs/getting-started.html
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Accessibility: https://www.w3.org/WAI/standards-guidelines/wcag/
- Testing: https://testing-library.com/docs/react-testing-library/intro/
