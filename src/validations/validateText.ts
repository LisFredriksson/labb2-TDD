export const validateText = (text: string | null): boolean => {
    const invalidCharsRegex = /[*|\":<>[\]{}`\\()';@&$]/;
    if (text === null || text === undefined || text === '' ) {
      return false;
    } else if (invalidCharsRegex.test(text)) {
      return false;
    } else {
      return true;
    }
  };
