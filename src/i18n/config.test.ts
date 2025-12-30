import { describe, it, expect } from "vitest";
import { isRTL, locales, localeNames } from "./config";
import type { Locale } from "./config";

describe("i18n config", () => {
  describe("isRTL", () => {
    it("should return true for Farsi locale", () => {
      expect(isRTL("fa")).toBe(true);
    });

    it("should return false for English locale", () => {
      expect(isRTL("en")).toBe(false);
    });

    it("should handle all locales", () => {
      locales.forEach((locale) => {
        const result = isRTL(locale);
        expect(typeof result).toBe("boolean");
      });
    });
  });

  describe("locales", () => {
    it("should contain expected locales", () => {
      expect(locales).toContain("en");
      expect(locales).toContain("fa");
    });

    it("should have at least 2 locales", () => {
      expect(locales.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("localeNames", () => {
    it("should have names for all locales", () => {
      locales.forEach((locale) => {
        expect(localeNames[locale]).toBeDefined();
        expect(typeof localeNames[locale]).toBe("string");
      });
    });

    it("should have English name", () => {
      expect(localeNames.en).toBe("English");
    });

    it("should have Farsi name", () => {
      expect(localeNames.fa).toBe("فارسی");
    });
  });
});

