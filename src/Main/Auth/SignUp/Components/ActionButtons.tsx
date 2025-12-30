import { Button } from "@/Components/Shadcn/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type SignUpTranslations } from "../i18n";

interface ActionButtonsProps {
  translations: SignUpTranslations;
  rtl: boolean;
  onContinue?: () => void;
  onGuestContinue?: () => void;
}

export function ActionButtons({
  translations,
  rtl,
  onContinue,
  onGuestContinue,
}: ActionButtonsProps) {
  return (
    <>
      <Button
        size="lg"
        onClick={onContinue}
        className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <span>{translations.continue}</span>
        <ArrowRight className={cn("size-4", rtl ? "rotate-180" : "")} />
      </Button>

      <Button
        variant="link"
        onClick={onGuestContinue}
        className="w-full text-sm text-muted-foreground hover:text-foreground"
      >
        {translations.continueAsGuest}
      </Button>
    </>
  );
}
