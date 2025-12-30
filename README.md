# Sign In Page

A modern, fully-featured sign-up/sign-in page built with Next.js, featuring internationalization, dark mode support, and comprehensive form validation.

## 🚀 Features

- **🌐 Internationalization (i18n)**

  - Support for English (en) and Farsi (fa)
  - Automatic RTL/LTR layout switching
  - Component-level translations

- **🌓 Dark/Light Mode**

  - System preference detection
  - Smooth theme transitions
  - Persistent theme selection

- **📱 Social Authentication**

  - Google Sign-In
  - Multiple social providers (X, LinkedIn, Apple, Microsoft, Facebook, Github, Gitlab, Discord)
  - Expandable "More options" section

- **📧 Email/Phone Authentication**

  - Toggle between email and phone input
  - Real-time validation
  - Phone number formatting (Iranian format)
  - Country code prefix (98+)

- **✅ Form Validation**

  - Email validation
  - Phone number validation
  - Internationalized error messages
  - Real-time feedback

- **🧪 Testing**

  - Vitest configuration
  - Unit tests for utilities
  - Component tests
  - Coverage reporting

- **🎨 Modern UI**
  - shadcn/ui components
  - Tailwind CSS styling
  - Responsive design
  - Accessible components

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI)
- **Internationalization:** next-intl 4.6.1
- **Theme Management:** next-themes
- **Icons:** lucide-react
- **Testing:** Vitest, Testing Library
- **Package Manager:** pnpm

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd SignInPage
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/en/auth/sign-up` or `/fa/auth/sign-up` based on your browser's language preference.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage report

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── [locale]/          # Localized routes
│   │   ├── auth/
│   │   │   └── sign-up/   # Sign-up page
│   │   └── layout.tsx     # Root layout with i18n
│   └── globals.css        # Global styles
├── Components/            # Reusable components
│   ├── Shadcn/           # shadcn/ui components
│   ├── Layout/            # Layout components
│   ├── LanguageSwitcher.tsx
│   └── ThemeToggle.tsx
├── Main/                  # Feature modules
│   └── Auth/
│       └── SignUp/       # Sign-up feature
│           ├── Components/
│           ├── utils/     # Validation utilities
│           └── i18n.ts    # Component translations
├── i18n/                  # Internationalization config
├── lib/                   # Utility functions
├── messages/              # Translation files
└── test/                  # Test setup
```

## 🌍 Internationalization

The project supports multiple languages with automatic RTL/LTR switching:

- **English (en)** - LTR
- **Farsi (fa)** - RTL

### Adding Translations

1. Add translations to `src/messages/{locale}.json` for global translations
2. Add component-specific translations in `src/Main/Auth/SignUp/i18n.ts`

### Using Translations

```typescript
import { useSignUpTranslations } from "./i18n";

function MyComponent() {
  const translations = useSignUpTranslations();
  return <div>{translations.welcome}</div>;
}
```

## 🎨 Theming

The project uses `next-themes` for theme management. Themes are configured globally and persist across sessions.

### Theme Configuration

- Light mode: `#F9F9F9` background
- Dark mode: `#171717` background
- Automatic system preference detection

## 🧪 Testing

See [TESTING.md](./TESTING.md) for detailed testing documentation.

### Quick Start

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui
```

### Test Coverage

- ✅ Validation utilities (email, phone)
- ✅ i18n configuration
- ✅ Utility functions
- ✅ React components

## 📝 Form Validation

The project includes comprehensive validation utilities:

### Email Validation

- Required field check
- Email format validation
- Internationalized error messages

### Phone Validation

- Required field check
- Digit-only validation
- Length validation (10-15 digits)
- Automatic formatting (XXX XXX XXXX)

### Usage

```typescript
import {
  validateEmail,
  validatePhone,
  formatPhoneNumber,
} from "./utils/validation";

const emailResult = validateEmail(email, translations.validation);
const phoneResult = validatePhone(phone, translations.validation);
const formatted = formatPhoneNumber(phone);
```

## 🎯 Component Architecture

### SignUp Component Structure

```
SignUp
├── SignUpHeader          # Welcome message
├── SocialAuthSection     # Social login options
│   ├── GoogleSignInButton
│   ├── Primary Providers (X, LinkedIn, Apple)
│   └── Secondary Providers (Microsoft, Facebook, etc.)
├── EmailAuthSection      # Email/Phone input
│   ├── Method Toggle (Email/Phone)
│   └── Input with validation
├── ActionButtons         # Continue & Guest options
└── TermsAndPrivacy      # Terms and privacy links
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
```

### Tailwind Configuration

Custom colors and themes are configured in `src/app/globals.css`:

```css
:root {
  --button-secondary: #f9f9f9;
  --button-secondary-hover: #f0f0f0;
}

.dark {
  --button-secondary: #171717;
  --button-secondary-hover: #2a2a2a;
}
```

## 🚢 Deployment

### Build for Production

```bash
pnpm build
pnpm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

Built with ❤️ for modern web applications.

---

For more information about testing, see [TESTING.md](./TESTING.md).
