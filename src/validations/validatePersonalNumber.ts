export const validatePersonalNumber = (personalNumber: string): boolean => {

    return /^\d{6}(?:\d{2})?[-\s]?\d{4}$/.test(personalNumber);

  };
