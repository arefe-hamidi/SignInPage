import { useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

const translations = {
  en: {
    welcome: "Welcome Back",
    welcomeSubtitle: "Sign in to your account to continue",
    signInWithGoogle: "Continue with Google",
    otherOptions: "More options",
    orSignInWith: "Or continue with",
    email: "Email",
    phone: "Phone",
    emailAddress: "Email address",
    phoneNumber: "Phone number",
    mobileNumber: "Mobile Number",
    emailPlaceholder: "name@example.com",
    phonePlaceholder: "912 345 6789",
    continue: "Continue",
    continueAsGuest: "Continue as guest",
    termsText: "By clicking continue, you agree to our ",
    termsOfUse: "Terms of Use",
    and: "and",
    privacyPolicy: "Privacy Policy",
    validation: {
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneRequired: "Phone number is required",
      phoneInvalidDigits: "Phone number should contain only digits",
      phoneTooShort: "Phone number must be at least 10 digits",
      phoneTooLong: "Phone number is too long",
    },
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
    phoneNumber: "شماره تلفن",
    mobileNumber: "شماره موبایل",
    emailPlaceholder: "name@example.com",
    phonePlaceholder: "912 345 6789",
    continue: "ادامه",
    continueAsGuest: "ادامه به صورت مهمان",
    termsText: "با ادامه دادن، شما قوانین ما را می پذیرید:",
    termsOfUse: "شرایط استفاده",
    and: "و",
    privacyPolicy: "حریم خصوصی",
    validation: {
      emailRequired: "ایمیل الزامی است",
      emailInvalid: "لطفاً یک آدرس ایمیل معتبر وارد کنید",
      phoneRequired: "شماره تلفن الزامی است",
      phoneInvalidDigits: "شماره تلفن باید فقط شامل اعداد باشد",
      phoneTooShort: "شماره تلفن باید حداقل ۱۰ رقم باشد",
      phoneTooLong: "شماره تلفن خیلی طولانی است",
    },
  },
} as const;

export type SignUpTranslations = typeof translations.en;

export function useSignUpTranslations(): SignUpTranslations {
  const locale = useLocale();
  return (translations[locale as Locale] ||
    translations.en) as SignUpTranslations;
}
