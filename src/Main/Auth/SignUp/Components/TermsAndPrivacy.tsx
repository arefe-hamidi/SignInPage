"use client";

import * as React from "react";
import { Separator } from "@/Components/Shadcn/separator";
import { type SignUpTranslations } from "../i18n";

interface TermsAndPrivacyProps {
  translations: SignUpTranslations;
}

export function TermsAndPrivacy({ translations }: TermsAndPrivacyProps) {
  const handleTermsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle terms of use navigation
    console.log("Terms of Use clicked");
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle privacy policy navigation
    console.log("Privacy Policy clicked");
  };

  return (
    <div className="flex flex-col gap-3">
      <Separator />
      <p className="text-center text-xs text-muted-foreground">
        {translations.termsText}{" "}
        <a
          href="#"
          onClick={handleTermsClick}
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          {translations.termsOfUse}
        </a>{" "}
        {translations.and}{" "}
        <a
          href="#"
          onClick={handlePrivacyClick}
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          {translations.privacyPolicy}
        </a>
      </p>
    </div>
  );
}
