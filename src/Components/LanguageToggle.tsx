"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/Components/Shadcn/button";
import { type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-background p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLocaleChange("fa")}
        className={cn(
          "h-7 px-3 text-xs font-medium transition-all",
          locale === "fa"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        FA
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "h-7 px-3 text-xs font-medium transition-all",
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </Button>
    </div>
  );
}
