# Todo React

A simple, performant, and accessible Todo application built with React, TypeScript, Vite, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, edit, and delete todo items
- Mark todos as completed
- Persist todos in browser localStorage
- Responsive design with Tailwind CSS

## Demo

// TODO

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- clsx (for conditional classNames)

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended) and a package manager such as pnpm or npm.

```bash
pnpm install
# or
npm install
```

## Usage

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open http://localhost:3000 to view the app in the browser. Changes are reflected in real time.

Build for production:

```bash
pnpm build
# or
npm run build
```

Preview production build:

```bash
pnpm preview
# or
npm run preview
```

## Available Scripts

In the project directory, you can run:

| Script           | Description                                       |
| ---------------- | ------------------------------------------------- |
| `pnpm dev`       | Start development server at http://localhost:3000 |
| `pnpm build`     | Build the app for production                      |
| `pnpm preview`   | Preview the production build                      |
| `pnpm lint`      | Run ESLint to analyze code                        |

## Folder Structure

```plaintext
todo-react/
├── public/                # Static assets (favicon, images)
├── src/
│   ├── assets/            # Images, SVGs, fonts
│   ├── components/        # Reusable UI components
│   ├── features/          # Feature-specific modules (e.g., todos)
│   ├── hooks/             # Shared custom hooks
│   ├── services/          # Cross-feature services (e.g., logger)
│   ├── store/             # Global state management
│   ├── styles/            # Global CSS and variables
│   ├── types/             # Global type definitions
│   ├── App.tsx            # Application root component
│   └── main.tsx           # Entry point for React
├── .eslintrc.js           # ESLint configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project metadata and scripts
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

Please ensure code follows the existing linting and formatting rules (`eslint` and `prettier`).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
