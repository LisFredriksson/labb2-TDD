import { validateZIP } from '../validations/validateZIP';

describe('validate-Zip.ts tests', () => {
  it('should return true for a valid zip code "12345"', () => {
    const result = validateZIP('12345');
    expect(result).toBe(true);
  });
  it('should return true for a valid zip code "123 45"', () => {
    const result = validateZIP('123 45');
    expect(result).toBe(true);
  });

  it('should return false for an invalid zip code "1234"', () => {
    const result = validateZIP('1234');
    expect(result).toBe(false);
  });

  it('should return false for an invalid zip code "123456"', () => {
    const result = validateZIP('123456');
    expect(result).toBe(false);
  });

  it('should return false for a non-numeric zip code "abcde"', () => {
    const result = validateZIP('abcde');
    expect(result).toBe(false);
  });
});
