# Testing Guide

This project uses [Vitest](https://vitest.dev/) for unit and integration testing.

## Setup

Install dependencies:

```bash
pnpm install
```

## Running Tests

### Run tests in watch mode (development)
```bash
pnpm test
```

### Run tests once
```bash
pnpm test:run
```

### Run tests with UI
```bash
pnpm test:ui
```

### Run tests with coverage
```bash
pnpm test:coverage
```

## Test Structure

Tests are located alongside the code they test, using the `.test.ts` or `.test.tsx` extension:

- `src/Main/Auth/SignUp/utils/validation.test.ts` - Validation utility tests
- `src/i18n/config.test.ts` - i18n configuration tests
- `src/lib/utils.test.ts` - Utility function tests
- `src/Main/Auth/SignUp/Components/TermsAndPrivacy.test.tsx` - Component tests

## Writing Tests

### Example: Testing a utility function

```typescript
import { describe, it, expect } from "vitest";
import { validateEmail } from "./validation";

describe("validateEmail", () => {
  it("should return invalid for empty email", () => {
    const result = validateEmail("", mockMessages);
    expect(result.isValid).toBe(false);
  });
});
```

### Example: Testing a React component

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should render correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## Test Coverage

The project is configured to track coverage for:
- Utility functions
- Validation logic
- i18n configuration
- React components

Coverage reports are generated in the `coverage/` directory when running `pnpm test:coverage`.

## Configuration

Test configuration is in `vitest.config.ts`. Key settings:
- Uses `jsdom` environment for React component testing
- Path aliases configured to match Next.js (`@/*`)
- Setup file at `src/test/setup.ts` for global test configuration

