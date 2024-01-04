export const validateEmail = (email: string): boolean => {
    if (email === null || email === undefined || email.length === 0 ) {
        return false;
      } else {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailValid.test(email);
      }

  };
