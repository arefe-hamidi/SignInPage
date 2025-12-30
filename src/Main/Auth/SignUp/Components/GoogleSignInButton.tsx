import { Button } from "@/Components/Shadcn/button";
import { type SignUpTranslations } from "../i18n";

interface GoogleSignInButtonProps {
  translations: SignUpTranslations;
  onClick?: () => void;
}

export function GoogleSignInButton({
  translations,
  onClick,
}: GoogleSignInButtonProps) {
  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={onClick}
      className="w-full justify-start gap-3 bg-secondary/50 h-12"
    >
      <div className="flex size-6 items-center justify-center rounded bg-white text-sm font-bold text-blue-600">
        G
      </div>
      <span>{translations.signInWithGoogle}</span>
    </Button>
  );
}
