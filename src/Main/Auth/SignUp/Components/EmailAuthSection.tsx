import { Button } from "@/Components/Shadcn/button";
import { Input } from "@/Components/Shadcn/input";
import { Label } from "@/Components/Shadcn/label";
import { Separator } from "@/Components/Shadcn/separator";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
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

      <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onMethodChange("email")}
          className={cn(
            "flex-1 h-8 text-xs font-medium transition-all gap-1.5",
            loginMethod === "email"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Mail className="size-3.5" />
          {translations.email}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onMethodChange("phone")}
          className={cn(
            "flex-1 h-8 text-xs font-medium transition-all gap-1.5",
            loginMethod === "phone"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
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
