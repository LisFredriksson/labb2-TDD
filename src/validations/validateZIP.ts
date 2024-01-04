export const validateZIP = (zip: string): boolean => {
    const cleandZIP = zip.replace(/\s/g, '');
    return /^\d{5}$/.test(cleandZIP);
  };
