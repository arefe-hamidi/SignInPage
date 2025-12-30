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
  { name: "Microsoft", icon: Building2, label: "Microsoft" },
  { name: "Facebook", icon: Facebook, label: "Facebook" },
  { name: "Github", icon: Github, label: "Github" },
  { name: "Gitlab", icon: Code, label: "Gitlab" },
  { name: "Discord", icon: MessageCircle, label: "Discord" },
];
