import {
  MessageCircle,
  Building2,
  Code,
  Github,
  Facebook,
  X,
  Linkedin,
  AppleIcon,
  type LucideIcon,
} from "lucide-react";

export interface SocialProvider {
  name: string;
  icon: LucideIcon | null;
  label?: string;
}

export const PRIMARY_SOCIAL_PROVIDERS: SocialProvider[] = [
  { name: "X", icon: X },
  { name: "LinkedIn", icon: Linkedin },
  { name: "Apple", icon: AppleIcon },
];

export const SECONDARY_SOCIAL_PROVIDERS: SocialProvider[] = [
  { name: "Discord", icon: MessageCircle },
  { name: "Gitlab", icon: Code },
  { name: "Github", icon: Github },
  { name: "Facebook", icon: Facebook },
  { name: "Microsoft", icon: Building2 },
];
