import { validatePersonalNumber } from '../validations/validatePersonalNumber';

describe('validatePersonalNumber.ts tests', () => {
  it('should return true for a valid personal number "900201-0000"', () => {
    const result = validatePersonalNumber('900201-0000');
    expect(result).toBe(true);
  });

  it('should return true for a valid personal number "19900201-0000"', () => {
    const result = validatePersonalNumber('19900201-0000');
    expect(result).toBe(true);
  });

  it('should return false for an invalid personal number "9900201-0000"', () => {
    const result = validatePersonalNumber('9900201-0000');
    expect(result).toBe(false);
  });

  it('should return false for an invalid personal number "900201"', () => {
    const result = validatePersonalNumber('900201');
    expect(result).toBe(false);
  });

  it('should return false for an invalid personal number "900201-000"', () => {
    const result = validatePersonalNumber('900201-000');
    expect(result).toBe(false);
  });
});

it('should return false for an empty personal number', () => {
    const result = validatePersonalNumber('');
    expect(result).toBe(false);
  });

  it('should return false for a null personal number', () => {
    const result = validatePersonalNumber(null);
    expect(result).toBe(false);
  });
