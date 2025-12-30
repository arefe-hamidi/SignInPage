interface ValidationMessages {
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  phoneInvalidDigits: string;
  phoneTooShort: string;
  phoneTooLong: string;
}

export function validateEmail(
  email: string,
  messages: ValidationMessages
): {
  isValid: boolean;
  error?: string;
} {
  if (!email.trim()) {
    return { isValid: false, error: messages.emailRequired };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: messages.emailInvalid };
  }

  return { isValid: true };
}

export function validatePhone(
  phone: string,
  messages: ValidationMessages
): {
  isValid: boolean;
  error?: string;
} {
  if (!phone.trim()) {
    return { isValid: false, error: messages.phoneRequired };
  }

  // Remove common phone formatting characters
  const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, "");

  // Check if it contains only digits
  if (!/^\d+$/.test(cleanedPhone)) {
    return {
      isValid: false,
      error: messages.phoneInvalidDigits,
    };
  }

  // Check minimum length (e.g., 10 digits)
  if (cleanedPhone.length < 10) {
    return {
      isValid: false,
      error: messages.phoneTooShort,
    };
  }

  // Check maximum length (e.g., 15 digits)
  if (cleanedPhone.length > 15) {
    return {
      isValid: false,
      error: messages.phoneTooLong,
    };
  }

  return { isValid: true };
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as XXX XXX XXXX (Iranian format)
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  // Format as user types
  if (cleaned.length > 0) {
    const parts = [];
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 3));
    if (cleaned.length > 3) parts.push(cleaned.slice(3, 6));
    if (cleaned.length > 6) parts.push(cleaned.slice(6));
    return parts.join(" ");
  }

  return cleaned;
}
