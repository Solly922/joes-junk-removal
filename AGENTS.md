# Agent Development Guide

This document provides essential information for AI coding agents working on this Next.js project.

## Project Overview

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5 with strict mode enabled
- **UI**: React 19, shadcn/ui (base-maia style), Base UI components, Tailwind CSS 4
- **Icons**: Hugeicons
- **Styling**: Tailwind CSS with custom design tokens, tw-animate-css

## Build & Development Commands

### Core Commands
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Testing
**Note**: No test framework is currently configured. If tests are added, update this section.

## Code Style Guidelines

### TypeScript

#### Type Safety
- **Strict mode enabled**: All code must pass TypeScript strict checks
- Always prefer explicit types over `any`
- Use proper React types: `React.ComponentProps<"element">`, `React.ReactNode`
- For component props, extend base element props when wrapping native elements

#### Example
```typescript
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <InputPrimitive type={type} className={cn(...)} {...props} />
}
```

### File Organization

#### Path Aliases
- `@/*` - Root directory
- `@/components` - React components
- `@/components/ui` - UI components (shadcn/ui)
- `@/lib` - Utility functions
- `@/app` - Next.js app routes

#### File Structure
```
app/              # Next.js App Router pages and layouts
components/       # React components
  ui/            # Reusable UI components (shadcn/ui)
  *.tsx          # Feature components
lib/             # Utilities and helpers
public/          # Static assets
```

### Imports

#### Import Order
1. External packages (React, Next.js, third-party)
2. Internal aliases (`@/components`, `@/lib`)
3. Relative imports
4. Types (if not inline)

#### Example
```typescript
import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
```

### Component Patterns

#### Client Components
- Add `"use client"` directive at the top when using hooks, event handlers, or browser APIs
- Most UI components are client components

#### Component Structure
```typescript
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function ComponentName({ 
  className, 
  variant = "default",
  ...props 
}: React.ComponentProps<"div"> & { 
  variant?: "default" | "outline" 
}) {
  return (
    <div
      data-slot="component-name"
      className={cn("base classes", className)}
      {...props}
    />
  )
}

export { ComponentName }
```

#### Key Patterns
- Use `data-slot` attributes for component identification
- Spread props with `{...props}` after explicit props
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Export components with named exports (not default unless page component)

### Styling

#### Tailwind CSS
- Use Tailwind 4 with CSS-first configuration (no tailwind.config.ts)
- Custom design tokens defined in `app/globals.css`
- Use `cn()` from `@/lib/utils` to conditionally merge classes
- Prefer Tailwind utilities over custom CSS
- Use design tokens: `bg-background`, `text-foreground`, `border-border`, etc.
- Support dark mode with `dark:` variant

#### Class Variance Authority (CVA)
```typescript
const buttonVariants = cva(
  "base classes for all variants",
  {
    variants: {
      variant: {
        default: "variant-specific classes",
        outline: "variant-specific classes",
      },
      size: {
        default: "size-specific classes",
        sm: "size-specific classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

#### Custom CSS Variables
Use OKLCH color space for design tokens:
```css
--primary: oklch(0.648 0.2 131.684);
```

### Naming Conventions

#### Files
- React components: PascalCase (e.g., `ComponentExample.tsx`)
- Utilities: kebab-case (e.g., `utils.ts`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)

#### Components
- PascalCase for component names
- Prefix wrapped primitives: `ButtonPrimitive`, `InputPrimitive`

#### Variables
- camelCase for variables and functions
- PascalCase for components and types
- UPPER_CASE for constants (rare in this codebase)

### Props & Types

#### Destructuring
Always destructure props with explicit typing:
```typescript
function Component({ className, size = "default", ...props }: ComponentProps) {
  // implementation
}
```

#### Extending Props
```typescript
React.ComponentProps<"div"> & { customProp?: string }
VariantProps<typeof variants> // for CVA variants
```

### Error Handling

**Note**: No specific error handling patterns established yet. Follow React best practices:
- Use Error Boundaries for component errors
- Handle async errors with try/catch
- Validate props with TypeScript

### Comments

- Use JSDoc for exported functions when logic is complex
- Avoid obvious comments
- Use `//` for inline comments
- Use `/* */` for multi-line explanations

### Icons

```typescript
import { HugeiconsIcon } from "@hugeicons/react"
import { IconName } from "@hugeicons/core-free-icons"

<HugeiconsIcon icon={IconName} strokeWidth={2} />
```

## Linting

- ESLint configured with `eslint-config-next`
- Run `npm run lint` before committing
- Auto-fixes available for many issues

## Git Practices

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Follow conventional commits if established (check git log)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Base UI Components](https://base-ui.com)
