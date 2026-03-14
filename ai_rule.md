# AI Development Rules

This document defines the architecture, coding standards, and development rules
for this Next.js React project. Any AI assistant generating or modifying code
must strictly follow these guidelines.

---

# 1. Tech Stack

Framework: Next.js (App Router)
Language: TypeScript
UI Library: React
Styling: TailwindCSS
State Management: Zustand / Context (when necessary)
Data Fetching: React Query / Server Actions
Linting: ESLint
Formatting: Prettier

---

# 2. Project Architecture

The project follows a **feature-based modular architecture**.

src/
  app/                → Next.js routes
  components/         → reusable UI components
  features/           → feature modules
  hooks/              → custom hooks
  services/           → API services
  lib/                → utilities/helpers
  types/              → global types
  constants/          → static values
  store/              → global state
  styles/             → global styles

Example feature structure:

features/
   users/
      components/
      hooks/
      services/
      types/
      utils/

Each feature must be **isolated and self-contained**.

---

# 3. Component Design Rules

Follow **Single Responsibility Principle**.

Component types:

UI Component
Pure presentational component.

Container Component
Handles state and logic.

Example:

components/ui/button.tsx
features/users/components/user-card.tsx

Rules:
- Components must be reusable
- Avoid large components (>200 lines)
- Split complex logic into hooks

---

# 4. SOLID Principles

All generated code must follow SOLID.

S — Single Responsibility
A component or function must do only one thing.

O — Open/Closed
Components must be extendable without modification.

L — Liskov Substitution
Child components should work wherever parent components are used.

I — Interface Segregation
Use small focused TypeScript interfaces.

D — Dependency Inversion
Use abstractions instead of concrete implementations.

---

# 5. TypeScript Rules

Always use strict typing.

Bad
any

Good
interface User {
  id: string
  name: string
}

Rules:
- Avoid `any`
- Use `type` or `interface`
- Create shared types in `/types`

---

# 6. API Layer

All API calls must go through the **services layer**.

services/
   user.service.ts
   auth.service.ts

Example:

export const getUsers = async (): Promise<User[]> => {
  return api.get("/users")
}

Never call APIs directly inside components.

---

# 7. Custom Hooks

Business logic must live inside hooks.

Example:

hooks/useUsers.ts

Rules:
- No heavy logic inside components
- Extract reusable logic into hooks

---

# 8. State Management

Local State → useState  
Shared State → Zustand / Context  
Server State → React Query

Avoid prop drilling.

---

# 9. Naming Conventions

Components → PascalCase  
Functions → camelCase  
Hooks → useSomething  
Files → kebab-case

Examples:

user-card.tsx
use-auth.ts
user.service.ts

---

# 10. Folder Size Rules

Files > 300 lines must be refactored.

Large components must be split into:
- hooks
- sub components
- utilities

---

# 11. Refactoring Guidelines

AI should refactor when:

- Functions > 40 lines
- Components > 200 lines
- Duplicate logic detected
- Business logic inside UI

Refactoring methods:

- Extract function
- Extract hook
- Extract component
- Move logic to service

---

# 12. Performance Rules

Use:

- React.memo
- useCallback
- useMemo
- Lazy loading
- Dynamic imports

Avoid unnecessary re-renders.

---

# 13. Error Handling

Always implement proper error handling.

Example:

try {
} catch (error) {
  console.error(error)
}

User-friendly errors must be shown in UI.

---

# 14. Testing (Optional but recommended)

Unit Testing → Jest  
Component Testing → React Testing Library

Rules:
- Test business logic
- Test hooks
- Test utilities

---

# 15. Accessibility

Follow accessibility rules:

- Use semantic HTML
- Add aria labels
- Keyboard navigation support

---

# 16. Styling Rules

Use TailwindCSS.

Rules:
- Avoid inline styles
- Create reusable UI components
- Follow consistent spacing

---

# 17. Security

Never expose secrets in frontend.

Use environment variables.

.env.local

NEXT_PUBLIC_API_URL=

---

# 18. Git Rules

Commit format:

feat: add user module
fix: resolve login bug
refactor: extract auth hook
chore: update dependencies

---

# 19. AI Assistant Rules

AI must:

- Follow project architecture
- Avoid creating duplicate logic
- Prefer reusable components
- Refactor large components
- Follow SOLID principles
- Maintain TypeScript safety

AI must NOT:

- Introduce `any`
- Create monolithic components
- Bypass service layer
- Write business logic in UI

---

# 20. Documentation

Every major module must include:

README.md

Explaining:
- purpose
- architecture
- usage