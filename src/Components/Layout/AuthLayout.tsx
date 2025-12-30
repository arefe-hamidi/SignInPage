"use client";

import { ThemeToggle } from "@/Components/ThemeToggle";
import { LanguageToggle } from "@/Components/LanguageToggle";
import { useLocale } from "next-intl";
import { isRTL, type Locale } from "@/i18n/config";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const rtl = isRTL(locale as Locale);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
        {/* Left side: Language Toggle and Theme Toggle */}
        <div
          className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}
        >
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Right side: AI Branding */}
        <div className={`${rtl ? "mr-auto ml-0" : "ml-auto mr-0"}`}>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-black text-sm font-semibold text-white dark:bg-white dark:text-black">
            AI
          </div>
        </div>
      </div>

      {/* Main Content: Centered Card Container */}
      <div className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
