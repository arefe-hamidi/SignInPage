import { Separator } from "@/Components/Shadcn/separator";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { SocialButton } from "./SocialButton";
import {
  PRIMARY_SOCIAL_PROVIDERS,
  SECONDARY_SOCIAL_PROVIDERS,
} from "../constants";
import { type SignUpTranslations } from "../i18n";

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

      <div className="relative flex items-center">
        <Separator className="flex-1" />
        <span className="px-3 text-xs text-muted-foreground">
          {translations.otherOptions}
        </span>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-5 gap-2">
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
