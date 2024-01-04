export const validateZIP = (zipCode: string): boolean => {
    if (zipCode) {
      const cleanedZIP = zipCode.replace(/\s/g, '');
      return /^\d{5}$/.test(cleanedZIP);
    }
    return false; // or return true/false based on your validation logic
  };
