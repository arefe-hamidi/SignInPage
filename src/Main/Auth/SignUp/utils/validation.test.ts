import { describe, it, expect } from "vitest";
import { validateEmail, validatePhone, formatPhoneNumber } from "./validation";

const mockMessages = {
  emailRequired: "Email is required",
  emailInvalid: "Please enter a valid email address",
  phoneRequired: "Phone number is required",
  phoneInvalidDigits: "Phone number should contain only digits",
  phoneTooShort: "Phone number must be at least 10 digits",
  phoneTooLong: "Phone number is too long",
};

describe("validateEmail", () => {
  it("should return invalid for empty email", () => {
    const result = validateEmail("", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.emailRequired);
  });

  it("should return invalid for email with only whitespace", () => {
    const result = validateEmail("   ", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.emailRequired);
  });

  it("should return invalid for email without @", () => {
    const result = validateEmail("invalidemail.com", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.emailInvalid);
  });

  it("should return invalid for email without domain", () => {
    const result = validateEmail("invalid@", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.emailInvalid);
  });

  it("should return invalid for email without TLD", () => {
    const result = validateEmail("invalid@domain", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.emailInvalid);
  });

  it("should return valid for correct email", () => {
    const result = validateEmail("test@example.com", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should return valid for email with subdomain", () => {
    const result = validateEmail("test@mail.example.com", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should return valid for email with plus sign", () => {
    const result = validateEmail("test+tag@example.com", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should return valid for email with numbers", () => {
    const result = validateEmail("test123@example123.com", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });
});

describe("validatePhone", () => {
  it("should return invalid for empty phone", () => {
    const result = validatePhone("", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneRequired);
  });

  it("should return invalid for phone with only whitespace", () => {
    const result = validatePhone("   ", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneRequired);
  });

  it("should return invalid for phone with letters", () => {
    const result = validatePhone("123abc456", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneInvalidDigits);
  });

  it("should return invalid for phone with special characters (except formatting)", () => {
    const result = validatePhone("123@456", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneInvalidDigits);
  });

  it("should return invalid for phone shorter than 10 digits", () => {
    const result = validatePhone("123456789", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneTooShort);
  });

  it("should return invalid for phone longer than 15 digits", () => {
    const result = validatePhone("1234567890123456", mockMessages);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe(mockMessages.phoneTooLong);
  });

  it("should return valid for 10-digit phone", () => {
    const result = validatePhone("1234567890", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should return valid for 15-digit phone", () => {
    const result = validatePhone("123456789012345", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should accept phone with formatting characters", () => {
    const result = validatePhone("(123) 456-7890", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should accept phone with spaces", () => {
    const result = validatePhone("123 456 7890", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should accept phone with dashes", () => {
    const result = validatePhone("123-456-7890", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should accept phone with plus sign", () => {
    const result = validatePhone("+1234567890", mockMessages);
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });
});

describe("formatPhoneNumber", () => {
  it("should return empty string for empty input", () => {
    const result = formatPhoneNumber("");
    expect(result).toBe("");
  });

  it("should format 10-digit number correctly", () => {
    const result = formatPhoneNumber("9123456789");
    expect(result).toBe("912 345 6789");
  });

  it("should format number as user types (3 digits)", () => {
    const result = formatPhoneNumber("912");
    expect(result).toBe("912");
  });

  it("should format number as user types (6 digits)", () => {
    const result = formatPhoneNumber("912345");
    expect(result).toBe("912 345");
  });

  it("should format number as user types (9 digits)", () => {
    const result = formatPhoneNumber("912345678");
    expect(result).toBe("912 345 678");
  });

  it("should format number as user types (11 digits)", () => {
    const result = formatPhoneNumber("91234567890");
    expect(result).toBe("912 345 67890");
  });

  it("should remove non-digit characters", () => {
    const result = formatPhoneNumber("(912) 345-6789");
    expect(result).toBe("912 345 6789");
  });

  it("should handle numbers with letters", () => {
    const result = formatPhoneNumber("912abc345def6789");
    expect(result).toBe("912 345 6789");
  });

  it("should handle numbers with special characters", () => {
    const result = formatPhoneNumber("912-345-6789");
    expect(result).toBe("912 345 6789");
  });

  it("should format longer numbers correctly", () => {
    const result = formatPhoneNumber("9123456789012");
    expect(result).toBe("912 345 6789012");
  });
});
