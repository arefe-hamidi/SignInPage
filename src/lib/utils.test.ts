import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names", () => {
    const result = cn("class1", "class2");
    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("should handle conditional classes", () => {
    const result = cn("base", true && "conditional");
    expect(result).toContain("base");
    expect(result).toContain("conditional");
  });

  it("should handle false conditional classes", () => {
    const result = cn("base", false && "conditional");
    expect(result).toContain("base");
    expect(result).not.toContain("conditional");
  });

  it("should handle undefined and null", () => {
    const result = cn("base", undefined, null);
    expect(result).toContain("base");
  });

  it("should handle empty strings", () => {
    const result = cn("base", "");
    expect(result).toContain("base");
  });

  it("should merge tailwind classes correctly", () => {
    const result = cn("text-red-500", "text-blue-500");
    // The last class should win in tailwind-merge
    expect(result).toContain("text-blue-500");
  });

  it("should handle arrays", () => {
    const result = cn(["class1", "class2"]);
    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("should handle objects", () => {
    const result = cn({ class1: true, class2: false });
    expect(result).toContain("class1");
    expect(result).not.toContain("class2");
  });
});

