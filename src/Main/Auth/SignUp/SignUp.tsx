"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Card } from "@/Components/Shadcn/card";
import { isRTL, type Locale } from "@/i18n/config";
import { useSignUpTranslations } from "./i18n";
import { SignUpHeader } from "./Components/SignUpHeader";
import { SocialAuthSection } from "./Components/SocialAuthSection";
import { EmailAuthSection } from "./Components/EmailAuthSection";
import { ActionButtons } from "./Components/ActionButtons";

export function SignUp() {
  const translations = useSignUpTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale as Locale);
  const [loginMethod, setLoginMethod] = React.useState<"email" | "phone">(
    "email"
  );
  const [email, setEmail] = React.useState("");

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log("Google sign in");
  };

  const handleSocialSignIn = (provider: string) => {
    // Handle social sign in
    console.log("Social sign in:", provider);
  };

  const handleContinue = () => {
    // Handle continue
    console.log("Continue with:", { loginMethod, email });
  };

  const handleGuestContinue = () => {
    // Handle guest continue
    console.log("Continue as guest");
  };

  return (
    <Card className="w-full rounded-2xl border bg-card p-8 shadow-lg">
      <div className="flex flex-col gap-6">
        <SignUpHeader translations={translations} rtl={rtl} />

        <SocialAuthSection
          translations={translations}
          onGoogleSignIn={handleGoogleSignIn}
          onSocialSignIn={handleSocialSignIn}
        />

        <EmailAuthSection
          translations={translations}
          loginMethod={loginMethod}
          onMethodChange={setLoginMethod}
          email={email}
          onEmailChange={setEmail}
        />

        <ActionButtons
          translations={translations}
          rtl={rtl}
          onContinue={handleContinue}
          onGuestContinue={handleGuestContinue}
        />
      </div>
    </Card>
  );
}
