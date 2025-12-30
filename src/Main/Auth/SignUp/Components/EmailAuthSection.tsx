"use client";

import * as React from "react";
import { Button } from "@/Components/Shadcn/button";
import { Input } from "@/Components/Shadcn/input";
import { Label } from "@/Components/Shadcn/label";
import { Separator } from "@/Components/Shadcn/separator";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { type SignUpTranslations } from "../i18n";
import {
  validateEmail,
  validatePhone,
  formatPhoneNumber,
} from "../utils/validation";

interface EmailAuthSectionProps {
  translations: SignUpTranslations;
  loginMethod: "email" | "phone";
  onMethodChange: (method: "email" | "phone") => void;
  email: string;
  onEmailChange: (email: string) => void;
}

export function EmailAuthSection({
  translations,
  loginMethod,
  onMethodChange,
  email,
  onEmailChange,
}: EmailAuthSectionProps) {
  const [validationError, setValidationError] = React.useState<string>("");
  const [touched, setTouched] = React.useState(false);

  // Clear input and validation when switching methods
  React.useEffect(() => {
    onEmailChange("");
    setValidationError("");
    setTouched(false);
  }, [loginMethod, onEmailChange]);

  // Validate on change
  React.useEffect(() => {
    if (!touched || !email) {
      setValidationError("");
      return;
    }

    const validation =
      loginMethod === "email"
        ? validateEmail(email, translations.validation)
        : validatePhone(email, translations.validation);

    if (!validation.isValid) {
      setValidationError(validation.error || "");
    } else {
      setValidationError("");
    }
  }, [email, loginMethod, touched, translations]);

  const handleInputChange = (value: string) => {
    if (loginMethod === "phone") {
      // Format phone number as user types
      const formatted = formatPhoneNumber(value);
      onEmailChange(formatted);
    } else {
      onEmailChange(value);
    }
    setTouched(true);
  };

  const handleBlur = () => {
    setTouched(true);
    if (email) {
      const validation =
        loginMethod === "email"
          ? validateEmail(email, translations.validation)
          : validatePhone(email, translations.validation);

      if (!validation.isValid) {
        setValidationError(validation.error || "");
      } else {
        setValidationError("");
      }
    }
  };
  return (
    <>
      <div className="relative flex items-center">
        <Separator className="flex-1" />
        <span className="px-3 text-xs text-muted-foreground">
          {translations.orSignInWith}
        </span>
        <Separator className="flex-1" />
      </div>

      <div className="relative flex items-center gap-1 rounded-full bg-muted p-1 w-fit mx-auto border border-border">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => onMethodChange("email")}
          className={
            loginMethod === "email"
              ? "bg-white text-foreground font-semibold shadow-sm hover:bg-white dark:bg-black dark:text-white dark:hover:bg-black"
              : "text-muted-foreground hover:text-foreground hover:bg-transparent"
          }
        >
          <Mail className="size-3.5" />
          {translations.email}
        </Button>
        <Button
          variant="ghost"
          size="lg"
          onClick={() => onMethodChange("phone")}
          className={
            loginMethod === "phone"
              ? "bg-white text-foreground font-semibold shadow-sm hover:bg-white dark:bg-black dark:text-white dark:hover:bg-black"
              : "text-muted-foreground hover:text-foreground hover:bg-transparent"
          }
        >
          <Phone className="size-3.5" />
          {translations.phone}
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor={loginMethod === "email" ? "email" : "phone"}
          className="text-sm"
        >
          {loginMethod === "email"
            ? translations.emailAddress
            : translations.mobileNumber}
        </Label>
        <div className="flex flex-col gap-1">
          {loginMethod === "phone" ? (
            <div
              className={cn(
                "flex items-center h-12 rounded-md border bg-secondary/30 overflow-hidden",
                validationError && touched && "border-destructive"
              )}
            >
              <div className="flex items-center justify-center h-full px-3 bg-muted/80 border-r border-border rounded-l-md">
                <span className="text-sm font-medium text-foreground">98+</span>
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder={translations.phonePlaceholder}
                value={email}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={handleBlur}
                className={cn(
                  "h-full border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-none",
                  validationError && touched && "border-destructive"
                )}
                aria-invalid={validationError && touched ? true : undefined}
              />
            </div>
          ) : (
            <Input
              id="email"
              type="email"
              placeholder={translations.emailPlaceholder}
              value={email}
              onChange={(e) => handleInputChange(e.target.value)}
              onBlur={handleBlur}
              className={cn(
                "h-12 bg-secondary/30",
                validationError && touched && "border-destructive"
              )}
              aria-invalid={validationError && touched ? true : undefined}
            />
          )}
          {validationError && touched && (
            <p className="text-xs text-destructive">{validationError}</p>
          )}
        </div>
      </div>
    </>
  );
}
