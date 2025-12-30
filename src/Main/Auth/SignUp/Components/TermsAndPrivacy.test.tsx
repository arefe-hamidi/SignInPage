import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TermsAndPrivacy } from "./TermsAndPrivacy";
import type { SignUpTranslations } from "../i18n";

const mockTranslations: SignUpTranslations = {
  welcome: "Welcome",
  welcomeSubtitle: "Sign in to your account to continue",
  signInWithGoogle: "Continue with Google",
  otherOptions: "More options",
  orSignInWith: "Or continue with",
  email: "Email",
  phone: "Phone",
  emailAddress: "Email address",
  phoneNumber: "Phone number",
  mobileNumber: "Mobile Number",
  emailPlaceholder: "name@example.com",
  phonePlaceholder: "912 345 6789",
  continue: "Continue",
  continueAsGuest: "Continue as guest",
  termsText: "By clicking continue, you agree to our ",
  termsOfUse: "Terms of Use",
  and: "and",
  privacyPolicy: "Privacy Policy",
  validation: {
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    phoneRequired: "Phone number is required",
    phoneInvalidDigits: "Phone number should contain only digits",
    phoneTooShort: "Phone number must be at least 10 digits",
    phoneTooLong: "Phone number is too long",
  },
};

describe("TermsAndPrivacy", () => {
  it("should render terms text", () => {
    render(<TermsAndPrivacy translations={mockTranslations} />);
    expect(screen.getByText(/By clicking continue, you agree to our/i)).toBeInTheDocument();
  });

  it("should render Terms of Use link", () => {
    render(<TermsAndPrivacy translations={mockTranslations} />);
    const termsLink = screen.getByText(mockTranslations.termsOfUse);
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute("href", "#");
  });

  it("should render Privacy Policy link", () => {
    render(<TermsAndPrivacy translations={mockTranslations} />);
    const privacyLink = screen.getByText(mockTranslations.privacyPolicy);
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "#");
  });

  it("should call handler when Terms of Use is clicked", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<TermsAndPrivacy translations={mockTranslations} />);
    const termsLink = screen.getByText(mockTranslations.termsOfUse);
    termsLink.click();
    expect(consoleSpy).toHaveBeenCalledWith("Terms of Use clicked");
    consoleSpy.mockRestore();
  });

  it("should call handler when Privacy Policy is clicked", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<TermsAndPrivacy translations={mockTranslations} />);
    const privacyLink = screen.getByText(mockTranslations.privacyPolicy);
    privacyLink.click();
    expect(consoleSpy).toHaveBeenCalledWith("Privacy Policy clicked");
    consoleSpy.mockRestore();
  });

  it("should have underline styling on links", () => {
    render(<TermsAndPrivacy translations={mockTranslations} />);
    const termsLink = screen.getByText(mockTranslations.termsOfUse);
    const privacyLink = screen.getByText(mockTranslations.privacyPolicy);
    expect(termsLink).toHaveClass("underline");
    expect(privacyLink).toHaveClass("underline");
  });
});

