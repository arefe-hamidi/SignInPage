import { Button } from "@/Components/Shadcn/button";
import { Input } from "@/Components/Shadcn/input";
import { Label } from "@/Components/Shadcn/label";
import { Separator } from "@/Components/Shadcn/separator";
import { Mail, Phone } from "lucide-react";
import { type SignUpTranslations } from "../i18n";

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
        <Label htmlFor="email" className="text-sm">
          {translations.emailAddress}
        </Label>
        <Input
          id="email"
          type={loginMethod === "email" ? "email" : "tel"}
          placeholder={translations.emailPlaceholder}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="h-12 bg-secondary/30"
        />
      </div>
    </>
  );
}
