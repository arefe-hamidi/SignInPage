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
    sm: "h-10",
    md: "h-12",
    lg: "h-14",
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={onClick}
      className={cn("bg-secondary/50", sizeClasses[size], className)}
      title={provider.name}
    >
      {IconComponent ? (
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
