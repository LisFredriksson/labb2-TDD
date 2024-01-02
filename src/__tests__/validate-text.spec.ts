import { validateText } from '../validations/validateText';

describe('validateText.ts tests', () => {
  it('should return true if valid text input', () => {
    const result = validateText('Hello, this is valid text!');
    expect(result).toBe(true);
  });

  it('should return false if empty text input', () => {
    const result = validateText('');
    expect(result).toBe(false);
  });

  it('should return false if null', () => {
    const result = validateText(null);
    expect(result).toBe(false);
  });

  it('should return false if input is containing special characters', () => {
    const result = validateText('text@Text');
    expect(result).toBe(false);
  });
});
