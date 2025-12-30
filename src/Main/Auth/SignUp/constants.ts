import {
  MessageCircle,
  Building2,
  Code,
  Github,
  Facebook,
  type LucideIcon,
} from "lucide-react";

export interface SocialProvider {
  name: string;
  icon: LucideIcon | null;
  label?: string;
}

export const PRIMARY_SOCIAL_PROVIDERS: SocialProvider[] = [
  { name: "X", icon: MessageCircle, label: "X" },
  { name: "LinkedIn", icon: Building2, label: "in" },
  { name: "Apple", icon: null, label: "🍎" },
];

export const SECONDARY_SOCIAL_PROVIDERS: SocialProvider[] = [
  { name: "Discord", icon: MessageCircle },
  { name: "Gitlab", icon: Code },
  { name: "Github", icon: Github },
  { name: "Facebook", icon: Facebook },
  { name: "Microsoft", icon: Building2 },
];
