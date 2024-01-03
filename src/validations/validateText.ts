export const validateText = (text: string | null): boolean => {
    if (text === null || text === undefined || text.length === 0 ) {
      // Return false for null, undefined, or empty text
      return false;
    }

    // Check if the text contains any characters other than allowed alphanumeric and sentence-ending punctuation
    const invalidCharsRegex = /[*|\":<>[\]{}`\\()';@&$]/;
    if (invalidCharsRegex.test(text)) {
      return false;
    } else {
      return true;
    }
  };
