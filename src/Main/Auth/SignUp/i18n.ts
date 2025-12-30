import { useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

const translations = {
  en: {
    welcome: "Welcome",
    welcomeSubtitle: "Sign in to your account to continue",
    signInWithGoogle: "Sign in with Google",
    otherOptions: "Other options",
    orSignInWith: "Or sign in with",
    email: "Email",
    phone: "Phone",
    emailAddress: "Email address",
    emailPlaceholder: "name@example.com",
    continue: "Continue",
    continueAsGuest: "Continue as guest",
  },
  fa: {
    welcome: "خوش آمدید",
    welcomeSubtitle: "برای ادامه وارد حساب خود شوید",
    signInWithGoogle: "ورود با گوگل",
    otherOptions: "سایر گزینه ها",
    orSignInWith: "یا ورود با",
    email: "ایمیل",
    phone: "تلفن",
    emailAddress: "آدرس ایمیل",
    emailPlaceholder: "name@example.com",
    continue: "ادامه",
    continueAsGuest: "ادامه به صورت مهمان",
  },
} as const;

export type SignUpTranslations = typeof translations.en;

export function useSignUpTranslations(): SignUpTranslations {
  const locale = useLocale();
  return (translations[locale as Locale] ||
    translations.en) as SignUpTranslations;
}
