# Monorepo Project

This monorepo contains multiple packages and applications, managed using `pnpm` and `turbo`. The structure is organized to support a multi-brand, multi-platform suite of design tokens, UI components, and web applications.

### Packages

- **eslint-config**: Shared ESLint configuration.
- **tokens**: Design tokens for multiple brands and platforms.
- **typescript-config**: Shared TypeScript configuration.
- **ui**: Shared UI components.

### Applications

- **web**: The main web application.

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.15.4

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```

### Scripts

- Build: `pnpm run build`
- Development: `pnpm run dev`
- Preview: `pnpm run preview`
- Lint: `pnpm run lint`
- Format: `pnpm run format`
- Storybook: `pnpm run storybook`
