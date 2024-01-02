import { validateEmail } from '../validations/validateEmail';

describe('validate-email.ts tests', () => {
  it('should validate "jonatan@gmail.com" as a valid email', () => {
    const actualResult = validateEmail('jonatan@gmail.com');
    expect(actualResult).toBe(true);
  });
  it('should validate "jonatan@gmail" as an invalid email', () => {
    const actualResult = validateEmail('jonatan@gmail');
    expect(actualResult).toBe(false);
  });
  it('should validate "lis@com" as an invalid email', () => {
    const actualResult = validateEmail('jonatan.com');
    expect(actualResult).toBe(false);
  });
});
