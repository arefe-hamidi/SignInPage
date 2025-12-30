import { Button } from "@/Components/Shadcn/button";
import { type SocialProvider } from "../constants";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  provider: SocialProvider;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function SocialButton({
  provider,
  size = "md",
  className,
  onClick,
}: SocialButtonProps) {
  const IconComponent = provider.icon;
  const sizeClasses = {
    sm: "h-10 px-3",
    md: "h-12",
    lg: "h-14",
  };

  // For small size, show text label if available, otherwise show icon
  const showText = size === "sm" && provider.label;

  return (
    <Button
      variant="secondary"
      size={showText ? "default" : "icon"}
      onClick={onClick}
      className={cn(sizeClasses[size], className)}
      title={provider.name}
    >
      {showText ? (
        <span className="text-xs font-medium">
          {provider.label || provider.name}
        </span>
      ) : IconComponent ? (
        <IconComponent className={cn(size === "sm" ? "size-4" : "size-5")} />
      ) : (
        provider.label && (
          <span className={cn(size === "sm" ? "text-sm" : "text-base")}>
            {provider.label}
          </span>
        )
      )}
    </Button>
  );
}
