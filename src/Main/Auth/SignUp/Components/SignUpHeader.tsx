import { cn } from "@/lib/utils";
import { type SignUpTranslations } from "../i18n";

interface SignUpHeaderProps {
  translations: SignUpTranslations;
  rtl: boolean;
}

export function SignUpHeader({ translations, rtl }: SignUpHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-2", rtl ? "text-right" : "text-left")}
    >
      <h1 className="text-3xl font-bold">{translations.welcome}</h1>
      <p className="text-muted-foreground">{translations.welcomeSubtitle}</p>
    </div>
  );
}
