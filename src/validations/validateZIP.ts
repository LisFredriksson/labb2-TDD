export const validateZIP = (zip: string): boolean => {
    return /^\d{5}$/.test(zip);
  };
