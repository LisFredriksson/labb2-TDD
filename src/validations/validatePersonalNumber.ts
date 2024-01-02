export const validatePersonalNumber = (personalNumber: string): boolean => {
    const formatRegexEight = /^(\d{8})[-+]?(\d{4})$/;
    const formatRegexSix = /^(\d{6})[-+]?(\d{4})$/;

    const matchEight = personalNumber.match(formatRegexEight);
    const matchSix = personalNumber.match(formatRegexSix);

    if (matchEight || matchSix) {
      const fullNumber = (matchEight ? matchEight[1] : '19' + (matchSix?.[1] ?? '')) + (matchEight ? matchEight[2] : matchSix?.[2] ?? '');
      const year = parseInt(fullNumber.substring(0, 4), 10);
      const month = parseInt(fullNumber.substring(4, 6), 10) - 1;
      const day = parseInt(fullNumber.substring(6, 8), 10);

      const date = new Date(year, month, day);

      if (
        isNaN(date.getTime()) ||
        date.getFullYear() !== year ||
        date.getMonth() !== month ||
        date.getDate() !== day
      ) {
        return false;
      }

      const controlNumber = fullNumber.substring(8, 12).split('').reverse().map(Number);

      const sum = controlNumber.reduce((acc, digit, index) => {
        const doubledDigit = index % 2 === 1 ? digit * 2 : digit;
        return acc + (doubledDigit > 9 ? doubledDigit - 9 : doubledDigit);
      }, 0);

      return sum % 10 === 0;
    }

    return false;
  };
