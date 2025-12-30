import { type SignUpTranslations } from "../i18n";

interface SignUpHeaderProps {
  translations: SignUpTranslations;
}

export function SignUpHeader({ translations }: SignUpHeaderProps) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-3xl font-bold">{translations.welcome}</h1>
      <p className="text-muted-foreground">{translations.welcomeSubtitle}</p>
    </div>
  );
}
