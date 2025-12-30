"use client";

import * as React from "react";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { SocialButton } from "./SocialButton";
import {
  PRIMARY_SOCIAL_PROVIDERS,
  SECONDARY_SOCIAL_PROVIDERS,
} from "../constants";
import { type SignUpTranslations } from "../i18n";
import { cn } from "@/lib/utils";

interface SocialAuthSectionProps {
  translations: SignUpTranslations;
  onGoogleSignIn?: () => void;
  onSocialSignIn?: (provider: string) => void;
}

export function SocialAuthSection({
  translations,
  onGoogleSignIn,
  onSocialSignIn,
}: SocialAuthSectionProps) {
  const [showOtherOptions, setShowOtherOptions] = React.useState(false);

  const toggleOtherOptions = () => {
    setShowOtherOptions((prev) => !prev);
  };

  return (
    <>
      <GoogleSignInButton
        translations={translations}
        onClick={onGoogleSignIn}
      />

      <div className="flex gap-2">
        {PRIMARY_SOCIAL_PROVIDERS.map((provider) => (
          <SocialButton
            key={provider.name}
            provider={provider}
            size="md"
            className="flex-1"
            onClick={() => onSocialSignIn?.(provider.name)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={toggleOtherOptions}
          className="px-3 text-xs text-muted-foreground underline-offset-4 hover:underline cursor-pointer transition-colors"
        >
          {translations.otherOptions}
        </button>
      </div>

      <div
        className={cn(
          "grid grid-cols-5 gap-2 transition-all duration-300 ease-in-out overflow-hidden",
          showOtherOptions ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {SECONDARY_SOCIAL_PROVIDERS.map((provider) => (
          <SocialButton
            key={provider.name}
            provider={provider}
            size="sm"
            onClick={() => onSocialSignIn?.(provider.name)}
          />
        ))}
      </div>
    </>
  );
}
