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
    <Button variant="secondary" size="lg" onClick={onClick}>
      <div className=" items-center justify-center rounded text-lg ">G</div>
      <span>{translations.signInWithGoogle}</span>
    </Button>
  );
}
