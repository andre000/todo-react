# Services Directory

The `src/services` folder contains shared modules that abstract external integrations, cross-cutting concerns, and application-wide services. This layer centralizes logic for API clients, logging, analytics, and other utilities that span multiple features.

## Naming & File Conventions

- **File Name**: Use camelCase matching the service purpose (e.g., `apiClient.ts`, `userService.ts`).
- **Exports**: Prefer named exports for individual functions or service instances. Use a default export only for class-based or singleton instances.
- **Barrel Exports**: Re-export services in `index.ts` for simpler imports.

## Usage

Import services from the centralized barrel or individual files:

```ts
import { apiClient, authService } from 'src/services';
// or
import { userService } from 'src/services/userService';
```

## Adding a New Service Module

1. Create a new file under `src/services/` with a descriptive name (e.g., `notificationService.ts`).
2. Implement service logic, exposing functions or class instances as named exports.
3. Handle errors gracefully and wrap low-level details (e.g., HTTP, SDK) behind a clean API.
4. Add type definitions or interfaces as needed directly in the service file or in a parallel `types/` folder under `src/services/`.
5. Export your module in `index.ts` for consolidated imports:
   ```ts
   export * from './notificationService';
   ```
6. Write unit tests in a `__tests__` folder or adjacent `notificationService.test.ts`.

## Best Practices

- **Single Responsibility**: Each service should focus on a specific integration or domain concern.
- **Error Handling**: Normalize errors and throw or return consistent response shapes.
- **Type Safety**: Leverage TypeScript interfaces and generics for API payloads and responses.
- **Configuration**: Externalize URLs and keys into environment variables and use configuration modules.

## Resources

- Axios: https://axios-http.com/docs/intro
- Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Winston Logger (Node.js): https://github.com/winstonjs/winston
- Google Analytics: https://developers.google.com/analytics
- MSW (Mock Service Worker) for API mocking: https://mswjs.io/
